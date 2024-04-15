import React from "react";
import { setMode } from "../State";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import SoButton from "../Components/SoButton";
import { useThemeContext } from "../ThemeProvider";
import { SoHeading, SoSubTitle } from "../globalStyles";



const LandingPage = () => {
 
  const { palette } = useThemeContext();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div
      className="home-page"
      style={{ background: palette.background.default }}
    >
      <SoHeading style={{ color: palette.primary.main }}>
        SILO
      </SoHeading>
      <SoSubTitle
        className="home-description pb-7"
      >
        The Truth Will Surface
      </SoSubTitle>
      <SoButton onClick={()=> navigate('/join')}>
        Join
      </SoButton>
    </div>
  );
};

export default LandingPage;
