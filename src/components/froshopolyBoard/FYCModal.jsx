import React from "react";
import { Box, Typography } from "@mui/material";

const committeeCards = [
  { label: "BUSS FYC", href: "https://www.instagram.com/bussfycmcgill/" },
  { label: "CHESS FYC", href: "https://www.instagram.com/chessfycmcgill/" },
  { label: "Civil FYC", href: "https://www.instagram.com/civilfyc/" },
  { label: "ECSESS Bits", href: "https://www.instagram.com/ecsessbits/" },
  { label: "MAME FYC", href: "https://www.instagram.com/mamefyc/" },
  { label: "MEUS FYC", href: "https://www.instagram.com/meus.fyc/" },
];

export default function FYCModal() {
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
          backgroundColor: "#f8941f",
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
            color: "#000000",
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
            color: "#000000",
            letterSpacing: 0.3,
            textTransform: "uppercase",
            display: "block",
            fontFamily: '"Copperplate Gothic", "Copperplate", "Papyrus", serif',
            fontSize: "1.8rem",
            fontWeight: 700,
          }}
        >
          First Year Councils
        </Typography>
      </Box>
      <Typography
        sx={{
          width: "96%",
          mx: "auto",
          textAlign: "center",
          color: "#1f1f1f",
          fontFamily: "'Futura PT', 'Futura', 'Trebuchet MS', Arial, sans-serif",
          fontSize: "1.25rem",
          lineHeight: 1.4,
          mb: 1.25,
          mt: 1.25,
        }}
      >
        Joining your department's First Year Council (FYC) is a great way to get involved in your department and meet other students. Each FYC organizes events, workshops, and social activities for first-year students, helping you build connections and make the most of your time at McGill! 
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
          gap: 0.25,
          alignItems: "center",
          fontFamily: "'Futura PT', 'Futura', 'Trebuchet MS', Arial, sans-serif",
        }}
      >
        {committeeCards.map((committee) => (
          <Box
            key={committee.label}
            component="li"
            sx={{
              fontSize: 19,
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
          </Box>
        ))}
      </Box>
    </Box>
  );
}