import React from "react";
import { Box, Typography } from "@mui/material";

const committeeCards = [
  { label: "BRIDGE Sustainability Case Competition", href: "https://www.instagram.com/bridgecasecomp/", description: "An annual interdisciplinary case competition held in January with the purpose of breaking down the boundaries between the fields of engineering and business." },
  { label: "McGill Day of Entrepreneurship", href: "https://www.instagram.com/mcgill_doe/", description: "A student-run event designed to bridge the gap between entrepreneurial students and companies actively seeking fresh, driven talent." },
  { label: "McGill Engineering Competition (MEC)", href: "https://www.instagram.com/mec_mcgill/", description: "An annual interdisciplinary event providing all McGill engineering students the opportunity to test their skills in varying competitions." },
  { label: "EUS Ski Trip", href: "https://www.instagram.com/eus_ski_trip/", description: "A legendary annual event that’s been going strong for over 25 years! The trip heads to Mont-Sainte-Anne usually in early February, bringing together students for an unforgettable weekend of skiing, snowboarding, and nonstop fun." },
];

export default function Events2Modal() {
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
          backgroundColor: "#1fb35b",
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
            fontSize: "2rem",
            fontWeight: 700,
          }}
        >
          More EUS Events
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
              fontSize: "1rem",
              color: "#000000",
              textAlign: "left",
              lineHeight: 1.5,
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
                fontSize: "1rem",
                fontWeight: 200,
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
                lineHeight: 1.2,
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