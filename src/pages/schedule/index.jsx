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
