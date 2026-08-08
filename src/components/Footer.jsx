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
          fontSize: "24px",
          fontWeight: 500,
          fontFamily: "'Futura PT', 'Futura', 'Trebuchet MS', Arial, sans-serif",
          letterSpacing: "-0.2px",
          width: "100%",
          textAlign: "center",
          lineHeight: 1.2,
          margin: 0,
        }}
      >
        McGill Engineering Frosh 2026
      </Typography>
      <Typography
        variant="h6"
        style={{
          fontSize: "18px",
          fontWeight: 500,
          fontFamily: "'Futura PT', 'Futura', 'Trebuchet MS', Arial, sans-serif",
          letterSpacing: "-0.2px",
          width: "100%",
          lineHeight: 1.2,
          margin: 0,
        }}
      >
        3480 Rue University #7, Montreal, Quebec H3A 0E9
      </Typography>
      <Typography
        variant="h6"
        style={{
          fontSize: "18px",
          fontWeight: 500,
          fontFamily: "'Futura PT', 'Futura', 'Trebuchet MS', Arial, sans-serif",
          letterSpacing: "-0.2px",
          width: "100%",
          lineHeight: 1.2,
          margin: 0,
        }}
      >
      oweek.communications@mcgilleus.ca
      </Typography>
      <hr style={{ width: "50%", opacity: 0.2 }} />
      <Typography
        variant="body1"
        style={{
          fontSize: "14px",
          fontWeight: 400,
          fontFamily: "'Futura PT', 'Futura', 'Trebuchet MS', Arial, sans-serif",
          lineHeight: 1.4,
          width: "min(90%, 720px)",
          margin: "0 auto 12px",
          textAlign: "center",
          opacity: 0.7,
        }}
      >
        McGill Engineering Frosh recognizes that Frosh takes place on unceded, unsurrendered and ancestral Indigenous territory. This land, known as Tiohtià:ke (also called Montreal), has long served as a site of meeting and exchange for the Kanien’kehá:ka/Mohawk Nation, belonging to the Haudenosaunee Confederacy as well as other Indigenous nations, notably the Anishinaabeg nations. 
      </Typography>
      <Typography
        variant="h6"
        style={{
          fontSize: "14px",
          fontWeight: 400,
          fontFamily: "'Futura PT', 'Futura', 'Trebuchet MS', Arial, sans-serif",
          letterSpacing: "-0.2px",
          width: "100%",
          textAlign: "center",
          opacity: 0.7,
        }}
      >
        &copy; Engineering Undergraduate Society of McGill University 2026 <br />
        Made by Ryan Reszetnik, Updated by Audrey Cheng
      </Typography>
    </div>
  );
}