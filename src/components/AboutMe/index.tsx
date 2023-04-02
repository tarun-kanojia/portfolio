import EmailButton from "../../common/components/EmailButton";
import ProfileImage from "../../assets/images/tarun_avatar.png";
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
        <Avatar src={ProfileImage} alt="avatar" />
      </ImageWrapper>
    </AboutMeContainer>
  );
}
