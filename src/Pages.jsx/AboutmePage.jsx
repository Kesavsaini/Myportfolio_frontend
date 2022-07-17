import React from 'react'
import Aboutme from '../Components/Aboutme'
import styled from 'styled-components';
const Container=styled.div`
background-color: ${({theme})=>theme.bg};
height: 90.2vh;
`;
const AboutmePage = () => {
  return (
    <>
    <Container>
    <Aboutme/>
    </Container>
    </>
  )
}

export default AboutmePage