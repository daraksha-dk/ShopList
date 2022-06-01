import React from "react";

import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";

import Home from "../src/components/Home/Home";
import "./App.scss";

const App = () => {
  return (
    <>
      <AppBar className="app" position="static" color="inherit">
        <Typography className="app_container" variant="h2" align="center">
          Shop List
        </Typography>
      </AppBar>

      <Home />
    </>
  );
};

export default App;
