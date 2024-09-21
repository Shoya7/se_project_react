import "./Header.css";
import logo from "../../assets/wtwrLogo.svg";
import avatar from "../../assets/UserLogo.png";
import { Link } from "react-router-dom";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="Header-Logo" />
      </Link>
      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>
      <ToggleSwitch />
      <button
        onClick={handleAddClick}
        type="button"
        className="header__add-clothes-btn"
      >
        + Add Clothes
      </button>

      <div className="header__user-container">
        <Link to="/profile" className="header__profile-link">
          <p className="header__username">Steven Haliburton </p>
          <img src={avatar} alt="Username" className="header__avatar" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
