import { Typography, Button } from "@mui/material";
import * as React from "react";
import "styles/layout.css";
import logo2 from "static/raise2.png";
import logo3 from "static/logo5.png";
import logo1 from "static/csuf2.png";
import logo5 from "static/cclogo2.png";
import logo6 from "static/Mcnair2.png";
import Instagram from "./instagram";

function IndexPage(): JSX.Element {
  return (
    <div className="app-container">
      <Typography className="title" variant="h2" component="h2">
        Welcome to CareerFair.ai,<br />
        we'll be live very soon !{" "}
        <span className="wave">👋</span>
      </Typography>
      <div className="subtitle-wrapper"></div>
      <div className="btns-container">
        <Button
          className="home-btns"
          variant="contained"
          href="https://careerfair.mentorpal.org/home/?&activityId=https%3A%2F%2Fcareerfair.mentorpal.org%2Fhome%2F&actor=%7B%22objectType%22%3A%22Agent%22%2C%22account%22%3A%7B%22name%22%3A%229ecdb1d8-43aa-4afa-81c1-6a4be82b7c83%22%2C%22homePage%22%3A%22https%3A%2F%2Fcareerfair.mentorpal.org%2Fguests-homepage%2F%3Freferrer%3Dnull%22%7D%2C%22name%22%3A%22guess%22%7D&endpoint=https%3A%2F%2Fqa.mentorpal.org%2Flrs%2Fxapi&fetch=https%3A%2F%2Fqa.mentorpal.org%2Flrs%2Fauth%2Fguesttoken%3F%26username%3Dguess%26userid%3D9ecdb1d8-43aa-4afa-81c1-6a4be82b7c83&registration=9ecdb1d8-43aa-4afa-81c1-6a4be82b7c83"
          target="_blank"  >
          Mentorpal.org
        </Button>
        <Button
          className="home-btns"
          variant="contained"
          href=" https://www.eurekalert.org/news-releases/711820"
          target="_blank" >
          About Us !
        </Button>
      </div>

      <Typography className="subtitle" variant="h4" component="h4">
        Our Amazing Partners !
      </Typography>
      <div className="icontainer">
        <a href=" http://www.fullerton.edu/" target="_blank">
          <img src={logo1} className="logo-img1"></img>
        </a>
        <a href="https://www.fullerton.edu/projectraise/" target="_blank">
          <img src={logo2} className="logo-img2"></img>
        </a>
        <a href="http://www.fullerton.edu/career/" target="_blank">
          <img src={logo5} className="logo-img5"></img>
        </a>
        <a href="http://www.fullerton.edu/mcNair/" target="_blank">
          <img src={logo6} className="logo-img6"></img>
        </a>
      <a href="https://ict.usc.edu/ " target="_blank">
          <img src={logo3} className="logo-img3"></img>
        </a>
        
      </div>
<a href = " https://www.instagram.com/careerfair.ai/" target="_blank">
      <h1> @careefair.ai </h1></a>
      <div className="social">
        <Instagram />
      </div>
    </div>
  );
}

export default IndexPage;
