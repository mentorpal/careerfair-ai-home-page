/*
This software is Copyright ©️ 2020 The University of Southern California. All Rights Reserved. 
Permission to use, copy, modify, and distribute this software and its documentation for educational, research and non-profit purposes, without fee, and without a written agreement is hereby granted, provided that the above copyright notice and subject to the full license file found in the root of this software deliverable. Permission to make commercial use of this software may be obtained by contacting:  USC Stevens Center for Innovation University of Southern California 1150 S. Olive Street, Suite 2300, Los Angeles, CA 90115, USA Email: accounting@stevens.usc.edu

The full terms of this copyright and license should always be found in the root directory of this software deliverable as "license.txt" and if these terms are not found with this software, please contact the USC Stevens Center for the full license.
*/
import {
  AppBar,
  Box,
  Button,
  IconButton,
  ListItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { motion } from "framer-motion";

function NavBar(): JSX.Element {
  const participateBtn = (
    <Button
      variant="contained"
      className="participate-btn"
      style={{
        backgroundColor: "#007cba !important",
        color: "#fff !important",
      }}
      onClick={() => window.open("https://www.instagram.com/p/Ci0m0-qvOwf/")}
    >
      Participate
    </Button>
  );

  const navbarItems = (
    <>
      <ListItem className="navbar-item-container">
        <Typography
          variant="h6"
          className="navbar-item"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          About
        </Typography>
      </ListItem>
      <ListItem className="navbar-item-container">
        <Typography
          variant="h6"
          className="navbar-item"
          onClick={() =>
            document?.getElementById("Sponsors")?.scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          Sponsor
        </Typography>
      </ListItem>
      <ListItem className="navbar-item-container">
        <Typography
          variant="h6"
          className="navbar-item"
          onClick={() =>
            document?.getElementById("Contact")?.scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          Contact
        </Typography>
      </ListItem>
    </>
  );
  const nav = (
    <Box sx={{ flexGrow: 1, zIndex: 2 }}>
      <AppBar
        position="fixed"
        style={{
          backgroundColor: "#fff",
          boxShadow: "none",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Toolbar className="toolbar-container">
          {navbarItems}
          {participateBtn}
        </Toolbar>
      </AppBar>
    </Box>
  );

  return <div className="navbar">{nav}</div>;
}

export default NavBar;
