import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <span className="temp-current">
        <p className="temp-now">{Math.round(props.celsius)}</p>
        <p className="temp-celsius unit">°C</p>
        <p className="temp-divider">|</p>
        <a href="/" onClick={showFahrenheit} className="temp-fahrenheit unit">
          °F
        </a>
      </span>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <span className="temp-current">
        <p className="temp-now">{Math.round(fahrenheit)}</p>
        <a href="/" onClick={showCelsius} className="temp-celsius unit">
          °C
        </a>
        <p className="temp-divider">|</p>
        <p className="temp-fahrenheit unit">°F</p>
      </span>
    );
  }
}
