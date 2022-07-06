import React from 'react'
import styled from "styled-components"
const Container=styled.div`
background-color: black;
color: white;
display: flex;
justify-content: end;
padding:5px;
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