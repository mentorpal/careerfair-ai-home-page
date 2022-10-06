/*
This software is Copyright ©️ 2020 The University of Southern California. All Rights Reserved. 
Permission to use, copy, modify, and distribute this software and its documentation for educational, research and non-profit purposes, without fee, and without a written agreement is hereby granted, provided that the above copyright notice and subject to the full license file found in the root of this software deliverable. Permission to make commercial use of this software may be obtained by contacting:  USC Stevens Center for Innovation University of Southern California 1150 S. Olive Street, Suite 2300, Los Angeles, CA 90115, USA Email: accounting@stevens.usc.edu

The full terms of this copyright and license should always be found in the root directory of this software deliverable as "license.txt" and if these terms are not found with this software, please contact the USC Stevens Center for the full license.
*/
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActions } from "@mui/material";

interface ContactCardProps {
  name: string;
  ocupation: string;
  email?: string;
  link: string;
  avatar?: string;
}

function ContactCard(props: ContactCardProps): JSX.Element {
  const { name, ocupation, link, avatar } = props;
  return (
    <div style={{ margin: 20 }}>
      <Card
        sx={{ minWidth: 260, maxWidth: 80, maxHeight: 500, minHeight: 500 }}
        className="contact-card-profile"
      >
        <CardMedia
          component="img"
          height="300"
          width="200"
          image={avatar}
          alt={`${name}-img`}
          style={{ display: "block", objectFit: "cover" }}
          className="contact-avatar"
        />
        <CardContent>
          <Typography
            variant="h6"
            component="div"
            style={{ color: "#007cba" }}
            // sx={{ fontSize: 15, marginBottom: 0 }}
            className="contact-card-name"
          >
            {name}
          </Typography>
          <Typography
            color="text.secondary"
            style={{ color: "#007cbabf" }}
            variant="body1"
            // sx={{ fontSize: 10 }}
            className="contact-card-ocupation"
          >
            {ocupation}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => window.open(link)}>
            More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default ContactCard;
