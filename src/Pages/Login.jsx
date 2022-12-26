import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const logDetails = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    console.log(name, email, phoneNumber, password);
  };

  return (
    <div className="container grid card">
      <h2>Create new account</h2>
      <p>Please fill in the form to continue</p>
      <form className="grid" onSubmit={(e) => logDetails(e)}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <input
          type="text"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <input className="submit" type="submit" name="Sign Up" value="submit" />
      </form>
      <p>
        Have an Account?
        <Link to="/login"> Sign In!</Link>
      </p>
    </div>
  );
};

export default Login;
