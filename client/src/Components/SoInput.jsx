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

const StyledInput = SiloComponent(styled.input`
  position: relative;
  padding: 7.5px 20px;
  width: ${(props) => (props.width ? props.width : "100%")};
  border-radius: 5px;
  background-color: ${(props) => props.palette.background.default};
  color: ${(props) => props.palette.primary.main};
  border: 2.5px solid ${(props) => (props.err ? props.palette.error.main : props.palette.primary.third)};
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
  transition: all 0.3s ease;
  font-family: "Quicksand", sans-serif;

  &::placeholder {
  color: ${(props) => props.palette.placeholder.main};
  }

  &:hover {
    border: 2.5px solid ${(props) => (props.err ? props.palette.error.main : props.palette.primary.fourth)};
    transition: all 0.3s ease;
  }

  &:active,
  &:focus {
    border: 2.5px solid ${(props) => (props.err ? props.palette.error.main : props.palette.primary.third)};
    transition: all 0.3s ease;
    box-shadow: ${(props) => props.palette.shadow.main} 0px 5px 15px;
  }

  &:focus-visible {
    outline: unset;
  }
`);

const HelperText = styled.span`
  color: ${(props) => (props.err ? "#FF5733" : "#FF5733")};
`;

const SoInput = ({ placeholder, width, onChange, name, value, err, helperText, type, style }) => {
  return (
    <span style={{width:"100%"}}>
      <StyledInput
        placeholder={placeholder}
        width={width}
        onChange={onChange}
        name={name}
        value={value}
        err={err}
        type={type}
        style={style}
      />
      {err && helperText && <HelperText err={err}>{helperText}</HelperText>}
    </span>
  );
};

export default SoInput;
