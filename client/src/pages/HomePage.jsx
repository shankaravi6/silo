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
import { useSelector } from "react-redux";
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
import HomeBack from "../assets/images/homeback.jpeg";
import HomeOne from "../assets/images/homeone.png";
import { colorTokens } from "../themeprovider/theme";
import { Fade, JackInTheBox, Slide, Zoom } from "react-awesome-reveal";

const HomePage = () => {
  const jwt = useSelector((state) => state.silo.loginResponse?.jwtToken);
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
      <SoContainer className="justify-center items-center">
        <SoCover h="100vh" className="wrapper">
          <SoCover h="100%" className="header">
            <SoBackImg className="background" sw='100%' url={HomeBack}/>
            <SoImg sw='100%' w="55%" className="foreground" src={HomeOne} />
            <SoFlex bg="unset" dir="column" p="0 0 20px 0">
              <Zoom triggerOnce>
              <SoSubTitle
                fs="clamp(2rem, 10vw, 4.5rem)"
                fw="600"
                color={palette.text.main}
                className="pb-5"
              >
                Welcome to silo world
              </SoSubTitle>
              </Zoom>
              <Slide triggerOnce direction="up">
              <SoButton width="auto" onClick={() => testApi()}>
                Explore
              </SoButton>
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
              <Link to='/blog'>
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
                            Blog & Articles
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
                            Shopping
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
                            Hotels
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
          </SoSection>
          {/* <SoSection p="50px" mw='unset' h='800px' sh="100vh" id="about">
            </SoSection> */}
        </SoCover>
      </SoContainer>
    </>
  );
};

export default HomePage;
