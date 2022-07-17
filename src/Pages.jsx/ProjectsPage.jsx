import React from 'react'
import Projects from "../Components/Projects"
import styled from 'styled-components';
const Container=styled.div`
background-color: ${({theme})=>theme.bg};
height: 90.2vh;
`;
const ProjectsPage = () => {
  return (
    <>
    <Container>
    <Projects/>
    </Container>
    </>
  )
}

export default ProjectsPage