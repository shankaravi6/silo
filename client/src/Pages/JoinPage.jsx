import React, { useEffect, useMemo } from "react";
import {
  SoBox,
  SoButton,
  SoCenterContainer,
  SoCover,
  SoDiv,
  SoFlex,
  SoImg,
  SoInput,
  SoShadowBox,
  SoSpan,
  SoTitle,
  SoTypography,
} from "../globalStyles";
import { useDispatch, useSelector } from "react-redux";
import { setMode, setType } from "../State";
import { useTheme } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const JoinPage = () => {
  const { palette } = useTheme();
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.silo.mode);
  const type = useSelector((state) => state.silo.type);

  return (
    <SoCenterContainer jc="center">
      <SoShadowBox>
        <SoFlex
          dir="row"
          style={{ position: "relative" }}
        >
          <SoBox
            width="600px"
            height="600px"
            p="0px"
            style={{
              transition:"all 2s ease",
              transform: `translateX(${type === "login" ? "100%" : "0"})`,
            }}
          >
            {type == "login" ? (
              <SoImg style={{animation: "fadeIn 2s ease-in"}}
                src="https://images.unsplash.com/photo-1497334251732-c0eb68e26827?q=80&w=1918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="silo_img"
              />
            ) : (
              <SoImg 
                src="https://images.unsplash.com/photo-1512951670161-b5c6c632b00e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="silo_img"
              />
            )}
          </SoBox>
          <SoBox
            width="600px"
            height="600px"
            jc="center"
            style={{ position: "relative", transition:"all 2s ease", transform: `translateX(${type === "login" ? "-100%" : "0"})`, }}
          >
            <SoDiv
              onClick={() => dispatch(setMode())}
              style={{
                position: "absolute",
                top: "15px",
                right: "20px",
                cursor: "pointer",
              }}
            >
              {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
            </SoDiv>
            <SoCover display="flex" jc="center" dir="column" gap="25px" width="100%" p="50px">
              <SoTitle>{type == "login" ? "Login" : "Register"}</SoTitle>
              {type== "login" ? <></> : 
              <SoFlex gap="25px">
                <SoInput placeholder="First Name" width="100%" />
                <SoInput placeholder="Last Name" width="100%" />
              </SoFlex>}
              <SoInput placeholder="Email" />
              <SoInput placeholder="Password" type="password" />
              {type== "login" ? <></> : 
              <SoInput placeholder="Confirm Password" type="password" />
              }
              <SoButton type="button">{type == "login" ? "Sign In" : "Sign Up"}</SoButton>
              <SoTypography style={{ textAlign: "center" }}>
                {type == "login" ? "Don't have an account " : "Already have an account "}
                <SoSpan
                  style={{ textDecoration: "underline", cursor: "pointer" }}
                  className="set-login"
                  onClick={() => dispatch(setType())}
                >
                  {type == "login" ? "Register" : "Login"}
                </SoSpan>
              </SoTypography>
            </SoCover>
          </SoBox>
        </SoFlex>
      </SoShadowBox>
    </SoCenterContainer>
  );
};

export default JoinPage;
