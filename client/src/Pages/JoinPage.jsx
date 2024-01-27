import React, { useEffect, useMemo } from "react";
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
                src="https://th.bing.com/th/id/OIG2.A2pzrcdUuqsUa66NALCa?pid=ImgGn"
                alt="login_img"
              />
            ) : (
              <SoImg
                src="https://th.bing.com/th/id/OIG4.HbcvRT0w16kK632OnVRB?pid=ImgGn"
                alt="register_img"
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
            <LoginForm type={type}/>
          </SoBox>
        </SoFlex>
      </SoShadowBox>
    </SoCenterContainer>
  );
};

export default JoinPage;
