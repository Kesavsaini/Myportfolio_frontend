import React from 'react'
import styled from "styled-components"
const Container=styled.div`
background-color: ${({theme})=>theme.nav};
color: ${({theme})=>theme.text};
display: flex;
justify-content: end;
padding:5px;
position: sticky;
top: 0;
z-index: 100;
`
const Right=styled.div`
display: flex;
align-items: center;
`;
const NavButton=styled.div`
margin: 10px;
background-color:${props=>props.active && "#f18736"};
padding:${props=>props.active && "10px 25px"};
border-radius: 5px;
cursor: pointer;
`;
const Navbar = () => {
  return (
    <Container>
        <Right>
        <NavButton active={true}>Home</NavButton>
        <NavButton >About</NavButton>
        <NavButton >Skills</NavButton>
        <NavButton>Services</NavButton>
        <NavButton>Projects</NavButton>
        <NavButton>Blogs</NavButton>
        <NavButton >Contact</NavButton>
        </Right>
    </Container>
  )
}

export default Navbar