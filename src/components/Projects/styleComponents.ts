import styled from "styled-components";

export const ProjectsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

export const Title = styled.div`
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 2px;
  color: ${(props) => props.theme.BASE_GRAY_COLOR};
`;
export const ProjectContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

export const ProjectItem = styled.div`
  width: 400px;
  height: 560px;
  border-radius: 4px;
  background-color: ${(props) =>
    props.theme.BASE_WHITE_COLOR};
`;
