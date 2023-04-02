import { FiMail } from "react-icons/fi";
import styled from "styled-components";

export const EmailContainer = styled.button`
  border: none;
  width: 400px;
  height: 64px;
  gap: 10px;
  cursor: pointer;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.theme.ABOUT_ME.EMAIL_BACKGROUND_COLOR};
`;
export const EmailLogo = styled(FiMail)`
  color: ${(props) =>
    props.theme.ABOUT_ME.EMAIL_TEXT_COLOR};
  width: 20px;
  height: 20px;
`;

export const Email = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${(props) =>
    props.theme.ABOUT_ME.EMAIL_TEXT_COLOR};
`;
