You can get your own personal website at no cost. And if you want to have your own personal domain, all you need to do is buy is your own domain and you are covered!
There is one caveat, your website has to be made up of only static  files with no server side logic. This works well, for things like blogs, Single Page Applications or simple webpages for small companies and restaurants.

You can do this through Github Pages, or the equivalent Gitlab Pages.
In this guide we will use Gihub Pages and this page is hosted on Github Pages using this method.

## Steps
1. Create a Gihub account if you dont already have one
2. Create a new branch called myusername.github.io
	* Make sure you change "myusername" with your Github username  
3. Download NPM
4. Create your React App 
5. Install gh-pages package
6. Setup deployment config
7. Create a dev branch
8. Deploy your site
9. Buy a domain and link it to your personal Github Pages website
10. Setup HTTPS on your Github Page 


## 1 Create an Github account
Go to https://github.com/ and sign up. 

## 2 Create a new repository
Go to: https://github.com/new

Create a new repository, and name it: 

    myusername.github.io

In my case, my username is **persunde**, so my branch was named:

    persunde.github.io

Create a file called README.md file in your repository.

## 3 Download NPM
If you dont have it already you need to download NPM. To avoid future conflicts avoid downloading NPM via package managers and while using sudo. It may cause unnecessary problems and headaches.
Instead download NPM as described here:
https://github.com/nvm-sh/nvm#installing-and-updating

Basically you need to do execute these three commands:

    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
    
    wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
    
    export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

> Other installation methods: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm#using-a-node-version-manager-to-install-nodejs-and-npm

## 4 Create your React App
Here we will use Create-React-App, you can use any other tool you want, you just need a static webpage template up and running. Use create-react-app to create your react application.
  

 1. First clone your repository myusername.github.io and cd into your project
 2. Create your React App, execute these commands in the root folder of your project

	    npx create-react-app my-app
	    cd my-app

Now you can edit and work on your website as you see fit.

## 5 Install gh-pages package
**gh-pages** is a package that helps you to automate the deploying process, and make your project compatible with Github Pages.
Inside your project folder run this command to install gh.pages package:
    
    npm install gh-pages --save-dev

## 6 Setup deployment config
Open the file "**package.json**" at the highest level, add this to the file:
    
    "homepage": "https://myusername.github.io/"
Or

	"homepage": "https://mydomain.com/"

At the bottom of **"scripts"** in the same file add:
If you **have your own domain:**

    "predeploy": "npm run build",
    "deploy": "gh-pages -b master -d build"
If you **do NOT have your own domain** you need to add a **CNAME** file with your domain to the root of your deployment folder:

    "predeploy": "npm run build && echo \"mydomain.com\" > build/CNAME",
    "deploy": "gh-pages -b master -d build"

> **NOTE:** If you are using **NEXT.JS**  do this instead:
> 
>     "predeploy": "next build && next export && echo \"mydomain.com\" > build/CNAME && touch out/.nojekyll",
>     "deploy": "gh-pages -b master -d build --dotfiles true"
> 
> Github uses Jekyll to build your site, and it removes all files and
> folders starting with "_", and NEXT.JS publishes your files under
> folder "_next/".   So to avoid jekyll ignoring your build folder,
> github requires that you adds a file called ".nojekyll" to the root of
> your project:  
> https://github.blog/2009-12-29-bypassing-jekyll-on-github-pages/

At the end your file should look similar to this:

    {
	    "name": "my-app",
	    "version": "0.1.0",
	    "private": true,
	    "homepage": "https://mydomain.com/"
	    "dependencies": {
		    "@testing-library/jest-dom": "^4.2.4",
		    "@testing-library/react": "^9.3.2",
		    "@testing-library/user-event": "^7.1.2",
		    "react": "^16.13.1",
		    "react-dom": "^16.13.1",
		    "react-scripts": "3.4.1"
	    },
	    "scripts": {
		    "start": "react-scripts start",
		    "build": "react-scripts build",
		    "test": "react-scripts test",
		    "eject": "react-scripts eject"
		    "predeploy": "npm run build && echo \"mydomain.com\" > build/CNAME", 
		    "deploy": "gh-pages -b master -d build"
	    },
	    "eslintConfig": {
		    "extends": "react-app"
	    },
	    "browserslist": {
		    "production": [
			">0.2%",
			"not dead",
			"not op_mini all"
		    ],
		     "development": [
			"last 1 chrome version",
			"last 1 firefox version",
			"last 1 safari version"
		   ]
	    }
    }

## 7 Create a dev branch
You are required to publish your site through the master branch, and when you deploy the master branch will be overwritten. Therefore you should create a new dev branch first.

Run these commands in your project folder

    git add .
    git commit -m 'create a seperate dev branch'
    git co -b dev
    git push

Now make your new **dev** branch the default branch for your repository.
Go to your repos

 1. Open your Github repository in your browser
	 * https://github.com/myusername/myusername.github.io
 2. Click settings
 3. Under **Branches** on the left menu
 4. Change default branch **from master to dev**

![Change default branch](https://i.imgur.com/fJwFIck.png)


## 8 Deploy your site
To deploy your site and new changes you make to your site, execute this command in the root of your project folder:

	npm run deploy

NOTE: **DO NOT PULL ON THE GITHUB MASTER BRANCH**, THIS IS ONLY USED FOR DEPLOYING THE SITE

## 9 Buy your own domain
Buy any domain from a domain register like  [Namecheap.com](https://www.namecheap.com/).
After you bougth your domain you need to point it to your Github Pages site, at myusername.github.io. You need to set these values in the website where you bought the domain:
 - Set **CNAME Recort** to host to "www" and value to "myusername.github.io."
 - Add four **A Records**, all with host "@"
	 - 185.199.108.153
	 - 185.199.109.153
	 - 185.199.110.153
	 - 185.199.111.153

![Domain setup](https://i.imgur.com/jkxj1HL.png)
## 10 Setup HTTPS on your Github Page
Go to your github project, select **setting** in the top right corner.
Scroll down until you find the Github Pages settings.
Write in your custom domain and select Enforce HTTPS. It will take a few minute until you will receive the SSL Certificate for the site. Github will take care of it for you.
![Add your custum domain and enforce HTTPS](https://i.imgur.com/UnU1uGR.png)If you setup the deployment correctly, the custom domain should be automatically set, it is defined by the CNAME file in the root of your master branch, so **make sure you dont overwrite it** with bad data.

> **NOTE**: If you use a **.dev** domain you HAVE to use HTTPS.

Now your site should be up and running.
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTEzOTk5MzUxNzRdfQ==
-->