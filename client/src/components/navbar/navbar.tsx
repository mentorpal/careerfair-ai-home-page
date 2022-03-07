import { ListItem, Stack, Typography } from "@mui/material";
import React from "react";

function NavBar(): JSX.Element {
  return (
    <div className="navbar">
      <Stack direction="row" spacing={2}>
        <ListItem>
          <Typography
            variant="h6"
            className="navbar-about"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            About
          </Typography>
        </ListItem>
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
            Sponsors
          </Typography>
        </ListItem>
      </Stack>
    </div>
  );
}

export default NavBar;
