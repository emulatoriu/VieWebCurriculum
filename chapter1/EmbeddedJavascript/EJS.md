# EJS (Embedded Javascript)

EJS (Embedded JavaScript) is a popular templating engine that can be used with Express to generate dynamic HTML pages. Here are some key things to know about using EJS with Express:

1. __Installing EJS__: To use EJS with Express, you need to install the EJS package. You can do this using npm by running __npm install ejs__.
2. __Setting the View Engine__: After installing EJS, you need to configure your Express app to use EJS as the __view engine__. You can do this by setting the view engine property to __'ejs'__ and the __'views'__ property to the directory where your views are stored. Here's an example:

```js
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');
```
3. __Rendering EJS Templates__: Once you have configured your app to use EJS, you can use the __res.render()__ method to render EJS templates. This method takes two arguments: the name of the EJS file to render, and an object containing the data to pass to the view. Here's an example:

```js
app.get('/', (req, res) => {
  const data = { title: 'My App', message: 'Welcome to my app!' };
  res.render('index', data);
});
```
In this example, the __res.render()__ method is used to render the __index.ejs__ file, passing in an object containing a __title__ and __message__ property.

4. __Using EJS Tags__: EJS templates use special tags to generate dynamic content. These tags start with __<%__ and end with __%>__. Here are some common tags you can use in EJS:

* __<% %>__ - Executes the code inside the tags, without printing anything.
* __<%= %>__ - Prints the value of the code inside the tags.
* __<%- %>__ - Prints the value of the code inside the tags, while also interpreting any HTML tags.
Here's an example of how to use these tags in an EJS template:

```js
<h1><%= title %></h1>
<p><%- message %></p>
```
In this example, the __<%= %>__ tag is used to print the value of the __title__ property, while the __<%- %>__ tag is used to print the value of the __message__ property and interpret any HTML tags.