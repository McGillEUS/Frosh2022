import React from "react";
import { Box, Typography } from "@mui/material";

const committeeCards = [
  {
    label: "G-Store",
    href: "https://www.instagram.com/eusgstore/",
    description: "Your one-stop shop for affordable snacks, drinks, and school supplies (and $1 coffees!)",
  },
  {
    label: "CopiEUS",
    href: "https://www.instagram.com/copi_eus/",
    description: "The most affordable, on-campus print service around! From posters to book binding, CopiEUS has you covered!",
  },
  {
    label: "Frostbite Ice Cream",
    href: "https://www.instagram.com/frostbite_icecream/",
    description: "Get a much needed sweet treat from our student-run ice cream store!",
  },
  {
    label: "EPTS",
    href: "https://www.instagram.com/mcgill_epts/",
    description: "FREE tutoring for U0 and U1 students with daily tutorials and dedicated exam reviews!",
  },
];

export default function ServicesModal() {
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
          backgroundColor: "#d83b96",
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
          Services
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
            <Typography
              sx={{
                color: "#4b4b4b",
                fontFamily: "'Futura PT', 'Futura', 'Trebuchet MS', Arial, sans-serif",
                fontSize: "1rem",
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
