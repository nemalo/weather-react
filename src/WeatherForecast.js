import axios from "axios";
import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherInfo">
        <div className="row weekly-forecast" id="weekly-weather-forecast">
          {forecast.map(function (dailyForecast, index) {
            if (index < 6) {
              return (
                <span key={index} className="col weekday">
                  <WeatherForecastDay data={dailyForecast} />
                </span>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "57821c3b75b60c68ecd1a8d0dd1aa8d3";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
