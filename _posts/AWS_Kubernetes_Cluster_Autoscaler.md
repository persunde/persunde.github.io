---
title: How to (Cluster) Autoscale a self hosted Kubernetes on AWS EC2
author: Per Sunde
date: '2024-04-29'
featuredImage: TODO.jpg
tags: 'Kubernets, K8S, K3S, AWS, EC2, hosting, autoscale'
excerpt: >-
  How do you do cluster autoscaling when you run your own hosted Kubernets cluster?
  This post will tell you all the details you need to get started with Cluster Autoscaling for Kubernetes running on AWS EC2.
  It will explain you how to setup ther permissions, EC2 autoscale group and the tricky details you need to know to get started with your self hosted Kubernetes.
---

# Autoscale K3S on AWS

## TLDR

1. Setup the IAM configuration
   1. Create an IAM Security policy
   2. Create an IAM Role
      1. Attach the newly created policy to this role
2. Setup the Control plane
   1. Create one or more EC2's
      1. Set the newly created IAM Role on the EC2
   2. Install K3S
      1. Make sure to include `INSTALL_K3S_EXEC="--kubelet-arg=provider-id=aws:///$(ec2metadata --availability-zone)/$(ec2metadata --instance-id)"` in the installation script
3. Create an EC2 Auto Scaling Group (ASG)
   1. Add "tags" on the ASG.
      1. Needed so that the cluster-autoscaler identifies and uses the correct ASG.
   2. Add the "user data" script.
      1. Will install K3S.
      2. Have the EC2 automatically join the cluster as an "Agent".
4. Deploy the cluster-autoscaler
   1. Configure it to use the ASG by looking for ASG's with the specified tags: `--node-group-auto-discovery=asg:tag=my-autoscaler-tag1,my-autoscaler-tag2`
5. Deploy a test application to test the Cluster Autoscaler

## IAM Security policy setup

Create the [Full Cluster Autoscaler Features Policy (Recommended)](https://github.com/kubernetes/autoscaler/blob/master/cluster-autoscaler/cloudprovider/aws/README.md#full-cluster-autoscaler-features-policy-recommended)
But remove the "eks:DescribeNodegroup" action, since we are not using EKS.

>NOTE: This gives all the permissions and allow it for all resources. If you want to be more restrictice, check out the [Minimal IAM Permissions Policy](https://github.com/kubernetes/autoscaler/blob/master/cluster-autoscaler/cloudprovider/aws/README.md#minimal-iam-permissions-policy) to see how you can restrict which resources can be granted these permissions.

Go to IAM -> Policies -> "Create Policy" -> JSON and copy paste this text into the policy editor and give it a name.

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "autoscaling:DescribeAutoScalingGroups",
        "autoscaling:DescribeAutoScalingInstances",
        "autoscaling:DescribeLaunchConfigurations",
        "autoscaling:DescribeScalingActivities",
        "autoscaling:DescribeTags",
        "ec2:DescribeImages",
        "ec2:DescribeInstanceTypes",
        "ec2:DescribeLaunchTemplateVersions",
        "ec2:GetInstanceTypesFromInstanceRequirements"
      ],
      "Resource": ["*"]
    },
    {
      "Effect": "Allow",
      "Action": [
        "autoscaling:SetDesiredCapacity",
        "autoscaling:TerminateInstanceInAutoScalingGroup"
      ],
      "Resource": ["*"]
    }
  ]
}
```

Next create a IAM Role, give it a descriptive name, and attach this newly created policy. Or add this policy to your existing IAM Role that you use.

## Control plane setup

Create one (or more) EC2 instance(s) that will work as your controle-plane nodes. These will not be a part of the auto-scaling.
These EC2 instances should have the "IAM Role" you created in the previous step.

Read the up to date documentation about how to setup and install K3S here: <https://k3s.rocks/install-setup/>
Follow the guide, but when you come to the "Install k3s" section, instead run the command below instead.
Since we are not using EKS, we need to specify the kubelet "provider-id".


**Install system dependencies:**

```sh
sudo apt update && \
sudo apt upgrade -y && \
sudo apt install -y curl  \
  ca-certificates \
  open-iscsi \
  wireguard \
  nfs-common
