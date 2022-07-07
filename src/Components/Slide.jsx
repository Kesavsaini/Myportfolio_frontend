import React from 'react'
import styled from 'styled-components'
const Container=styled.div`
height: 90vh;
background-color: ${({theme})=>theme.nav};
display: flex;
`;
const Left=styled.div`
width: 60%;
display: flex;
justify-content: center;
align-items: center;
`;
const Right=styled.div`
width: 40%;
`;
const Wrapper=styled.div`
width: 90%;
`;
const Title=styled.h1`
color: ${({theme})=>theme.text};
font-size: 100px;
`;
const Name=styled.span`
color: #f18736;
font-size: 100px;
`;
const Desc=styled.div`
color: ${({theme})=>theme.text};
font-size: 25px;
margin-top: 10px;
`;
const Button=styled.div`
background-color:#f18736;
font-weight: 600;
color: ${({theme})=>theme.text};
width: 150px;
padding: 10px;
border-radius: 5px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
margin-top: 20px;
`;
const Image=styled.img`
height: 100%;
width: 100%;
object-fit: cover;
`;
const Slide = () => {
  return (
    <>
    <Container>
      <Left>
      <Wrapper>
        <Title>HI I Am <Name>Keshav</Name></Title>
        <Desc>I am a Student and developer Learning New things and making Projects on them Lorem ipsum dolor sit amet, consectetur</Desc>
      <Button>Download Resume</Button>
        </Wrapper>
      </Left>
      <Right>
      <Image src='https://cdn2.hubspot.net/hubfs/2759564/laptopguy020620a.png'/>
      </Right>
    </Container>
    </>
  )
}

export default Slide