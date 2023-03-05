# EJS (Embedded Javascript)

EJS (Embedded JavaScript) is a popular templating engine that can be used with Express to generate dynamic HTML pages.

## What are you going to learn?

How to generate dynamic HTML pages through your backend server.

## Tasks

### Setup
1. Install EJS:

```js
npm install ejs
```


### Configure your App
1. Create a folder named __views__ where we will place all ejs files
2. Create the file __index.ejs__ under the views folder.
3. Add following html code to index.ejs:  

```html
<html>
    <head>

    </head>
    <body>
        <!-- use locals to be sure that there is no error if
        text was not defined -->
        <h1>Hello <%= text || "Madam" %></h1>
    </body>
</html>
```
3. Configure your Express app to use EJS as the view engine.

```js
app.set('view engine', 'ejs');
// next line is not mandatory since views is the ejs default folder
// if you named your folder differently you would need to set it
// like this
app.set('views', './views');
```

### Render the index.ejs template

Add following endpoint to your server application:

```js
app.get('/sayHello', (req, res) => {
    res.render("index", {text: "World"});
})
```
When you call the endpoint __localhost:3000/sayHello__ you should see the message __Hello World__.


### Background Materials
* [EJS](./EJS.md)