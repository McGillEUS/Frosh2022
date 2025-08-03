import { useTheme } from "@emotion/react";
import { IconButton, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import React from "react";

export default function Footer() {
  const theme = useTheme();
  return (
    <div style={{ backgroundColor: theme.background, paddingTop: "15px" }}>
      <div
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          width: "fit-content",
        }}
      >
        <IconButton
          size="large"
          href="https://www.instagram.com/engineeringfrosh/"
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          size="large"
          href="https://www.facebook.com/EngineeringFrosh/"
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          size="large"
          href="https://www.youtube.com/c/McGillEngineeringOrientationWeek"
        >
          <YouTubeIcon />
        </IconButton>
      </div>

      <Typography
        variant="h6"
        style={{
          fontSize: "20px",
          width: "100%",
          textAlign: "center",
        }}
      >
        McGill Engineering Frosh 2025
      </Typography>
      <Typography
        variant="h6"
        style={{
          fontSize: "14px",
          width: "100%",
        }}
      >
        3480 Rue University #7, Montreal, Quebec H3A 0E9
      </Typography>
      <Typography
        variant="h6"
        style={{
          fontSize: "14px",
          width: "100%",
        }}
      >
      oweek.communications@mcgilleus.ca
      </Typography>
      <hr style={{ width: "50%", opacity: 0.2 }} />
      <Typography
        variant="h6"
        style={{
          fontSize: "12px",
          width: "100%",
          textAlign: "center",
          opacity: 0.7,
        }}
      >
        &copy; Engineering Undergraduate Society of McGill University 2025 <br />
        Made by Ryan Reszetnik
      </Typography>
    </div>
  );
}