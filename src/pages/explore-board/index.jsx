import React from "react";
import { Box, Typography } from "@mui/material";

const BoardImage = "/froshopoly.svg";

export default function ExploreBoard() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        px: 2,
        py: 4,
      }}
    >
      <Typography variant="h4">Explore the Board</Typography>
      <Box
        sx={{
          width: "min(100%, 1100px)",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={BoardImage}
          alt="Explore the Board"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            borderRadius: "8px",
          }}
        />
      </Box>
    </Box>
  );
}
