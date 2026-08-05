import React from "react";
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const BoardImage = "/froshopoly.svg";
const SportsLink = "https://www.mcgilleus.ca/sports";

const committeeCards = [
  { label: "Academic", color: "#f7d6d9" },
  { label: "Social", color: "#d7e8ff" },
  { label: "Campus", color: "#e5f7dc" },
  { label: "International", color: "#fce9c6" },
  { label: "Culture", color: "#f6ddff" },
  { label: "Finance", color: "#dff4ef" },
  { label: "Sports", color: "#ffe3c2" },
  { label: "Outreach", color: "#e7e3ff" },
];

const boardRegions = [
  { label: "Property 1", x: 165, y: 1225, width: 500, height: 200 },
];

function CommitteePoster() {
  return (
    <Box
      sx={{
        width: 252,
        height: 288,
        p: 1.5,
        borderRadius: 2,
        backgroundColor: "#ffffff",
        border: "1px solid #d8d8d8",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: 700,
          textAlign: "center",
          mb: 1.25,
          color: "#2b2b2b",
          letterSpacing: 0.2,
        }}
      >
        EUS Committees
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          gap: 1,
          flexGrow: 1,
        }}
      >
        {committeeCards.map((committee) => (
          <Box
            key={committee.label}
            sx={{
              minHeight: 38,
              borderRadius: 1,
              backgroundColor: committee.color,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              px: 0.5,
              fontSize: 12,
              fontWeight: 700,
              color: "#1f1f1f",
              border: "1px solid rgba(0,0,0,0.08)",
            }}
          >
            {committee.label}
          </Box>
        ))}
      </Box>

      <Box sx={{ mt: 1.25, display: "flex", justifyContent: "center" }}>
        <Typography
          component="a"
          href={SportsLink}
          target="_blank"
          rel="noreferrer"
          sx={{
            color: "#1d4ed8",
            textDecoration: "none",
            fontSize: 12,
            fontWeight: 700,
          }}
        >
          Explore EUS Sports
        </Typography>
      </Box>
    </Box>
  );
}

export default function ExploreBoard() {
  const [open, setOpen] = React.useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        px: 2,
        py: 4,
      }}
    >
      <Typography variant="h4">Explore the Board</Typography>
      <Box
        sx={{
          width: "min(100%, 1100px)",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <svg viewBox="0 0 1440 1440" style={{ width: "100%", height: "auto", display: "block" }}>
          <image href={BoardImage} x="0" y="0" width="1440" height="1440" preserveAspectRatio="xMidYMid meet" />
          {boardRegions.map((region) => (
            <rect
              key={region.label}
              x={region.x}
              y={region.y}
              width={region.width}
              height={region.height}
              fill="transparent"
              stroke="transparent"
              role="button"
              tabIndex={0}
              aria-label={region.label}
              style={{ cursor: "pointer" }}
              onClick={() => setOpen(true)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setOpen(true);
                }
              }}
            />
          ))}
        </svg>
      </Box>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            maxWidth: "none",
            width: "fit-content",
            borderRadius: 2,
            overflow: "hidden",
            backgroundColor: "transparent",
            boxShadow: "none",
          },
        }}
      >
        <DialogTitle sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          EUS Committees
          <IconButton edge="end" color="inherit" onClick={() => setOpen(false)} aria-label="close">
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ p: 0, width: "fit-content" }}>
          <CommitteePoster />
        </DialogContent>
      </Dialog>
    </Box>
  );
}
