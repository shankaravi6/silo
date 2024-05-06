import React from "react";
import { setMode } from "../state";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import SoButton from "../components/SoButton";
import { SoContainer, SoFlex, SoSection, SoSubTitle, SoTitle} from "../styledcomponents/globalStyles";
import { useThemeContext } from "../themeprovider/ThemeProvider";



const LandingPage = () => {
 
  const { palette } = useThemeContext();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <SoContainer className='flex justify-center items-center'>
      <SoSection>
        <SoFlex dir='column'>
        <SoTitle fs='clamp(5rem, 15vw, 10rem)' ls='50px'>
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
      </SoSection>
    </SoContainer>
  );
};

export default LandingPage;
