import React, { useEffect, useMemo } from 'react';
import { SoCenterContainer, SoTypography } from '../globalStyles';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { useThemeContext } from '../ThemeProvider';

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

    <SoCenterContainer>
        <SoTypography fs="50px" fm="Silo">
            Home
        </SoTypography>
    </SoCenterContainer>
    </div>
  );
}

export default HomePage;
