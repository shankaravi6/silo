import React, { useEffect, useMemo } from 'react';
import { SoCard, SoContainer, SoFlex, SoTypography } from '../StyledComponent/globalStyles';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { useThemeContext } from '../ThemeProvider/ThemeProvider';

const HomePage = () => {

  const jwt = useSelector((state) => state.silo.loginResponse?.jwtToken)
  const navigate = useNavigate();

  useEffect(() => {
    if(!jwt) {
      navigate('/')
    }else {
      const decode = jwtDecode(jwt)
      console.log(decode)
    }
  },[])

  const { palette } = useThemeContext();


  return (
    <div style={{background:palette.background.high }}>

    <SoContainer>
      <SoFlex dir='column' gap='50px' height='100vh'>
        <SoTypography fs="50px">
            Home
        </SoTypography>

        <SoFlex className='pb-10' gap='40px'>
          <SoCard></SoCard>
          <SoCard></SoCard>
          <SoCard></SoCard>

        </SoFlex>
        </SoFlex>
    </SoContainer>
    </div>
  );
}

export default HomePage;
