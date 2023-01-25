import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");

  function showWeather(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;
    axios.get(url).then(getWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function getWeather(response) {
    setWeather(
      <ul>
        <li>Temperature:{Math.round(response.data.main.temp)}°C</li>
        <li>Description:{response.data.weather[0].description}</li>
        <li>Humidity:{response.data.main.humidity}%</li>
        <li>Wind:{response.data.wind.speed} km/h</li>
        <li>
          <img
            src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
            alt={response.data.weather[0].description}
          />
        </li>
      </ul>
    );
  }

  return (
    <div className="App">
      <h1>Weather App</h1>
      <form onSubmit={showWeather}>
        <input
          type="Search"
          placeholder="Enter a city..."
          onChange={updateCity}
        ></input>
        <input type="submit" value="Search"></input>
      </form>
      <ul>{weather}</ul>
    </div>
  );
}

export default App;
