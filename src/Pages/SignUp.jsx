import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
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
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <input
          type="tel"
          name="phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="phone number"
        />
        <input
          type="text"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <input
          className="submit primary"
          type="submit"
          name="Sign Up"
          value="submit"
        />
      </form>
      <p>
        Have an Account?
        <Link to="/login"> Sign In!</Link>
      </p>
    </div>
  );
};

export default SignUp;
