import React, { useEffect, useMemo, useState } from "react";
import {
  SoBox,
  SoCenterContainer,
  SoContainer,
  SoCover,
  SoFlex,
  SoImg,
  SoSection,
} from "../styledcomponents/globalStyles";
import { useDispatch, useSelector } from "react-redux";
import { setMode, setType } from "../state";

import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LoginForm from "../forms/LoginForm";
import SoAlert from "../components/SoAlert";
import { useThemeContext } from "../themeprovider/ThemeProvider";
import loginImg from "../assets/images/login.jpeg";
import registerImg from "../assets/images/register.jpeg";

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
    <SoCenterContainer>
      <SoSection id="join">
        <SoFlex>
          <SoBox
            w="600px"
            h="600px"
            sdisplay="none"
            style={{
              transition: "all 2s ease",
              transform: `translateX(${type === "login" ? "100%" : "0"})`,
            }}
            bs={`${palette.shadow.sub} 0px 25px 50px -12px`}
          >
            <SoImg
              id="img"
              src={type === "login" ? loginImg : registerImg}
              alt="login_img"
              className={fadeIn ? "fadeIn" : ""}
            />
          </SoBox>
          <SoBox
            w="600px"
            h="600px"
            sw="100vw"
            sh="100vh"
            className="relative"
            style={{
              transition: "all 2s ease",
              transform: `translateX(${type === "login" ? "-100%" : "0"})`,
            }}
            bs={`${palette.shadow.sub} 0px 25px 50px -12px`}
          >
            {/* <SoBox
              onClick={() => dispatch(setMode())}
              className="absolute top-5 right-5 cursor-pointer"
            >
              {mode === "light" ? (
                <DarkModeIcon style={{ color: palette.text.main }} />
              ) : (
                <LightModeIcon style={{ color: palette.text.main }} />
              )}
            </SoBox> */}
            <LoginForm type={type} />
          </SoBox>
        </SoFlex>
      </SoSection>
      <SoAlert />
    </SoCenterContainer>
  );
};

export default JoinPage;
