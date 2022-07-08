import React from 'react';
import Slide from '../Components/Slide';
import Navbar from '../Components/Navbar'
import Aboutme from '../Components/Aboutme';
import Skills from '../Components/Skills';
import Services from '../Components/Services';
import Projects from '../Components/Projects';
import styled from 'styled-components';
const Container=styled.div`
background-color: ${({theme})=>theme.bg};
`;
const Home = () => {
  return (
    <>
    <Container>
    <Navbar/>
    <Slide/>
    <Aboutme/>
    <Skills/>
    <Services/>
    <Projects/>
    </Container>
    </>
  )
}

export default Home