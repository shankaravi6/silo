import React, { useEffect, useMemo } from "react";
import {
  SoBox,
  SoCard,
  SoContainer,
  SoCover,
  SoFlex,
  SoImg,
  SoSection,
  SoSubTitle,
  SoTypography,
} from "../StyledComponent/globalStyles";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useThemeContext } from "../ThemeProvider/ThemeProvider";
import NewsImg from "../assets/images/news.jpeg";
import ShoppingImg from "../assets/images/shopping.jpeg";
import RoomImg from "../assets/images/rooms.jpeg";
import SoButton from "../Components/SoButton";
import { makeApiCall } from "../Functions/ApiCall";
import { encryptReq } from "../Functions/EncryptionReq";
import { decryptReq } from "../Functions/DecryptionReq";
import HomeBack from "../assets/images/homeback.png";
import HomeOne from "../assets/images/homeone.png";

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
            <SoImg className="background" src={HomeBack} />
            <SoImg w="50%" className="foreground" src={HomeOne} />
            <SoFlex bg='unset' dir="column" p="0 0 20px 0">
              <SoSubTitle fs="50px" color='white' ts={`0 0 5px ${palette.text.main}`} className="pb-2">
                Welcome to silo world!
              </SoSubTitle>
              <SoTypography
                fs="clamp(1rem, 5vw, 2rem)"
                className="pb-5"
                color={palette.text.low}
                ts={`0 0 5px ${palette.text.low}`}
              >
                Explore the our features
              </SoTypography>
              <SoButton width="auto" onClick={() => testApi()}>
                Test Api
              </SoButton>
            </SoFlex>
            
          </SoCover>
          <SoSection bg='unset' p="50px" sh="100vh" id="join">
              <SoFlex bg='transparent' gap="35px" m="20px 0 0 0">
                <SoCard p="0">
                  <SoFlex br='15px' p='10px' dir="column">
                    <SoTypography fw="500" className="pb-5">
                      News & Blog
                    </SoTypography>
                    <SoBox sw="200px" sh="200px" w="250px" h="250px">
                      <SoImg src={NewsImg} />
                    </SoBox>
                  </SoFlex>
                </SoCard>
                <SoCard p="0">
                  <SoFlex br='15px' p='10px' dir="column">
                    <SoTypography fw="500" className="pb-5">
                      Shopping
                    </SoTypography>
                    <SoBox sw="200px" sh="200px" w="250px" h="250px">
                      <SoImg src={ShoppingImg} />
                    </SoBox>
                  </SoFlex>
                </SoCard>
                <SoCard p="0">
                  <SoFlex br='15px' p='10px' dir="column">
                    <SoTypography fw="500" className="pb-5">
                      Hotels
                    </SoTypography>
                    <SoBox sw="200px" sh="200px" w="250px" h="250px">
                      <SoImg src={RoomImg} />
                    </SoBox>
                  </SoFlex>
                </SoCard>
              </SoFlex>
            </SoSection>   
        </SoCover>
        
      </SoContainer>
    </>
  );
};

export default HomePage;
