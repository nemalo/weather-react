import axios from "axios";
import React from "react";
import WeatherIcons from "./WeatherIcons";

export default function WeatherForecast() {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "57821c3b75b60c68ecd1a8d0dd1aa8d3";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherInfo">
      <div className="row weekly-forecast" id="weekly-weather-forecast">
        <div className="col weekday">
          <WeatherIcons
            code="01d"
            className="day-weather"
            id="monday-weather-icon"
          />
          <p className="day-name">Monday</p>
          <p className="high-temp">30°C</p>
          <p className="low-temp">18°C</p>
        </div>
        <div className="col weekday">
          <img
            src="/images/cloudy(1).png"
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
            src="/images/rain.png"
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
            src="/images/rain.png"
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
            src="/images/rain(2).png"
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
            src=".//images/rain(1).png"
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
            src="/images/cloudy.png"
            className="day-weather"
            id="sunday-weather-icon"
            alt="weather icon"
          />
          <p className="day-name">Sunday</p>
          <p className="high-temp">21°C</p>
          <p className="low-temp">12°C</p>
        </div>
      </div>
    </div>
  );
}
