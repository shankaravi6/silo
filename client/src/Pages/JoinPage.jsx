import React, { useEffect, useMemo, useState } from "react";
import {
  SoBox,
  SoCenterContainer,
  SoCover,
  SoDiv,
  SoFlex,
  SoImg,
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
import LoginForm from "../Forms/LoginForm";
import SoAlert from "../Components/SoAlert";
import { useThemeContext } from "../ThemeProvider";

const JoinPage = () => {
  const { palette } = useThemeContext();
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.silo.mode);
  const type = useSelector((state) => state.silo.type);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
    const timeout = setTimeout(() => {
      setFadeIn(false);
    }, 2000); 
    return () => clearTimeout(timeout);
  }, [type]);

  return (
    <div style={{background:palette.background.default }}>
    <SoCenterContainer>
      <SoShadowBox>
        <SoFlex dir="row" style={{ position: "relative" }}>
          <SoBox
            width="600px"
            height="600px"
            p="0px"
            display="none"
            style={{
              transition: "all 2s ease",
              transform: `translateX(${type === "login" ? "100%" : "0"})`,
            }}
          >
            <SoImg
              id="colone"
              src={
                type === "login"
                  ? "https://th.bing.com/th/id/OIG2.A2pzrcdUuqsUa66NALCa?pid=ImgGn"
                  : "https://th.bing.com/th/id/OIG4.HbcvRT0w16kK632OnVRB?pid=ImgGn"
              }
              alt="login_img"
              className={fadeIn ? "fadeIn" : ""}
            />
          </SoBox>
          <SoBox
            width="600px"
            height="600px"
            jc="center"
            sw="100vw"
            sh="100vh"
            style={{
              position: "relative",
              transition: "all 2s ease",
              transform: `translateX(${type === "login" ? "-100%" : "0"})`,
            }}
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
              {mode === "light" ? <DarkModeIcon style={{color:palette.primary.main}} /> : <LightModeIcon style={{color:palette.primary.main}}   />}
            </SoDiv>
            <LoginForm type={type} />
          </SoBox>
        </SoFlex>
      </SoShadowBox>
      <SoAlert />
    </SoCenterContainer>
    </div>
  );
};

export default JoinPage;
