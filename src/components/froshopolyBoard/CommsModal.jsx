import React from "react";
import { Box, Typography } from "@mui/material";

const committeeCards = [
  { label: "Plumber’s Photography Union", href: "https://www.instagram.com/eus_ppu/", description: "Looking for event photography, headshots for your council, or simply want to join a community of photo enthusiasts? The PPU has you covered! We run a team of event photographers to capture the magic of McGill Engineering." },
  { label: "Yearbook Committee", href: "https://www.instagram.com/eus_yearbook/", description: "The Yearbook Committee brings the EUS yearbook to life! Available to all years of engineering, it serves as a memento of our time as engineering students." },
  { label: "Plumbers’ Student Design", href: "https://www.instagram.com/psd_mcgill/", description: ".PSD is a student-run service that offers innovative (and free!) graphic design solutions for EUS groups." },
  { label: "The Plumber’s Faucet", href: "https://www.instagram.com/plumbersfaucet/", description: "The Plumber's Faucet is the EUS's humorous and satirical magazine, released two to three times a semester. We publish various articles and encourage you to submit to our magazine! " },
];

export default function CommsModal() {
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
            fontSize: "1.55rem",
            fontWeight: 700,
          }}
        >
          Creative Organizations
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
              fontSize: "1rem",
              color: "#1f1f1f",
              textAlign: "left",
              lineHeight: 1.25,
              position: "relative",
              pl: 1.25,
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
                fontSize: "1rem",
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
                mt: 0.15,
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