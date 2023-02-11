// Pseudo Code

// Create a weather dashboard with form inputs. - done

// When a user searches for a city they are presented with current and future conditions for that city and that city is added to the search history.

// When a user views the current weather conditions for that city they are presented with:
// The city name
// The date
// An icon representation of weather conditions
// The temperature
// The humidity
// The wind speed

// When a user views future weather conditions for that city they are presented with a 5-day forecast that displays:
// The date
// An icon representation of weather conditions
// The temperature
// The humidity
// When a user clicks on a city in the search history they are again presented with current and future conditions for that city.

// Api call for metric units

// https://api.openweathermap.org/data/2.5/forecast?lat=57&lon=-2.15&appid={API key}&units=metric


// Variables 

const apiKeyWeather = '2253c82eaacce5516e8db0f622c8e22a';
const cityInput = document.querySelector('#search-city');
const submitBtn = document.querySelector('#search-button');
const clearBtn = document.querySelector('#clear-button');

const forecast = document.querySelector('#forecast');
const input = document.querySelector('.form-input');
const currentCity = document.querySelector('#currentCity');
const currentTemp = document.querySelector('#currentTemp');
const currentWind = document.querySelector('#currentWind');
const currentHumid = document.querySelector('#currentHumid');

const buttonList = document.querySelector('.btnList');

var location;
var lat;
var lon;
var counter;

// EVENT LISTENER FOR SUBMIT BUTTON TO GET CITY



 




