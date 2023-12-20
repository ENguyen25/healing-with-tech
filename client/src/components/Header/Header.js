import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";

import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material";

let theme = createTheme();

theme = createTheme(theme, {
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#000",
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          [theme.breakpoints.up("xs")]: {
            paddingLeft: 0,
            paddingRight: 0,
            minHeight: "5rem",
          }
        },
      },
    },
  },
});

const Header = () => {
  const adminUser = null;

  return (
    <ThemeProvider theme={theme}>
      <AppBar sx={{ backgroundColor: "#FFF", boxShadow: "none", borderBottom: "4px solid #000"}} position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
          <Typography sx={{ color: "#000", fontSize: "2rem" }}>Eudaimonia</Typography>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
