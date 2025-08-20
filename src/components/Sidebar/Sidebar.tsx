import { Link } from "react-router-dom";
import { BsChatSquareTextFill } from "react-icons/bs";
import { IoMdHome, IoMdSettings } from "react-icons/io";
import "../Sidebar/Sidebar.css";
import logo from "../../assets/images/logo.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <div className="sidebar__logo">
          <img src={logo} alt="logo" />
          <div className="sidebar__logo-text">
            <p>imple</p>
            <p>yslog</p>
            <p>erver</p>
          </div>
        </div>
        <nav className="nav-sidebar">
          <Link to="/dashboard" className="sidebar-link">
            <IoMdHome aria-label="Dashboard Icon" /> Dashboard
          </Link>
          <Link to="/message" className="sidebar-link">
            <BsChatSquareTextFill aria-label="Message Icon" /> Message
          </Link>
          <Link to="/settings" className="sidebar-link">
            <IoMdSettings aria-label="Settings Icon" /> Settings
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
