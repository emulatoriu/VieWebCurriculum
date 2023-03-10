# Star wars

In this exercise, you will use the **fetch** API to retrieve data from the Star Wars API (SWAPI) and display it on a web page.
We would like to have a website with all Star Wars characters listed there.

## What are you going to learn?

* fetch()
* then()
* Promises


## Tasks

### Set up your project
First, create a new HTML file and add a basic HTML structure with a <script> tag to include your JavaScript file. For example:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Star Wars API with Fetch</title>
  </head>
  <body>
    <h1>Star Wars Characters</h1>
    <ul id="characters"></ul>
    <script src="index.js"></script>
  </body>
</html>
```

###  Use fetch to retrieve data
Next, use the fetch API to retrieve data from the SWAPI. For this exercise, we'll retrieve a list of characters from the Star Wars universe.

1. The response of the **fetch** needs to be transformed into a **json**
2. Use the data retrived by json to create list elements for your html files with the properties of your characters.

### Hints
* Read the documentation about the Star Wars API to be able to use it
* If you are not sure what data you receive from your json transformation you might print your json objects to check their properties
* If you want to retrieve information about a specific character, you can use the following endpoint:

```js
	https://swapi.dev/api/people/{id}/
```
You can replace {id} with the ID of the character you want to retrieve. For example, to retrieve information about Luke Skywalker, you can use the following URL:
```js
	https://swapi.dev/api/people/1/
```

* You might also call those links which are used for the API in the browser first to see how the data is presented.


### Background Materials
* [Star Wars Api Documentation](https://swapi.dev/documentation)
* [fetch and Promises](FetchNdPromises.md)