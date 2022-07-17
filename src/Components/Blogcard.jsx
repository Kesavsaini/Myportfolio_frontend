import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import {urlFor} from "../Client.js";
const Container=styled.div`
background-color:${({theme})=>theme.bgLighter};
height:fit-content;
width: 350px;
margin:10px 16px;
border-radius: 20px;
display: flex;
flex-direction: column;
box-shadow: rgb(0, 0, 0) 0px 5px 15px;
padding: 10px;
`;
const ImageBox=styled.div`
height: 50%;
`;
const DescBox=styled.div`
height: 50%;

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
word-spacing: 3px;
line-height: 25px;
font-size: 15px;
`;
const Button=styled.button`
background-color:#f18736;
font-weight: 600;
color: ${({theme})=>theme.text};
width: 40%;
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
const BlogCard = ({data}) => {
  return (
    <Container>
      <ImageBox>
      <Image src={urlFor(data.mainImage)}/>
      </ImageBox>
      <DescBox>
      <Title>{data.title}</Title>
       <Desc>{data.desc}
</Desc>
<Link to={`/blog/${data.slug.current}`} style={{textDecoration:"none"}}>
       <Button>Read more</Button>
       </Link>
      </DescBox>
    </Container>
  )
}

export default BlogCard