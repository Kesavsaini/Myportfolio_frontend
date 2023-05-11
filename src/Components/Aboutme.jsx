import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import {client,urlFor} from "../Client.js";

const Container=styled.div`
height: 100vh;
background-color:${({theme})=>theme.bg};
display: flex;
`;
const Left=styled.div`
width: 40%;
display: flex;
align-items: center;
justify-content: center;

`;
const Right=styled.div`
width: 60%;
display: flex;
align-items: center;
justify-content: start;
`;
const ImageBox=styled.div`
width: 70%;
height:70%;
background-color: #f18736;
padding: 2px;
border-radius:3px;
-webkit-filter: drop-shadow(12px 12px 7px rgba(0,0,0,0.5));
filter:progid:DXImageTransform.Microsoft.Glow(Color=white,Strength=5);
`
const Image=styled.img`
height: 100%;
width: 100%;
object-fit: cover;
border-bottom-right-radius:50%;
`;
const Title=styled.div`
color: #f18736;
font-size: 50px;
`
const Wrapper=styled.div`
width: 90%;
`;
const Desc=styled.div`
color: ${({theme})=>theme.text};
font-size: 18px;
text-align: justify;
`;
const Aboutme = () => {
  const [aboutme, setaboutme] = useState(null);
  useEffect(() => {
    const Getdata=async()=>{
    try{
     const res= await client.fetch(`*[_type == "abouts"]`);
     setaboutme(res[0]);
     console.log(res);
    }catch(err){
      console.log(err);
    }
    }
    Getdata();
  }, []);
  if(!aboutme){
    return(
      <>
      <div>Loading</div>
      </>
    )
  }
  return (
    <Container>
      <Left>
      <ImageBox>
      <Image src={urlFor(aboutme.imgUrl)}/>
      </ImageBox>
      </Left>
      <Right>
      <Wrapper>
      <Title>About me</Title>
      <Desc>{aboutme.description}</Desc>
      </Wrapper>
      </Right>
    </Container>
  )
}

export default Aboutme