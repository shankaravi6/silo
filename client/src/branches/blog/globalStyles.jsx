import styled, { createGlobalStyle } from "styled-components";
import { connect } from "react-redux";

import React from "react";
import { useThemeContext } from "../../themeprovider/ThemeProvider.jsx";

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

export const BlogStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family:RoyalKevino;
  }
`;

export const BlogContainer = SiloComponent(styled.div`
  width: 100%;
  height: 100vh;
  background: ${(props) =>
    props.bg ? props.bg : `${props.palette.background.high}`};
  @media screen and (max-width: 768px) {
    max-width: 1300px;
  }
`);

export const BlogSection = SiloComponent(styled.section`
  width: 100%;
  height: ${(props) => props.h ? props.h : 'unset'};
  max-width: ${(props) => props.mw ? props.mw : '1300px'};
  margin-right: auto;
  margin-left: auto;
  background: ${(props) =>
    props.bg ? props.bg : `${props.palette.background.high}`};
  padding: ${(props) => (props.p ? props.p : "unset")};
  @media screen and (max-width: 970px) {
    padding: ${(props) => (props.sp ? props.sp : "unset")};
    height: ${(props) => (props.sh ? props.sh : "unset")};
  }
`);

export const BlogCover = SiloComponent(styled.div`
  width: ${(props) => (props.w ? props.w : "unset")};
  height: ${(props) => (props.h ? props.h : "unset")};
  box-shadow: ${(props) => (props.bs ? props.bs : "unset")};
  transform: ${(props) => props.tr ? props.tr : 'unset'};
  background: ${(props) =>
    props.bg ? props.bg : 'unset'};
  padding: ${(props) => (props.p ? props.p : "unset")};
  margin: ${(props) => (props.m ? props.m : "unset")};
  border-radius: ${(props) => (props.br ? props.br : "unset")};

`);

export const BlogFlex = SiloComponent(styled.div`
  display: flex;
  align-items: ${(props) => props.al ? props.al : 'center'};
  justify-content: center;
  flex-direction: ${(props) => (props.dir ? props.dir : "row")};
  width: ${(props) => (props.w ? props.w : "unset")};
  height: ${(props) => (props.h ? props.h : "unset")};
  padding: ${(props) => (props.p ? props.p : "unset")};
  margin: ${(props) => (props.m ? props.m : "unset")};
  gap: ${({ gap }) => (gap ? gap : "unset")};
  box-shadow: ${(props) => (props.bs ? props.bs : "unset")};
  background-color: ${(props) =>
    props.bg ? props.bg : props.palette.background.high};
  border-radius: ${(props) => (props.br ? props.br : "unset")};

  @media screen and (max-width: 970px) {
    flex-direction: ${(props) => props.sd ? props.sd : 'column'};
  }
`);

export const BlogBox = styled.div`
  display: ${(props) => (props.display ? props.display : "flex")};
  width: ${(props) => (props.w ? props.w : "auto")};
  height: ${(props) => (props.h ? props.h : "auto")};
  background: ${(props) => props.bg ? props.bg : 'unset'};
  padding: ${(props) => (props.p ? props.p : "unset")};
  margin: ${(props) => (props.m ? props.m : "unset")};
  box-shadow: ${(props) => (props.bs ? props.bs : "unset")};

  @media screen and (max-width: 970px) {
    width: ${(props) => (props.sw ? props.sw : "auto")};
    height: ${(props) => (props.sh ? props.sh : "auto")};
    transform: translateX(0) !important;
    display: ${(props) => (props.sdisplay ? props.sdisplay : "flex")};
  }
