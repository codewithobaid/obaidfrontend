const hamburgerMenu = document.querySelector(".hamburger-menu");
const menu = document.querySelector(".flx-menu");

menu.classList.add("hidden"); // Hide the menu initially

// Function to close the menu
function closeMenu() {
  hamburgerMenu.classList.remove("open");
  menu.classList.add("hidden");
  menu.classList.remove("show");
}

// Function to handle clicks on other locations
function handleLocationClick(location) {
  const cityName = location.textContent.trim(); // Get the city name
  city.textContent = cityName; // Update displayed city name
  country.textContent = ""; // Clear the country name
  getWeatherData(cityName); // Fetch weather data for the clicked city
  closeMenu(); // Close the responsive menu
}
// Get the elements for other locations
const otherLocations = document.querySelectorAll(".cities h2");

// Add click event listeners to each location
otherLocations.forEach((location) => {
  location.addEventListener("click", () => {
    handleLocationClick(location);
  });
});

// Toggle menu when hamburger menu is clicked
hamburgerMenu.addEventListener("click", function () {
  this.classList.toggle("open");
  menu.classList.toggle("hidden");
  menu.classList.toggle("show");
});

// Get the HTML elements
const input = document.querySelector("#city-input");
const button = document.querySelector("#search-btn");
const icon = document.querySelector(".weather-image img");
const city = document.querySelector(".city");
const country = document.querySelector(".country");
const temp = document.querySelector(".temprature h2");
const desc = document.querySelector(".weather-names h2");
const wind = document.querySelector(".wind h3");
const humidity = document.querySelector(".humidity h3");

// Get the API key from OpenWeatherMap
const apiKey = "98e2b6bf17f60ce72279f5eaec34c786";

// Define a function to get the weather data for a given city
function getWeatherData(city) {
  // Construct the API URL with the city name and the API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  // Use fetch to make an API request
  fetch(url)
    .then((response) => {
      // Check if the response is ok
      if (response.ok) {
        // Parse the response data as JSON
        return response.json();
      } else {
        // Throw an error if the response is not ok
        throw new Error("City not found");
      }
    })
    .then((data) => {
      // Extract the relevant information from the data
      const cityName = data.name;
      const country = data.sys.country;
      const temperature = Math.round(data.main.temp);
      const weather = data.weather[0].main;
      const weatherDesc = data.weather[0].description;
      const windSpeed = data.wind.speed;
      const humidityLevel = data.main.humidity;

      // Update the HTML elements with the weather data
      city.textContent = cityName;
      country.textContent = country;
      temp.textContent = `${temperature} °C`;
      desc.textContent = weatherDesc;
      wind.textContent = `${windSpeed} km/hr`;
      humidity.textContent = `${humidityLevel} %`;

      // Change the image source according to the weather condition
      switch (weather) {
        case "Clear":
          icon.src = "./Assets/weather icons/sunny.png";
          break;
        case "Wind":
          icon.src = "./Assets/weather icons/windy.png";
          break;
        case "Clouds":
          icon.src = "./Assets/weather icons/sunny and rain.png";
          break;
        case "Night":
          icon.src = "./Assets/weather icons/night.png";
          break;

        case "Rain":
          icon.src = "./Assets/weather icons/heavy rain.png";
          break;
        case "Snow":
          icon.src = "./Assets/weather icons/snow.png";
          break;
        case "Thunderstorm":
          icon.src = "./Assets/weather icons/thunderstorm.png";
          break;
        default:
          icon.src = "./Assets/weather icons/sunny.png";
      }
    })
    .catch((error) => {
      // Handle the error
      alert(error.message);
    });
}

// Add an event listener to the button to get the weather data when clicked
button.addEventListener("click", () => {
  // Get the city name from the input value
  const cityName = input.value;

  // Update the city and country elements directly from here
  city.textContent = cityName;
  country.textContent = ""; // Clear the country text content temporarily

  // Call the getWeatherData function with the city name
  getWeatherData(cityName);
});

// Optionally, use the navigator.geolocation API to get the user's current location
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition((position) => {
    // Get the latitude and longitude from the position object
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    // Construct the API URL with the coordinates and the API key
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    // Use fetch to make an API request
    fetch(url)
      .then((response) => {
        // Check if the response is ok
        if (response.ok) {
          // Parse the response data as JSON
          return response.json();
        } else {
          // Throw an error if the response is not ok
          throw new Error("Location not found");
        }
      })
      .then((data) => {
        // Extract the relevant information from the data
        const cityName = data.name;
        const country = data.sys.country;
        const temperature = Math.round(data.main.temp);
        const weather = data.weather[0].main;
        const weatherDesc = data.weather[0].description;
        const windSpeed = data.wind.speed;
        const humidityLevel = data.main.humidity;

        // Update the HTML elements with the weather data
        city.textContent = cityName;
        country.textContent = countryName;
        temp.textContent = `${temperature} °C`;
        desc.textContent = weatherDesc;
        wind.textContent = `${windSpeed} km/hr`;
        humidity.textContent = `${humidityLevel} %`;

        // Change the image source according to the weather condition
        switch (weather) {
          case "Clear":
            icon.src = "./Assets/weather icons/sunny.png";
            break;
          case "Clouds":
            icon.src = "./Assets/weather icons/sunny and rain.png";
            break;
          case "Rain":
            icon.src = "./Assets/weather icons/heavy rain.png";
            break;
          case "Snow":
            icon.src = "./Assets/weather icons/snow.png";
            break;
          case "Thunderstorm":
            icon.src = "./Assets/weather icons/thunderstorm.png";
            break;
          default:
            icon.src = "./Assets/weather icons/sunny.png";
        }
      })
      .catch((error) => {
        // Handle the error
        alert(error.message);
      });
  });
}
