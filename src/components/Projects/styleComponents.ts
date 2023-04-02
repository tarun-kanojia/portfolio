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
  text-align: center;
  z-index: 3;
  flex-direction: column;
  gap: 24px;
  position: absolute;
  background: rgba(0, 0, 0, 0.6);
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  padding: 10px;
  align-items: center;
  justify-content: space-evenly;
  font-size: 30px;
  font-weight: 700;
  text-transform: capitalize;
  text-align: center;
  color: ${(props) => props.theme.BASE_WHITE_COLOR};
`;

export const ProjectItem = styled.div`
  width: 400px;
  height: 560px;
  position: relative;
  border-radius: 4px;
  background-color: ${(props) =>
    props.theme.BASE_WHITE_COLOR};
  :hover ${ProjectDetails} {
    display: flex;
  }
`;

export const ExploreProject = styled.button`
  /* text-decoration: none; */
  border: 1px solid
    ${(props) => props.theme.BASE_WHITE_COLOR};
  color: ${(props) => props.theme.BASE_WHITE_COLOR};
  cursor:pointer;
  width: 160px;
  height: 50px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  text-transform: uppercase;
  border-radius: 4px;
  font-size: 20px;
  bottom: 55px;
  position: absolute;
`;
