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
const Redirect=styled.a`
text-decoration: none;
color: ${({theme})=>theme.text};
`;
const SkillCard = ({img,title,desc,link}) => {
  return (
    <Container>
      <ImageBox>
      <Image src={img}/>
      </ImageBox>
      <DescBox>
      <Title>{title}</Title>
       <Desc>{desc}
</Desc>
       <Button><Redirect href={link} target="_blank">Read more</Redirect></Button>
      </DescBox>
    </Container>
  )
}

export default SkillCard