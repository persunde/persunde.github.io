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


## Step 1 - Create an Github account
Go to https://github.com/ and sign up. 

## Step 2 - Create a new repository
Go to: https://github.com/new

Create a new repository, and name it: 

    myusername.github.io

In my case, my username is **persunde**, so my branch was named:

    persunde.github.io

Create a file called README.md file in your repository.

## 3 - Download NPM
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
 3. Create your React App, execute these commands in the root folder of your project

		    npx create-react-app my-app
		    cd my-app
		    npm start

First clone your repository, then cd into your repository folder, next run these commands to create your React app:
    npx create-react-app my-app
    cd my-app
    npm start

  Edit and work on your page as you see fit

5. Install gh-pages package
gh-pages is a tool that helps you to automate the process, and make your project compatiable with Github Pages.
  Inside your project folder run this command to install gh.pages package:
    npm install gh-pages --save-dev

6. Fix shit
  Open the file "package.json" at the highest level, add this to the file:
    "homepage": "https://myusername.github.io/"
  At the bottom of "scripts" in the same file add:
    "predeploy": "npm run build && echo \"mydomain.com\" > build/CNAME",
    "deploy": "gh-pages -b master -d build"

  NOTE: If you are using NEXT.JS do this:
    "predeploy": "next build && next export -o build/ && echo \"mydomain.com\" > build/CNAME && touch build/.nojekyll",
    "deploy": "gh-pages -b master -d build --dotfiles true"
  Github uses jekyll to build your site, and it removes all files and folders starting with "_", and NEXT.JS publishes your files under folder "_next/".
  So to avoid jekyll ignoring your build folder, github requires that you adds a file called ".nojekyll" to the root of your project:
  https://github.blog/2009-12-29-bypassing-jekyll-on-github-pages/



# Welcome to StackEdit!

Hi! I'm your first Markdown file in **StackEdit**. If you want to learn about StackEdit, you can read me. If you want to play with Markdown, you can edit me. Once you have finished with me, you can create new files by opening the **file explorer** on the left corner of the navigation bar. asdasdasd


# Files

StackEdit stores your files in your browser, which means all your files are automatically saved locally and are accessible **offline!**

## Create files and folders

The file explorer is accessible using the button in left corner of the navigation bar. You can create a new file by clicking the **New file** button in the file explorer. You can also create folders by clicking the **New folder** button.

## Switch to another file

All your files and folders are presented as a tree in the file explorer. You can switch from one to another by clicking a file in the tree.

## Rename a file

You can rename the current file by clicking the file name in the navigation bar or by clicking the **Rename** button in the file explorer.

## Delete a file

You can delete the current file by clicking the **Remove** button in the file explorer. The file will be moved into the **Trash** folder and automatically deleted after 7 days of inactivity.

## Export a file

You can export the current file by clicking **Export to disk** in the menu. You can choose to export the file as plain Markdown, as HTML using a Handlebars template or as a PDF.


# Synchronization

Synchronization is one of the biggest features of StackEdit. It enables you to synchronize any file in your workspace with other files stored in your **Google Drive**, your **Dropbox** and your **GitHub** accounts. This allows you to keep writing on other devices, collaborate with people you share the file with, integrate easily into your workflow... The synchronization mechanism takes place every minute in the background, downloading, merging, and uploading file modifications.

There are two types of synchronization and they can complement each other:

- The workspace synchronization will sync all your files, folders and settings automatically. This will allow you to fetch your workspace on any other device.
	> To start syncing your workspace, just sign in with Google in the menu.

- The file synchronization will keep one file of the workspace synced with one or multiple files in **Google Drive**, **Dropbox** or **GitHub**.
	> Before starting to sync files, you must link an account in the **Synchronize** sub-menu.

## Open a file

You can open a file from **Google Drive**, **Dropbox** or **GitHub** by opening the **Synchronize** sub-menu and clicking **Open from**. Once opened in the workspace, any modification in the file will be automatically synced.

## Save a file

