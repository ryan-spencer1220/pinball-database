import React from "react";
import supabase from "../config/supabaseClient";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context";

const NavBar = () => {
  const { user, setUser } = useContext(AppContext);

  const logUserOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log(error);
    }
    if (!error) {
      setUser(null);
    }
  };

  return (
    <div className="navbar font-poppins bg-neutral text-base-300">
      <div className="flex-1">
        <Link to="/">
          <p className="btn btn-ghost normal-case text-xl">Pinball Database</p>
        </Link>
      </div>
      <div className="flex-none">
        {!user && (
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
        )}
        {user && (
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/user">
                <p>{user}</p>
              </Link>
            </li>
            <li>
              <button className="btn" onClick={logUserOut}>
                Log Out
              </button>
            </li>
          </ul>
        )}
        <input type="checkbox" className="toggle toggle-lg" />
      </div>
    </div>
  );
};

export default NavBar;
