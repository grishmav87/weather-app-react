import React from "react";
import WeatherApp from "./WeatherApp";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="weather-app">
        <WeatherApp defaultCity="Perth" />
      </div>

      <footer>
        <a
          href="https://github.com/grishmav87/weather-app-react.git"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by Grishma V.{" "}
        <a
          href="https://gregarious-pixie-53cac9.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}
