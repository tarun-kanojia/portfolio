import {
  ImGithub,
  ImLinkedin,
  ImTwitter,
} from "react-icons/im";
import styled from "styled-components";

export const FooterWrapper = styled.section`
  height: 120px;
  border-top: 1px solid;
  border-color: ${(props) => props.theme.FOOTER.TEXT_COLOR};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const CopywriteText = styled.div`
  color: ${(props) => props.theme.FOOTER.TEXT_COLOR};
`;

export const SocialsContainer = styled.section`
  width: 200px;
  display: flex;
  justify-content: space-evenly;
`;

export const LinkdIn = styled(ImLinkedin)`
  cursor: pointer;
  width: 22px;
  height: 22px;
  color: ${(props) => props.theme.FOOTER.TEXT_COLOR};
`;

export const Twitter = styled(ImTwitter)`
  cursor: pointer;

  width: 22px;
  height: 22px;
  color: ${(props) => props.theme.FOOTER.TEXT_COLOR};
`;

export const GitHub = styled(ImGithub)`
  cursor: pointer;

  width: 22px;
  height: 22px;
  color: ${(props) => props.theme.FOOTER.TEXT_COLOR};
`;
