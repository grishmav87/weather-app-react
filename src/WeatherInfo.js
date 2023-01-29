import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import CurrentWeather from "./CurrentWeather";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo px-2">
      <div className="row mt-3">
        {" "}
        <div className="col-md-8 mb-3">
          <div className="d-flex justify-content-center">
            <div>
              <h1>{props.data.city}</h1>
              <ul>
                <li className="current-date">
                  <FormattedDate date={props.data.date} />
                </li>
                <li>
                  Humidity: {props.data.humidity}%, Wind: {props.data.wind} km/h
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="d-flex justify-content-center">
            <div>
              <WeatherIcon code={props.data.icon} size={52} />
            </div>

            <div className="current-temp">
              <CurrentWeather celsius={props.data.temperature} />
            </div>
          </div>
          <div className="text-capitalize weather-description">
            {props.data.description}
          </div>
        </div>
      </div>
    </div>
  );
}
