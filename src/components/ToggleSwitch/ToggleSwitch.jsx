import React, { useState } from "react";
import "./ToggleSwitch.css";
const ToggleSwitch = () => {
  const [currentTemperatureUnit, handelToggleSwitchChange] = useState("C");

  const handleChange = (e) => {
    if (currentTemperatureUnit === "C") handelToggleSwitchChange("F");
    if (currentTemperatureUnit === "F") handelToggleSwitchChange("C");
  };
  console.log(currentTemperatureUnit);
  return (
    <label className="switch">
      <input type="checkbox" className="switch__box" onChange={handleChange} />
      <span
        className={
          currentTemperatureUnit === "F"
            ? "switch__slider switch__slider-F"
            : "switch__slider switch__slider-C"
        }
      >
        {" "}
      </span>
      <p
        className={`switch__temp-F ${
          currentTemperatureUnit === "F" && "switch__active"
        }`}
      >
        F
      </p>
      <p
        className={`switch__temp-C ${
          currentTemperatureUnit === "C" && "switch__active"
        }`}
      >
        C
      </p>
    </label>
  );
};

export default ToggleSwitch;
