import React, { useEffect, useMemo } from 'react';
import { SoCenterContainer, SoTypography } from '../globalStyles';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

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

  return (
    <SoCenterContainer>
        <SoTypography fs="50px" fm="Silo">
            Home
        </SoTypography>
    </SoCenterContainer>
  );
}

export default HomePage;
