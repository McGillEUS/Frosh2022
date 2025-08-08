import React from "react";
import { Card, CardMedia, Typography } from "@mui/material";
import ScheduleImage from "../../images/schedule_2024.jpg";

export default function Schedule() {
  return (
    <div style={{ marginTop: "10px", textAlign: "center" }}>
      <Typography variant="h1">Schedule 2024</Typography>

      {<Typography variant="h6" style={{ marginTop: "20px" }}>
        The schedule will be released soon. Stay tuned!
        Here is a previous years schedule as an example of the events that will happen
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
