import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useAuth from "../../context/AuthProvider";
import axios from 'axios';
import { Button, TextField, Typography, Paper } from "@mui/material";

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/auth/login', {
        username,
        password
      });
      const token = response.data.token;
      setToken(token)
      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = localStorage.getItem('token')
    } catch (error) {
      console.error('Error logging in:', error);
    }
  }

  return (
    <div>
      <Paper>
        <form onSubmit={handleSubmit}>
          <Typography variant="h6"></Typography>
          <TextField
            variant="outlined"
            label="Username"
            value={username}
            fullWidth
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            type="password"
            variant="outlined"
            label="Password"
            value={password}
            fullWidth
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            fullWidth
          >
            Submit
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default Login;
