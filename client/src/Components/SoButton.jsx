import { useTheme } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

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

const StyledButton = SiloComponent(styled.button`
  font-size:100%;
  text-align: center;
  letter-spacing: 5px;
  color: ${(props) => props.palette.primary.option};
  background-color: ${(props) => props.palette.background.secondary};
  box-shadow: ${(props) => props.palette.shadow.main} 0px 2px 4px;
  transition: all 0.3s ease;
  font-family: "Quicksand", sans-serif;
  font-weight: 500;
  padding: 10px 20px;
  width: auto;
  border-radius: 5px;

  &:hover {
  box-shadow: ${(props) => props.palette.shadow.main} 0px 5px 15px;
  background-color: ${(props) => props.palette.background.third};
  }
`);


const SoButton = ({ height, width, onChange, onSubmit, onClick, onBlur, type, children }) => {
  return (
      <StyledButton
        height={height}
        width={width}
        onChange={onChange}
        onSubmit={onSubmit}
        onClick={onClick}
        onBlur={onBlur}
        type={type}
      >
      {children}
      </StyledButton>
  );
};

export default SoButton;
