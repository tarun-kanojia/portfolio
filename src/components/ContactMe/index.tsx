import React from "react";
import EmailButton from "../../common/components/EmailButton";
import {
  ContactMeContainer,
  Description,
  Title,
} from "./styledComponents";

export default function ContactMe() {
  return (
    <ContactMeContainer id="contact">
      <Title>Contact Me</Title>
      <Description>
        If you are looking to hire a frontend developer,
        <br /> I’m currently available for freelance work
      </Description>
      <EmailButton email="tarunkanojiawork@gmail.com" />
    </ContactMeContainer>
  );
}
