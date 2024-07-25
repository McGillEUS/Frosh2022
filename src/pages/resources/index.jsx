import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import { RESOURCES } from "../../constants/resources";

export default function Resources() {
  return (
    <div style={{ padding: "10px" }}>
      <Typography variant="h1"> Resources</Typography>

      <div className="hide-small">
        <Grid container spacing={5}>
          {RESOURCES.map((resource, index) => {
            return (
              <Grid item xs={4} key={index}>
                <Card>
                  <CardMedia
                    component="img"
                    style={{
                      width: "auto",
                      height: "auto",
                      marginLeft: "auto",
                      marginRight: "auto",
                      maxWidth: "90%",
                      maxHeight: "200px",
                      objectFit: "contain",
                      borderRadius: "10px",
                      marginTop: "10px",
                    }}
                    image={resource.image}
                    alt={resource.name}
                  />
                  <CardContent>
                    <Typography variant="h3">{resource.name}</Typography>
                    <Typography variant="h6">{resource.phoneNumber}</Typography>
                    {resource.description}
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </div>
      <div className="show-small">
        <Grid container spacing={3}>
          {RESOURCES.map((resource, index) => {
            return (
              <Grid item md={1} key={index}>
                <Card>
                  <CardMedia
                    component="img"
                    style={{
                      width: "auto",
                      height: "auto",
                      marginLeft: "auto",
                      marginRight: "auto",
                      maxWidth: "90%",
                      maxHeight: "200px",
                      objectFit: "contain",
                      borderRadius: "20px",
                      marginTop: "10px",
                    }}
                    image={resource.image}
                    alt={resource.name}
                  />
                  <CardContent>
                    <Typography variant="h3">{resource.name}</Typography>

                    <Typography variant="h6">{resource.phoneNumber}</Typography>

                    {resource.description}
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
}
