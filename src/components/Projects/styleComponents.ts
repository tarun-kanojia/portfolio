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
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;
export const ProjectTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const ProjectDetails = styled.div`
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

export const ProjectItem = styled.div`
  width: 400px;
  height: 560px;
  border-radius: 4px;
  background-color: ${(props) =>
    props.theme.BASE_WHITE_COLOR};
  :hover ${ProjectDetails} {
    display: flex;
  }
`;
