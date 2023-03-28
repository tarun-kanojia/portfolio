import React from "react";
import {
  Description,
  LogoWrapper,
  SkillItem,
  SkillsWrapper,
  SkillText,
  Title,
} from "./styleComponents";
import { SKILLS } from "../../contants/skills";

export default function Skills() {
  const renderSkillItems = () => {
    return (
      <>
        {SKILLS.map((skill, index) => {
          const Logo = skill.logo;
          return (
            <SkillItem>
              <SkillText>
                {skill.name}{" "}
                <Description>
                  {skill.description}
                </Description>
              </SkillText>

              <LogoWrapper>
                <Logo size={200} />
              </LogoWrapper>
            </SkillItem>
          );
        })}
      </>
    );
  };
  return (
    <>
      <Title>Skills</Title>
      <SkillsWrapper>{renderSkillItems()}</SkillsWrapper>
    </>
  );
}
