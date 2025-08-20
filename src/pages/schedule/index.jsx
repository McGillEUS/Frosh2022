import React from "react";
import { Card, CardMedia, Typography } from "@mui/material";
import ScheduleImage from "../../images/schedule_2025.png";

export default function Schedule() {
  return (
    <div style={{ marginTop: "10px", textAlign: "center" }}>
      <Typography variant="h1">Schedule 2025</Typography>

      {<Typography variant="h6" style={{ marginTop: "20px" }}>
        See the 2025 Frosh Schedule below! For more detailed event information, stay tuned for the handbook released a few days before!
      </Typography>
      }
      <Card
        style={{
          width: "fit-content",
          marginTop: "20px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <CardMedia
          component="img"
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            maxHeight: "85vh",
            objectFit: "contain",
            borderRadius: "5px",
          }}
          image={ScheduleImage}
          alt="No img"
        />
      </Card>
      
    </div>
  );
}