`;

export const BlogCard = SiloComponent(styled.div`
  width: ${(props) => (props.w ? props.w : "350px")};
  height: ${(props) => (props.h ? props.h : "350px")};
  padding: ${(props) => (props.p ? props.p : "auto")};
  margin: ${(props) => (props.m ? props.m : "auto")};
  border-radius: ${(props) => (props.br ? props.br : "15px")};
  background: ${(props) => props.bg ? props.bg : `${props.palette.background.high}`};
  box-shadow: ${(props) =>
    props.bs ? props.bs : `${props.palette.shadow.sub} 0px 25px 50px -12px`};
  @media screen and (max-width: 960px) {
    width: ${(props) => (props.sw ? props.sw : "300px")};
    height: ${(props) => (props.sh ? props.sh : "300px")};
  }
`);

export const BlogImg = styled.img`
    width: ${(props) => (props.w ? props.w : "100%")};
    border-radius: ${(props) => (props.br ? props.br : "unset")};
    @media screen and (max-width: 970px) {
    width:unset;
  }
`;

export const BlogBackImg = styled.div`
    width: ${(props) => (props.w ? props.w : "100%")};
    height: ${(props) => (props.h ? props.h : "100%")};
    background: ${props => props.url ? `url(${props.url})` : 'none'};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    @media screen and (max-width: 970px) {
    width:unset;
  }
`;

export const BlogForm = styled.form`
  width: ${(props) => (props.w ? props.w : "100%")};
  height: ${(props) => (props.h ? props.h : "auto")};
`;

export const BlogTitle = SiloComponent(styled.h1`
  font-family: Royalkevino;
  font-size: ${(props) => (props.fs ? props.fs : "2.5rem")};
  text-align: ${(props) => props.ta ? props.ta : 'center'};
  letter-spacing: ${(props) => (props.ls ? props.ls : "0px")};
  color: ${(props) => props.palette.text.main};
  width: ${(props) => props.w};

  @media screen and (max-width: 960px) {
    letter-spacing: 0px;
    text-align: center;
    margin-left: 0px;
    width: unset;
    position: unset;
  }

  
  /* &::before {
    content: "";
    display: inline-block;
    height: 8px;
    width: 100px;
    background-color: ${(props) => props.palette.text.main};
  }
  
  &::after {
    content: "";
    display: inline-block;
    height: 8px;
    width: 100px;
    background-color: ${(props) => props.palette.text.main};
  } */

`);

export const BlogSubTitle = SiloComponent(styled.h1`
  font-family: Ravigsfen;
  font-size:  ${(props) => props.fs ? props.fs : '1.5rem'};
  text-align: ${(props) => props.ta ? props.ta : 'center'};
  letter-spacing: ${(props) => props.ls ? props.ls : '0px'};
  color: ${(props) => props.color ? props.color : props.palette.text.main};
  text-shadow: ${(props) => props.ts ? props.ts : 'unset'};
  background: ${(props) => props.bg ? props.bg : 'unset'};
  font-weight: ${(props) => props.fw ? props.fw : 'unset'};
  width: ${(props) => (props.w ? props.w : "unset")};
  height: ${(props) => (props.h ? props.h : "unset")};

  @media screen and (max-width: 960px) {
    width: unset;
    padding: ${(props) => props.smp ? props.smp : 'unset'};
  }

  &::before {
    content: "";
    display: inline-block;
    height: ${(props) => props.bh ? props.bh : '5px'};
    width: ${(props) => props.bw ? props.bw : '100px'};
    background-color: ${(props) => props.palette.text.main};
  }
  
  /* &::after {
    content: "";
    display: inline-block;
    height: 5px;
    width: 100px;
    background-color: ${(props) => props.palette.text.main};
  } */
`);

export const BlogTypography = SiloComponent(styled.span`
  font-size: ${(props) => (props.fs ? props.fs : "clamp(1rem, 5vw, 1.5rem)")};
  font-weight: ${(props) => (props.fw ? props.fw : "normal")};
  letter-spacing: 1px;
  font-family: ${(props) => (props.fm ? props.fm : `Tiresias`)};
  padding: ${(props) => props.p};
  margin: ${(props) => props.m};
  color: ${(props) => (props.color ? props.color : props.palette.text.main)};
  text-shadow: ${(props) => props.ts ? props.ts : 'unset'};
`);

