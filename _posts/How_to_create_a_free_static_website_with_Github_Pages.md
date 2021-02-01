---
title: How to create a free static website with Github Pages
author: Per Sunde
date: '2020-04-29'
featuredImage: github-pages.jpg
tags: 'Github, hosting'
excerpt: 'Now you can make your own website, all for free with Github Pages'

---

Do you want to create your own blog, or maybe just have a website to showoff your resume, projects and other content you have created? Now you can get your own personal website, easy to setup and at no cost with Github Pages.  If you want it even more professional, buy your own personal domain, follow this guide and you have your own website up and running in less than 1 hour.

Check out my next blog that shows you how to setup your own blog with Github Pages using React with Next.js

Most guides cover how to setup what they call "Project Pages", but before you can do that you have to setup the master webpage that this guide will tell you how to do.
Also if you use Gitlab, they also have a similar service called Gitlab Pages.


#### NOTE:
There is one thing you need to know before you continue. Your website has to be made up of **only static  files with no server side logic**. This works well, for things like blogs, Single Page Applications (SPA) or simple webpages for small companies and restaurants. Github Pages does not allow you to use your own backend code, only server static files.

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
Go to https://github.com/ and create an account if you do not already have one. 

## 2 Create a new repository
Go to: https://github.com/new

Create a new repository, and name it: 

    myusername.github.io

In my case, my Github username is **persunde**, so my branch was named:

    persunde.github.io

Create a file called `README.md` file in your repository.

## 3 InstallDownload NPM
If you dont have it already you need to download and install NPM (Node Package Manager). To avoid future conflicts avoid installdownloading NPM via package managers like yum or apt and avoidand while using sudo, i. It may cause unnecessary problems and headaches.
Instead installdownload NPM as described here for Linux, OSX or Windows:
 https://docs.npmjs.com/downloading-and-installing-node-js-and-npm#using-a-node-version-manager-to-install-nodejs-and-npm
 
If you are using Linux, you need to do execute these three commands:

    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
    
    wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
    
    export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

## 4 Create your React App
Here we will use Create-React-App, but you can use any other tool you want, as long as it initializesyou just need a static webpage template.  Now u up and running. Use create-react-app to create your react application.
  

 1. First clone your repository you just created called myusername.github.io and `cd` into your project
 2. Create your React App, execute these commands in the root folder of your project

	    npx create-react-app my-app
	    cd my-app

Now you can edit and work on your website as you see fit.

## 5 Install gh-pages package
**gh-pages** is a package that helps you to automate the deploying process, and make your project compatible with Github Pages.
**Inside your project folder** run this command to install gh.pages package:
    
    npm install gh-pages --save-dev

## 6 Setup deployment config
Open the file "**package.json**" at the highest level, add this to the file:
    
    "homepage": "https://myusername.github.io/"
Or

	"homepage": "https://mydomain.com/"

Choose one of the two options below:
1. **I have my own domain:**
You need to add a **CNAME** file with your domain to the root of your deployment folder:
Add this to  the bottom of **"scripts"** in file **package.json**;
```bash
"predeploy": "npm run build && echo \"www.mydomain.com\" > build/CNAME",
"deploy": "gh-pages -b master -d build"
```
2. **I do NOT have my own domain:**
Add this to  the bottom of **"scripts"** in file **package.json**;
```bash
"predeploy": "npm run build",
"deploy": "gh-pages -b master -d build"
```

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

Now when you run 
	
	npm run deploy
	
then the predeploy script will be run first, and then gh-pages takes over and pushes your static content in the out/ directory to your repository.

    npm run build && echo \"www.mydomain.com\" > build/CNAME

First `npm run build` builds your project and moves the output in the build/ directory. 
`echo \"www.mydomain.com\" > build/CNAME`  creaIf you are wondering about the paremeters a file called CNAME containing the text "www.mydomain.com" and places it in the build/ folder.

```
gh-pages -b master -d build
```
This runs the gh-pages tool that pushes your files to the github repository. `-b master` means ** means you are pushing to branch master, by defaulty gh-pages pushes to the "gh-pages" branch. But we want this to be on the master branch, otherwise your first Github Pages site will not work.
`-d build`  sets the source directory that `gh-pages` will push your output code to. `-d build` means gh-pages will use the `build/` directory as the source.

At the end your file should look similar to this:

    {
	    "name": "my-app",
	    "version": "0.1.0",
	    "private": true,
	    "homepage": "https://mydomain.com/",
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
		    "predeploy": "npm run build && echo \"www.mydomain.com\" > build/CNAME", 
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

**NOTE: Do not `git pull` on the master-branch** it is only used to push your ready made site through `gh-pages` and `npm run deploy`

## 9 Buy your own domain
Buy any domain from a domain register like  [Namecheap.com](https://www.namecheap.com/).
After you boughth your domain you need to point it to your Github Pages site, at myusername.github.io. You need to set these values in the website where you bought the domain:
 - Set **CNAME Record** to host to "www" and value to "myusername.github.io."
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

