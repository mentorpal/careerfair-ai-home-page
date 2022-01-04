import { Typography, Button } from "@mui/material";
import * as React from "react";
import "styles/layout.css";
import logo2 from "static/raise2.png";
import logo3 from "static/logo5.png";
import logo1 from "static/csuf2.png";
import logo5 from "static/DOD.png";
import logo6 from "static/Mcnair2.png";
import Instagram from "./instagram";

function IndexPage(): JSX.Element {
  return (
    <div className="app-container">
      <Typography className="title" variant="h2" component="h2">
        Welcome to CareerFair.ai<br />
        Coming Soon!{" "}
        {/* <span className="wave">👋</span> */}
      </Typography>
      <Typography className="subtitle" variant="h4" component="h4">
        Please Stay Tuned!
      </Typography>
      <div className="main-container">
      <div className="btns-container">
      <Button
          className="home-btns"
          variant="contained"
          href=" https://www.eurekalert.org/news-releases/711820"
          target="_blank" >
          About our Project!
        </Button>
        <Button
          className="home-btns"
          variant="contained"
          href=""
          target="_blank"  >
          Study Page (Spring 2022)
        </Button>
      </div>
      <div className="icontainer">
      <a href="https://ict.usc.edu/ " target="_blank">
          <img src={logo3} className="logo-img3"></img>
        </a>
        <a href=" http://www.fullerton.edu/" target="_blank">
          <img src={logo1} className="logo-img1"></img>
        </a>
        {/* <a href="https://www.fullerton.edu/projectraise/" target="_blank">
          <img src={logo2} className="logo-img2"></img>
        </a> */}
        <a href= "https://dodstem.us" target="_blank">
          <img src={logo5} className="logo-img5"></img>
        </a>
        {/* <a href="http://www.fullerton.edu/mcNair/" target="_blank">
          <img src={logo6} className="logo-img6"></img>
        </a> */}
      </div>
      </div>
      <Typography className="subtitle" variant="h4" component="h4">
        Connect with us!
      </Typography>
      <a href = "https://twitter.com/CareerFair_AI" target="_blank">
      <h1> @careefair.ai </h1></a>
<a href = " https://www.instagram.com/careerfair.ai/" target="_blank">
      <h1> @careefair.ai </h1></a>
      <div className="social">
        <Instagram />
      </div>
    </div>
  );
}

export default IndexPage;
