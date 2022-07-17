import React from 'react'
import styled from 'styled-components'
import {urlFor} from "../Client.js";
const Container=styled.div`
background-color:${({theme})=>theme.bgLighter};
height: 370px;
width: 300px;
margin: 10px;
border-radius: 20px;
display: flex;
flex-direction: column;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
const ImageBox=styled.div`
height: 50%;
`;
const DescBox=styled.div`
height: 50%;
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
margin-top:5px;
`;
const Desc=styled.div`
color: ${({theme})=>theme.text};
font-size: 14px;
margin:10px 0px;
`;
const Button=styled.button`
background-color:${props=>props.color};
font-weight: 600;
color: ${props=>props.color=="black" ? "white" :({theme})=>theme.text};
width:45%;
height: 40px;
padding: 10px;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
margin-top:10px;
box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.4);
border: none;
`;
const Buttons=styled.div`
display: flex;
justify-content: space-around;
`
const Lables=styled.div`
display: flex;
flex-wrap: wrap;
padding: 0px 10px;
`;
const Lable=styled.div`
font-size: 14px;
background-color: ${props=>props.color};
color: ${({theme})=>theme.text};
margin: 5px 0px;
width: fit-content;
padding: 3px;
border-radius: 4px;
margin-left: 5px;
`
const Redirect=styled.a`
text-decoration: none;
color: ${({theme})=>theme.text};
`;
const ProjectCard = ({data}) => {
  return (
    <>
    <Container>
      <ImageBox>
      <Image src={urlFor(data.imgUrl)}/>
      </ImageBox>
      <Lables>
        {
         data.tags && data.tags.map((item)=>{
            return(
            <Lable color={item.color}>{item.label}</Lable>
            );
          })
        }
        
      </Lables>
      <DescBox>
      <Title>{data.title}</Title>
       <Desc>{data.description}
</Desc>
<Buttons>

       <Button color='black'><Redirect href={data.codelink} target="_blank">GitHub Repo</Redirect></Button>
       <Button color='#f18736'><Redirect href={data.projectlink} target="_blank">Link</Redirect></Button>
</Buttons>
      </DescBox>
    </Container>
    </>
  )
}

export default ProjectCard