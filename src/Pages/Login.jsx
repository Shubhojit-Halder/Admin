import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar/Navbar";
import Announcement from "../components/Announcement";
import { Line } from "../components/Categories/Categories";
import { useDispatch, useSelector } from "react-redux";
import { loginReq } from "../loginApiCalls";
import { Alert, Snackbar } from "@mui/material";
import { userRequest } from "../RequestMethods";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  z-index: -1;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${(props) => props.bg});
  /* background-color: #7affbf6b; */
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 300px;
  padding: 20px;
  background-color: #ffffff;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  /* border: 1px solid black; */
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
  width: 90%;
  padding: 10px;
  margin: 10px;
  outline: none;
  font-size: 15px;
`;
const Button = styled.button`
  background-color: teal;
  color: #fff;
  border: none;
  outline: none;
  padding: 10px;
  width: 90%;
  font-size: 20px;
  margin: 10px;
  cursor: pointer;
  :disabled {
    background: #00000047;
    color: #fff;
    cursor: not-allowed;
  }
`;
const Link = styled.a`
  cursor: pointer;
  padding: 5px 10px;
  text-decoration: underline;
`;
const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, isError, currentUser } = useSelector(
    (state) => state.user
  );
  const loadCartData = async () => {
    const res = await userRequest.get(`/find/${currentUser._id}`);
    console.log(res.data);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    loginReq(dispatch, { username, password });
  };
  return (
    <>
      <Announcement />
      <Navbar />
      <Container
        bg={
          "https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fEZhc2hpb258ZW58MHwwfDB8fHww&auto=format&fit=crop&w=600&q=60"
        }
      >
        <Wrapper>
          <Title>SIGN IN</Title>
          <Line />
          <Form>
            {isError && (
              <p style={{ color: "red", fontWeight: 600 }}>
                Something went wrong!! Try again
              </p>
            )}
            <Input
              placeholder="Email id"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
            <Input
              placeholder="Password"
              // type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={handleSubmit} disabled={isFetching}>
              SIGN IN
            </Button>
            <Link>Have you forgot your password?</Link>
            <Link>Don't have an account?</Link>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};

export default Login;
