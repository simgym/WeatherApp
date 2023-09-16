// import { useSelector, useDispatch } from "react-redux";
// import { forecastAction } from "../store/redux";
import { useState, useEffect } from "react";
import DisplayWeather from "./DisplayWeather";

const FetchingData = (props) => {
  const [weather, setWeather] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  //   const dispatch = useDispatch();
  const location = props.location;
  const api = {
    key: "1e3818a62b9810ded0c4f4aed9cf337a",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  useEffect(() => {
    async function search(event) {
      setIsLoading(true);
      try {
        const response = await fetch(
          `${api.base}weather?q=${location}&units=metric&APPID=${api.key}`
        );
        if (!response.ok) {
          throw new Error("Invalid Input");
        }
        const data = await response.json();
        setError(null);
        setWeather(data);

        // const weatherHandler = () => {
        //   dispatch(forecastAction.weather(data));
        // };
        console.log(data);
      } catch (err) {
        setError(err.message);

        // const errorHandler = () => {
        //   dispatch(forecastAction.error(err.message));
        // };
      }
      setIsLoading(false);
    }

    search();
  }, [location]);

  //   return { weatherHandler, errorHandler };
  return (
    <>
      <DisplayWeather weather={weather} error={error} loading={isLoading} />
    </>
  );
};

export default FetchingData;
