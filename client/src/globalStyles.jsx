import styled from "styled-components";
import { colorTokens } from "./theme.js";
import { connect } from "react-redux";
import { useTheme } from "@mui/material";
import React from "react";
import { useThemeContext } from "./ThemeProvider.jsx";

const mapStateToProps = (state) => ({
  mode: state.silo.mode,
});

const SiloComponent = (StyledComponent) => {
  const ConnectedStyledComponent = connect(mapStateToProps)(
    ({ dispatch, ...rest }) => {
      const { palette } = useThemeContext();
      return <StyledComponent {...rest} palette={palette} />;
    }
  );

  return ConnectedStyledComponent;
};

export const SoCenterContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: ${(props) => props.p};
  margin: ${(props) => props.m};
  align-items: center;
`;

export const SoFlex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.dir};
  gap: ${(props) => props.gap};
  padding: ${(props) => props.p};
  margin: ${(props) => props.m};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  justify-content: ${(props) => (props.jc ? props.jc : "center")};
  align-items: ${(props) => props.ai};


  @media screen and (max-width: 970px) {
    flex-direction: column;
    justify-content:center;
    align-items: center;
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
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "auto")};
  background: ${(props) => props.bg};
  padding: ${(props) => props.p};
  margin: ${(props) => props.m};

  @media screen and (max-width: 970px) {
    width: ${(props) => (props.sw ? props.sw : "auto")};
    height: ${(props) => (props.sh ? props.sh : "auto")};
    transform: translateX(0) !important;
    display: ${(props) => props.display};
  }
`;

export const SoImg = styled.img`
  width: 100%;
`;

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

export const SoForm = styled.form`
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


export const SoDiv = styled.div`
  display: block;
`;

export const SoTypography = SiloComponent(styled.p`
  font-size: ${(props) => (props.fs ? props.fs : "100%")};
  letter-spacing: 1px;
  font-family: ${(props) => (props.fm ? props.fm : `"Quicksand", sans-serif`)};
  padding: ${(props) => props.p};
  margin: ${(props) => props.m};
  color: ${(props) => props.palette.primary.main};
`);


export const SoSpan = styled.span`
  padding: ${(props) => props.p};
  margin: ${(props) => props.m};
  color: ${(props) => props.color}
`;