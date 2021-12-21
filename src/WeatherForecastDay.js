import React from "react";
import WeatherIcons from "./WeatherIcons";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return days[day];
  }

  return (
    <div className="col weekday">
      <WeatherIcons
        code="01d"
        className="day-weather"
        id="monday-weather-icon"
      />
      <p className="day-name">{day()}</p>
      <p className="high-temp">{maxTemperature()}</p>
      <p className="low-temp"> {minTemperature()}</p>
    </div>
  );
}
