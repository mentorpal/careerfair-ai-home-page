import React from "react";
import Banner from "components/banner/banner";
import NavBar from "components/navbar/navbar";

import "styles/app.css";
import csuf2 from "static/csuf2.png";
import usc_ict from "static/usc_ict.png";
import DOD from "static/DOD.png";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SocialMediaBubble from "components/socialMedia/social-media-bubble";

function Index(): JSX.Element {
  return (
    <>
      <div className="page-container" id="#About">
        <NavBar />

        <Banner
          title={"Welcome to CareerFair.ai"}
          text={
            "CareerFair.ai: Increasing Connections to Fast Growing STEM-Careers is a collaborative research project between University of Southern California’s Institute for Creative Technologies (USC ICT) and California State University, Fullerton.  We make high-quality mentoring available to students for free, using virtual agents representing real-life STEM mentors."
          }
        />
        <div className="logos-container">
          <img
            src={`${csuf2}`}
            srcSet={`${csuf2}`}
            alt={csuf2}
            loading="lazy"
            className={`logo`}
            onClick={() =>
              window.open(
                "https://news.fullerton.edu/2022/01/can-artificial-intelligence-help-increase-diversity-in-stem/"
              )
            }
          />
          <img
            src={`${usc_ict}`}
            srcSet={`${usc_ict}`}
            alt={usc_ict}
            loading="lazy"
            className={`logo`}
            onClick={() =>
              window.open(
                "https://ict.usc.edu/research/labs-groups/learning-sciences/"
              )
            }
          />
        </div>
        <div className="navigate-btn-container">
          <KeyboardArrowDownIcon
            className="navigate-btn"
            onClick={() =>
              window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth",
              })
            }
          />
        </div>
        <SocialMediaBubble />
      </div>
      <div className="page-container" id="#Sponsors">
        <Banner
          title={"Sponsor"}
          text={
            "This project is funded by the Department of Defense National Defense Education Program (HQ0034-20-S-FO01), which aims to increase participation, retention, and diversity in Science, Technology, Engineering, and Mathematics (STEM) across different sectors/industries. Visit DoD STEM for more information: https://dodstem.us/"
          }
        />
        <div className="logos-container">
          <img
            src={`${DOD}`}
            srcSet={`${DOD}`}
            alt={DOD}
            loading="lazy"
            className={["logo", "DOD-logo"].join(" ")}
            onClick={() => window.open("https://dodstem.us/")}
          />
        </div>
        <SocialMediaBubble />
      </div>
    </>
  );
}

export default Index;
