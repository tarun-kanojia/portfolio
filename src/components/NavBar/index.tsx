import React, { useState } from "react";
import useDesktopMode from "../../common/hooks/useDesktopMode";
import Hamburger from "../Hamburger";
import "./style.css";
import {
  Logo,
  NavBarWrapper,
  NavContents,
  NavItem,
} from "./styleComponents";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenuStatus = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const renderDesktopView = () => {
    return (
      <NavContents>
        <NavItem>Home</NavItem>
        <NavItem>Contact</NavItem>
        <NavItem>Work</NavItem>
      </NavContents>
    );
  };

  const renderMobileView = () => {
    return (
      <>
        <Hamburger
          isOpen={isMenuOpen}
          toggleMenuStatus={toggleMenuStatus}
        />
        <NavContents
          className={
            isMenuOpen
              ? "hamburger-open"
              : "hamburger-close"
          }
        >
          <NavItem>Home</NavItem>
          <NavItem>Contact</NavItem>
          <NavItem>Work</NavItem>
        </NavContents>
      </>
    );
  };

  return (
    <NavBarWrapper>
      <Logo />
      {useDesktopMode()
        ? renderDesktopView()
        : renderMobileView()}
    </NavBarWrapper>
  );
}
