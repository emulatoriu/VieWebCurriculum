# Weather App

People Always Talk About The Weather... They are also always checking the weather in native and web applications. Now you can go further and create your own web based Weather application!

## What are you going to learn?

* Create a GET requests
* Getting data from an open API
* Working with JSON files

## Tasks

### Weather by city
Create a simple input field with an autocomplete feature (when the user starts typing, after 3 characters a list of cities appear which matches that search). Create a card that shows the weather data (temperature, sky conditions, humidity, etc.) of the selected city. Searching and selecting a new city should update the card.

1. When we open up the page, there is a simple input field with an autocomplete feature that shows search matches after 3 characters

2. When we search and select a city, the weather of this city is showing up

### OPTIONAL TASK: Extra improvements
Do some improvements in order to make the web application more interesting.

There is a button to put a city into the favourites, which list shows up when the input field is selected and the input is empty (the favourite list data doesn't need to persist after a reload)

Weather panel is showing a fetch api spinner while the content is loading [Sample loading fetch API spinner on Codepen](https://codepen.io/wang0nya/pen/bzwQPr).

Assign a nice background image to the chosen city that fits nicely to the site and apply it on the background. You can create object which store city name and image url.

You can use Pexels API to get image for chosen city dynamically. Read the official [Pexels API Documentation](https://www.pexels.com/api/documentation).

Generate a free API key from in order to access the Pexels API.

Use presented endpoint to get image for chosen city e.g. for Krakow: [https://api.pexels.com/v1/search?query=Krakow](https://api.pexels.com/v1/search?query=Krakow)

### Hints
* Plan carefully the project with your team mates
* You can use [this](https://www.weatherapi.com/docs/) API, you have to [register](https://www.weatherapi.com/signup.aspx) for free and use an Access ID/Secret Key.

### Background Materials
* [JavaScript Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
* [JavaScript Fetch API Examples](https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-fetch-api-to-get-data)
* [Weather API](https://www.weatherapi.com/docs/)
* [Example autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist)
* [CSS Weather Widgets you can draw inspiration from - Do NOT copy and paste one, create your own!](https://freefrontend.com/css-weather-widgets/) 

