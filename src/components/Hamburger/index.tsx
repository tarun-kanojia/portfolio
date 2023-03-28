import React from "react";
import {
  HamburgerContainer,
  HamburgerLines,
} from "./styleComponents";

interface Props {
  isOpen: boolean;
  toggleMenuStatus: Function;
}
export default function Hamburger({
  isOpen,
  toggleMenuStatus,
}: Props) {
  return (
    <HamburgerContainer onClick={() => toggleMenuStatus()}>
      <HamburgerLines
        style={
          isOpen
            ? {
                transform: "rotate(45deg) translateY(8px)",
              }
            : {}
        }
      />
      <HamburgerLines
        style={isOpen ? { opacity: "0" } : {}}
      />
      <HamburgerLines
        style={
          isOpen
            ? {
                transform:
                  "rotate(-45deg) translateY(-8px)",
              }
            : {}
        }
      />
    </HamburgerContainer>
  );
}
