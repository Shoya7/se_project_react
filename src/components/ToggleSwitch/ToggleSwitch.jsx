import React, { useState } from "react";
import "./ToggleSwitch.css";
const ToggleSwitch = () => {
  console.log("Toggle Switch");
  const [currentTeperatureUnit, handelToggleSwitchChange] = useState("");

  const handleChange = (e) => {
    console.log(e);
  };
  return (
    <label className="switch">
      <input type="checkbox" className="switch__box" onChange={handleChange} />
      <span> </span>
      <p>F</p>
      <p>C</p>
    </label>
  );
};

export default ToggleSwitch;
