import React from "react";
import { Box, Typography } from "@mui/material";

const committeeCards = [
  { label: "McGill Biomechanics", href: "https://www.instagram.com/mcgillbiomechanics/" },
  { label: "Brewing Club", href: "https://www.instagram.com/mcgillbrewingclub/" },
  { label: "McGill Engineering Raclette Team", href: "https://www.instagram.com/mert_mcgill/" },
  { label: "Engineers in Action", href: "https://www.instagram.com/mcgill.engineersinaction/" },
  { label: "GameDev McGill", href: "https://www.instagram.com/gamedevmcgill/" },
  { label: "McGill Flying Club", href: "https://www.instagram.com/mcgillflyingclub/" },
  { label: "National Society of Black Engineers", href: "https://www.instagram.com/nsbemcgill/" },
  { label: "NOBE", href: "https://www.instagram.com/nobe.mcgill/" },
  { label: "IEEE McGill", href: "https://www.instagram.com/ieeemcgill/" },
  { label: "POWE", href: "https://www.instagram.com/powemcgill/" },
  { label: "McGill Product Management Association", href: "https://www.instagram.com/mpma.mcgill/" },
  { label: "Queer Engineer", href: "https://www.instagram.com/queerengineermcgill/" },
  { label: "Reboot McGill", href: "https://www.instagram.com/reboot_mcgill/" },
];

export default function ClubsModal() {
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
          backgroundColor: "#aae1fc",
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
            fontSize: "2.5rem",
            fontWeight: 700,
          }}
        >
          EUS Clubs
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
          fontFamily: '"Kabel", "Kabel ExtraBold", Arial, sans-serif !important',
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
                fontSize: "1rem",
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