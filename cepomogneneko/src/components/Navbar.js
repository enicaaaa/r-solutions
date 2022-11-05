import { BrowserRouter, Link } from "react-router-dom";
import "../styles/Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="nav-item nav-item--logo">
        Ce pomogne neko
      </Link>
      <Link to="/feed" className="nav-item nav-item--feed">
        Feed
      </Link>
      <Link to="/events" className="nav-item nav-item--events">
        Public events
      </Link>
      <Link to="/profile" className="nav-item nav-item--profile">
        Profile
      </Link>
    </div>
  );
};

export default Navbar;
