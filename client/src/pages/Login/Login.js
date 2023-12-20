import React, { useState } from "react";
import axios from 'axios';
import { Button, TextField, Typography, Paper } from "@mui/material";

const Login = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await axios.post('http://localhost:5000/auth/login', data)
      console.log('Successfully logged in user')
    } catch (error) {
      console.error('Error registering new user:', error); 
    }
  };

  return (
    <div>
      <Paper>
        <form onSubmit={handleSubmit}>
          <Typography variant="h6"></Typography>
          <TextField
            variant="outlined"
            label="Username"
            value={data.username}
            fullWidth
            onChange={(e) => setData({...data, username: e.target.value})}
          />
          <TextField
            type="password"
            variant="outlined"
            label="Password"
            value={data.password}
            fullWidth
            onChange={(e) => setData({...data, password: e.target.value})}
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
