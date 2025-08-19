import { Typography } from "@mui/material";
import React from "react";

export default function Map() {
  return (
    <div style={{ width: "100%", marginTop: "10px" }}>
      <Typography variant="h1">Map</Typography>
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
          title="Frosh HotspotMap 2025"
          src=""
          width="640"
          style={{ maxWidth: "calc(100% - 24px)", marginLeft: "10px" }}
          height="480"
        ></iframe>
      </div>
    </div>
  );
}
