import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import LandingPage from "./pages/LandingPage";
import {ThemeProvider} from "./themeprovider/ThemeProvider";
import {themeSettings} from "./themeprovider/theme";
import JoinPage from "./pages/JoinPage";
import HomePage from "./pages/HomePage";
import BlogRoutes from "./routes/BlogRoutes";


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

          <Route path='/blog/*' element={<BlogRoutes/>} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
