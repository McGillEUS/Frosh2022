import React from "react";
import {
  Box,
  Dialog,
  DialogContent,
  Typography,
} from "@mui/material";
import CommitteeModal from "../../components/froshopoly/CommitteeModal";

const BoardImage = "/froshopoly.svg";

const boardRegions = [
  { label: "Property 1", x: 165, y: 1225, width: 500, height: 200 },
];

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
        <DialogContent sx={{ p: 0, width: "fit-content" }}>
          <CommitteeModal />
        </DialogContent>
      </Dialog>
    </Box>
  );
}
