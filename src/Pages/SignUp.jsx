import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerification, setPasswordVerification] = useState("");

  const logDetails = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    console.log(name, email, phoneNumber, password);
  };

  return (
    <div className="container mx-auto px-20 ff-poppins grid grid-cols-1 max-w-xl">
      <div className="card shadow-xl m4-10 p-10">
        <h2 className="text-4xl p-2">Create new account</h2>
        <p>Please fill in the form to continue</p>
        <form
          className="grid grid-cols-1 [&>*]:my-2"
          onSubmit={(e) => logDetails(e)}
        >
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="name"
            className="input w-full max-w-xs"
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            className="input w-full max-w-xs"
          />
          <input
            type="tel"
            name="phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="phone number"
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
          <input
            type="text"
            name="password"
            value={password}
            onChange={(e) => setPasswordVerification(e.target.value)}
            placeholder="retype password"
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
          Have an Account?
          <Link to="/login"> Sign In!</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
