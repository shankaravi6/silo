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
   width: ${(props) => props.width  ? props.width :'100%'};
  height: ${(props) => props.height ? props.height :'100vh'};
  padding: ${(props) => props.p};
  margin: ${(props) => props.m};
  background-color: ${(props) => props.bg ? props.bg : props.palette.background.high};
`);

export const SoFlex = SiloComponent(styled.div`
  display: flex;
  flex-direction: ${(props) => props.dir};
  gap: ${(props) => props.gap};
  padding: ${(props) => props.p};
  margin: ${(props) => props.m};
  width: ${(props) => props.width  ? props.width :'auto'};
  height: ${(props) => props.height ? props.height :'auto'};
  justify-content: ${(props) => (props.jc ? props.jc : "center")};
  align-items: ${(props) => props.ai ? props.ai : "center"};
  background-color: ${(props) => props.bg ? props.bg : props.palette.background.high};
  box-shadow: ${(props) => props.bs ? props.bs : 'unset'};


  @media screen and (max-width: 970px) {
    flex-direction: column;
    justify-content:center;
    align-items: center;
    width: ${(props) => (props.sw ? props.sw : "100%")};
    height: ${(props) => (props.sh ? props.sh : "auto")};
  }

  @media screen and (min-width: 970px) and (max-width: 1380px) {
    flex-direction: column;
    justify-content:center;
    align-items: center;
    width: ${(props) => (props.mw ? props.mw : "100%")};
    height: ${(props) => (props.mh ? props.mh : "auto")};
  }
`);

export const SoGrid = styled.div`
  display: grid;
  gap: ${(props) => props.gap};
  grid-template-columns: ${(props) => props.gtc};
  padding: ${(props) => props.p};
  margin: ${(props) => props.m};
`;


export const SoBox = styled.div`
  display: ${(props) => (props.display ? props.display : "flex")};
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "auto")};
  background: ${(props) => props.bg};

  @media screen and (max-width: 970px) {
    width: ${(props) => (props.sw ? props.sw : "auto")};
    height: ${(props) => (props.sh ? props.sh : "auto")};
    transform: translateX(0) !important;
    display: ${(props) => (props.sdisplay ? props.sdisplay : "flex")};
  }
`;

export const SoImg = styled.img`
  width: 100%;
`;

export const SoForm = styled.form`
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "auto")};
`;

export const SoTitle = SiloComponent(styled.h1`
  font-family: Silo;
  font-size: ${(props) => props.fs ? props.fs : '2.5rem'};  
  text-align: center;
  letter-spacing: ${(props) => props.ls ? props.ls : '20px'};
  color: ${(props) => props.palette.text.main};


  @media screen and (max-width: 960px) {
    font-size: 2.5rem;
    letter-spacing: 30px;
    text-align: center;
    margin-left: 30px;
  }
`);


export const SoSubTitle = SiloComponent(styled.h1`
  font-family: AquireLight;
  font-size: 2.5rem;
  text-align: center;
  letter-spacing: 10px;
  color: ${(props) => props.palette.text.main};
`);



export const SoTypography = SiloComponent(styled.span`
  font-size: ${(props) => (props.fs ? props.fs : "100%")};
  font-weight: ${(props) => (props.fw ? props.fw : "normal")};
  letter-spacing: 1px;
  font-family: ${(props) => (props.fm ? props.fm : `"Quicksand", sans-serif`)};
  padding: ${(props) => props.p};
  margin: ${(props) => props.m};
  color: ${(props) => props.color ? props.color :props.palette.text.main};
`);


export const SoCard = SiloComponent(styled.div`
  width: ${(props) => props.width ? props.width : '450px'};
  height: ${(props) => props.width ? props.width : '450px'};
  padding: ${(props) => props.p ? props.p :'auto'};
  margin: ${(props) => props.m ? props.m :'auto'};
  border-radius: ${(props) => props.br? props.br:'8px'};
  box-shadow: ${(props) => props.bs ? props.bs : `${props.palette.shadow.sub} 0px 25px 50px -12px`};
`);