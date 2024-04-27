import styled from "styled-components";
import { connect } from "react-redux";

import React from "react";
import { useThemeContext } from "../ThemeProvider/ThemeProvider.jsx";

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

export const SoContainer = SiloComponent(styled.div`
  width: 100%;
  height: 100vh;
  background: ${(props) =>
    props.bg ? props.bg : `${props.palette.background.high}`};
  @media screen and (max-width: 768px) {
    max-width: 1300px;
  }
`);

export const SoSection = SiloComponent(styled.section`
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding: ${({ padding }) => (padding ? padding : "unset")};
  @media screen and (max-width: 970px) {
    padding: ${({ smPadding }) => (smPadding ? smPadding : "unset")};
    height: ${(props) => (props.sh ? props.sh : "unset")};
  }
`);

export const SoCover = SiloComponent(styled.div`
  width: ${(props) => (props.width ? props.width : "unset")};
  height: ${(props) => (props.height ? props.height : "unset")};
  box-shadow: ${(props) => (props.bs ? props.bs : "unset")};
`);

export const SoFlex = SiloComponent(styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${(props) => (props.dir ? props.dir : "row")};
  width: ${(props) => (props.width ? props.width : "unset")};
  height: ${(props) => (props.height ? props.height : "unset")};
  padding: ${({ padding }) => (padding ? padding : "unset")};
  margin: ${({ margin }) => (margin ? margin : "unset")};
  gap: ${({ gap }) => (gap ? gap : "unset")};
  box-shadow: ${(props) => (props.bs ? props.bs : "unset")};
  background-color: ${(props) =>
    props.bg ? props.bg : props.palette.background.high};

  @media screen and (max-width: 970px) {
    flex-direction: column;
  }
`);

export const SoBox = styled.div`
  display: ${(props) => (props.display ? props.display : "flex")};
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "auto")};
  background: ${(props) => props.bg};
  padding: ${({ padding }) => (padding ? padding : "unset")};
  margin: ${({ margin }) => (margin ? margin : "unset")};
  box-shadow: ${(props) => (props.bs ? props.bs : "unset")};

  @media screen and (max-width: 970px) {
    width: ${(props) => (props.sw ? props.sw : "auto")};
    height: ${(props) => (props.sh ? props.sh : "auto")};
    transform: translateX(0) !important;
    display: ${(props) => (props.sdisplay ? props.sdisplay : "flex")};
  }
`;

export const SoCard = SiloComponent(styled.div`
  width: ${(props) => (props.width ? props.width : "350px")};
  height: ${(props) => (props.width ? props.width : "350px")};
  padding: ${(props) => (props.p ? props.p : "auto")};
  margin: ${(props) => (props.m ? props.m : "auto")};
  border-radius: ${(props) => (props.br ? props.br : "8px")};
  box-shadow: ${(props) =>
    props.bs ? props.bs : `${props.palette.shadow.sub} 0px 25px 50px -12px`};

  @media screen and (max-width: 960px) {
    width: ${(props) => (props.sw ? props.sw : "300px")};
    height: ${(props) => (props.sh ? props.sh : "300px")};
  }
`);

export const SoImg = styled.img`
  width: 100%;
`;

export const SoForm = styled.form`
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "auto")};
`;

export const SoTitle = SiloComponent(styled.h1`
  font-family: Silo;
  font-size: ${(props) => (props.fs ? props.fs : "2.5rem")};
  text-align: center;
  letter-spacing: ${(props) => (props.ls ? props.ls : "20px")};
  color: ${(props) => props.palette.text.main};

  @media screen and (max-width: 960px) {
    letter-spacing: 30px;
    text-align: center;
    margin-left: 30px;
  }
`);

export const SoSubTitle = SiloComponent(styled.h1`
  font-family: AquireLight;
  font-size: clamp(1rem, 5vw, 2.5rem);
  text-align: center;
  letter-spacing: 10px;
  color: ${(props) => props.palette.text.main};
`);

export const SoTypography = SiloComponent(styled.span`
  font-size: ${(props) => (props.fs ? props.fs : "clamp(1rem, 5vw, 1.5rem)")};
  font-weight: ${(props) => (props.fw ? props.fw : "normal")};
  letter-spacing: 1px;
  font-family: ${(props) => (props.fm ? props.fm : `"Quicksand", sans-serif`)};
  padding: ${(props) => props.p};
  margin: ${(props) => props.m};
  color: ${(props) => (props.color ? props.color : props.palette.text.main)};
`);
