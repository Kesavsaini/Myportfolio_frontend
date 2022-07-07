import React from 'react'
import styled from 'styled-components'
const Container=styled.div`
background-color: ${({theme})=>theme.bgLighter};
width: 500px;
height: 250px;
display: flex;
margin: 5px;
border-radius: 20px;
-webkit-filter: drop-shadow(12px 12px 7px rgba(0,0,0,0.5));
filter:progid:DXImageTransform.Microsoft.Glow(Color=white,Strength=5);
`;
const Left=styled.div`
width: 50%;
height: 100%;
position: relative;
`;

const Image=styled.img`
width: 100%;
height: 100%;
border-top-left-radius:20px;
border-bottom-left-radius:20px;
`
const Right=styled.div`
width: 50%;
padding: 5px;
`;
const Tittle=styled.div`
font-size: 30px;
font-weight: 600;
color: ${({theme})=>theme.text};
margin: 10px 0px;
`
const Desc=styled.div`
font-size: 14px;
color: ${({theme})=>theme.text};
margin: 10px 0px;
`;
const Lables=styled.div`
display: flex;
flex-wrap: wrap;
`;
const Lable=styled.div`
font-size: 14px;
color: ${({theme})=>theme.text};
margin: 10px 0px;
background-color:skyblue;
width: fit-content;
padding: 3px;
border-radius: 4px;
margin-left: 5px;
`
const Button=styled.button`
background-color:#f18736;
font-weight: 600;
color: ${({theme})=>theme.text};
width: 40%;
height: 40px;
padding: 10px;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
margin-top:10px;
border: none;
`;
const ServiceCard = () => {
  return (
    <>
    <Container>
     <Left>
     <Image src='https://fs.hubspotusercontent00.net/hubfs/6426302/Imported_Blog_Media/263a75529a1752b75d64f9f21fd07c92-3-2.jpg'/>
     </Left>
     <Right>
     <Lables>
     <Lable>ReactJs</Lable>
     </Lables>
     <Tittle>Front End Web Devlopment</Tittle>
     <Desc>Lorem ipsum dolor sit amet consectetur Making Projects on Front end devlopment</Desc>
     <Button>SEE WORK</Button>
     </Right>
    </Container>
    </>
  )
}

export default ServiceCard