import React from "react";
import styled from "styled-components";
import { Facebook, GitHub, Instagram, Send, Twitter } from "@mui/icons-material";

const Container = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.bg};
  display: flex;
`;
const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: ${props=>props.page ?"column" :"row"};
`;
const Tittle = styled.div`
  height: fit-content;
  -webkit-filter: drop-shadow(12px 12px 7px rgba(0, 0, 0, 0.5));
  filter: progid:DXImageTransform.Microsoft.Glow(Color=white,Strength=5);
  font-size: 40px;
  font-weight: 500;
  margin: 10px;
  writing-mode: vertical-rl;
  text-orientation: upright;
  color: #f18736;
  border-right: 1px solid ${({ theme }) => theme.soft};
  border-top: 1px solid ${({ theme }) => theme.soft};
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  border-radius: 20px;
  margin-bottom: 10px;
  position: sticky;
  top: 90px;
`;
const SendBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;
const EmailBox = styled.input`
  border: none;
  outline: none;
  padding: 0px 10px;
  width: 600px;
  height: 50px;
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
`;
const Text = styled.textarea`
  border: none;
  outline: none;
  padding: 10px 10px;
  width: 600px;
  height: 200px;
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
`;
const Button = styled.button`
  background-color: #f18736;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  width: 12%;
  height: 40px;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
`;
const Icon=styled.div`
display: flex;
justify-content: center;
align-items: center;
width:${props=>props.page ? "100%" :"50%"};
`;
const Socialicon=styled.div`
padding: 7px;
height: 50px;
width: 50px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
background-color:${props=>props.bc};
color: white;
margin: 10px;
cursor: pointer;
`;
const Contact = ({page}) => {
  return (
    <>
      <Container>
        <Tittle>CONTACT</Tittle>
        <Wrapper page={page}>
          <SendBox>
            <EmailBox type="email" placeholder="Email" />
            <Text placeholder="Your Messege.." />
            <Button>
              <Send style={{ fontSize: "40px" }} />{" "}
            </Button>
          </SendBox>
          <Icon page={page}>
            <Socialicon  bc={"#3b5998"}>
              <Facebook style={{ fontSize: "30px" }} />
            </Socialicon>
            <Socialicon bc={"#e95950"}>
              <Instagram style={{ fontSize: "30px" }}/>
            </Socialicon>
            <Socialicon bc={"#55acee"}>
              <Twitter style={{ fontSize: "30px" }}/>
            </Socialicon>
            <Socialicon bc={"#000000"}>
                <GitHub style={{ fontSize: "30px" }}/>
            </Socialicon>
          </Icon>
        </Wrapper>
      </Container>
    </>
  );
};

export default Contact;
