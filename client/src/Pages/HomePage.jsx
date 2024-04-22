import React, { useEffect, useMemo } from "react";
import {
  SoBox,
  SoCard,
  SoContainer,
  SoFlex,
  SoImg,
  SoSubTitle,
  SoTypography,
} from "../StyledComponent/globalStyles";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useThemeContext } from "../ThemeProvider/ThemeProvider";
import NewsImg from "../assets/images/news.jpeg"
import ShoppingImg from "../assets/images/shopping.jpeg"
import RoomImg from "../assets/images/rooms.jpeg"


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

  return (
    <div style={{ background: palette.background.high }}>
      <SoContainer>
        <SoFlex height="100vh" dir="column" gap="50px">
          <SoFlex dir="column">
            <SoSubTitle fs="50px" className='pb-2'>Welcome to silo world!</SoSubTitle>
            <SoTypography fs="24px" color={palette.text.low}>Explore the our features</SoTypography>
          </SoFlex>
          <SoFlex dir="column" gap="50px" height="auto">
            <SoFlex className="pb-10" gap="40px">
              <SoCard p='20px'>
                <SoFlex dir='column'>
                <SoTypography fs='25px' fw='500' className='pb-5'>News &  Blog</SoTypography>
                <SoBox width="325px" height='325px'>
                  <SoImg src={NewsImg} />
                  </SoBox>
                </SoFlex>
              </SoCard>
              <SoCard p='20px'>
                <SoFlex dir='column'>
                <SoTypography fs='25px' fw='500' className='pb-5'>Shopping</SoTypography>
                <SoBox width="325px" height='325px'>
                  <SoImg src={ShoppingImg} />
                  </SoBox>
                </SoFlex>
              </SoCard>
              <SoCard p='20px'>
                <SoFlex dir='column'>
                <SoTypography fs='25px' fw='500' className='pb-5'>Hotels</SoTypography>
                <SoBox width="325px" height='325px'>
                  <SoImg src={RoomImg} />
                  </SoBox>
                </SoFlex>
              </SoCard>
            </SoFlex>
          </SoFlex>
        </SoFlex>
      </SoContainer>
    </div>
  );
};

export default HomePage;
