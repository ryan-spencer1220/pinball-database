import React from "react";
import { GiPinballFlipper } from "react-icons/gi";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar fs-400 flex">
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
      </div>
    </nav>
  );
};

export default NavBar;
