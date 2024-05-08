import styled from "styled-components";
import { connect } from "react-redux";

import React from "react";
import { useThemeContext } from "../../../../themeprovider/ThemeProvider";
import { SoSection } from "../../../../styledcomponents/globalStyles";
import { Link } from "react-router-dom";

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

export const SoNavBar = SiloComponent(styled.nav`
  position: relative;
  z-index: 99;
  width: 100%;
  padding: 5px;
  background: ${props => props.palette.background.high};
`);

export const SoNavContainer = styled(SoSection)`
  position: relative;
  max-width: 1300px;
  padding: 0px 25px;
  height: 100px;
  line-height: normal;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${SoSection}

  @media screen and (max-width:970px) {
	padding: unset;
  }
`;


export const NavLogo = SiloComponent(styled(Link)`
	color: ${(props) => props.palette.text.low};
	justify-self: flex-start;
	cursor: pointer;
	text-decoration: none;
	font-size: 2rem;
	display: flex;
	align-items: center;
	z-index: 50;
`);

export const NavIcon = styled.img`
	margin-right: 0rem;
	width: 5.5rem;
`;

export const MobileIcon = styled.div`
	display: none;
	z-index: 50;

	@media screen and (max-width: 960px) {
		display: block;
		position: absolute;
		top: 15px;
		right: 0;
		transform: translate(-100%, 60%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`;

export const NavMenu = SiloComponent(styled.div`
	display: flex;
	align-items: center;
    justify-content:space-between;
	list-style: none;
	text-align: center;
    width: clamp(25rem, 100vw, 55rem);
    color: ${(props) => props.palette.text.low};

	@media screen and (max-width: 960px) {
		flex-direction: column;
		width: 100%;
		height: 100vh;
		position: fixed;
		padding-top: 0rem;
		top: 0;
		left: 0;
        justify-content:center;
        overflow-y:auto;
		opacity: ${({ show }) => (show ? 1 : 0)};
		visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
		transform: translateY(${({ show }) => (show ? '0' : '-10px')});
		transition: opacity 0.5s ease;
		background-color: ${(props) => props.palette.background.high};
	}

	> li:first-child {
		margin-left: auto;
	}
`);


export const NavLinks = SiloComponent(styled(Link)`
    color: ${(props) => props.palette.text.low};
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0.5rem 1rem;
	height: 100%;
    font-family: Tiresias;

	&:hover {
		color:  ${(props) => props.palette.text.main};
		transition: all 0.3s ease;
	}

	@media screen and (max-width: 960px) {
		text-align: center;
		padding: 0rem;
		width: unset;
        height: unset;
		display: table;
        line-height:50px;

		&:hover {
			color:${(props) => props.palette.text.main};
			transition: all 0.3s ease;
		}
	}
`);


export const NavSection = SiloComponent(styled(Link)`
    color: ${(props) => props.palette.text.low};
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0.5rem 1rem;
	height: 100%;

	&:hover {
		color: ${(props) => props.palette.text.main};
		transition: all 0.3s ease;
	}

	@media screen and (max-width: 960px) {
		text-align: center;
		padding: 0rem;
		width: unset;
        height: unset;
		display: table;

		&:hover {
			color: ${(props) => props.palette.text.main};
			transition: all 0.3s ease;
		}
	}
`);


export const NavBtnLink = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	padding: 8px 16px;
	height: 100%;
	width: 100%;
	border: none;
	outline: none;
`;