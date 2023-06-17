import { Description } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import SendIcon from "@mui/icons-material/Send";
import { Line } from "../Categories/Categories";
const Container = styled.div`
  padding: 30px;
  margin-top: 60px;
  background: #dfdfdf45;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 60px;
`;
const Desc = styled.div`
  font-size: 20px;
  padding: 10px;
`;
const InputContainer = styled.div`
  width: 500px;
  height: 40px;
  display:flex;
  justify-content:center ;
  align-items: center;
  background: #000;
  margin: 10px;
`;
const Input = styled.input`
  width: 400px;
  height: 20px;
  font-size: 20px;
  outline: none;
  border: none;
  padding: 10px;
  background-color: #e3e3e3;

`;
const Button = styled.button`
  height: 100%;
  display: flex;
  align-items: center;
  width: 100px;
  justify-content: center;
  border: none;
  background: teal;
  color: #fff;
`;
const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Line />
      <Desc>Get timely updates about your favorite products. </Desc>
      <InputContainer>
        <Input placeholder="abc@gmail.com" />
        <Button>
          <SendIcon />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
