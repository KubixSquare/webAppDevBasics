# WebApp Development Using NodeJS & ExpressJS Framework


#### What is Node.js?

* Node.js is an open source server environment
* Node.js is free
* Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)
* Node.js uses JavaScript on the server


> `Note : ` Node.js uses asynchronous programming!

1. Node.js is an open source, cross-platform runtime environment for developing server-side and networking applications. Node.js applications are written in JavaScript, and can be run within the Node.js runtime on OS X, Microsoft Windows, and Linux.

2. Node.js also provides a rich library of various JavaScript modules which simplifies the development of web applications using Node.js to a great extent.

#### Features of Node.js

Following are some of the important features that make Node.js the first choice of software architects.

    1. Asynchronous and Event Driven − All APIs of Node.js library are asynchronous, that is, non-blocking. It essentially means a Node.js based server never waits for an API to return data. The server moves to the next API after calling it and a notification mechanism of Events of Node.js helps the server to get a response from the previous API call.

    2. Very Fast − Being built on Google Chrome's V8 JavaScript Engine, Node.js library is very fast in code execution.

    3. Single Threaded but Highly Scalable − Node.js uses a single threaded model with event looping. Event mechanism helps the server to respond in a non-blocking way and makes the server highly scalable as opposed to traditional servers which create limited threads to handle requests. Node.js uses a single threaded program and the same program can provide service to a much larger number of requests than traditional servers like Apache HTTP Server.

    4. No Buffering − Node.js applications never buffer any data. These applications simply output the data in chunks.

    5. License − Node.js is released under the MIT license.

#### What is ExpressJS?

* ExpressJS is a web application framework that provides you with a simple API to build websites, web apps and back ends. With ExpressJS, you need not worry about low level protocols, processes, etc.

* Express provides a minimal interface to build our applications. It provides us the tools that are required to build our app. It is flexible as there are numerous modules available on npm, which can be directly plugged into Express.

#### Getting Started with NodeJS and NPM

> Note : npm is the world's largest Software Registry also a software Package Manager and Installer !

#### Installation 

`NodeJS & NPM` : https://nodejs.org/en/download/
`Checking Installation` :
```bash
node -v
npm -v
```

#### Starting a Project

```bash
npm init
```

you will be taken through these steps fill it according to your project :
```bash
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (javascript) covid19demo
version: (1.0.0) 
description: demo application to demonstrate working of webApp and REST APIs
entry point: (index.js) server.js
test command: echo \"Error: no test specified\" && exit 1
git repository: https://github.com/KubixSquare/webAppDevBasics.git
keywords: covid webapp
author: KubixSquare
license: (ISC) MIT
About to write to /home/jetso/Jetso/webAppDevelopment/JavaScript/package.json:

{
  "name": "covid19demo",
  "version": "1.0.0",
  "description": "demo application to demonstrate working of webApp and REST APIs",
  "main": "server.js",
  "scripts": {
    "test": "echo \\\"Error: no test specified\\\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/KubixSquare/webAppDevBasics.git"
  },
  "keywords": [
    "covid",
    "webapp"
  ],
  "author": "KubixSquare",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/KubixSquare/webAppDevBasics/issues"
  },
  "homepage": "https://github.com/KubixSquare/webAppDevBasics#readme"
}


Is this OK? (yes) yes
```

#### Updating package.json file

Install essential packages from command line :
```bash
npm install --save body-parser cors express helmet morgan nodemon axios multer xss-clean hpp cors express-session dotenv
```

This command will install five dependencies in your project:

* `body-parser`: You will use this dependency to convert the body of incoming requests into JavaScript objects.
* `cors`: You will use this dependency to configure Express to add headers stating that your API accepts requests coming from other origins. This is known as Cross-Origin Resource Sharing (CORS).
* `express`: This is the Express library itself.
* `helmet`: This library helps to secure Express APIs by defining various HTTP headers.
* `morgan`: This library adds some logging capabilities to your Express API.
* `nodemon` : nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
* `axios` : Promise based HTTP client for the browser and node.js
* `multer` : Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files.
* `xss-clean` : Node.js Connect middleware to sanitize user input coming from POST body, GET queries, and url params.
* `hpp` : Express middleware to protect against HTTP Parameter Pollution attacks.
* `cors` : CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
* `express-rate-limit` : Basic rate-limiting middleware for Express. Use to limit repeated requests to public APIs and/or endpoints such as password reset.
* `express-session` : Create a session middleware.
* `dotenv` : Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.

> `--save` parameter in command will add the package name and version directly to the `package.json` file.

Adding Nodemon Development Script and Engines to package :
```javascript
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "engines": {
    "node": "latest"
  }
``` 

Final `package.json` file :
```JSON
{
  "name": "covid19demo",
  "version": "1.0.0",
  "description": "demo application to demonstrate working of webApp and REST APIs",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/KubixSquare/webAppDevBasics.git"
  },
  "keywords": [
    "covid",
    "webapp"
  ],
  "author": "KubixSquare",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/KubixSquare/webAppDevBasics/issues"
  },
  "homepage": "https://github.com/KubixSquare/webAppDevBasics#readme",
  "dependencies": {
    "axios": "^0.19.2",
    "body-parser": "^1.19.0",
    "cors": "^2.8.5",
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "express-rate-limit": "^5.1.3",
    "express-session": "^1.17.1",
    "helmet": "^3.22.0",
    "hpp": "^0.2.3",
    "morgan": "^1.10.0",
    "multer": "^1.4.2",
    "nodemon": "^2.0.4",
    "xss-clean": "^0.1.1"
  },
  "engines": {
    "node": "latest"
  }
}
```

#### Code Structure :

Lets create the code structure of the NodeJS Program 
> Note : this is just an sample structure

```
|---package.json
|---server.js
|---app.js
|---.env
|---dev.env
|---Dockerfile
|---controllers
|   |---user
|   |   |---userController.js
|   |---error
|   |   |--errorController.js
|---routes
|   |---user
|   |   |--userRoutes.js
|---utils
|   |---auth
|   |   |---authUtils.js
|   |---error
|   |   |---apperrorUtils.js
|---services
|   |---apikey
|   |   |---apikeyService.js
|---models
|   |---user
|   |   |---userModel.js
|---tests
|   |---apikey
|   |   |---apikey.test.js
|---configs
|   |---common
|   |   |---config.js
|   |---database
|   |   |---postgressConfig.js
    
```

#### Using `.env` file as secret variable storage

Development has been much easier since the invention of the `.env` file. You can easily set your environment variables and values with the syntax ENV_VARIABLE=VALUE and boom! These variables got loaded as your environment variables, making it possible to get quick access to them:

```bash
PORT = 8081
SECRET = (Your_Super_Secret_Key)
```

Loading `.env` file : 
```javascript
> console.log(process.env.PORT)
> 8081
```

#### Writing all code and running application 

1. Write all the controller, routes, utils and other codes according to the structure and the files attached in the git.
2. Run the code in development mode using `nodemon` which we have alredy configured in script of `package.json` which is inside `script->dev` to run this we will use :
```bash
npm run dev
```
This will start the server with following output:
```javascript
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Application is running on http://localhost:8081
```
Go to the localhost link you will see the program running with thw following output:
```javascript
You hit home page! 
```
Which means our API base model is ready to work.