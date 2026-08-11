import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import MapIcon from "@mui/icons-material/Map";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import MessageIcon from "@mui/icons-material/Message";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ExploreIcon from "@mui/icons-material/TravelExplore";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import LightFroshIcon from "../images/frosh_2026_logo_light.png";
import DarkFroshIcon from "../images/frosh_2026_logo_dark.png";

import { useNavigate } from "react-router";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { ThemeContext } from "../constants/theme";
import { useTheme } from "@emotion/react";

const pages = [
  { name: "Home", link: "", icon: <HomeIcon /> },
  { name: "Schedule", link: "schedule", icon: <MessageIcon /> },
  { name: "Map", link: "map", icon: <MapIcon /> },
  { name: "Handbook", link: "handbook", icon: <MenuBookIcon /> },
  { name: "Explore the Board", link: "explore-board", icon: <ExploreIcon /> },
  { name: "Resources", link: "resources", icon: <AccessibilityNewIcon /> },
  { name: "FAQ", link: "faq", icon: <HelpOutlineIcon /> },
  { name: "Register", link: "register", icon: <ArrowCircleRightIcon /> },
];

const ResponsiveAppBar = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ThemeContext);
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const goToPage = (page) => {
    navigate(page);
    setOpen(false);
  };

  const FroshIcon = theme.palette.mode === "dark" ? DarkFroshIcon : LightFroshIcon;

  return (
    <React.Fragment>
      <AppBar position="sticky" style={{ backgroundColor: theme.palette.secondary.main }}>
      <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <img
                alt="Frosh Logo"
                src={FroshIcon}
                width={50}
                height={50}
                style={{ paddingRight: "20px" }}
              />
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "'Kabel', 'Kabel ExtraBold', Arial, sans-serif",
                fontWeight: 700,
                letterSpacing: "0.02rem",
                color: theme.palette.text.primary,
                textDecoration: "none",
              }}
            >
              MCGILL ENGINEERING FROSH 2026
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={() => setOpen(true)}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <img
                alt="Frosh Logo"
                src={FroshIcon}
                width={50}
                height={50}
                style={{ paddingRight: "20px" }}
              />
            </Box>
            <Typography
              variant="h1"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "'Futura PT', 'Futura', 'Trebuchet MS', Arial, sans-serif",
                fontWeight: 600,
                fontSize: "2rem",
                color: theme.palette.text.primary,
                textDecoration: "none", 
              }}
            >
              FROSHOPOLY
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page, i) => (
                <Button
                  color="primary"
                  variant={i === pages.length - 1 ? "contained" : "text"}
                  key={page.name}
                  onClick={() => goToPage(page.link)}
                  sx={{ my: 2, color: theme.palette.text.primary, display: "block" }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>
            <IconButton
              sx={{ ml: 1 }}
              onClick={colorMode.toggleColorMode}
              color="inherit"
            >
              {theme.palette.mode === "dark" ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 300 },
        }}
      >
        <List>
          {pages.map((page) => (
            <ListItem sx={{ p: 0, m: 0 }}>
              <ListItemButton onClick={() => goToPage(page.link)}>
                <ListItemIcon>{page.icon}</ListItemIcon>
                <ListItemText>{page.name}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Toolbar />
      </Drawer>
    </React.Fragment>
  );
};
export default ResponsiveAppBar;
