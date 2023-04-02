import styled from "styled-components";
import { FiMail } from "react-icons/fi";
import { mobile } from "../../common/constants/UI/styleConstant";
import ProfileImage from "../../assets/images/tarun_avatar.png";

export const AboutMeContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 129px;
  width: 100%;
  ${mobile} {
    /* width: 80%; */
    flex-direction: column-reverse;
    text-align: center;
    margin-top: 72px;
  }
`;

export const AboutMeContent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 24px;

  color: ${(props) => props.theme.ABOUT_ME.TEXT_COLOR};
  ${mobile} {
    width: 80%;
    justify-content: center;
    align-items: center;
  }
`;

export const ImageWrapper = styled.div`
  padding: 10px;
  max-width: 50%;
  width: 400px;
  height: 400px;
  border-radius: 400px;
  background-color: ${(props) =>
    props.theme.ABOUT_ME.TEXT_COLOR};
  ${mobile} {
    max-width: 100%;
    width: 240px;
    height: 240px;
  }
`;

export const Avatar = styled.img`
  border-radius: 400px;
  width: 100%;
  height: 100%;
`;

export const IntroContainer = styled.div`
  font-size: 64px;
  font-weight: 700;

  ${mobile} {
    font-size: 36px;
  }
`;

export const DescriptionContainer = styled.div`
  width: 70%;
  font-size: 24px;
  color: ${(props) =>
    props.theme.ABOUT_ME.DESCRIPTION_TEXT_COLOR};
  ${mobile} {
    font-size: 18px;
    text-align: center;
    width: 100%;
  }
`;
