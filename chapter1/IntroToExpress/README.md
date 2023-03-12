# Introduction to express

Express is a popular and powerful web framework for Node.js that makes it easy to build robust and scalable web applications. It provides a simple and intuitive interface for handling HTTP requests, routing, middleware, and more. With Express, developers can quickly and efficiently create custom APIs, web services, and web applications. Express offers a wide range of features and capabilities, such as support for templating engines, database integration, security, session management, and more.

## What are you going to learn?

By learning Express, developers gain the ability to build complex and dynamic web applications using Node.js, with the added benefit of a rich ecosystem of plugins and tools that can simplify development and speed up time-to-market. 

## Tasks

### Setup your project
1. Create a new directory for your project and navigate to it using the terminal:    

```javascript
mkdir express-server
cd express-server
```

2. Initialize your project by running npm init and following the prompts.  

```js
npm init
```

3. Install the Express package by running npm install express.

```js
npm install express
```

4. Install __nodemon__ which will restart youe application with any change. This means that you do not have to stop and restart your applications in order for your changes to take effect:  

```js
npm i –save-dev nodemon
```
5. Now there was a package.json file created. Open it and add something like following to the __scripts__ part:

```js
"devStart": "nodemon server.js"
```

6. Create a new file called server.js in the root directory of your project.

### Create a simple web server
1. Open the server.js file and require the express package.

```js
const express = require('express');
```

2. Create an instance of the Express application.

```js
const app = express();
```

3. Define a route for the root of your server by calling the get method on your Express application.

```js
app.get('/', (req, res) => {
  res.send('Hello World!');
});
```
4. Start your server by calling the listen method on your Express application, specifying the port number to listen on.

```js
app.listen(3000, () => {
  console.log('Server is running on port 3000.');
});
```

### Start your webserver
Now start your server with the command __npm run devStart__. 

In your browser at __localhost:3000/__ you should see now the message __"Hello World"__. 

### Extend your webserver
Define additional routes as needed using the same get method, specifying the path and a callback function that handles the request and sends a response.

```js
app.get('/users', (req, res) => {
  res.send('This is the user page.');
});

app.get('/products', (req, res) => {
  res.send('This is the products page.');
});
```

Now when you will open the site __localhost:3000/users__ or __localhost:3000/products__ you should be able to see different messages.  

### Hints
* Check the background material for more information
* To stop your web server press ctrl-C
* If you stopped your web server and refreshed the page of it, you will notify that the page can not be reloaded


### Background Materials
* [Request Methods](./Requests.md)
* [res and req](./ResReq.md)
* [Express.js Guide](https://expressjs.com/en/guide/routing.html)
* [HTTP Guide](https://www.jmarshall.com/easy/http/)
* [Responose status](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)