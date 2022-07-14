/*
This software is Copyright ©️ 2020 The University of Southern California. All Rights Reserved. 
Permission to use, copy, modify, and distribute this software and its documentation for educational, research and non-profit purposes, without fee, and without a written agreement is hereby granted, provided that the above copyright notice and subject to the full license file found in the root of this software deliverable. Permission to make commercial use of this software may be obtained by contacting:  USC Stevens Center for Innovation University of Southern California 1150 S. Olive Street, Suite 2300, Los Angeles, CA 90115, USA Email: accounting@stevens.usc.edu

The full terms of this copyright and license should always be found in the root directory of this software deliverable as "license.txt" and if these terms are not found with this software, please contact the USC Stevens Center for the full license.
*/
import { Button, ListItem, Stack, Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

function NavBar(): JSX.Element {
  return (
    <div className="navbar">
      <Stack direction="row" spacing={8}>
        <motion.div transition={{ duration: 0.3 }} whileHover={{ scale: 1.3 }}>
          <ListItem>
            <Typography
              variant="h6"
              className="navbar-about"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              About
            </Typography>
          </ListItem>
        </motion.div>
        <motion.div transition={{ duration: 0.3 }} whileHover={{ scale: 1.3 }}>
          <ListItem>
            <Typography
              variant="h6"
              className="navbar-Sponsors"
              onClick={() =>
                window.scrollTo({
                  top: document.body.scrollHeight,
                  behavior: "smooth",
                })
              }
            >
              Sponsor
            </Typography>
          </ListItem>
        </motion.div>
        <motion.div transition={{ duration: 0.3 }} whileHover={{ scale: 1.3 }}>
          <ListItem>
            <Button
              variant="contained"
              className="navbar-Sponsors"
              style={{
                backgroundColor: "#007cba !important",
                color: "#fff !important",
              }}
              onClick={() =>
                window.open("https://www.instagram.com/p/CfcLQHevxhP/")
              }
            >
              Participate
            </Button>
          </ListItem>
        </motion.div>
      </Stack>
    </div>
  );
}

export default NavBar;
