import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import WeatherInfo from "./WeatherInfo";
import WeatherIcons from "./WeatherIcons";
import WeatherTemperature from "./WeatherTemperature";
import "./styles.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
    });
  }

  function search() {
    const apiKey = "57821c3b75b60c68ecd1a8d0dd1aa8d3";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div>
        <div className="container">
          <div className="row display-today">
            <div className="col-7 conditions-today">
              <div className="row">
                <div className="col location-current">
                  <h1 className="current-city" id="current-city-id">
                    {weatherData.city}
                  </h1>
                  <div className="day-time">
                    <p className="current-day"></p>
                    <p className="current-time">
                      <FormattedDate date={weatherData.date} />
                    </p>
                  </div>
                  <p className="current-weather-condition"></p>
                  <WeatherIcons code={weatherData.icon} />
                  <img
                    src={weatherData.iconUrl}
                    alt={weatherData.description}
                  />
                </div>
                <div className="col temp-current">
                  <WeatherTemperature celsius={props.data.temperature} />
                </div>
              </div>
              <div className="row">
                <img
                  src="images/wind.png"
                  alt="wind icon"
                  className="col-2 windy-icon"
                />
                <p className="col-2 wind">
                  Wind
                  <br />
                  <span id="wind_speed">{weatherData.wind}</span> km/h
                </p>
                <img
                  src="images/drop.png"
                  alt="rain icon"
                  className="col-2 humidity-icon"
                />
                <p className="col-6 humidity">
                  Humidity
                  <br />
                  <span id="humidity_percent">{weatherData.humidity}</span>%
                </p>
              </div>
              <img
                src="images/sun.png"
                alt="current weather condition"
                className="current-weather-icon"
                id="current-weather-icon-id"
              />
            </div>

            <div className="col-5 search-bar text-center">
              <form onSubmit={handleSubmit}>
                <input
                  type="search"
                  name="search"
                  placeholder="Enter city"
                  id="weather-search-bar"
                  onChange={handleCityChange}
                />
                <button
                  type="button"
                  value="search_button"
                  className="search-button"
                  id="submit-search"
                >
                  <i className="fas fa-search"></i>
                </button>

                <button
                  type="button"
                  value="current_location"
                  className="current-location"
                  id="submit-current-location"
                >
                  Current location
                </button>
              </form>
            </div>
          </div>

          <WeatherInfo data={weatherData} />

          <a
            href="https://github.com/nemalo/weather-react"
            id="git-link"
            target="_blank"
            rel="noreferrer"
          >
            Coded by Matea Mirosevic
          </a>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading";
  }
}
