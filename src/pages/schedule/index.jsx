import React from "react";
import { Typography } from "@mui/material";

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

      {<Typography 
        variant="body1"
        style={{
          fontFamily: "'Futura PT', 'Futura', 'Trebuchet MS', Arial, sans-serif",
          textAlign: "center",
          maxWidth: "900px",
          fontSize: "1.25rem",
          lineHeight: 1.6,
        }}>
        The 2026 Frosh Schedule is currently being finalized and will be released in the coming weeks. Please check back here for updates!
      </Typography>
      }
    </div>
  );
}
