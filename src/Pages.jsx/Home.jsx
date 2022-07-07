import React from 'react';
import Slide from '../Components/Slide';
import Navbar from '../Components/Navbar'
import Aboutme from '../Components/Aboutme';
import Skills from '../Components/Skills';
import Services from '../Components/Services';
const Home = () => {
  return (
    <>
    <Navbar/>
    <Slide/>
    <Aboutme/>
    <Skills/>
    <Services/>
    </>
  )
}

export default Home