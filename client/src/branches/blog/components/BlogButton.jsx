import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { useThemeContext } from "../../../themeprovider/ThemeProvider";

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
  border-radius: 0px;

  &:hover {
  box-shadow: ${(props) => props.palette.shadow.main} 0px 5px 15px;
  background-color: ${(props) => props.palette.background.mid};
  }
`);


const BlogButton = ({ height, width, onChange, onSubmit, onClick, onBlur, type, children, style }) => {
  return (
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
  );
};

export default BlogButton;
