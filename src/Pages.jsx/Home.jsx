import React from 'react';
import Slide from '../Components/Slide';
import Aboutme from '../Components/Aboutme';
import Skills from '../Components/Skills';
import Services from '../Components/Services';
import Projects from '../Components/Projects';
import styled from 'styled-components';
import Blogs from '../Components/Blogs';
import Contact from '../Components/Contact';
const Container=styled.div`
background-color: ${({theme})=>theme.bg};
`;
const Home = () => {
  return (
    <>
    <Container>
    <Slide/>
    <Aboutme/>
    <Skills/>
    <Services/>
    <Projects/>
    <Blogs/>
    <Contact/>
    </Container>
    
    </>
  )
}

export default Home