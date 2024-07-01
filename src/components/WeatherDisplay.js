import React from "react";
import "../styles/App.css";
const WeatherDisplay = ({ temperature, conditions }) => {
  return (
    <>
      {temperature > 20 ? (
        <p style={{ color: "red" }}>{temperature}</p>
      ) : (
        <p style={{ color: "blue" }}>{temperature}</p>
      )}
      <p>{conditions}</p>
    </>
  );
};

export default WeatherDisplay;