You can save any file of the workspace to **Google Drive**, **Dropbox** or **GitHub** by opening the **Synchronize** sub-menu and clicking **Save on**. Even if a file in the workspace is already synced, you can save it to another location. StackEdit can sync one file with multiple locations and accounts.

## Synchronize a file

Once your file is linked to a synchronized location, StackEdit will periodically synchronize it by downloading/uploading any modification. A merge will be performed if necessary and conflicts will be resolved.

If you just have modified your file and you want to force syncing, click the **Synchronize now** button in the navigation bar.

> **Note:** The **Synchronize now** button is disabled if you have no file to synchronize.

## Manage file synchronization

Since one file can be synced with multiple locations, you can list and manage synchronized locations by clicking **File synchronization** in the **Synchronize** sub-menu. This allows you to list and remove synchronized locations that are linked to your file.


# Publication

Publishing in StackEdit makes it simple for you to publish online your files. Once you're happy with a file, you can publish it to different hosting platforms like **Blogger**, **Dropbox**, **Gist**, **GitHub**, **Google Drive**, **WordPress** and **Zendesk**. With [Handlebars templates](http://handlebarsjs.com/), you have full control over what you export.

> Before starting to publish, you must link an account in the **Publish** sub-menu.

## Publish a File

You can publish your file by opening the **Publish** sub-menu and by clicking **Publish to**. For some locations, you can choose between the following formats:

- Markdown: publish the Markdown text on a website that can interpret it (**GitHub** for instance),
- HTML: publish the file converted to HTML via a Handlebars template (on a blog for example).

## Update a publication

After publishing, StackEdit keeps your file linked to that publication which makes it easy for you to re-publish it. Once you have modified your file and you want to update your publication, click on the **Publish now** button in the navigation bar.

> **Note:** The **Publish now** button is disabled if your file has not been published yet.

## Manage file publication

Since one file can be published to multiple locations, you can list and manage publish locations by clicking **File publication** in the **Publish** sub-menu. This allows you to list and remove publication locations that are linked to your file.


# Markdown extensions

StackEdit extends the standard Markdown syntax by adding extra **Markdown extensions**, providing you with some nice features.

> **ProTip:** You can disable any **Markdown extension** in the **File properties** dialog.


## SmartyPants

SmartyPants converts ASCII punctuation characters into "smart" typographic punctuation HTML entities. For example:

|                |ASCII                          |HTML                         |
|----------------|-------------------------------|-----------------------------|
|Single backticks|`'Isn't this fun?'`            |'Isn't this fun?'            |
|Quotes          |`"Isn't this fun?"`            |"Isn't this fun?"            |
|Dashes          |`-- is en-dash, --- is em-dash`|-- is en-dash, --- is em-dash|


## KaTeX

You can render LaTeX mathematical expressions using [KaTeX](https://khan.github.io/KaTeX/):

The *Gamma function* satisfying $\Gamma(n) = (n-1)!\quad\forall n\in\mathbb N$ is via the Euler integral

$$
\Gamma(z) = \int_0^\infty t^{z-1}e^{-t}dt\,.
$$

> You can find more information about **LaTeX** mathematical expressions [here](http://meta.math.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference).


## UML diagrams

You can render UML diagrams using [Mermaid](https://mermaidjs.github.io/). For example, this will produce a sequence diagram:

```mermaid
sequenceDiagram
Alice ->> Bob: Hello Bob, how are you?
Bob-->>John: How about you John?
Bob--x Alice: I am good thanks!
Bob-x John: I am good thanks!
Note right of John: Bob thinks a long<br/>long time, so long<br/>that the text does<br/>not fit on a row.

Bob-->Alice: Checking with John...
Alice->John: Yes... John, how are you?
```

And this will produce a flow chart:

```mermaid
graph LR
A[Square Rect] -- Link text --> B((Circle))
A --> C(Round Rect)
B --> D{Rhombus}
C --> D
```




<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE0NzA0NTQ2MjAsNzUyNjUwOTI1LDYxMz
c1NTUwNiwtMjA2NTA2NDA1NSwtOTE5NTQ4OTEzXX0=
-->