import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.name} is ${response.data.main.temp}C`
    );
  }
  let apiKey = "57821c3b75b60c68ecd1a8d0dd1aa8d3";
  let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.city}&appod=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return <h2>Hello from Weather</h2>;
}
