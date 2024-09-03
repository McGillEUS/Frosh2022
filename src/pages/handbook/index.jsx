import React from "react";
import handbook from "../../images/handbook_2024.pdf";
import { Button } from "@mui/material";
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
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <Button
        variant="contained"
        size="large"
        href={require("../../images/handbook_2024.pdf")}
        download="handbook_2024.pdf"
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
