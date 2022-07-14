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
