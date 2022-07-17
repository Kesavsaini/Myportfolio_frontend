import React from 'react'
import styled from 'styled-components'
import {client,urlFor} from "../Client.js";
const Container=styled.div`
background-color: ${({theme})=>theme.bgLighter};
width: 500px;
height: 250px;
display: flex;
margin:15px 5px;
border-radius: 20px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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
background-color:${props=>props.color};
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
border-radius: 5px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
margin-top:10px;
border: none;
`;
const Redirect=styled.a`
text-decoration: none;
color: ${({theme})=>theme.text};
`;
const ServiceCard = ({data}) => {
  return (
    <>
    <Container>
     <Left>
     <Image src={urlFor(data.icon)}/>
     </Left>
     <Right>
     <Lables>
      {
        data.tags && data.tags.map((item)=>{
           return(
            <Lable color={item.color}>{item.label}</Lable>
           );
        })
      }
     
     </Lables>
     <Tittle>{data.name}</Tittle>
     <Desc>{data.desc}</Desc>
     <Redirect href={data.link} target="_blank">
     <Button>SEE WORK</Button>
     </Redirect>
     </Right>
    </Container>
    </>
  )
}

export default ServiceCard