```

**Install K3S:**

>**NOTE:** Assumes you use AWS Ubuntu. If you use AWS Linux or non-debian based system, then the command `ec2metadata` might have a different name. For AWS Linux the command is `ec2-metadata`.

Only difference between the installation command in <https://k3s.rocks> and the below command is that you need to add `INSTALL_K3S_EXEC="--kubelet-arg=provider-id=aws:///$(ec2metadata --availability-zone)/$(ec2metadata --instance-id)"` before `sh` to the install command!

>"If you're managing your own kubelets, they need to be started with the --provider-id flag. The provider id has the format aws:///\<availability-zone>/\<instance-id>, e.g. aws:///us-east-1a/i-01234abcdef."
>[Source](https://github.com/kubernetes/autoscaler/blob/master/cluster-autoscaler/cloudprovider/aws/README.md#common-notes-and-gotchas)

Set the "K3S_VERSION" variable to the version you want to install. See <https://k3s.rocks> for the latest version.
Optionally remove the `INSTALL_K3S_VERSION=$K3S_VERSION` part to install the latest stable version.

```sh
K3S_VERSION=v1.28.3+k3s2

curl -sfL https://get.k3s.io | INSTALL_K3S_VERSION=$K3S_VERSION INSTALL_K3S_EXEC="--kubelet-arg=provider-id=aws:///$(ec2metadata --availability-zone)/$(ec2metadata --instance-id)" sh -s server \
--cluster-init \
--flannel-backend=wireguard-native \
--write-kubeconfig-mode 644 && \
export KUBECONFIG=/etc/rancher/k3s/k3s.yaml && \
cat traefik-config.yaml | envsubst | kubectl apply -f -
```

## Auto-Scale Group setup

> >Note: **Cluster Autoscaler is not responsible for behaviour and registration to the cluster of the new nodes it creates.** The responsibility of registering the new nodes into your cluster lies with the cluster provisioning tooling you use. Example: If you use kubeadm to provision your cluster, it is up to you to automatically execute kubeadm join at boot time via some script.
>
>[Source](https://github.com/kubernetes/autoscaler/blob/master/cluster-autoscaler/FAQ.md#how-does-scale-up-work)
>
>It is up to you to make sure the newly created EC2 instance joins the Kubernetes cluster. That is why we add an init script to the ASG, to make sure newly added EC2 instancess install K3S and join the cluster automatically.

Init script for Auto-Scale Group (AGS).
This will join a new agent node to the cluster.

Add the K3S_TOKEN and the MASTER_IP to the script.

- K3S_TOKEN: Run this command on one of your control-plane nodes: `k3s token create --ttl 0`
  - It will generate a token that will never expire, so make sure to not leak the secret!
- MASTER_IP: The private IP of your controle-plane instance. Found on the EC2 dashboard.

```sh
#!/bin/bash
#NOTE: Assumes you use AWS Ubuntu

# Install system dependencies
apt update && \
apt upgrade -y && \
apt install -y curl  \
ca-certificates \
open-iscsi \
wireguard \
nfs-common

K3S_TOKEN="<JOIN_TOKEN>"
MASTER_IP="<CONTROL_PLANE_PRIVATE_IP"
AVAILABILITY_ZONE=$(ec2metadata --availability-zone)
INSTANCE_ID=$(ec2metadata --instance-id)

# Join Agent node
curl -sfL https://get.k3s.io | INSTALL_K3S_VERSION=v1.28.3+k3s2 INSTALL_K3S_EXEC="--kubelet-arg=provider-id=aws:///$AVAILABILITY_ZONE/$INSTANCE_ID" K3S_TOKEN="${K3S_TOKEN}" K3S_URL=https://${MASTER_IP}:6443 sh -
```

## Deploy the cluster-autoscaler

Clone the cluster-autoscaler repo:

```sh
git clone https://github.com/kubernetes/autoscaler.git
cd autoscaler/cluster-autoscaler/cloudprovider/aws/
```

Modify the example deployment file.

1. Change the node-group-auto-discovery tags.
2. (If you do not use AWS Linux) Change the ssl-certs path
   1. See [Common Notes and Gotchas](https://github.com/kubernetes/autoscaler/blob/master/cluster-autoscaler/cloudprovider/aws/README.md#common-notes-and-gotchas)
3. Deploy the Cluster Autoscaler

**Step 1 - Change the node-group-auto-discovery tags**
Under the "Deployment" kind, modify the `"--node-group-auto-discovery=asg:tag=..."` part. Here you need to use the tags you set on your ASG. The ASG has to contain all the tags specified, but the ASG can contain additional tags, but it can not be missing any tags.

Example:

```yaml
--node-group-auto-discovery=asg:tag=k8s.io/cluster-autoscaler/enabled,k8s.io/cluster-autoscaler/control-plane1
```

This one will match for an ASG that has the two tags "k8s.io/cluster-autoscaler/enabled" and "k8s.io/cluster-autoscaler/control-plane1".

**Step 2 - Change the ssl-certs path**
>NOTE: If you use Ubuntu or something other than AWS Linux, you need to modify this part.

In the file `examples/cluster-autoscaler-autodiscover.yaml` under the cluster-autoscaler deployment, change the ssl-certs volume.

```yaml
## From this
      volumes:
        - name: ssl-certs
          hostPath:
            path: "/etc/ssl/certs/ca-bundle.crt"

