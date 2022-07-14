/*
This software is Copyright ©️ 2020 The University of Southern California. All Rights Reserved. 
Permission to use, copy, modify, and distribute this software and its documentation for educational, research and non-profit purposes, without fee, and without a written agreement is hereby granted, provided that the above copyright notice and subject to the full license file found in the root of this software deliverable. Permission to make commercial use of this software may be obtained by contacting:  USC Stevens Center for Innovation University of Southern California 1150 S. Olive Street, Suite 2300, Los Angeles, CA 90115, USA Email: accounting@stevens.usc.edu

The full terms of this copyright and license should always be found in the root directory of this software deliverable as "license.txt" and if these terms are not found with this software, please contact the USC Stevens Center for the full license.
*/
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import { motion } from "framer-motion";

function SocialMediaBubble(): JSX.Element {
  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: "0%" }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.1 }}
      className="social-bubble"
    >
      <div className="media-content">
        <InstagramIcon
          className="social-media-icon"
          onClick={() =>
            window.open("https://www.instagram.com/careerfair.ai/")
          }
        />
        <TwitterIcon
          className="social-media-icon"
          onClick={() => window.open("https://twitter.com/CareerFair_AI")}
        />
        <NewspaperIcon
          className="social-media-icon"
          onClick={() =>
            window.open(
              "https://news.fullerton.edu/2022/01/can-artificial-intelligence-help-increase-diversity-in-stem/"
            )
          }
        />
      </div>
    </motion.div>
  );
}

export default SocialMediaBubble;
