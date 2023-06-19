import React from "react";
import styled from "styled-components";
import { mobile } from "../../Responsive";

const Container = styled.div`
  flex: 1;
  margin: 10px;
  /* padding: 10px; */
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

`;
const Title = styled.h1`
  color: #fff;
  font-size: 50px;
  padding: 10px;
  ${mobile({fontSize:"40px"})}
`;
const Button = styled.button`
  padding: 10px;
  background-color: #fff;
  border: none;
  cursor: pointer;
  transition: 0.5s;
  font-size: 15px;
  :hover{
    font-weight: 600;
    background-color: #0000007d;
    color: #fff;
  }
`;
const CategoriesItem = (props) => {
  return (
    <Container key={props.data.id}>
      <Image src={props.data.img} />
      <Info>
        <Title>{props.data.title}</Title>
        <Button>Shop Now</Button>
      </Info>
    </Container>
  );
};

export default CategoriesItem;
