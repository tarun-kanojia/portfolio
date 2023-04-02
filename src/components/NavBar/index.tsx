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
import {
  navigateToAboutMeSection,
  navigateToContactSection,
  navigateToHomeSection,
  navigateToProjectsSection,
  navigateToSkillsSection,
} from "../../common/Util/NavigationUtils";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenuStatus = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const renderDesktopView = () => {
    return (
      <NavContents>
        <NavItem onClick={navigateToHomeSection}>
          Home
        </NavItem>
        <NavItem onClick={navigateToAboutMeSection}>
          AboutMe
        </NavItem>
        <NavItem onClick={navigateToProjectsSection}>
          Work
        </NavItem>

        <NavItem onClick={navigateToSkillsSection}>
          Skills
        </NavItem>

        <NavItem onClick={navigateToContactSection}>
          Contact
        </NavItem>
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
          {" "}
          <NavItem onClick={navigateToHomeSection}>
            Home
          </NavItem>
          <NavItem onClick={navigateToAboutMeSection}>
            AboutMe
          </NavItem>
          <NavItem onClick={navigateToProjectsSection}>
            Work
          </NavItem>
          <NavItem onClick={navigateToSkillsSection}>
            Skills
          </NavItem>
          <NavItem onClick={navigateToContactSection}>
            Contact
          </NavItem>
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
