import React from 'react'
import styled from "styled-components";
import { NavLink,Link } from 'react-router-dom';
const Container=styled.div`
height: 60px;
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
text-decoration: "none";
color: ${({theme})=>theme.text};

`;
const Navbar = () => {
  let normalStyle = {
   margin: "10px",
   borderRadius: "5px",
   cursor: "pointer",
   textDecoration:"none",
   color:"white"
  };

   let activeStyle = {
    margin: "10px",
    backgroundColor:"#f18736",
    padding:"10px 25px",
    borderRadius: "5px",
   cursor: "pointer",
   textDecoration:"none",
   color:"white",
   transition: "all 0.1s ease"
  };
  return (
    <Container>
        <Right>
        <NavLink style={({isActive})=>isActive?activeStyle:normalStyle} to="/">
        <NavButton active={true}>Home</NavButton>
          </NavLink> 
          <NavLink style={({isActive})=>isActive?activeStyle:normalStyle} to="/aboutme">
           <NavButton>About</NavButton>
          </NavLink> 
          <NavLink style={({isActive})=>isActive?activeStyle:normalStyle} to="/skills">
          <NavButton >Skills</NavButton>
          </NavLink> 
          <NavLink style={({isActive})=>isActive?activeStyle:normalStyle} to="/services">
          <NavButton>Services</NavButton>
          </NavLink> 
          <NavLink style={({isActive})=>isActive?activeStyle:normalStyle} to="/projects">
          <NavButton>Projects</NavButton>
          </NavLink>
          <NavLink style={({isActive})=>isActive?activeStyle:normalStyle} to="/blogs">
          <NavButton>Blogs</NavButton>
          </NavLink> 
          <NavLink style={({isActive})=>isActive?activeStyle:normalStyle} to="/contactme">
          <NavButton >Contact</NavButton>
          </NavLink> 
        </Right>
    </Container>
  )
}

export default Navbar