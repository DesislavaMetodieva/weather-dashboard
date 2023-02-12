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

const APIKey = '2253c82eaacce5516e8db0f622c8e22a';
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

var locationEntry;

$(".submit-btn").click(function(event) {
    event.preventDefault();
    locationEntry = ($("#search-city").val());
    console.log(locationEntry);


  // CALL TO GEO API FOR LAT AND LON
  var apiKeyWeather = "def3fa492eb50ea6560f2cae7d9d29e7";
  var queryUrlGeocode = "https://api.openweathermap.org/geo/1.0/direct?q="+ locationEntry + "&limit=1&appid="+ apiKeyWeather;
  $.ajax({
    url: queryUrlGeocode,
    method: "GET"
  }).then(function(response) {
      var lat = response[0].lat;
      var lon = response[0].lon;
      var queryUrlWeather = "https://api.openweathermap.org/data/2.5/weather?lat="+ lat + "&lon=" + lon +"&appid=" + apiKeyWeather + "&units=metric";
      
  // CALL TO WEATHER API FOR CURRENT WEATHER
  $.ajax({
      url: queryUrlWeather,
      method: "GET"
  }).then(function(response) {
     console.log(response) // <<< THIS IS API RESPONSE AFTER YOU ENTER CITY NAME AND PRESS SEARCH
    }); 

  });
});


    



