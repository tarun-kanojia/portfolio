import React from "react";
import { navigateTo } from "../../common/Util/NavigationUtils";
import { PROJECTS } from "../../contants/Projects";
import {
  ExploreProject,
  ProjectContainer,
  ProjectDetails,
  ProjectItem,
  ProjectsWrapper,
  ProjectTitle,
  Title,
} from "./styleComponents";

export default function Projects() {
  const onClickHandler = (url: string) => {
    navigateTo(url);
  };

  const renderProjectItem = () => {
    return PROJECTS.map((project) => (
      <ProjectItem>
        <ProjectTitle>{project.name}</ProjectTitle>
        <ProjectDetails>
          {project.description}
          <ExploreProject
            onClick={() => onClickHandler(project.url)}
          >
            Explore
          </ExploreProject>
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
