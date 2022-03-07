import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import NewspaperIcon from "@mui/icons-material/Newspaper";

function SocialMediaBubble(): JSX.Element {
  return (
    <div className="social-bubble">
      <div className="media-content">
        <InstagramIcon
          className="social-media-icon"
          href="https://twitter.com/"
        />
        <TwitterIcon className="social-media-icon" />
        <NewspaperIcon className="social-media-icon" />
      </div>
    </div>
  );
}

export default SocialMediaBubble;
