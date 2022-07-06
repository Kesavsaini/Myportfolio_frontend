import React from 'react'
import styled from 'styled-components'
import SkillCard from './SkillCard';
const Container=styled.div`
min-height: 100vh;
padding: 30px;
background-color:#090909;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
`;
const Skills = () => {
  return (
    <>
    <Container>
        <SkillCard/>
        <SkillCard/>
        <SkillCard/>
    </Container>
    </>
  )
}

export default Skills