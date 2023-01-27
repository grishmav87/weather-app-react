import React from "react";
import WeatherApp from "./WeatherApp";
import "./App.css";

export default function App() {
  return (
    <div>
      {" "}
      <div className="App">
        <div className="weather-app">
          <WeatherApp defaultCity="Perth" />
        </div>
      </div>
      <footer>
        <a
          href="https://github.com/grishmav87/weather-app-react.git"
          target="_blank"
        >
          Open-source code
        </a>
        by Grishma V.{" "}
        <a href="https://gregarious-pixie-53cac9.netlify.app/" target="_blank">
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}
