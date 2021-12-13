import { Typography } from "@mui/material";
import React from "react";
import "styles/layout.css";

function Header(): JSX.Element {
  return (
    <div className="header-container">
      <Typography className="title" variant="h2" component="h2">
        Meeting scheduling made easy
      </Typography>
    </div>
  );
}

export default Header;
