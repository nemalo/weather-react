import React from "react";

export default function WeatherForecastDay(props) {
  return (
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
  );
}
