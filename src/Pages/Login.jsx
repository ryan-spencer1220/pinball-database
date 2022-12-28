import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logDetails = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    console.log(email, password);
  };

  return (
    <div className="container mx-auto px-20 ff-poppins grid grid-cols-1 max-w-xl">
      <div className="card shadow-xl m4-10 p-10">
        <h2 className="text-4xl p-2">Log in</h2>
        <form
          onSubmit={(e) => logDetails(e)}
          className="grid grid-cols-1 [&>*]:my-2"
        >
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            className="input w-full max-w-xs"
          />
          <input
            type="text"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            className="input w-full max-w-xs"
          />
          <button
            className="btn btn-primary"
            type="submit"
            name="Sign Up"
            value="submit"
          >
            Log In
          </button>
        </form>
        <p>
          Need an Account?
          <Link to="/signup"> Sign Up!</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
