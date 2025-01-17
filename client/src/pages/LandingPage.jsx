import React, { lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import SoButton from "../components/SoButton";
import {
  SoCenterContainer,
  SoFlex,
  SoSection,
  SoSubTitle,
  SoTitle,
} from "../styledcomponents/globalStyles";
import { useThemeContext } from "../themeprovider/ThemeProvider";
const Spline = lazy(() => import("@splinetool/react-spline"));

const LandingPage = () => {
  const { palette } = useThemeContext();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const playAudio = () => {
      const audio = new Audio("/assets/silotheme.mp3");
      audio.play().catch((error) => {
        console.error("Audio play failed:", error);
      });
    };

    document.addEventListener("click", playAudio);

    return () => {
      document.removeEventListener("click", playAudio);
    };
  }, []);

  return (
    <SoCenterContainer>
      <SoSection>
        <SoCenterContainer>
          <Spline scene="https://prod.spline.design/76zb-VBrO2t-BqHs/scene.splinecode" />
          <SoFlex bg="unset" className="absolute" dir="column">
            <SoTitle fs="clamp(5rem, 15vw, 10rem)" ls="50px">
              SILO
            </SoTitle>
            <SoSubTitle className="pb-7">The Truth Will Surface</SoSubTitle>
            <SoButton width="auto" onClick={() => navigate("/join")}>
              Join
            </SoButton>
          </SoFlex>
        </SoCenterContainer>
      </SoSection>
    </SoCenterContainer>
  );
};

export default LandingPage;
