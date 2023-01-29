import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function temperatureHigh() {
    console.log({ props });
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function temperatureLow() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div>
      <div className="weather-forecast-daily">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={32} />
      <div className="weather-forecast-temp">
        <span className="forecast-temp-high">{temperatureHigh()}</span>
        <span className="forecast-temp-low">{temperatureLow()}</span>
      </div>
    </div>
  );
}
