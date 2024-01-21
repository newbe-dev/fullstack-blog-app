"use client";

import React, { useState } from "react";

const SignUpForm = () => {
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    //e.preventDefault();
    console.log("Signing up ...");

    const { email, password } = formData;
    try {
      await fetch("api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })
        .then((response) => response.json())
        .then((response) => setMessage(response.message));
    } catch (error) {
      console.error(error);
    }

    setFormData({ email: "", password: "" });
  };

  return (
    <div>
      <input
        type="text"
        name="email"
        value={formData.email}
        onChange={(e) => handleInputChange(e)}
      ></input>
      <input
        type="text"
        name="password"
        value={formData.password}
        onChange={(e) => handleInputChange(e)}
      ></input>

      <button onClick={(e) => handleSubmit(e)}>Sign Up</button>
      <div>{message}</div>
    </div>
  );
};

export default SignUpForm;
