import { Typography, Button } from "@mui/material";
import * as React from "react";
import "styles/layout.css"

// markup
function IndexPage(): JSX.Element {
  return <div className="app-container">
    <Typography className="title" variant="h2" component="h2">
      Meeting scheduling made easy
    </Typography>
    <div className="subtitle-wrapper">
      <Typography className="subtitle" variant="h6" component="h6">
        Never miss a meeting. Never be late for one too. Keep track of your meetings and receive smart reminders in appropriate times. Read your smart “Daily Agenda” every morning.
      </Typography>
    </div>
    <div className="btns-container">
      <Button className="home-btns" variant="contained">Gets started</Button>
      <Button className="home-btns" variant="contained">Learn More</Button>
    </div>
  </div>;
}

export default IndexPage;
