import { useState } from "react";
import "./navbar.scss";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const location = useLocation();
  const isProfilePage = location.pathname === "/profile";

  const user = true;
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="Astrack Logo" className="logo-no-text" />
          <img
            src="/logo-text.png"
            alt="Astrack Logo with Text"
            className="logo-with-text"
          />
        </a>
        <a href="/">Home</a>
        <a href="/">Map</a>
        <a href="/">Facilities</a>
        <a href="/">About</a>
      </div>
      <div className={`right ${isProfilePage ? "profile-bg" : ""}`}>
        {user ? (
          <div className="user">
            <img
              src="https://images.pexels.com/photos/4016579/pexels-photo-4016579.jpeg"
              alt="_"
            />
            <span>John Doe</span>
            <Link to="/profile" className="profile">
              <div className="notif">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="/">Login</a>
            <a href="/" className="reg">
              Register
            </a>
          </>
        )}
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpenMenu((prev) => !prev)}
          />
        </div>
        <div className={openMenu ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/">Map</a>
          <a href="/">Facilities</a>
          <a href="/">About</a>
          <a href="/">Login</a>
          <a href="/">Register</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
