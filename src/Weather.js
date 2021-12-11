import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: "",
      time: new Date(response.data.dt * 1000),
      date: "Wednesday",
    });
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
                  <p className="current-weather-condition">sunny</p>
                </div>
                <div className="col temp-current">
                  <p className="temp-now">
                    {Math.round(weatherData.temperature)}
                  </p>
                  <p className="temp-celsius">°C</p>
                  <p className="temp-divider">|</p>
                  <p className="temp-fahrenheit">°F</p>
                </div>
              </div>
              <div className="row">
                <img
                  src={weatherData.iconUrl}
                  alt={weatherData.description}
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
              <form>
                <input
                  type="search"
                  name="search"
                  placeholder="Enter city"
                  id="weather-search-bar"
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

          <div className="row weekly-forecast" id="weekly-weather-forecast">
            <div className="col weekday">
              <img
                src="./images/cloudy.png"
                className="day-weather"
                id="monday-weather-icon"
                alt="weather icon"
              />
              <p className="day-name">Monday</p>
              <p className="high-temp">30°C</p>
              <p className="low-temp">18°C</p>
            </div>
            <div className="col weekday">
              <img
                src="images/cloudy(1).png"
                className="day-weather"
                id="tuesday-weather-icon"
                alt="weather icon"
              />
              <p className="day-name">Tuesday</p>
              <p className="high-temp">26°C</p>
              <p className="low-temp">18°C</p>
            </div>
            <div className="col weekday">
              <img
                src="images/rain.png"
                className="day-weather"
                id="wednesday-weather-icon"
                alt="weather icon"
              />
              <p className="day-name">Wednesday</p>
              <p className="high-temp">24°C</p>
              <p className="low-temp">17°C</p>
            </div>
            <div className="col weekday">
              <img
                src="images/rain.png"
                className="day-weather"
                id="thursday-weather-icon"
                alt="weather icon"
              />
              <p className="day-name">Thursday</p>
              <p className="high-temp">24°C</p>
              <p className="low-temp">17°C</p>
            </div>
            <div className="col weekday">
              <img
                src="images/rain(2).png"
                className="day-weather"
                id="friday-weather-icon"
                alt="weather icon"
              />
              <p className="day-name">Friday</p>
              <p className="high-temp">22°C</p>
              <p className="low-temp">16°C</p>
            </div>
            <div className="col weekday">
              <img
                src="./images/rain(1).png"
                className="day-weather"
                id="saturday-weather-icon"
                alt="weather icon"
              />
              <p className="day-name">Saturday</p>
              <p className="high-temp">21°C</p>
              <p className="low-temp">13°C</p>
            </div>
            <div className="col weekday">
              <img
                src="images/cloudy.png"
                className="day-weather"
                id="sunday-weather-icon"
                alt="weather icon"
              />
              <p className="day-name">Sunday</p>
              <p className="high-temp">21°C</p>
              <p className="low-temp">12°C</p>
            </div>
          </div>

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
    const apiKey = "57821c3b75b60c68ecd1a8d0dd1aa8d3";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading";
  }
}
