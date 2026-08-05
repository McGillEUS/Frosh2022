import React from "react";
import { Box, Typography } from "@mui/material";

const SportsLink = "https://www.mcgilleus.ca/sports";

const committeeCards = [
  { label: "Engineering Adventure Committee", href: SportsLink },
  { label: "Engaged Learning in Engineering", href: SportsLink },
  { label: "Engineering Games", href: SportsLink },
  { label: "Graduation Committee", href: SportsLink },
  { label: "EUS Equity", href: SportsLink },
  { label: "Elections EUS", href: SportsLink },
  { label: "EUS Sports", href: SportsLink },
  { label: "Global Engineering Committee", href: SportsLink },
  { label: "Indigenous Inclusion Committee", href: SportsLink },
  { label: "IT Committee", href: SportsLink },
  { label: "Engineering Socials Committee", href: SportsLink },
  { label: "Mental Wellness Committee", href: SportsLink },
  { label: "Plumber’s Band Room", href: SportsLink },
  { label: "SEAM", href: SportsLink },
];

export default function CommitteeModal() {
  return (
    <Box
      sx={{
        width: 340,
        height: 420,
        p: 1.75,
        borderRadius: 2,
        backgroundColor: "#ffffff",
        border: "1px solid #d8d8d8",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
        flexDirection: "column",
        alignItems: "left",
      }}
    >
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#aae1fb",
          borderRadius: 1,
          mb: 1.5,
          px: 1,
          py: 0.75,
        }}
      >
        <Typography
          variant="caption"
          sx={{
            fontWeight: 700,
            textAlign: "center",
            color: "#2b2b2b",
            letterSpacing: 0.3,
            textTransform: "uppercase",
            display: "block",
            fontFamily: '"Copperplate Gothic", "Copperplate", "Papyrus", serif',
            fontSize: "1.1rem",
          }}
        >
          Froshopoly
        </Typography>
        <Typography
          variant="caption"
          sx={{
            fontWeight: 700,
            textAlign: "center",
            color: "#2b2b2b",
            letterSpacing: 0.3,
            textTransform: "uppercase",
            display: "block",
            fontFamily: '"Copperplate Gothic", "Copperplate", "Papyrus", serif',
            fontSize: "1.3rem",
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
        }}
      >
        {committeeCards.map((committee) => (
          <Box
            key={committee.label}
            component="li"
            sx={{
              fontSize: 18,
              color: "#1f1f1f",
              textAlign: "left",
              lineHeight: 1.2,
              position: "relative",
              pl: 1.5,
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
