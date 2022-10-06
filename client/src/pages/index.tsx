/*
This software is Copyright ©️ 2020 The University of Southern California. All Rights Reserved. 
Permission to use, copy, modify, and distribute this software and its documentation for educational, research and non-profit purposes, without fee, and without a written agreement is hereby granted, provided that the above copyright notice and subject to the full license file found in the root of this software deliverable. Permission to make commercial use of this software may be obtained by contacting:  USC Stevens Center for Innovation University of Southern California 1150 S. Olive Street, Suite 2300, Los Angeles, CA 90115, USA Email: accounting@stevens.usc.edu

The full terms of this copyright and license should always be found in the root directory of this software deliverable as "license.txt" and if these terms are not found with this software, please contact the USC Stevens Center for the full license.
*/
import React from "react";
import Banner from "components/banner/banner";
import NavBar from "components/navbar/navbar";

import "styles/app.css";
import csuf2 from "static/csuf2.png";
import usc_ict from "static/usc_ict.png";
import DOD from "static/DOD.png";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SocialMediaBubble from "components/socialMedia/social-media-bubble";
import ContactCard from "components/contact-card/contact-card";
import { motion } from "framer-motion";
import { Card, Typography } from "@mui/material";

import BenNye from "../static/nye_benjamin.jpeg";
import YukoOkado from "../static/okado_yuko2.png";
import WilliamSwartout from "../static/swartout_william.jpeg";

function Index(): JSX.Element {
  return (
    <div>
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
          <div className="navigate-btn-wrapper">
            <KeyboardArrowDownIcon
              className="navigate-btn"
              onClick={() =>
                document?.getElementById("Sponsors")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            />
          </div>
        </div>
        <SocialMediaBubble />
      </div>
      <div className="page-container" id="Sponsors">
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
      <div className="page-container" id="Contact">
        <Typography
          variant="h3"
          className="banner-title"
          style={{ marginBottom: 15, color: "#007cba" }}
          sx={{ marginBottom: 0 }}
        >
          Contact
        </Typography>
        <div className="contact-container">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <ContactCard
              name={"Benjamin Nye, Ph.D."}
              ocupation={"USC Institute for Creative Technologies"}
              email={"Principal Investigator"}
              avatar={BenNye}
              link={"https://ict.usc.edu/profile/benjamin-nye/"}
            />
          </motion.div>
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <ContactCard
              name={"William Swartout, Ph.D. "}
              ocupation={"USC Institute for Creative Technologies"}
              email={"Principal Investigator"}
              avatar={WilliamSwartout}
              link={
                "https://ict.usc.edu/about-us/leadership/senior-management/william-swartout/"
              }
            />
          </motion.div>

          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <ContactCard
              name={"Yuko Okado, Ph.D."}
              ocupation={"California State University, Fullerton"}
              email={"Principal Investigator"}
              avatar={YukoOkado}
              link={
                "https://psychology.fullerton.edu/faculty/facultyprofiles/y_okado.aspx"
              }
            />
          </motion.div>
        </div>
        <div
          style={{ display: "flex", marginTop: 20, marginBottom: 20 }}
          className="contact-email"
        >
          <Typography
            variant="h6"
            style={{ color: "#007cba", marginRight: 15 }}
            sx={{ fontSize: 20, marginRight: 0, margin: "auto" }}
          >
            Project Contact:
          </Typography>
          <Typography
            variant="h6"
            style={{ color: "#007cba" }}
            sx={{ fontSize: 20, margin: "auto" }}
          >
            Careerfair.ai@gmail.com
          </Typography>
        </div>

        {/* careerfair.ai@gmail.com */}

        <SocialMediaBubble />
      </div>
    </div>
  );
}

export default Index;
