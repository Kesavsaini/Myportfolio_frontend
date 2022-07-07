import React from 'react'
import styled from 'styled-components'
const Container=styled.div`
background-color:${({theme})=>theme.bgLighter};
height: 350px;
width: 300px;
margin: 10px;
border-radius: 20px;
display: flex;
flex-direction: column;
-webkit-filter: drop-shadow(12px 12px 7px rgba(0,0,0,0.5));
filter:progid:DXImageTransform.Microsoft.Glow(Color=white,Strength=5);
`;
const ImageBox=styled.div`
height: 30%;
`;
const DescBox=styled.div`
height: 70%;
padding: 10px;
`;
const Image=styled.img`
width: 100%;
height: 100%;
border-top-left-radius: 20px;
border-top-right-radius: 20px;
object-fit: cover;
`;
const Title=styled.h1`
color: ${({theme})=>theme.text};
`;
const Desc=styled.div`
color: ${({theme})=>theme.text};
font-size: 14px;
`;
const Button=styled.button`
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
margin-top:10px;
border: none;
`;
const SkillCard = ({img,title,desc}) => {
  return (
    <Container>
      <ImageBox>
      <Image src='https://miro.medium.com/max/1050/1*i3hzpSEiEEMTuWIYviYweQ.png'/>
      </ImageBox>
      <DescBox>
      <Title>React</Title>
       <Desc>React is a JavaScript library for building user interfaces. Learn what React is all about on our homepage or in the tutorial. React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a sim.

</Desc>
       <Button>Read more</Button>
      </DescBox>
    </Container>
  )
}

export default SkillCard