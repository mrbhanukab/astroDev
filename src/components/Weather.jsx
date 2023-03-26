import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Weather.css";

function Weather() {
  const [City, setCity] = useState("Piliyandala"); // default City
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://api.weatherapi.com/v1/current.json?key=66c1121844014093bdd150031232603&q=${City}`
      );
      setWeatherData(result.data);
    };
    fetchData();
  }, [City]);

  return (
    <div className="weather">
      <img src={weatherData.current?.condition?.icon} />
      <div className="info">
        <h6>{City}</h6>
        <h3> {weatherData.current?.feelslike_c} °C</h3>
      </div>
    </div>
  );
}

export default Weather;
