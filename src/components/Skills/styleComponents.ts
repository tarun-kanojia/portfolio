import styled from "styled-components";
import { mobile } from "../../common/constants/UI/styleConstant";

export const SkillsWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

export const LogoWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SkillText = styled.div`
  display: none;
  flex-direction: column;
  gap: 24px;
  position: absolute;
  background: rgba(0, 0, 0, 0.6);
  width: inherit;
  height: inherit;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  font-weight: 700;
  text-transform: capitalize;
  text-align: center;
  color: ${(props) => props.theme.BASE_WHITE_COLOR};
`;

export const Description = styled.div`
  font-size: 24px;
  width: 90%;
`;

export const SkillItem = styled.div`
  width: 612px;
  height: 888px;
  border-radius: 4px;
  background-color: white;
  :hover ${SkillText} {
    display: flex;
  }

  transition: height 0.5s ease;

  ${mobile} {
    width: 366px;
    height: 600px;
    transition: height 0.5s ease;
  }
`;

export const Title = styled.div`
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 2px;
  color: ${(props) => props.theme.BASE_GRAY_COLOR};
  text-align: left;
`;
