import styled from "styled-components";
import { colorTokens } from "./theme.js";
import { connect } from "react-redux";
import { useTheme } from "@mui/material";
import React from "react";

const mapStateToProps = (state) => ({
  mode: state.silo.mode,
});

const SiloComponent = (StyledComponent) => {
  const ConnectedStyledComponent = connect(mapStateToProps)(
    ({ dispatch, ...rest }) => {
      const { palette } = useTheme();
      return <StyledComponent {...rest} palette={palette} />;
    }
  );

  return ConnectedStyledComponent;
};

export const SoCenterContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  padding: ${(props) => props.p};
  margin: ${(props) => props.m};
  align-items: center;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const SoFlex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.dir};
  gap: ${(props) => props.gap};
  padding: ${(props) => props.p};
  margin: ${(props) => props.m};
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  @media screen and (max-width: 970px) {
    flex-direction: column;
  }
`;

export const SoGrid = styled.div`
  display: grid;
  gap: ${(props) => props.gap};
  grid-template-columns: ${(props) => props.gtc};
  padding: ${(props) => props.p};
  margin: ${(props) => props.m};
`;

export const SoShadowBox = SiloComponent(styled.div`
  box-shadow: ${(props) => props.palette.shadow.sub} 0px 25px 50px -12px;
  padding: ${(props) => props.p};
`);

export const SoBox = styled.div`
  display: flex;
  justify-content: ${(props) => props.jc};
  align-items: ${(props) => props.ai};
  width: ${(props) => (props.width ? props.width : "500px")};
  height: ${(props) => (props.height ? props.height : "500px")};
  background: ${(props) => props.bg};
  padding: ${(props) => props.p};
  margin: ${(props) => props.m};

  @media screen and (max-width: 970px) {
    width: ${(props) => (props.width ? props.width : "auto")};
    height: ${(props) => (props.height ? props.height : "auto")};
  }
`;

export const SoImg = styled.img`
  width: 100%;
`;

export const SoInput = SiloComponent(styled.input`
  padding: 10px 20px;
  width: ${(props) => props.width ? props.width : 'auto'};
  border-radius: 5px;
  background-color: ${(props) => props.palette.background.default};
  color: ${(props) => props.palette.primary.main};
  border: 2.5px solid ${(props) => props.palette.primary.third};
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
  transition: all 0.3s ease;
  font-family: "Quicksand", sans-serif;

  &:hover {
    border: 2.5px solid ${(props) => props.palette.primary.fourth};
    transition: all 0.3s ease;
  }

  &:active,
  &:focus {
    border: 2.5px solid ${(props) => props.palette.primary.third};
    transition: all 0.3s ease;
    box-shadow: ${(props) => props.palette.shadow.main} 0px 5px 15px;
  }

  &:focus-visible {
    outline: unset;
  }
`);

export const SoCover = styled.div`
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.dir};
  justify-content: ${(props) => props.jc};
  align-items: ${(props) => props.ai};
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "auto")};
  background: ${(props) => props.bg};
  gap: ${(props) => props.gap};
  padding: ${(props) => props.p};
  margin: ${(props) => props.m};
`;

export const SoTitle = SiloComponent(styled.h1`
  font-family: Silo;
  font-size: 2.5rem;
  text-align: center;
  letter-spacing: 10px;
  color: ${(props) => props.palette.primary.main};
`);

export const SoButton = SiloComponent(styled.button`
  font-size:100%;
  text-align: center;
  letter-spacing: 5px;
  color: ${(props) => props.palette.primary.option};
  background-color: ${(props) => props.palette.background.secondary};
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
  transition: all 0.3s ease;
  font-family: "Quicksand", sans-serif;
  font-weight: 500;
  padding: 10px 20px;
  width: auto;
  border-radius: 5px;
`);

export const SoDiv = styled.div`
  display: block;
`;

export const SoTypography = styled.p`
  font-size: 100%;
  letter-spacing: 1px;
  font-family: "Quicksand", sans-serif;
`;


export const SoSpan = styled.span`
  padding: ${(props) => props.p};
  margin: ${(props) => props.m};
  color: ${(props) => props.color}
`;