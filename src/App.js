import React from "react";
import WeatherApp from "./WeatherApp";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="weather-app">
        <WeatherApp defaultCity="Perth" />
        <footer>
          <a
            href="https://github.com/grishmav87/weather-app-react.git"
            target="blank"
          >
            Open-source code
          </a>{" "}
          by Grishma V.
        </footer>
      </div>
    </div>
  );
}
