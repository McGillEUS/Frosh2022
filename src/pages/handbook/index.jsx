import React from "react";
import handbook from "../../images/handbook2026v1.pdf";
import { Button, Typography } from "@mui/material";
export default function Handbook() {
  return (
    <div
      style={{
        width: "fit-content",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <br />
      <Typography 
        variant="h1" 
        style={{
          fontFamily: "'Futura PT', 'Futura', 'Trebuchet MS', Arial, sans-serif",
          fontWeight: 600,
          fontSize: "5rem",
          textAlign: "center",
          marginBottom: "0.5rem", 
        }}>
        HANDBOOK
      </Typography>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <Button
        variant="contained"
        size="large"
        href={require("../../images/handbook2026v1.pdf")}
        download="handbook2026v1.pdf"
        style={{
          marginBottom: "20px",
          borderRadius: "5px",
          padding: "10px",
          fontSize: "16px",
          
        }}
      >
        Download Here
      </Button>
      </div>

      <iframe
        title="Froshie Handbook"
        style={{
          height: "85vh",
          width: "75vw",
          marginLeft: "auto",
          marginRight: "auto",
          maxHeight: "85vh",
          objectFit: "contain",
          borderRadius: "5px",
        }}
        src={handbook}
      />
    </div>
  );
}
