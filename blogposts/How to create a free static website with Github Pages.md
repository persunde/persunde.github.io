# How to create a free static website with Github Pages

You can get your own personal website at no cost. And if you want to have your own personal domain, all you need to do is buy is your own domain and you are covered!
There is one caveat, your website has to be made up of only static  files with no server side logic. This works well, for things like blogs, Single Page Applications or simple webpages for small companies and restaurants.

You can do this through Github Pages, or the equivalent Gitlab Pages.
In this guide we will use Gihub Pages and this page is hosted on Github Pages using this method.

## Steps
1. Create a Gihub account if you dont already have one
2. Create a new branch called myusername.github.io
	* Make sure you change "myusername" with your Github username  
3. Download NPM
4. Initialize your site 
5. Download gh-pages tools
6. Deploy your site
7. Buy a domain and link it to your personal Github Pages website


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
>     "predeploy": "next build && next export -o build/ && echo \"mydomain.com\" > build/CNAME && touch build/.nojekyll",
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

## Deploy your site
Run

	npm run deploy

## Publish a File

You can publish your file by opening the **Publish** sub-menu and by clicking **Publish to**. For some locations, you can choose between the following formats:

- Markdown: publish the Markdown text on a website that can interpret it (**GitHub** for instance),
- HTML: publish the file converted to HTML via a Handlebars template (on a blog for example).

<!--stackedit_data:
eyJoaXN0b3J5IjpbNTE3ODY1MTI2LC01MTA3NjA2NDIsLTY5MD
M4MzE4OSw3NTI2NTA5MjUsNjEzNzU1NTA2LC0yMDY1MDY0MDU1
LC05MTk1NDg5MTNdfQ==
-->