import React from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import "styles/app.css";

interface BannerProps {
  title: string;
  text: string;
}

function Banner(props: BannerProps): JSX.Element {
  const { title, text } = props;
  return (
    <div className="banner-container">
      <Card className="banner-card">
        <Typography variant="h3" className="banner-title">
          {title}
        </Typography>
        <Typography variant="body1" className="banner-about">
          {text}
        </Typography>
      </Card>
    </div>
  );
}

export default Banner;
