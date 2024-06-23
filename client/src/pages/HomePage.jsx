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
import Spotify from "../assets/images/icons/spotify.png";
import MegaPhone from "../assets/images/icons/megaphone.png";
import Rdio from "../assets/images/icons/rdio.png";
import Zune from "../assets/images/icons/zune.png";
import Boost from "../assets/images/icons/boost.png";



import HomeOld from "../assets/images/homeone.png";
import { colorTokens } from "../themeprovider/theme";
import { Fade, JackInTheBox, Slide, Zoom } from "react-awesome-reveal";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import RedditIcon from "@mui/icons-material/Reddit";
import YouTubeIcon from "@mui/icons-material/YouTube";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";

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
            <SoImg sw="100%" w="100%" className="foreground" src={HomeBack} />

            <SoFlex bg="unset" dir="column" p="0 0 0 0">
              <SoCover p="0 0 20px 0" sp="0 15px 10px 15px">
                <Zoom triggerOnce>
                  <SoSubTitle
                    fs="clamp(1rem, 7vw, 4rem)"
                    fw="600"
                    color={colorTokens.drops[300]}
                    className="pb-5"
                  >
                    Welcome to silo
                  </SoSubTitle>
                  <SoSection bg="none">
                    <SoTypography color={colorTokens.drops[200]}>
                      Lorem ipsum dolor sit amet consectetur adipiscing elit
                      tortor consequat sem, pretium imperdiet porta diam nibh
                      class curae maecenas feugiat. imperdiet porta diam nibh
                      class curae maecenas feugiat.
                    </SoTypography>
                  </SoSection>
                </Zoom>
              </SoCover>
              <Slide triggerOnce direction="up">
                <SoButton variant="outline" width="auto" onClick={() => testApi()}>
                  Explore
                </SoButton>
              </Slide>
              <SoSection bg="none" p="0px 0 0 0">
                <SoFlex
                  bg="none"
                  jc="space-evenly"
                  p="30px 0 0 0"
                  sp="25px 0 0 0"
                  gap="20px"
                >
                  <SoFlex gap="20px" bg="none">
                    <SoFlex bg="none" dir="column">
                      <SoSubTitle
                        color={colorTokens.drops[100]}
                        fs="clamp(2.5rem,10vw, 7rem)"
                      >
                        #01
                      </SoSubTitle>
                      {/* <SoTypography
                        m="-30px 0 0 0"
                        color={colorTokens.drops[100]}
                        fs="clamp(1.5rem,5vw, 2rem)"
                      >
                        Platform
                      </SoTypography> */}
                    </SoFlex>
                    <SoFlex
                      gap="20px"
                      al="start"
                      bg="none"
                      dir="column"
                      sm_dir="row"
                    >
                      <SoFlex bg="none" gap="10px">
                        <SoCover
                          border={`2px solid ${colorTokens.drops[300]}`}
                          br="50px"
                          p="5px"
                          sp="5px"
                        >
                          <AllInclusiveIcon
                            style={{ color: colorTokens.drops[200] }}
                          />
                        </SoCover>
                        <SoTypography
                          fs="clamp(1rem, 3rem, 1.2rem)"
                          color={colorTokens.drops[200]}
                        >
                          Infinite Capacity
                        </SoTypography>
                      </SoFlex>
                      <SoFlex bg="none" gap="10px">
                        <SoCover
                          border={`2px solid ${colorTokens.drops[300]}`}
                          br="50px"
                          p="5px"
                          sp="5px"
                        >
                          <PrecisionManufacturingIcon
                            style={{ color: colorTokens.drops[200] }}
                          />
                        </SoCover>
                        <SoTypography
                          fs="clamp(1rem, 3rem, 1.2rem)"
                          color={colorTokens.drops[200]}
                        >
                          Productivity
                        </SoTypography>
                      </SoFlex>
                    </SoFlex>
                  </SoFlex>
                  <SoBox>
                    <SoFlex dir="column" bg="none" gap="20px">
                      <SoTypography color={colorTokens.drops[100]}>
                        FOLLOW US
                      </SoTypography>
                      <SoFlex sm_dir="row" gap="20px" bg="none">
                        <SoCover
                          border={`2px solid ${colorTokens.drops[300]}`}
                          br="7.5px"
                          p="13px"
                          sp="5px"
                          className="mt-3"
                        >
                          <FacebookIcon
                            style={{ color: colorTokens.drops[200] }}
                          />
                        </SoCover>
                        <SoCover
                          border={`2px solid ${colorTokens.drops[300]}`}
                          br="7.5px"
                          p="13px"
                          sp="5px"
                          className="mt-3"
                        >
                          <InstagramIcon
                            style={{ color: colorTokens.drops[200] }}
                          />
                        </SoCover>
                        <SoCover
                          border={`2px solid ${colorTokens.drops[300]}`}
                          br="7.5px"
                          p="13px"
                          sp="5px"
                          className="mt-3"
                        >
                          <XIcon style={{ color: colorTokens.drops[200] }} />
                        </SoCover>
                        <SoCover
                          border={`2px solid ${colorTokens.drops[300]}`}
                          br="7.5px"
                          p="13px"
                          sp="5px"
                          className="mt-3"
                        >
                          <RedditIcon
                            style={{ color: colorTokens.drops[200] }}
                          />
                        </SoCover>
                        <SoCover
                          border={`2px solid ${colorTokens.drops[300]}`}
                          br="7.5px"
                          p="13px"
                          sp="5px"
                          className="mt-3"
                        >
                          <YouTubeIcon
                            style={{ color: colorTokens.drops[200] }}
                          />
                        </SoCover>
                      </SoFlex>
                    </SoFlex>
                  </SoBox>
                </SoFlex>
              </SoSection>

              <SoSection sp="0 0 0px 0" bg="none">
              <SoBox  sdisplay='none'>
              {/* <marquee scrollamount='25'> */}

                <SoFlex p="50px 0 0 0" w='100%' bg="none" sm_dir="row" al="space-evenly" gap="50px">
                  <SoBox p="5px 15px" br="7.5px" bg="#cab08f8c">
                    <SoFlex bg="none" gap="10px" sm_dir="row">
                    <SoBox  w="30px" h="30px" sw="30px" sh="30px">
                      <SoImg src={Spotify} />
                      </SoBox>
                      <SoTypography
                        fs="clamp(1rem,5vw,1.15rem)"
                        color={colorTokens.drops[200]}
                      >
                        Spotify
                      </SoTypography>
                    </SoFlex>
                  </SoBox>
                  <SoBox p="5px 15px" br="7.5px" bg="#cab08f8c">
                    <SoFlex bg="none" gap="10px" sm_dir="row">
                    <SoBox  w="30px" h="30px" sw="30px" sh="30px">
                      <SoImg src={Zune} />
                      </SoBox>
                      <SoTypography
                        fs="clamp(1rem,5vw,1.15rem)"
                        color={colorTokens.drops[200]}
                      >
                        Zune
                      </SoTypography>
                    </SoFlex>
                  </SoBox>
                  <SoBox p="5px 15px" br="7.5px" bg="#cab08f8c">
                    <SoFlex bg="none" gap="10px" sm_dir="row">
                    <SoBox  w="30px" h="30px" sw="30px" sh="30px">
                      <SoImg src={Boost} />
                      </SoBox>
                      <SoTypography
                        fs="clamp(1rem,5vw,1.15rem)"
                        color={colorTokens.drops[200]}
                      >
                        Boost
                      </SoTypography>
                    </SoFlex>
                  </SoBox>
                  <SoBox p="5px 15px" br="7.5px" bg="#cab08f8c">
                    <SoFlex bg="none" gap="10px" sm_dir="row">
                    <SoBox  w="30px" h="30px" sw="30px" sh="30px">
                      <SoImg src={MegaPhone} />
                      </SoBox>
                      <SoTypography
                        fs="clamp(1rem,5vw,1.15rem)"
                        color={colorTokens.drops[200]}
                      >
                        MegaPhone
                      </SoTypography>
                    </SoFlex>
                  </SoBox>
                  <SoBox p="5px 15px" br="7.5px" bg="#cab08f8c">
                    <SoFlex bg="none" gap="10px" sm_dir="row">
                    <SoBox  w="30px" h="30px" sw="30px" sh="30px">
                      <SoImg src={Rdio} />
                      </SoBox>
                      <SoTypography
                        fs="clamp(1rem,5vw,1.15rem)"
                        color={colorTokens.drops[200]}
                      >
                        Rdio
                      </SoTypography>
                    </SoFlex>
                  </SoBox>
                </SoFlex>
                
              {/* </marquee> */}
              </SoBox>
              </SoSection>
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
                <Link to="/blog">
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
                            TV SHOWS
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
          {/* <SoSection p="50px" mw='unset' h='800px' sh="100vh" id="about">
            </SoSection> */}
        </SoCover>
      </SoContainer>
    </>
  );
};

export default HomePage;
