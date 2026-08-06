import { createContext } from "react";
//change the colors for the theme
const dark = {
  background: "#043b66",
  textColor: "#eee",
  primary: "rgb(238,112,2)", //button color
  secondary: "#0072bc", //top bar color and links color
  card: "#111",
};
const light = {
  background: "#d0f0ff",
  textColor: "#000",
  primary: "rgb(238,112,2)", 
  secondary: "#d83b96",
  card: "#fff",
};

export const ThemeContext = createContext();

export const getTheme = (mode) => ({
  background: mode === "dark" ? dark.background : light.background,
  // ...(mode === "light" ? lightTheme : formattedDark),
  typography: {
    fontFamily: "'Futura PT', 'Futura', 'Trebuchet MS', Arial, sans-serif",
    p: {
      color: mode === "dark" ? dark.textColor : light.textColor,
      fontSize: "1.2rem",
      fontFamily: "'Futura PT', 'Futura', 'Trebuchet MS', Arial, sans-serif",
      fontWeight: 400,
    },
    h3: {
      color: mode === "dark" ? dark.textColor : light.textColor,
      textAlign: "center",
      fontSize: "2rem",
      fontFamily: "'Kabel', 'Kabel ExtraBold', Arial, sans-serif",
      fontWeight: 800,
    },
    h2: {
      color: mode === "dark" ? dark.textColor : light.textColor,
      textAlign: "center",
      fontWeight: 800,
      fontSize: "3rem",
      fontFamily: "'Kabel', 'Kabel ExtraBold', Arial, sans-serif",
    },
    h1: {
      color: mode === "dark" ? dark.textColor : light.textColor,
      textAlign: "center",
      fontWeight: 800,
      fontSize: "4rem",
      fontFamily: "'Kabel', 'Kabel ExtraBold', Arial, sans-serif",
    },
    h6: {
      color: mode === "dark" ? dark.textColor : light.textColor,
      textAlign: "center",
      fontFamily: "'Kabel', 'Kabel ExtraBold', Arial, sans-serif",
      fontWeight: 800,
    },
  },
  palette: {
    mode,
    primary: {
      500: mode === "dark" ? dark.primary : light.primary,
    },
    secondary: {
      main: mode === "dark" ? dark.secondary : light.secondary,
    },
    background: {
      paper: mode === "dark" ? dark.card : light.card,
    },
    text: {
      primary: mode === "dark" ? dark.textColor : light.textColor,
      secondary: mode === "dark" ? dark.textColor : light.textColor,
    },
  },
  components: {
    MuiListItem: {
      styleOverrides: {
        root: {
          color: mode === "light" ? "black" : "white",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: mode === "dark" ? dark.textColor : light.textColor,
        },
      },
    },
  },
});
