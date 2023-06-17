import { margin } from "@mui/system";
import React from "react";
import styled from "styled-components";
import { Line } from "../components/Categories/Categories";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${(props) => props.bg});
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: #ffffff;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
`;
const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const Title = styled.h1`
  font-size: 25px;
  font-weight: 400;
  margin: 10px 10px;
`;
const Input = styled.input`
  width: 40%;
  padding: 10px;
  margin: 10px;
  outline: none;
  font-size: 15px;
`;
const Agreement = styled.span`
  margin: 10px;
  line-height: 20px;
  letter-spacing: 0.2pt;
  text-align: center;
`;
const Button = styled.button`
  background-color: teal;
  color: #fff;
  border: none;
  outline: none;
  padding: 10px;
  width: 90%;
  font-size: 20px;
  margin:10px;

`;
const Register = () => {
  return (
    <Container
      bg={
        "https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fEZhc2hpb258ZW58MHwwfDB8fHww&auto=format&fit=crop&w=600&q=60"
      }
    >
      <Wrapper>
        <Title>Register</Title>
        <Line/>
        <Form>
          <Input placeholder="First Name" type="text" />
          <Input placeholder="UserName" type="text" />
          <Input placeholder="Email" type="email" />
          <Input placeholder="Mobile no." type="number" />
          <Input placeholder="Password" type="password" />
          <Input placeholder="Confirm Password" type="password" />
        </Form>
        <Agreement>
          {"By registering you accept all our terms and Conditions and".toUpperCase()}{" "}
          <b style={{ margin: "10px" }}>{"Privacy Policy".toUpperCase()}</b>
        </Agreement>
        <Button>SIGN IN</Button>
      </Wrapper>
    </Container>
  );
};

export default Register;
