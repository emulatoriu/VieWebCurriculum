# Express and routes

Using routes in Express is a powerful and convenient way to organize your application's endpoints and handle incoming requests. Use your server from the chapter __Introduction to express__ and extend it

## What are you going to learn?

How to use routes in express.

## Tasks

### Setup
1. Create a routes folder in the same directory where your server.js file is

2. Create a file in this folder called users.js

### Create routes
1. Add following code to users.js so we can use routes

```js
const express = require("express");
const app = express();
const router = express.Router();
```

2. Create following routes:

```js

router.get('/', (req, res) => {
    res.send("User root");
});

router.route('/:id').get((req, res) => {    
    res.send(`Get User with the id ${req.params.id}`);
}).put((req, res) => {    
    res.send(`Update User with the id ${req.params.id}`);
}).delete((req, res) => {    
    res.send(`Delete User with the id ${req.params.id}`);
});
```

### Export your router
Add following code to export your router:

```js
module.exports = router;
```

### Use your router
Go back to your __server.js__ file and use your created router:

```js
const userRouter = require("./routes/users");

app.use("/users", userRouter);
```
### Test your routes
Call your website with __localhost:3000/users

1. You should see now the message __"User root"__

Call your website with __localhost:3000/users/1

2. You shoud see the message __Get User with the id 1__


### Hints
* You could test your put/delete endpoints also with postman. This would be a good excercise to understand more how your requests work and to use postman again
* As you see in the example it is possible to define for the same endpoint several functions like we did with __get__, __put__ and __delete__ instead of repeating the same code.


### Background Materials
* [Express.js Guide: Routing](https://expressjs.com/en/guide/routing.html)
* [How To Set Up Express.js Route Parameters](https://www.digitalocean.com/community/tutorials/nodejs-express-routing)