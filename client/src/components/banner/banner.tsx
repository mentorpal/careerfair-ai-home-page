/*
This software is Copyright ©️ 2020 The University of Southern California. All Rights Reserved. 
Permission to use, copy, modify, and distribute this software and its documentation for educational, research and non-profit purposes, without fee, and without a written agreement is hereby granted, provided that the above copyright notice and subject to the full license file found in the root of this software deliverable. Permission to make commercial use of this software may be obtained by contacting:  USC Stevens Center for Innovation University of Southern California 1150 S. Olive Street, Suite 2300, Los Angeles, CA 90115, USA Email: accounting@stevens.usc.edu

The full terms of this copyright and license should always be found in the root directory of this software deliverable as "license.txt" and if these terms are not found with this software, please contact the USC Stevens Center for the full license.
*/
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
