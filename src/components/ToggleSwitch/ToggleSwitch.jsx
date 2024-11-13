import React from "react";
import "./ToggleSwitch.css";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

function ToggleSwitch() {
  const { currentTemperatureUnit, handleToggleSwitchState } = React.useContext(
    CurrentTemperatureUnitContext
  );

  console.log(currentTemperatureUnit);

  return (
    <label className="switch">
      <input
        type="checkbox"
        className="switch__box"
        onChange={handleToggleSwitchState}
        checked={currentTemperatureUnit === "C"}
      />
      <span className="switch__slider"></span>
      <p className="switch__temp-F">F</p>
      <p className="switch__temp-C">C</p>
    </label>
  );
}

export default ToggleSwitch;
