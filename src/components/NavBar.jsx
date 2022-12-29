import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar font-poppins bg-neutral text-base-300">
      <div className="flex-1">
        <Link to="/">
          <p className="btn btn-ghost normal-case text-xl">Pinball Database</p>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/login">
              <p>Login</p>
            </Link>
          </li>
          <li>
            <Link to="/signup">
              <p>Sign Up</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
