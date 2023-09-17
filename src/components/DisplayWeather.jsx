import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { classAction } from "../store/redux";
import "./DisplayWeather.css";
const DisplayWeather = (props) => {
  const dispatch = useDispatch();
  // const [appClassName, setAppClassName] = useState("app");
  const appClassName = useSelector((state) => state.weather.appClassName);

  const isLoading = props.loading;

  const weather = props.weather;
  let error = props.error;
  const datBuilder = (value) => {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const day = days[value.getDay()];
    const year = value.getFullYear();
    const date = value.getDate();
    const month = months[value.getMonth()];

    return `${day} ${date} / ${month} / ${year}`;
  };
  useEffect(() => {
    if (
      typeof weather.main !== "undefined" &&
      (weather.weather[0].main === "Rain" ||
        weather.weather[0].main === "thunderstorm" ||
        weather.weather[0].main === "Drizzle")
    ) {
      dispatch(classAction.rain());
      // setAppClassName("app rain");
    } else if (
      typeof weather.main !== "undefined" &&
      weather.weather[0].main === "Haze"
    ) {
      dispatch(classAction.haze());
      // setAppClassName("app haze");
    } else if (
      typeof weather.main !== "undefined" &&
      weather.weather[0].main === "Clouds"
    ) {
      dispatch(classAction.cloud());
      // setAppClassName("app cloud");
    } else if (
      typeof weather.main !== "undefined" &&
      weather.weather[0].main === "Clear"
    ) {
      dispatch(classAction.clear());
      // setAppClassName("app clear");
    } else if (
      typeof weather.main !== "undefined" &&
      weather.weather[0].main === "Mist"
    ) {
      dispatch(classAction.mist());
      // setAppClassName("app mist");
    }

    error = null;
  }, [weather]);

  return (
    <>
      <div>
        <main>
          {error === null ? (
            typeof weather.main !== "undefined" ? (
              <div>
                <div className="location-box">
                  <div className="location">
                    {weather.name},{weather.sys.country}
                  </div>
                  <div className="date">{datBuilder(new Date())}</div>
                </div>
                <div className="Weather-box">
                  <div className="temp">{weather.main.temp}°C</div>
                  <div className="weather">{weather.weather[0].main}</div>
                </div>
                <div className="weather_values">
                  <div className="humidity">Humidity:</div>
                  <div className="humidity_value">{weather.main.humidity}%</div>
                  <div className="pressure">Pressure:</div>
                  <div className="pressure_value">
                    {weather.main.pressure}mbar
                  </div>
                  <div className="feels">Real feel:</div>
                  <div className="feels_value">{weather.main.feels_like}°</div>
                </div>
              </div>
            ) : (
              ""
            )
          ) : (
            <p className="error">{error}</p>
          )}
        </main>
      </div>

      {isLoading && <p>Loading...</p>}
    </>
  );
};

export default DisplayWeather;
