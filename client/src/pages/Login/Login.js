import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Cookies from 'js-cookie';
import { Button, TextField, Typography, Paper } from "@mui/material";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://theselfcarecoder.onrender.com:10000/auth/login', {
        username,
        password
      });
      
      if (response) {
        Cookies.set('token', response.data.refreshToken);
        localStorage.setItem('token', response.data.refreshToken);
        navigate('/');
      } else {
        console.log('Invalid token');
      }
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
