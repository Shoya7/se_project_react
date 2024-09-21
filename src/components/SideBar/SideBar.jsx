import "./SideBar.css";
import avatar from "../../assets/avatar.png";
function SideBar() {
  return (
    <div className="sidebar">
      <img className="sidebar__avatar" src={avatar} alt="Default avatar" />
      <p className="sidebar__username">Steven Haliburton</p>
    </div>
  );
}
export default SideBar;
