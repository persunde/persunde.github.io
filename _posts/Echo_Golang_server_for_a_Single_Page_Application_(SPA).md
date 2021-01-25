---
title: Setup Echo web server to serve a Single Page Application (SPA)
author: Per Sunde
date: '2021-01-25'
tags: 'Go, Golang, Echo, SPA, React, Single Page Application, Webserver'
excerpt: >-
  Are you using Echo webserver and experience issues with your Single Page Application's (SPA) routing? There is an easy fix for that. Simply add this code to your Echo server and it will serve the correct files and handle your SPA routing correctly!
featuredImage: golang-react-echo.jpg
---
# Setup Echo web server to serve a Single Page Application (SPA)
Do you have a Single Page App that is written in React, Vue or maybe Svelte, and you want to use the Golang Echo web framwork to serve your web-app?
Do you experience issues with the SPA routing? 

## Echo has problems with SPA routing
By default Echo does not work great with a SPA routing. It should work if you go to the base URL for example https://my-spa-url.com. But if you try to enter something like https://my-spa-url.com/sub-path into your web-browser, then the SPA will not go to the correct page if you serve the files with Echo and you are using Echo's default settings!

## Echo needs configuration to work with SPA
If you want to use the Echo webserver framework for Go to serve a SPA you need to configure it to handle the requests properly. An SPA's will not send a request for each sub-url path. Therefore you have to configure your Echo web-server to expect a SPA and serve the files correctly.

## How to make Echo serve a SPA correctly?
To make Echo work well with your SPA, you need to enable the HTML5 property for the Echo static middleware. This will enable Echo to behave similarly to your development server that you normally start with a command like `npm start` or `yarn dev`.

So to make your Echo Golang web-server correctly serve a SPA, you need to add the middleware code shown below. Add this code the same place where you initialize your Echo server:

```go
import echoMw "github.com/labstack/echo/v4/middleware"

e.Use(middleware.StaticWithConfig(echoMw.StaticConfig{
	Root:   "public",		// This is the path to your SPA build folder, the folder that is created from running "npm build"
	Index:  "index.html",	// This is the default html page for your SPA
	HTML5:  true,
}))
```

Below you can see the full code on how I initialize my simple Echo server to be configured to serve a SPA:

```go
package server

import (
	"github.com/labstack/echo/v4"
	echoMw "github.com/labstack/echo/v4/middleware"
)

// Init the echo webserver
func Init() *echo.Echo {

	e := echo.New()

	// Set Bundle MiddleWare
	e.Use(echoMw.Logger())
	e.Use(echoMw.Gzip())

	e.Use(echoMw.StaticWithConfig(echoMw.StaticConfig{
		Root:   "public",		// This is the path to your SPA build folder, the folder that is created from running "npm build"
		Index:  "index.html",	// This is the default html page for your SPA
		Browse: false,
		HTML5:  true,
	}))

	return e
}
```

Now your Echo web server will serve your Single Page Application correctly. Have fun :)


## Read more about Echo configuration
Read more about the Ehcho static middleware configuration you can do here:  
https://echo.labstack.com/middleware/static