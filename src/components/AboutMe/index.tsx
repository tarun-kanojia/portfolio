import React from "react";
import EmailButton from "../../common/components/EmailButton";
import {
  AboutMeContainer,
  AboutMeContent,
  Avatar,
  DescriptionContainer,
  ImageWrapper,
  IntroContainer,
} from "./styleComponent";

export default function AboutMe() {
  return (
    <AboutMeContainer>
      <AboutMeContent>
        <IntroContainer>
          Hi,I am Tarun <br />A Frontend Developer
        </IntroContainer>
        <DescriptionContainer>
          I specialize in creating{" "}
          <strong>simplistic</strong> and user-friendly
          interfaces for websites. Let's work{" "}
          <strong>together </strong> to bring your vision to
          life!
        </DescriptionContainer>
        <EmailButton email="tarunkanojiawork@gmail.com" />
      </AboutMeContent>
      <ImageWrapper>
        <Avatar
          src="/media/iitachii/TARUN/CODES/Projects/portfolio/src/assets/images/kobe.jpeg"
          alt="avatar"
        />
      </ImageWrapper>
    </AboutMeContainer>
  );
}
