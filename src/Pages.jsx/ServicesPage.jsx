import React from 'react'
import Services from "../Components/Services"
import styled from 'styled-components';
const Container=styled.div`
background-color: ${({theme})=>theme.bg};
height: 90.2vh;
`;
const ServicesPage = () => {
  return (
   <>
   <Container>
   <Services/>
   </Container>
   </>
  )
}

export default ServicesPage