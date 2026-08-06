import React from "react";
import { Box, Typography } from "@mui/material";

const committeeCards = [
  { label: "Engineering Adventure Committee", href: "https://www.instagram.com/eac_mcgill/" },
  { label: "Engaged Learning in Engineering", href: "https://www.instagram.com/eline.mcgill/" },
  { label: "Engineering Games", href: "https://www.instagram.com/mcgill.enggames/" },
  { label: "Graduation Committee", href: "https://www.instagram.com/eusgradcomm/" },
  { label: "EUS Equity", href: "https://www.instagram.com/eus_equity/" },
  { label: "Elections EUS", href: "https://www.instagram.com/electionseus/" },
  { label: "EUS Sports", href: "https://www.instagram.com/eus_sports/" },
  { label: "Indigenous Inclusion Committee", href: "https://www.instagram.com/indigenousinclusioncommittee/"},
  { label: "IT Committee", href: "https://euswiki.mcgilleus.ca/committees/" },
  { label: "Engineering Socials Committee", href: "https://www.instagram.com/esc_mcgill/" },
  { label: "Mental Wellness Committee", href: "https://www.instagram.com/eusmentalwellness/" },
  { label: "Plumber’s Band Room", href: "https://linktr.ee/plumbersbandroom" },
  { label: "SEAM", href: "https://www.instagram.com/seam_mcgill/" },
];

export default function CommitteeModal() {
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
          backgroundColor: "#aae1fb",
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
            color: "#2b2b2b",
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
            color: "#2b2b2b",
            letterSpacing: 0.3,
            textTransform: "uppercase",
            display: "block",
            fontFamily: '"Copperplate Gothic", "Copperplate", "Papyrus", serif',
            fontSize: "2.25rem",
            fontWeight: 700,
          }}
        >
          EUS Committees
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
              fontSize: 19,
              color: "#1f1f1f",
              textAlign: "left",
              lineHeight: 1.25,
              position: "relative",
              pl: 1.5,
              fontFamily: '"Kabel", "Kabel ExtraBold", Arial, sans-serif !important',
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
                fontFamily: '"Kabel", "Kabel ExtraBold", Arial, sans-serif !important',
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
