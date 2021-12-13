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
      <span>
        <p className="temp-now">{Math.round(props.celsius)}</p>
        <p className="temp-celsius unit">°C</p>
        <p className="temp-divider">|</p>
        <a href="/" onCLick={showFahrenheit} className="temp-fahrenheit unit">
          °F
        </a>
      </span>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <span>
        <p className="temp-now">{Math.round(props.fahrenheit)}</p>
        <a href="/" onCLick={showCelsius} className="temp-celsius unit">
          °C
        </a>
        <p className="temp-divider">|</p>
        <p className="temp-fahrenheit unit">°F</p>
      </span>
    );
  }
}
