import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import supabase from "../config/supabaseClient";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerification, setPasswordVerification] = useState("");
  const [error, setError] = useState("");

  const logDetails = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    console.log(name, email, phoneNumber, password);
  };

  const addNewUser = async () => {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      phone: phoneNumber,
      options: {
        data: {
          name: name,
        },
      },
    });
    if (!error) {
      console.log("Data: ", data);
    }
    if (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container mx-auto px-20 ff-poppins grid grid-cols-1 max-w-xl pt-10 text-center">
      <div className="card shadow-xl m4-10 p-10">
        <h2 className="text-4xl py-2">Create new account</h2>
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
            onClick={addNewUser}
          >
            Sign Up
          </button>
        </form>
        <p>
          Have an Account?
          <Link to="/login" className="text-secondary">
            {" "}
            Sign In!
          </Link>
        </p>
      </div>
      {error && (
        <div className="alert alert-error shadow-lg">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{error}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;
