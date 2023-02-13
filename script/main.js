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
const btnList = document.querySelector('.btnList');

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

// local storage

if ($("#search-city").val() != "" ){ 


    localStorage.setItem("location", locationEntry);
    
    var savedLocation = localStorage.getItem("location");
    
    var savedLocations = JSON.parse(localStorage.getItem("locations")) || [];

    var savedButton = document.createElement("button");
    savedButton.classList.add("btn", "search-button");
    savedButton.setAttribute("id", "save-button");
    savedButton.setAttribute("data-id", $("#search-city").val());
    savedButton.innerHTML = savedLocations;
    btnList.appendChild(savedButton);
    
    for (var i = 0; i < savedLocations.length; i++) {
    savedButton.innerHTML = savedLocations[i];
    btnList.appendChild(savedButton);
    }
    
    // Add the new location to the list of saved locations
    savedLocations.push(locationEntry);
    localStorage.setItem("locations", JSON.stringify(savedLocations));
}


  // CALL TO GEO API FOR LAT AND LON


  var apiKeyWeather = "def3fa492eb50ea6560f2cae7d9d29e7";
  var queryUrlGeocode = "https://api.openweathermap.org/geo/1.0/direct?q="+ locationEntry + "&limit=1&appid="+ apiKeyWeather;

  $.ajax({
    url: queryUrlGeocode,
    method: "GET"
  }).then(function(response) {
      var lat = response[0].lat;
      var lon = response[0].lon;
      var queryUrlWeather = "https://api.openweathermap.org/data/2.5/forecast?lat="+ lat + "&lon=" + lon +"&appid=" + apiKeyWeather + "&units=metric";

  // CALL TO WEATHER API FOR CURRENT WEATHER
  $.ajax({
      url: queryUrlWeather,
      method: "GET"
  }).then(function(response) {
      console.log(response) // <<< THIS IS API RESPONSE AFTER YOU ENTER CITY NAME AND PRESS SEARCH


      var today = moment().format("DD-MM-GGGG");
      var counter = 0;
      var addition = 0;
      //  var currentDay = parseInt(moment().format("DD"));

      // Traversing searched Location
      var cityName;
      cityName = response.city.name;
      var cityLocation = $('#currentCity');
      cityLocation.text(cityName + " (" + today + ")");

      // Traversing current temperature at the searched Location
      var currentTemp;
      currentTemp = response.list[0].main.temp;
      var tempP = $('#currentTemp');
      tempP.text("Temp: "+ currentTemp + "°C");

      var weatherIcon;
      weatherIcon = response.list[0].weather[0].icon;
      var weatherIconImg = $('#weatherIcon');
      $("#weatherIcon").attr("src", "http://openweathermap.org/img/wn/" + weatherIcon + ".png");

      // Traversing current wind speed at the searched Location
      var currentWind;
      currentWind = response.list[0].wind.speed;
      var windP = $('#currentWind');
      console.log(currentWind)
      windP.text("Wind Speed: " + currentWind + " KPH");

      // Traversing current humidity at the searched Location
      var currentHumid;
      currentHumid = response.list[0].main.humidity;
      var humidP = $('#currentHumid');
      humidP.text("Humidity: " + currentHumid + "%");

      // Traversing weather icon
      var weatherIcon;
      weatherIcon = response.list[0].weather[0].icon;
      var weatherIconImg = $('#weatherIcon');
      $("#weatherIcon").attr("src", "http://openweathermap.org/img/wn/" + weatherIcon + ".png");

      // 5-day forecast

     


      var fiveDayForecast = [];

      for (var i = 0; i < response.list.length; i++) {
      console.log(response)
      var date = response.list[i].dt_txt;
      var time = date.slice(11, 13);
      if (time === "00") {
        var day = {
          date: response.list[counter + addition].dt_txt.slice(0, 10),
          temp: response.list[i].main.temp,
          wind: response.list[0].wind.speed,
          humidity: response.list[i].main.humidity
        };
        fiveDayForecast.push(day);
        if (fiveDayForecast.length === 5) {
          break;
        }
      }
    }


      // create a container for the 5-day forecast
      var forecastContainer = $('<div>');
      forecastContainer.addClass('forecast-container');

      // loop through the 5-day forecast data
      for (var i = 0; i < 5; i++) {
        // create a div for each day
        var forecastDay = $('<div>');
        forecastDay.addClass('forecast-day');

        var header = $("<h3>").text(date);


        // create elements to display the location, temperature, and humidity
        var location = $('<p>');
        location.text('Location: ' + forecastData[i].location);

        var temperature = $('<p>');
        temperature.text('Temperature: ' + forecastData[i].temperature + '°C');

        var humidity = $('<p>');
        humidity.text('Humidity: ' + forecastData[i].humidity + '%');

        // append the location, temperature, and humidity to the forecast day div
        forecastDay.append(header);
        forecastDay.append(location);
        forecastDay.append(temperature);
        forecastDay.append(humidity);

        // append the forecast day div to the forecast container
        forecastContainer.append(forecastDay);
      }

      // append the forecast container to the page
      $('#forecast-section').append(forecastContainer);
      addition += 8;
  }); 

  });
});

// clear and reload the page when user clicks on clear history button
// $("#clear-button").click(function(event) {
//     event.preventDefault();
//     localStorage.clear();
//     location.reload();
// })







    



