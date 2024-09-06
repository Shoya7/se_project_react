import "./Header.css";
import logo from "../../assets/wtwrLogo.svg";
import avatar from "../../assets/UserLogo.png";

function Header({ handleAddClick }) {
  return (
    <header className="header">
      <img className="header__logo" src={logo} />
      <p className="header__date-and-location">Date, Location</p>
      <button
        onClick={handleAddClick}
        type="button"
        className="header__add-clothes-btn"
      >
        + Add Clothes
      </button>
      <div className="header__user-container">
        <p className="header__username">Steven Haliburton </p>
        <img src={avatar} alt="Username" className="header__avatar" />
      </div>
    </header>
  );
}

export default Header;
