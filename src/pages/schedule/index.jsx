import React from "react";
import { Typography } from "@mui/material";

export default function Schedule() {
  return (
    <div style={{ marginTop: "10px", textAlign: "center" }}>
      <Typography variant="h1" style={{ fontFamily: "'Kabel', 'Kabel ExtraBold', Arial, sans-serif", fontWeight: 800 }}>Schedule 2025</Typography>

      {<Typography variant="h6" style={{ marginTop: "20px" }}>
        The 2026 Frosh Schedule is currently being finalized and will be released in the coming weeks. Please check back here for updates!
      </Typography>
      }
    </div>
  );
}
