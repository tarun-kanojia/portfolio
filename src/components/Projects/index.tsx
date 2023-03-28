import React from "react";
import {
  ProjectContainer,
  ProjectItem,
  ProjectsWrapper,
  Title,
} from "./styleComponents";

export default function Projects() {
  return (
    <ProjectsWrapper>
      <Title>Projects</Title>
      <ProjectContainer>
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </ProjectContainer>
    </ProjectsWrapper>
  );
}
