import React from "react";
import { Box, Typography } from "@mui/material";

const committeeCards = [
  { label: "The Factory", href: "https://www.instagram.com/thefactory_mcgill/", description: "A hardware design lab run by students, for students in Electrical, Computer, and Software Engineering at McGill University." },
  { label: "The Fishbowl", href: "https://www.instagram.com/mame_fishbowl/", description: "The largest student-run 3D-printing service at McGill University (previously known as the Cube)" },
  { label: "The Forge", href: "https://www.instagram.com/mame_tinkers/", description: "A student-operated making space under MAME that covers machining. " },
];

export default function SpacesModal() {
  return (
    <Box
      sx={{
        width: 400,
        height: 480,
        p: 1.75,
        borderRadius: 2,
        backgroundColor: "#ffffff",
        border: "1px solid #d8d8d8",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Box
        sx={{
          width: "calc(100% - 25px)",
          height: "calc(100% - 25px)",
          position: "absolute",
          inset: 12.5,
          border: "1.5px solid #000000",
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          width: "90%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          mx: "auto",
          mt: 1.5,
          mb: 1.5,
        }}
      >
        <Box sx={{ width: "100%", height: "2px", backgroundColor: "#000000", mb: 1 }} />
        <Typography
          variant="caption"
          sx={{
            textAlign: "center",
            color: "#1f1f1f",
            letterSpacing: 0.3,
            textTransform: "uppercase",
            display: "block",
            fontFamily: "'Futura PT', 'Futura', 'Trebuchet MS', Arial, sans-serif",
            fontSize: "1.75rem",
            fontWeight: 700,
          }}
        >
          Student Maker Spaces
        </Typography>
        <Box sx={{ width: "100%", height: "2px", backgroundColor: "#000000", mt: 1 }} />
      </Box>
      
      <Box
        component="ul"
        sx={{
          m: 0,
          p: 0,
          listStyle: "none",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 0.5,
          alignItems: "left",
          fontFamily: "'Futura PT', 'Futura', 'Trebuchet MS', Arial, sans-serif",
        }}
    >
        {committeeCards.map((committee) => (
          <Box
            key={committee.label}
            component="li"
            sx={{
              fontSize: "1.25rem",
              color: "#1f1f1f",
              textAlign: "left",
              lineHeight: 1.25,
              position: "relative",
              pl: 1.5,
              fontFamily: "'Futura PT', 'Futura', 'Trebuchet MS', Arial, sans-serif",
            }}
        >
            <Typography
              component="a"
              href={committee.href}
              target="_blank"
              rel="noreferrer"
              sx={{
                color: "#000000",
                textDecoration: "underline",
                cursor: "pointer",
                display: "block",
                fontFamily: "'Futura PT', 'Futura', 'Trebuchet MS', Arial, sans-serif",
                fontSize: "1.5rem",
                fontWeight: 100,
                fontStyle: "normal",
              }}
            >
              {committee.label}
            </Typography>
            <Typography
              sx={{
                color: "#4b4b4b",
                fontFamily: "'Futura PT', 'Futura', 'Trebuchet MS', Arial, sans-serif",
                fontSize: "1.25rem",
                mt: 0.25,
              }}
            >
              {committee.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}