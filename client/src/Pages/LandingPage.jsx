import React from "react";
import { Button, useTheme } from "@mui/material";
import { setMode } from "../State";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import SoButton from "../Components/SoButton";

export const Heading = styled.h1`
  font-family: Silo;
  font-size: 10rem;
  letter-spacing: 50px;

  @media screen and (max-width: 960px) {
    font-size: 5rem;
    letter-spacing: 30px;
    text-align: center;
    margin-left: 30px;
  }
`;

const LandingPage = () => {
 
  const { palette } = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div
      className="home-page"
      style={{ background: palette.background.default }}
    >
      <Heading style={{ color: palette.primary.main }}>
        SILO
      </Heading>
      <p
        className="home-description pb-7"
        style={{ color: palette.primary.sub }}
      >
        The Truth Will Surface
      </p>
      <SoButton onClick={()=> navigate('/join')}>
        Join
      </SoButton>
    </div>
  );
};

export default LandingPage;
