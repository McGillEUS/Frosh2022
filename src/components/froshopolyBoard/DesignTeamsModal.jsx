import React from "react";
import { Box, Typography } from "@mui/material";

const committeeCards = [
  { label: "McGill Baja Racing", href: "https://www.instagram.com/mcgill_baja/" },
  { label: "McGill Biodesign", href: "https://www.instagram.com/mcgillbiodesign/" },
  { label: "McGill Bridge Building", href: "https://www.instagram.com/bridgebuildingmcgill/" },
  { label: "McGill Chem-E Car", href: "https://www.instagram.com/mcgill.chemecar/" },
  { label: "McGill Concrete Canoe", href: "https://www.instagram.com/mcgillconcretecanoe/" },
  { label: "McGill Aerial Design", href: "https://www.instagram.com/mcgillaerialdesign/" },
  { label: "McGill Formula Electric", href: "https://www.instagram.com/mcgillformulaelectric/" },
  { label: "McGill iGEM", href: "https://www.instagram.com/igem.mcgill/" },
  { label: "McGill Rocket Team", href: "https://www.instagram.com/mcgill_rocket_team/" },
  { label: "McGill Robotics", href: "https://www.instagram.com/mcgillrobotics/" },
];

export default function DesignTeamsModal() {
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
          width: "calc(100% - 16px)",
          height: "calc(100% - 16px)",
          position: "absolute",
          inset: 8,
          border: "1.5px solid #000000",
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          width: "95%",
          backgroundColor: "#ed1c26",
          borderRadius: 1,
          mb: 1.5,
          px: 1,
          py: 0.75,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          mx: "auto",
          border: "1px solid #000000",
        }}
      >
        <Typography
          variant="caption"
          sx={{
            textAlign: "center",
            color: "#ffffff",
            letterSpacing: 0.3,
            textTransform: "uppercase",
            display: "block",
            fontFamily: '"Copperplate Gothic", "Copperplate", "Papyrus", serif',
            fontSize: "1.25rem",
            fontWeight: 700,
            lineHeight: 0.5,
            mt: 2,
            mb: 0.05,
          }}
        >
          Froshopoly
        </Typography>
        <Typography
          variant="caption"
          sx={{
            textAlign: "center",
            color: "#ffffff",
            letterSpacing: 0.3,
            textTransform: "uppercase",
            display: "block",
            fontFamily: '"Copperplate Gothic", "Copperplate", "Papyrus", serif',
            fontSize: "2.5rem",
            fontWeight: 700,
          }}
        >
          Design Teams
        </Typography>
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
                fontSize: "1.25rem",
                fontWeight: 100,
                fontStyle: "normal",
              }}
            >
              {committee.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}