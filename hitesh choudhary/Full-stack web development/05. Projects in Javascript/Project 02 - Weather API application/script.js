document.addEventListener("DOMContentLoaded", function () {
  console.log("Dom content loaded successfully!!!");
  const cityInput = document.getElementById("city-input");
  const fetchWeatherBtn = document.getElementById("get-weather-btn");
  const weatherInfo = document.getElementById("weather-info");
  const cityNameDisplay = document.getElementById("city-name");
  const temperatureDisplay = document.getElementById("temperature");
  const descriptionDisplay = document.getElementById("description");
  const errorMessage = document.getElementById("error-message");
  const API_KEY = "1073ce35496d648f0cacda98acd24afb";

  // api service fun
  async function fetchWeatherInfo(city = "Indore") {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Response error: ", response.status);
      }
      const data = await response.json();

      return {
        success: true,
        message: "data fetched successfully",
        weatherInfo: data,
      };
    } catch (error) {
      console.error(`Error, while fetching weather: ${error.message}`);
      return {
        success: false,
        message: "Error, while fetching weather data",
        data: null,
      };
    }
  }

  // utils funcs
  function convertTempToCelsius(temp) {
    return Math.round(temp - 273.15);
  }

  // features func

  function displayWeatherInfo(data) {
    const { name, main, weather } = data;

    weatherInfo.classList.remove("hidden");
    errorMessage.classList.add("hidden");
    console.log(name, main, weather);
    cityNameDisplay.textContent = name;
    temperatureDisplay.textContent = `Temperature: ${convertTempToCelsius(main.temp)}°C`;
    descriptionDisplay.textContent = `Weather: ${weather[0].description}`;
  }

  function displayError() {
    weatherInfo.classList.add("hidden");
    errorMessage.classList.remove("hidden");
  }

  // fetch btn
  fetchWeatherBtn.addEventListener("click", async function () {
    const cityName = cityInput.value.trim();
    if (!cityName) {
      alert("Please enter the city name");
      return;
    }
    const { message, weatherInfo } = await fetchWeatherInfo(cityName);
    displayWeatherInfo(weatherInfo);
    try {
    } catch (error) {
      console.error(`Error while fetching weather: ${error.message}`);
      displayError();
    }

    cityInput.value = "";
  });
});
