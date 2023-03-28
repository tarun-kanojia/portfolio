import styled from "styled-components";
import { mobile } from "../../common/constants/UI/styleConstant";

export const ContactMeContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  width: 100%;
  height: 300px;
  text-align: center;
`;

export const Title = styled.div`
  text-transform: capitalize;
  font-weight: 700;
  font-size: 36px;
  color: ${(props) => props.theme.BASE_WHITE_COLOR};
  ${mobile} {
    font-size: 28px;
  }
`;

export const Description = styled.div`
  font-weight: 600;
  font-size: 24px;
  color: ${(props) => props.theme.BASE_GRAY_COLOR};
  ${mobile} {
    font-size: 18px;
  }
`;
