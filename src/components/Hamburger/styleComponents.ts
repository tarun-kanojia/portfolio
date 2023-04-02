import styled, { keyframes } from "styled-components";

const burgerAnimationClockwise = keyframes`
  from{
    transform: rotate(0deg);

  }

  to{
    transform: rotate(45deg);
    width: 25px;
  }
`;

const burgerAnimationAntiClockwise = keyframes`
  from{
    transform: rotate(0deg);
    
  }

  to{
    transform: rotate(-45deg);
    width: 25px;
  }
`;

export const HamburgerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  height: 16px;
  margin-right: 24px;
  cursor: pointer;
`;

interface HambugerProps {
  isOpen?: boolean;
  display?: boolean;
}

export const HamburgerLines = styled.div<HambugerProps>`
  width: 21px;
  height: 2px;
  background-color: ${(props) =>
    props.theme.NAV_BAR.TEXT_COLOR};
  transition: transform 0.2s ease;
`;
