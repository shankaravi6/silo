import React, { useEffect, useMemo, useRef } from "react";
import {
  SoBackImg,
  SoBox,
  SoCard,
  SoContainer,
  SoCover,
  SoFlex,
  SoImg,
  SoSection,
  SoSubTitle,
  SoTitle,
  SoTypography,
} from "../styledcomponents/globalStyles";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useThemeContext } from "../themeprovider/ThemeProvider";
import NewsImg from "../assets/images/news.jpeg";
import ShoppingImg from "../assets/images/shopping.jpeg";
import RoomImg from "../assets/images/rooms.jpeg";
import SoButton from "../components/SoButton";
import { makeApiCall } from "../utils/ApiCall";
import { encryptReq } from "../utils/EncryptionReq";
import { decryptReq } from "../utils/DecryptionReq";
import BlackHole from "../assets/images/blackhole.jpg";

import HomeOld from "../assets/images/homeone.png";
import { colorTokens } from "../themeprovider/theme";
import { Fade, Slide, Zoom } from "react-awesome-reveal";

const HomePage = () => {
  const jwt = useSelector((state) => state.silo.loginResponse?.jwtToken);
  const mode = useSelector((state) => state.silo.mode);
  const navigate = useNavigate();

  useEffect(() => {
    if (!jwt) {
      navigate("/");
    } else {
      const decode = jwtDecode(jwt);
      console.log(decode);
    }
  }, []);

  const { palette } = useThemeContext();

  const testApi = async () => {
    const values = { id: "123", name: "shankar" };

    const res = await makeApiCall("/user/test", "POST", values);

    console.log("defin", res);
  };

  return (
    <>
      <SoContainer>
        <SoCover h="100vh" className="wrapper">
          <SoCover h="100%" className="header">
            {/* <SoBackImg className="background" sw='100%' url={HomeOld}/> */}
            <SoImg sw="100%" w="100%" className="foreground" src={BlackHole} />

            <SoFlex bg="unset" dir="column" p="0 0 0 0">
              <SoCover p="0 0 20px 0" sp="0 15px 10px 15px">
                <Zoom triggerOnce>
                  <SoSubTitle
                    fs="clamp(1rem, 10vw, 5.5rem)"
                    fw="600"
                    ls="20px"
                    className="pb-5"
                    style={{
                      background: "-webkit-linear-gradient(#FFF8E1, #3c0f00)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Welcome to silo
                  </SoSubTitle>

                  <SoFlex bg="none">
                    <SoTypography
                      ta="center"
                      ls="7.5px"
                      fm="sans-serif"
                      fs="clamp(.5rem, 2vw, 1rem)"
                      className="pb-5 uppercase"
                      fw="500"
                    >
                      What you have just seen, you will unsee
                    </SoTypography>
                  </SoFlex>
                </Zoom>
              </SoCover>
              <Slide triggerOnce direction="up">
                <a href="#features">
                  <SoButton width="auto" onClick={() => testApi()}>
                    Explore
                  </SoButton>
                </a>
              </Slide>
            </SoFlex>
          </SoCover>
          <SoSection
            bg="unset"
            p="50px 50px 70px 50px"
            sh="100vh"
            id="features"
          >
            <SoFlex bg="unset" gap="20px" m="20px 0 0 0">
              <SoCard p="0">
                <Link target="_blank" to="http://localhost:5174/">
                  <SoFlex p="15px 0 0 0" br="15px" dir="column">
                    <Fade>
                      <SoBox
                        sw="270px"
                        mw="270px"
                        sh="270px"
                        w="320px"
                        h="320px"
                        className="relative"
                      >
                        <SoImg br="7.5px" src={NewsImg} />
                        <SoCover
                          br="7.5px"
                          bg="linear-gradient(1deg, #1c0c04, transparent)"
                          w="100%"
                          className="absolute bottom-0"
                          p="75px 25px 25px 25px"
                        >
                          <SoFlex bg="unset" gap="10px" dir="column">
                            <SoSubTitle
                              ls="5px"
                              fs="clamp(0.5rem, 10vw, 1.25rem)"
                              className="text-nowrap"
                              color={colorTokens.drops[300]}
                            >
                              Refine
                            </SoSubTitle>
                            <SoTypography
                              color={colorTokens.drops[100]}
                              fs="11px"
                            >
                              We're dedicated to providing informative articles that inspire curiosity and spark discovery. Join us on our journey of knowledge-sharing!
                            </SoTypography>
                          </SoFlex>
                        </SoCover>
                      </SoBox>
                    </Fade>
                  </SoFlex>
                </Link>
              </SoCard>
              <SoCard p="0">
              <Link target="_blank" to="http://localhost:3000/">
                <SoFlex p="15px 0 0 0" br="15px" dir="column">
                  <Fade>
                    <SoBox
                      sw="270px"
                      sh="270px"
                      mw="270px"
                      w="320px"
                      h="320px"
                      className="relative"
                    >
                      <SoImg br="7.5px" src={ShoppingImg} />
                      <SoCover
                        br="7.5px"
                        bg="linear-gradient(1deg, #1c0c04, transparent)"
                        w="100%"
                        className="absolute bottom-0"
                        p="75px 25px 25px 25px"
                      >
                        <SoFlex bg="unset" gap="10px" dir="column">
                          <SoSubTitle
                            ls="5px"
                            fs="clamp(0.5rem, 10vw, 1.25rem)"
                            className="text-nowrap"
                            color={colorTokens.drops[300]}
                          >
                            Aerio
                          </SoSubTitle>
                          <SoTypography
                            color={colorTokens.drops[100]}
                            fs="11px"
                          >
                            We bring history to life with a carefully curated selection of ancient artifacts, vintage collectibles, and timeless treasures. Explore our collection and own a piece of the past today!
                          </SoTypography>
                        </SoFlex>
                      </SoCover>
                    </SoBox>
                  </Fade>
                </SoFlex>
              </Link>
              </SoCard>
              <SoCard p="0">
                <SoFlex p="15px 0 0 0" br="15px" dir="column">
                  <Fade>
                    <SoBox
                      sw="270px"
                      sh="270px"
                      mw="270px"
                      w="320px"
                      h="320px"
                      className="relative"
                    >
                      <SoImg br="7.5px" src={RoomImg} />
                      <SoCover
                        br="7.5px"
                        bg="linear-gradient(1deg, #1c0c04, transparent)"
                        w="100%"
                        className="absolute bottom-0"
                        p="75px 25px 25px 25px"
                      >
                        <SoFlex bg="unset" gap="10px" dir="column">
                          <SoSubTitle
                            ls="5px"
                            fs="clamp(0.5rem, 10vw, 1.25rem)"
                            className="text-nowrap"
                            color={colorTokens.drops[300]}
                          >
                            COMING SOON
                          </SoSubTitle>
                          <SoTypography
                            color={colorTokens.drops[100]}
                            fs="11px"
                          >
                            Lorem ipsum dolor sit amet consectetur adipiscing
                            elit, auctor hendrerit commodo bibendum consequat
                            suscipit, netus et ante vel a luctus.
                          </SoTypography>
                        </SoFlex>
                      </SoCover>
                    </SoBox>
                  </Fade>
                </SoFlex>
              </SoCard>
            </SoFlex>
            <br />
          </SoSection>
        </SoCover>
      </SoContainer>
    </>
  );
};

export default HomePage;
