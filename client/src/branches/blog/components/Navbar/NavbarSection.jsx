import React, { useState } from "react";
import {
  NavIcon,
  NavLogo,
  SoNavBar,
  SoNavContainer,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavSection,
} from "./NavbarStyles.jsx";
import { FaRProject, FaTimes } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";
import Logo from "../../../../assets/images/blog/bloglogo.png";
import { useThemeContext } from "../../../../themeprovider/ThemeProvider";
import BlogButton from "../BlogButton.jsx";

const NavbarSection = () => {
  const [show, setShow] = useState(false);
  const { palette } = useThemeContext();


  const data = [
    {
      to: "/",
      text: "Home",
      id: "home",
    },
    {
      to: "/pricing",
      text: "Pricing",
    },
    {
      to: "/signup",
      text: "Signup",
    },
    {
      to: "/contact",
      text: "Contact",
    },
    {
      to: "/trending",
      text: "Trending",
    },
    {
      to: "/other",
      text: "Others",
    },
  ];

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <>
      <SoNavBar>
        <SoNavContainer>
          <NavLogo to="/">
            <NavIcon src={Logo} alt="logo" />
            SILO BLOG
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {show ? <FaTimes style={{color:palette.background.low}} /> : <CgMenuRight style={{color:palette.background.low}} />}
          </MobileIcon>
          <NavMenu show={show}>
            <NavSection>
            {data.map((el, index) => (
              <NavLinks to={el.to}>
                {el.text}
              </NavLinks>
            ))}
            </NavSection>
            <NavSection>
                <BlogButton>JOURNALIST</BlogButton>
            </NavSection>
          </NavMenu>
        </SoNavContainer>
      </SoNavBar>
    </>
  );
};

export default NavbarSection;
