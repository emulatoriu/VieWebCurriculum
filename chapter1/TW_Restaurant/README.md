# Restaurant

As you sit in your office, sipping on a cup of coffee and going through your emails, you suddenly hear a knock at your door. When you open it, you're surprised to see a flustered-looking man standing in front of you. It's the owner of a local restaurant that you're vaguely familiar with.

"Please, I need your help!" he exclaims as he rushes into your office. "My customers are complaining about my website. It's old-fashioned and outdated, and they can't place orders online. I'm losing business, and I don't know what to do!"

You try to calm him down and ask him to take a seat. He tells you that he's been running the restaurant for over a decade, and he's never had to worry about his website until now. He's not tech-savvy, and he doesn't know where to start.

You listen to his concerns and explain to him that you can help him build a modern website that will not only make it easy for customers to place orders online but also help him promote his business on social media and search engines. You assure him that you'll take care of everything and that he'll have a website that he can be proud of.

He looks at you with gratitude, and you can see the relief in his eyes. With your expertise, you're confident that you can help him save his business and attract new customers. You shake his hand and get to work, excited about the challenge that lies ahead.

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

Create an Express.js server and define the three endpoints described above (__/menu__, __/menu/:id__, and __/orders__).

1. An instance of Express should be created in a server.js file
2. The server should listen on port 3000
3. __/menu__: Returns all menu items as a JSON object.
4. __/menu/:id__: Returns a specific menu item by its ID as a JSON object.
5. __/orders__: Allows customers to place orders via a POST request.


### Create a route to display all menu items

1. __/menu__ endpoint reads and parses the menu.json file.
2. The route should render an EJS template that displays all menu items


### Create a route to display a specific menu item
1. __/menu/:id__ endpoint reads and parses the menu.json file.
2. JSON object containing the menu item with the corresponding ID is returned from the fetch and an EJS template renders the product information.

### Create a route to place an order
1. __/orders__ endpoint parses the request body to get the list of menu items and their quantities.
2. The total price of the order is calculated.
3. The total price is returned as a JSON object in the response to the POST request.

### Choose a restaurant theme
Choose a type of restaurant you would like to make the page for and customize your .json file and your css to match it

### Extend your menu
Add more menu items to your json file which match your restaurant theme

### Optional: Add Categories
Add categories to your menu items like drinks, beverage, ... . Make it possible for the customer to filter their search by categories and to list only products of the chosen category.


### Hints
* There is some starter code provided which you might use

### Background Material
* [EJS documentation](https://ejs.co/#docs) - The official documentation for EJS, which provides a comprehensive guide to using EJS templates.
```