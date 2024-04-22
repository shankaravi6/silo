import React from "react";
import { setMode } from "../State";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import SoButton from "../Components/SoButton";
import { SoContainer, SoFlex, SoSubTitle, SoTitle } from "../StyledComponent/globalStyles";
import { useThemeContext } from "../ThemeProvider/ThemeProvider";



const LandingPage = () => {
 
  const { palette } = useThemeContext();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <SoContainer>
    <SoFlex dir='column' height='100%' sh='100vh'>
      <SoTitle fs='10rem' ls='50px'>
        SILO
      </SoTitle>
      <SoSubTitle
        className="pb-7"
      >
        The Truth Will Surface
      </SoSubTitle>
      <SoButton width='auto' onClick={()=> navigate('/join')}>
        Join
      </SoButton>
      </SoFlex>
    </SoContainer>
  );
};

export default LandingPage;
