import React, { useState } from "react";
import { Button, TextField, Typography, Paper } from "@mui/material";

const Login = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
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
