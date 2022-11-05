import "../styles/Navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <span className="nav-item nav-item--logo">Ce pomogne neko</span>
      <span className="nav-item nav-item--feed">Feed</span>
      <span className="nav-item nav-item--events">Public events</span>
      <span className="nav-item nav-item--profile">Profile</span>
    </div>
  );
}

export default Navbar;
