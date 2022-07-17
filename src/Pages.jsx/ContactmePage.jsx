import React from 'react'
import Contact from '../Components/Contact'
import styled from 'styled-components';
const Container=styled.div`
background-color: ${({theme})=>theme.bg};
height: 90.2vh;
display: flex;
justify-content: center;
align-items: center;
`;
const ContactmePage = () => {
  return (
    <>
    <Container>
    <Contact page={true}/>
    </Container>
    </>
  )
}

export default ContactmePage