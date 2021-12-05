import React from "react";

export default function Weather() {
  return (
    <div>
      <div className="container">
        <div className="row display-today">
          <div className="col-7 conditions-today">
            <div className="row">
              <div className="col location-current">
                <h1 className="current-city" id="current-city-id">
                  Paris
                </h1>
                <div className="day-time">
                  <p className="current-day">Saturday</p>
                  <p className="current-time">19:53</p>
                </div>
                <p className="current-weather-condition">sunny</p>
              </div>
              <div className="col temp-current">
                <p className="temp-now"></p>
                <p className="temp-celsius">°C</p>
                <p className="temp-divider">|</p>
                <p className="temp-fahrenheit">°F</p>
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
                <span id="wind_speed"></span> km/h
              </p>
              <img
                src="images/drop.png"
                alt="rain icon"
                className="col-2 humidity-icon"
              />
              <p className="col-6 humidity">
                Humidity
                <br />
                <span id="humidity_percent"></span>%
              </p>
            </div>
            <img
              src="images/sun.png"
              alt="image showing current weather condition"
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
              src="images/cloudy.png"
              className="day-weather"
              id="monday-weather-icon"
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
            />
            <p className="day-name">Friday</p>
            <p className="high-temp">22°C</p>
            <p className="low-temp">16°C</p>
          </div>
          <div className="col weekday">
            <img
              src="images/rain(1).png"
              className="day-weather"
              id="saturday-weather-icon"
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
          rel="noopener"
        >
          Coded by Matea Mirosevic
        </a>
      </div>
    </div>
  );
}
