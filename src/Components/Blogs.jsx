import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import BlogCard from './Blogcard';
import {client,urlFor} from "../Client.js";
const Container=styled.div`
padding: 20px;
background-color:${({theme})=>theme.bg};
display: flex;
`;
const Wrapper=styled.div`
display: flex;
flex-wrap: wrap;
`;
const Tittle=styled.div`
height: fit-content;
-webkit-filter: drop-shadow(12px 12px 7px rgba(0,0,0,0.5));
filter:progid:DXImageTransform.Microsoft.Glow(Color=white,Strength=5);
font-size: 40px;
font-weight: 500;
margin: 10px;
writing-mode: vertical-rl;
text-orientation: upright;
color:#f18736;
border-right: 1px solid ${({theme})=>theme.soft};
border-top: 1px solid ${({theme})=>theme.soft};
border-bottom: 1px solid ${({theme})=>theme.soft};
border-radius:20px;
margin-bottom: 10px;
position: sticky;
top: 90px;
`;
const Blogs = () => {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    const Getdata=async()=>{
    try{
     const res= await client.fetch(`*[_type == "post"]`);
     setAllPosts(res);
     console.log(res)
    }catch(err){
      console.log(err);
    }
    }
    Getdata();
  }, []);
  return (
    <>
    
    <Container>
    <Tittle>BLOGS</Tittle>
    <Wrapper>
      {
        allPostsData && allPostsData.map((item)=>{
            return(
              <BlogCard data={item}/>
            );
        })
      }
      </Wrapper>
    </Container>
    </>
  )
}

export default Blogs