import React, { useState } from "react";

export default function CurrentWeather(props) {
  const [unit, setUnit] = useState("metric");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("imperial");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("metric");
  }
  function imperial() {
    return props.celsius * 1.8 + 32;
  }

  if (unit === "metric") {
    return (
      <div className="CurrentWeather">
        <span className="current-temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          <sup>
            °C|
            <a href="/" onClick={showFahrenheit}>
              °F
            </a>
          </sup>
        </span>
      </div>
    );
  } else {
    return (
      <div className="CurrentWeather">
        <span className="current-temperature">{Math.round(imperial())}</span>
        <span className="unit">
          <sup>
            <a href="/" onClick={showCelsius}>
              {" "}
              °C{" "}
            </a>
            | °F
          </sup>
        </span>
      </div>
    );
  }
}
