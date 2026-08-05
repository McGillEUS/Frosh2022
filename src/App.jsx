import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router";
import Home from "./pages/home";
import FAQ from "./pages/faq";
import Navigation from "./components/Navigation";
import Resources from "./pages/resources";
import React, { useMemo } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { getTheme, ThemeContext } from "./constants/theme";
import Register from "./pages/register";
import Footer from "./components/Footer";
import Schedule from "./pages/schedule";
import Map from "./pages/map";
import Handbook from "./pages/handbook";
import ExploreBoard from "./pages/explore-board";

function App() {
  const [mode, setMode] = React.useState("dark");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(() => createTheme(getTheme(mode)), [mode]);
  useMemo(() => {
    document.body.style.backgroundColor = theme.background;
  }, [theme]);
  return (
    <ThemeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/map" element={<Map />} />
            <Route path="/handbook" element={<Handbook />} />
            <Route path="/explore-board" element={<ExploreBoard />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          <Footer />
        </Router>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
