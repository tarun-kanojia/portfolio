import React from "react";
import { ImLinkedin, ImTwitter } from "react-icons/im";
import {
  navigateToGitHub,
  navigateToLinkindin,
} from "../../common/Util/NavigationUtils";
import {
  CopywriteText,
  FooterWrapper,
  GitHub,
  LinkdIn,
  SocialsContainer,
  Twitter,
} from "./styleComponents";

export default function Footer() {
  return (
    <FooterWrapper>
      <CopywriteText>
        Made by Tarun — Copyright 2023
      </CopywriteText>
      <SocialsContainer>
        <LinkdIn onClick={navigateToLinkindin} />
        <Twitter onClick={() => {}} />
        <GitHub onClick={navigateToGitHub} />
      </SocialsContainer>
    </FooterWrapper>
  );
}
