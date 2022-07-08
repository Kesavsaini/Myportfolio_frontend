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
box-shadow: rgb(0, 0, 0) 0px 5px 15px;
padding: 10px;
`;
const ImageBox=styled.div`
height: 60%;
`;
const DescBox=styled.div`
height: 40%;
`;
const Image=styled.img`
width: 100%;
height: 100%;
border-radius: 20px;
object-fit: cover;
`;
const Title=styled.h1`
color: ${({theme})=>theme.text};
margin-top:5px;
`;
const Desc=styled.div`
color: ${({theme})=>theme.text};
font-size: 14px;
margin:10px 0px;
`;
const Button=styled.button`
background-color:#f18736;
font-weight: 600;
color: ${({theme})=>theme.text};
width: 100%;
height: 40px;
padding: 10px;
border-radius: 15px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
margin:10px 0px;
border: none;
`;
const SkillCard = ({img,title,desc}) => {
  return (
    <Container>
      <ImageBox>
      <Image src='https://ms314006.github.io/static/b7a8f321b0bbc07ca9b9d22a7a505ed5/97b31/React.jpg'/>
      </ImageBox>
      <DescBox>
      <Title>React</Title>
       <Desc>React is a JavaScript library for building use
r interfaces.
</Desc>
       <Button>Read more</Button>
      </DescBox>
    </Container>
  )
}

export default SkillCard