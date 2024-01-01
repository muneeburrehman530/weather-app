import React, { useEffect, useState } from "react";
import axios from "axios";
const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const ApiKey = "a4930c4eb27b860faabb309ab309e10f";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}`;

  //   const weatherData = async () => {
  //     const response = await getWeather();
  //   };
  const weatherData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}`
      );
      const weather = response.data;
      setWeather(weather);
    } catch (error) {
      throw error;
    }
  };
  useEffect(() => {
    weatherData();
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center ">
        <div className="col-md-6 wrapper pt-5  mt-5">
          <h1 className="text-center">Weather App</h1>
          <div className="searchbar pt-4">
            <input
              type="text"
              className="mb-4"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <button className="btn btn-primary" onClick={weatherData}>
              Search City
            </button>
            {weather && (
              <div className="weather" key={weather.name}>
                <h1>City: {weather.name}</h1>
                <h2> Humidity: {weather.main.humidity} %</h2>
                <h3> Pressure: {weather.main.pressure} hPa</h3>
                <h3>Temperature: {weather.main.temp} °C</h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
