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
  { label: "EUS Committees", x: 190, y: 1250, width: 240, height: 200 },
  { label: "EUS Clubs", x: 545, y: 1250, width: 120, height: 200 },
  { label: "PNU", x: 780, y: 1250, width: 120, height: 200 },
  { label: "Engineering Chants", x: 900, y: 1250, width: 345, height: 200 },
  { label: "G-Store", x: 0, y: 1130, width: 190, height: 120 },
  { label: "Student Maker Spaces", x: 0, y: 1010, width: 190, height: 120 },
  { label: "Services", x: 0, y: 780, width: 190, height: 230 },
  { label: "First Year Councils", x: 0, y: 540, width: 190, height: 120 },
  { label: "Junior Council", x: 0, y: 305, width: 190, height: 120 },
  { label: "Departmental Societies", x: 0, y: 190, width: 190, height: 115 },
  { label: "Design Teams", x: 190, y: 0, width: 475, height: 190 },
  { label: "Events", x: 780, y: 0, width: 238, height: 190 },
  { label: "Comms", x: 1018, y: 0, width: 115, height: 190 },
  { label: "E-Week", x: 1133, y: 0, width: 115, height: 190 },
  { label: "EUS Events", x: 1248, y: 190, width: 190, height: 472 },
  { label: "OAP", x: 1248, y: 898, width: 190, height: 118 },
  { label: "Blues Pub", x: 1248, y: 1134, width: 190, height: 116 },
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
      <Typography
        variant="h1"
        style={{
          fontFamily: "'Kabel', 'Kabel ExtraBold', Arial, sans-serif",
          fontWeight: 800,
          fontSize: "4rem",
          textAlign: "center",
          marginBottom: "0.5rem",
        }}
      >
        Explore the Board
      </Typography>
      <Typography
        variant="body1"
        style={{
          fontFamily: "'Futura PT', 'Futura', 'Trebuchet MS', Arial, sans-serif",
          textAlign: "center",
          maxWidth: "900px",
          lineHeight: 1.6,
        }}
      >
        Click on the different properties to learn more about various clubs, committees, departmental societies, and events within the Engineering Undergraduate Society (EUS)
      </Typography>
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
