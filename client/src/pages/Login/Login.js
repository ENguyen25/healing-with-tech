import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

import "../../App.css";
import "../../components/Form/Form";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://theselfcarecoder.onrender.com/auth/login",
        {
          username,
          password,
        }
      );

      if (response) {
        Cookies.set("token", response.data.refreshToken);
        localStorage.setItem("token", response.data.refreshToken);
        navigate("/");
      } else {
        console.log("Invalid token");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="container">
      <h1 className="page-header">Login</h1>
      <form className="new-post-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            value={username}
            placeholder="Enter username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn btn-darkgreen">Submit</button>
      </form>
    </div>
  );
};

export default Login;
