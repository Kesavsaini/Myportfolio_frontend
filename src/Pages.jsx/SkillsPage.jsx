import React from 'react'
import Skills from "../Components/Skills"
import styled from 'styled-components';
const Container=styled.div`
background-color: ${({theme})=>theme.bg};
height: 90.2vh;
`;
const SkillsPage = () => {
  return (
   <>
   <Container>
   <Skills/>
   </Container>
   </>
  )
}

export default SkillsPage