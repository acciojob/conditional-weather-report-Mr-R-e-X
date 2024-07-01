import React, { useEffect, useState } from "react";
import "../styles/App.css";
import WeatherDisplay from "./WeatherDisplay.js";

let weatherData = { temperature: 25, conditions: "Sunny" };
const App = () => {
  const [temp, setTemp] = useState("");
  const [cond, setCond] = useState("");
  useEffect(() => {
    setTemp(weatherData.temperature);
    setCond(weatherData.conditions);
  });
  return (
    <div>
      <WeatherDisplay temperature={temp} conditions={cond} />
    </div>
  );
};

export default App;
