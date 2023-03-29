import React from "react";
import { PROJECTS } from "../../contants/Projects";
import {
  ProjectContainer,
  ProjectDetails,
  ProjectItem,
  ProjectsWrapper,
  ProjectTitle,
  Title,
} from "./styleComponents";

export default function Projects() {
  const renderProjectItem = () => {
    return PROJECTS.map((project) => (
      <ProjectItem>
        <ProjectTitle>{project.name}</ProjectTitle>
        <ProjectDetails>
          {project.description}
        </ProjectDetails>
      </ProjectItem>
    ));
  };
  return (
    <ProjectsWrapper>
      <Title>Projects</Title>
      <ProjectContainer>
        {renderProjectItem()}
      </ProjectContainer>
    </ProjectsWrapper>
  );
}
