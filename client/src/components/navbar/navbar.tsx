import { ListItem, Stack, Typography } from "@mui/material";
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
      </Stack>
    </div>
  );
}

export default NavBar;
