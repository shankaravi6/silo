import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import LandingPage from "./Pages/LandingPage";
import {ThemeProvider} from "./ThemeProvider/ThemeProvider";
import {themeSettings} from "./ThemeProvider/theme";
import JoinPage from "./Pages/JoinPage";
import HomePage from "./Pages/HomePage";


const App = () => {
  const mode = useSelector((state) => state.silo.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);


  return (
    <BrowserRouter>
       <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
           <Route path="/join" element={<JoinPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
