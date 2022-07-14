import React from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import "styles/app.css";
import { motion } from "framer-motion";

interface BannerProps {
  title: string;
  text: string;
}

function Banner(props: BannerProps): JSX.Element {
  const { title, text } = props;
  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: "0%" }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
      className="banner-container"
    >
      <Card className="banner-card">
        <Typography variant="h3" className="banner-title">
          {title}
        </Typography>
        <Typography variant="body1" className="banner-about">
          {text}
        </Typography>
      </Card>
    </motion.div>
  );
}

export default Banner;
