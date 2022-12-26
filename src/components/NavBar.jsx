import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { GiPinballFlipper } from "react-icons/gi";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar fs-400 flex ff-dm-sans">
      <Link to="/">
        <div className="flex">
          <GiPinballFlipper />
          <p>Pinball Database</p>
        </div>
      </Link>
      <div className="flex">
        <Link to="/login">
          <p>Log In</p>
        </Link>
        <Link to="/signup">
          <p>Sign Up</p>
        </Link>
        <div className="light-dark-mode">
          <input type="checkbox" className="checkbox" id="checkbox" />
          <label htmlFor="checkbox" className="label">
            <FaMoon />
            <FaSun />
          </label>
          <div className="ball"></div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
