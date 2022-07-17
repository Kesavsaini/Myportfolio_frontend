import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {useLocation} from "react-router-dom";
import BlockContent from "@sanity/block-content-to-react";
import {client,urlFor} from "../Client.js";
const Container=styled.div`
background-color: ${({theme})=>theme.bg};
min-height: 90.2vh;
display: flex;
justify-content: center;
align-items: center;
padding: 30px;
`;
const Box=styled.div`
background-color: ${({theme})=>theme.bgLighter};
padding: 30px;
width: 60%;
border-radius: 10px;
box-shadow: rgb(0, 0, 0) 0px 3px 8px;
`;
const Image=styled.img`
width: 100%;
margin:15px 0px;
border-radius: 10px;
`;
const Head=styled.div`
font-size: 30px;
font-weight: 600;
color:${({theme})=>theme.text};
display: flex;
justify-content: center;
align-items: center;
width: 100%;
`
const Text=styled.div`
color:${({theme})=>theme.text};
font-size: 18px;
line-height: 28px;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
text-align: justify;
`;
const Blog = () => {
  const [postData, setPost] = useState(null);
  const Location=useLocation();
  const slug=Location.pathname.split("/")[2];
  
  useEffect(() => {
    console.log(slug)
    const Getdata=async()=>{
    try{
     const res= await client.fetch(`*[slug.current == "${slug}"]`);
     setPost(res[0]);
     console.log(res.title)
    }catch(err){
      console.log(err);
    }
    }
    Getdata();
  }, [slug]);
  if (!postData) return <div>Loading...</div>;
  return (
    <>
    <Container>
    <Box>
    <Head>{postData.title}</Head>
    <Image src={urlFor(postData.mainImage)}/>
    <Text>
    <BlockContent
            blocks={postData.body}
            projectId="s0pd7iha"
            dataset="production"
          />
      </Text>
    </Box>
    </Container>
    </>
  )
}

export default Blog