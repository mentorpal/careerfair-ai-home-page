import { Typography, Button } from "@mui/material";
import * as React from "react";
import "styles/Layout.css"
import { Link } from '@mui/material';
import Container from '@mui/material/Container';

// markup
function IndexPage(): JSX.Element {
  return <div className="app-container">
    <Typography className="title" variant="h2" component="h2">
      Welcome to CareerFair.Ai ! 
    </Typography>
    <div className="subtitle-wrapper">
      <Typography className="subtitle" variant="h6" component="h6">
        Please Stay Tuned ! CareerFair.Ai Coming Soon !
      </Typography>
    </div>
    <div className="btns-container">
      <Button className="home-btns" variant="contained">Connect with us !</Button>

      <Button className="home-btns" variant="contained">

        
        <Link href = "https://careerfair.mentorpal.org/home/?&activityId=https%3A%2F%2Fcareerfair.mentorpal.org%2Fhome%2F&actor=%7B%22objectType%22%3A%22Agent%22%2C%22account%22%3A%7B%22name%22%3A%229ecdb1d8-43aa-4afa-81c1-6a4be82b7c83%22%2C%22homePage%22%3A%22https%3A%2F%2Fcareerfair.mentorpal.org%2Fguests-homepage%2F%3Freferrer%3Dnull%22%7D%2C%22name%22%3A%22guess%22%7D&endpoint=https%3A%2F%2Fqa.mentorpal.org%2Flrs%2Fxapi&fetch=https%3A%2F%2Fqa.mentorpal.org%2Flrs%2Fauth%2Fguesttoken%3F%26username%3Dguess%26userid%3D9ecdb1d8-43aa-4afa-81c1-6a4be82b7c83&registration=9ecdb1d8-43aa-4afa-81c1-6a4be82b7c83 " target="_blank" >
        MentorPal.org
        </Link>
        </Button>
        <Container />
    </div>
  </div>;
}

export default IndexPage;
