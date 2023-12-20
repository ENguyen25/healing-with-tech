import React, { useState, useContext } from "react";
import { Button, Container, TextField, Typography, Paper } from "@mui/material";
import AuthContext from "../../context/AuthProvider";
import axios from '../../api/axios';

const Admin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setAuth } = useContext(AuthContext)

  const isSignedIn = true

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container maxWidth='lg'>
        {isSignedIn ? (
            <Typography>You are already signed in. Click here to start a new blog post.</Typography>
        ) : (
            <Paper>
                <form onSubmit={handleSubmit}>
                <Typography variant="h6"></Typography>
                <TextField
                    name="title"
                    variant="outlined"
                    label="Username"
                    value={username}
                    fullWidth
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    name="content"
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
        )}
    </Container>
  );
};

export default Admin;
