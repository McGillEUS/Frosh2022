import { Typography } from "@mui/material";
import React from "react";

export default function Map() {
  return (
    <div style={{ width: "100%", marginTop: "10px" }}>
      <Typography 
        variant="h1" 
        style={{
          fontFamily: "'Futura PT', 'Futura', 'Trebuchet MS', Arial, sans-serif",
          fontWeight: 600,
          fontSize: "5rem",
          textAlign: "center",
          marginBottom: "0.5rem",
        }}>
        MAP
      </Typography>
      <Typography
        variant="body1"
        style={{
          marginTop: "10px",
          marginBottom: "20px",
          textAlign: "center",
          fontSize: "1.25rem",
          lineHeight: 1.6,
        }}
      >
        Please see the locations of some of our 2026 Frosh sponsors in the map below!
      </Typography>
      <div
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "640px",
          width: "100%",
          paddingTop: "20px",
        }}
      >
        <iframe
          title="Frosh Hotspot Map 2025"
          src="https://www.google.com/maps/d/embed?mid=1bGbV89nOUrb0wa_lqJmMZVrZZbCZg5A&ehbc=2E312F"
          width="640"
          style={{ maxWidth: "calc(100% - 24px)", marginLeft: "10px" }}
          height="480"
        ></iframe>
      </div>
    </div>
  );
}
