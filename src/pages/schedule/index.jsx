import React from "react";
import { Typography } from "@mui/material";
import scheduleImage from "../../images/schedule.png";

export default function Schedule() {
  return (
    <div style={{ marginTop: "10px", textAlign: "center" }}>
      <Typography 
        variant="h1" 
        style={{ 
          fontFamily: "'Futura PT', 'Futura', 'Trebuchet MS', Arial, sans-serif",
          fontWeight: 600,
          fontSize: "5rem",
          textAlign: "center",
          marginBottom: "0.5rem",
        }}> 
        2026 SCHEDULE
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
        Please see the handbook for more details on each day's events and activities!
        </Typography>
      <img
        src={scheduleImage}
        alt="2026 Frosh Schedule"
        style={{
          display: "block",
          maxWidth: "100%",
          width: "600px",
          height: "auto",
          margin: "0 auto",
          marginTop: "1rem",
        }}
      />
    </div>
  );
}
