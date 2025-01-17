import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { useThemeContext } from "../themeprovider/ThemeProvider";
import { colorTokens } from "../themeprovider/theme.js";


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

const StyledButton = SiloComponent(styled.button`
  font-size:100%;
  text-align: center;
  letter-spacing: 5px;
  color: ${(props) => props.palette.text.high};
  background-color: ${(props) => props.palette.background.low};
  box-shadow: ${(props) => props.palette.shadow.main} 0px 2px 4px;
  transition: all 0.3s ease;
  font-weight: 500;
  padding: 10px 20px;
  width: ${(props) => props.width ? props.width : '100%'};
  border-radius: 5px;

  &:hover {
  box-shadow: ${(props) => props.palette.shadow.main} 0px 5px 15px;
  background-color: ${(props) => props.palette.background.mid};
  }
`);

const StyledOutlineButton = SiloComponent(styled.button`
  font-size: 100%;
  text-align: center;
  letter-spacing: 5px;
  color: ${colorTokens.drops[200]};
  background-color: transparent;
  box-shadow: ${(props) => props.palette.shadow.main} 0px 2px 4px;
  transition: all 0.3s ease;
  font-weight: 500;
  padding: 10px 20px;
  width: ${(props) => (props.width ? props.width : '100%')};
  border-radius: 5px;
  border: ${(props) => `1px solid ${colorTokens.drops[200]}`};

  &:hover {
    box-shadow: ${(props) => props.palette.shadow.main} 0px 5px 15px;
    background-color: ${(props) => props.palette.background.high};
    color: ${(props) => (props.mode === "dark" ? colorTokens.drops[200] : colorTokens.drops[800])};
  }
`);



const SoButton = ({ height, width, onChange, onSubmit, onClick, onBlur, type, children, style, variant }) => {
  return (
    <>
    {variant == "outline" ?
      <StyledOutlineButton
        height={height}
        width={width}
        onChange={onChange}
        onSubmit={onSubmit}
        onClick={onClick}
        onBlur={onBlur}
        type={type}
        style={style}
      >
      {children}
      </StyledOutlineButton>
      :
      <StyledButton
      height={height}
      width={width}
      onChange={onChange}
      onSubmit={onSubmit}
      onClick={onClick}
      onBlur={onBlur}
      type={type}
      style={style}
    >
    {children}
    </StyledButton>
    }
    </>
  );
};

export default SoButton;
