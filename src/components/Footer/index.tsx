import React from "react";
import { ImLinkedin, ImTwitter } from "react-icons/im";
import {
  CopywriteText,
  FooterWrapper,
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
        <LinkdIn />
        <Twitter />
      </SocialsContainer>
    </FooterWrapper>
  );
}
