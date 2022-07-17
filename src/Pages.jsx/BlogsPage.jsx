import React from 'react'
import Blogs from "../Components/Blogs"
import styled from 'styled-components';
const Container=styled.div`
background-color: ${({theme})=>theme.bg};
height: 90.2vh;
`;
const BlogsPage = () => {
  return (
    <>
    <Container>
    <Blogs/>
    </Container>
    </>
  )
}

export default BlogsPage