# Movienator

Didn`t it happen to you that sometimes you thought about a cool movie and you only remembered one actor who played there and you would like to know which movie it was? Of course we could google it but since we are developers we are going for our own solution here.
You have to build a server which can add, delete and search for certain movies.

## What are you going to learn?

How to use express, routes and EJS in a bigger project.

## Tasks

### Set up the project
1. Project should be initialized with __npm init__
2. Express should be installed with __npm install express__
3. EJS should be installed with __npm install ejs__
4. A movies.json file should be created with some movie objects
5. Nodemon shouold be installed with __npm install nodemon__ and the __"scripts"__ part of the __package.json__ file should be adapted by adding a __devStart__ attribute which starts your project with nodemon

### Create the Express server
1. An instance of Express should be created in a server.js file
2. The server should listen on port 3000
3. A basic GET route should be created for the root URL that sends a welcome message to the browser
4. A movies variable should be created that holds the data from the movies.json file

### Create a route to display a list of movies

1. A GET route should be created for the /movies URL
2. The route should render an EJS template that displays a list of all the movies in the movies variable

### Create a route to add a new movie
1. A GET route should be created for the /movies/new URL that renders an HTML form for adding a new movie
2. The form should submit a POST request to the /movies URL with the movie data
3. A POST route should be created for the /movies URL that adds a new movie object to the movies variable and redirects to the /movies URL (of the GET route)

### Create a route to display a single movie
1. A GET route should be created for the /movies/:id URL, where :id is the ID of a specific movie
2. The route should render an EJS template that displays the details of the movie with the matching ID

### Create a route to edit an existing movie

1. A GET route should be created for the /movies/:id/edit URL, where :id is the ID of a specific movie
2. The route should render an HTML form pre-populated with the details of the movie with the matching ID
3. The form should submit a PUT request to the /movies/:id URL with the updated movie data
4. A PUT route should be created for the /movies/:id URL that updates the movie object in the movies variable with the matching ID and redirects to the /movies/:id URL

### Create a route to delete an existing movie
1. A DELETE route should be created for the /movies/:id URL, where :id is the ID of a specific movie
2. The route should remove the movie object with the matching ID from the movies variable and redirect to the /movies URL

### Create EJS templates
1. A base EJS template should be created with a header, footer, and content section
2. The list of movies should be displayed using a partial EJS template
3. The movie details and edit forms should be displayed using separate EJS templates

### Style the pages with CSS
1. A public directory should be created to hold CSS and other static files
2. A style.css file should be created in the public directory with styles for the pages

### Hints
* For accessing the json file and manipulating the movie objects we provided a file with functions in the [services](./services) directory. You might use it or create your own functions.
* This is how an object in the movies.json file should look like:  

```json
{
  "id": 1,
  "title": "The Shawshank Redemption",
  "year": 1994,
  "director": "Frank Darabont",
  "genre": "Drama",
  "actors": ["Tim Robbins", "Morgan Freeman", "Bob Gunton"]
}
```