import React, { useState } from "react";
import "./CurrentWeather.css";

export default function CurrentWeather(props) {
  return (
    <div className="CurrentWeather">
      <span className="current-temperature">{Math.round(props.celsius)}</span>
      <span className="unit">
        <sup>°C</sup>
      </span>
    </div>
  );
}
