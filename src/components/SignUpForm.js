import React, { useState, useEffect } from "react";
import "./SignUpForm.css";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>SIGN-IN</h1>

      <label>Email</label>
      <input
        placeholder="Enter Email"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Password</label>
      <input
        placeholder="Enter Password"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button type="submit">Submit</button>
      <button type="submit" className="Already">
        New User?
      </button>
    </form>
  );
};

export default SignUpForm;
