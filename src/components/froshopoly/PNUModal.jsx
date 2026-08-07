import React from "react";
import { Box, Typography } from "@mui/material";
import pnuIcon from "../../images/pnu.png";

const committeeCards = [
  { label: "PNU Instagram", href: "https://www.instagram.com/pnu.mcgill/" },
];
export default function PNUModal() {
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
        <Box component="img" src={pnuIcon} alt="PNU icon" sx={{ width: 80, height: 80, mb: 1.5, objectFit: "contain" }} />
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
            fontSize: "1.5rem",
            fontWeight: 700,
          }}
        >
          Plumber's Noble Uniform
        </Typography>
        <Box sx={{ width: "100%", height: "2px", backgroundColor: "#000000", mt: 1 }} />
      </Box>

      <Typography
        sx={{
          width: "90%",
          mx: "auto",
          textAlign: "left",
          color: "#1f1f1f",
          fontFamily: "'Futura PT', 'Futura', 'Trebuchet MS', Arial, sans-serif",
          fontSize: "1.15rem",
          lineHeight: 1.25,
          mb: 1.5,
          mt: 1.5,
        }}
      >
        Get ready to wear an iconic piece of McGill Engineering gear: the Plumber's Noble Uniform, or PNU! These aren’t just any overalls—they’re the one-of-a-kind symbol of your engineering pride and community spirit. Throughout your time at McGill you’ll collect patches to proudly adorn your PNU, each one a symbol of your involvement and achievements. So, suit up, show off, and join the ranks of those who wear their engineering identity with pride.
      </Typography>

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
          alignItems: "center",
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
              textAlign: "center",
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