## To this
      volumes:
        - name: ssl-certs
          hostPath:
            path: "/etc/ssl/certs/ca-certificates.crt"
```

**Step 3 - Deploy the Cluster Autoscaler**
Apply the autoscaler deployment:

```sh
kubectl apply -f examples/cluster-autoscaler-autodiscover.yaml
```

Now the auto-scaler should be deployed. Check that it works by running

```sh
kubectl get pods -A
# or
kubectl get pods -n=kube-system
```

Get the pod ID, and check the logs

```sh
kubectl logs cluster-autoscaler-<ID> -n=kube-system
```

Or check the description and see if there are any issues with deploying the pod:

```sh
kubectl describe pod cluster-autoscaler-<ID> --namespace=kube-system
```

## Test the autoscaling

Deploy a test deployment that you can use to see if the autoscaler works or not:

Save the file as `hello-world.yaml` and deploy it `kubectl apply -f hello-world.yaml`

```yaml hello-world.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    app: hello-world
  name: hello-world
spec:
  replicas: 4
  selector:
    matchLabels:
      app: hello-world
  strategy:
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0
    type: RollingUpdate
  template:
    metadata:
      labels:
        app: hello-world
    spec:
      containers:
      - name: ubuntu
        image: ubuntu:latest
        # Prints "HELLO WORLD" every 30 seconds
        command: [ "/bin/bash", "-c", "--" ]
        args: [ "while true; do echo 'HELLO WORLD' && sleep 30; done;" ]
        resources:
          limits:
            cpu: 500m
            memory: 512Mi
          requests:
            cpu: 500m
            memory: 512Mi
```

The autoscaler will check every 10 second if it needs to scale up or down or do nothing.
Check the ASG on the AWS EC2 dashboard, and see if the desired count is changed or not.

>**NOTE:** Make sure your "Maximum capacity" in the ASG is set above 0 so that it can scale up. The Cluster Autoscaler will not scale over or under the maximum or minimum number you set in the ASG.

Change the number of replicas in the `hello-world.yaml` and apply the file again to see the autoscaler start to scale up or down.
Note that the default time to scale down is 10 minutes after node has been marked for removal. After 10 minutes, if the node is still ok to be removed the Cluster Autoscaler will terminate the EC2 instance.

Read the [AWS Autoscaler README](https://github.com/kubernetes/autoscaler/blob/master/cluster-autoscaler/cloudprovider/aws/README.md) for how you can change the parameters for the cluster autoscaler that was deployed using the `examples/cluster-autoscaler-autodiscover.yaml` file.

## NOTES

- The Cluster Autoscaler "does not delete the Node object from Kubernetes."
  >How does Cluster Autoscaler remove nodes?
  >
  >Cluster Autoscaler terminates the underlying instance in a cloud-provider-dependent manner.
  >
  >It does not delete the Node object from Kubernetes. Cleaning up Node objects corresponding to terminated instances is the responsibility of the cloud node controller, which can run as part of kube-controller-manager or cloud-controller-manager.
  >
  >[Source](https://github.com/kubernetes/autoscaler/blob/master/cluster-autoscaler/FAQ.md#how-does-cluster-autoscaler-remove-nodes)

- If you want to delete the "Node object" you can either use your own bash script or similar, or run the [AWS cloud provider](https://cloud-provider-aws.sigs.k8s.io/)
Or make your own Operator that automatically does this for you.
  - Example bash script: `kubectl delete node $(kubectl get nodes | grep NotReady | awk '{print $1;}')` 
    - [Source](https://stackoverflow.com/a/68001385/15137927)

There are lots of details you should be aware of in a production setting. Be sure to read the Cluster Autoscaler [FAQ](https://github.com/kubernetes/autoscaler/blob/master/cluster-autoscaler/FAQ.md) and the [AWS README](https://github.com/kubernetes/autoscaler/blob/master/cluster-autoscaler/cloudprovider/aws/README.md).

