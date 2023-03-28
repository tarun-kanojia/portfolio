import styled from "styled-components";
import { mobile } from "./common/constants/UI/styleConstant";

export const PageWrapper = styled.section`
  background-color: ${(props) =>
    props.theme.PAGE_BACKGROUND_COLOR};
  height: 100%;
  min-height: 100vh;
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: auto;
  gap: 50px;
  ${mobile}{
    width: 95%;
  }
`;
