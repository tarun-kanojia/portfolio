import { BiCoffeeTogo } from "react-icons/bi";
import styled, { keyframes } from "styled-components";

export const NavBarWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) =>
    props.theme.NAV_BAR.BACKGROUND_COLOR};
  height: 80px;
`;

export const Logo = styled(BiCoffeeTogo)`
  margin-left: 96px;

  width: 3rem;
  height: 3rem;
  color: ${(props) => props.theme.NAV_BAR.TEXT_COLOR};
`;

interface NavContentProps {
  isOpen?: boolean;
}

export const NavContents = styled.div<NavContentProps>`
  display: flex;
  justify-content: space-between;
  width: 280px;
  margin-right: 109px;

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    gap: 50px;
    background-color: ${(props) =>
      props.theme.NAV_BAR.BACKGROUND_COLOR};
    position: absolute;
    top: 80px;
    right: 0px;
    margin-right: 0px;
    z-index: 5;
  }
`;

export const NavItem = styled.div`
  cursor: pointer;
  color: ${(props) => props.theme.NAV_BAR.TEXT_COLOR};
  font-size: 18px;
  font-weight: 700;

  @media screen and (max-width: 1024px) {
    :hover {
      font-size: 30px;
      transition: font-size 0.1s ease;
      letter-spacing: 5px;
    }
  }
`;
