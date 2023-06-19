import React from "react";
import styled from "styled-components";
import { CategoriesData } from "./CategoriesData";
import CategoriesItem from "./CategoriesItem";
import { mobile } from "../../Responsive";

const Wrapper = styled.section`
  background: #dfdfdf45;
  height: 100vh;
  padding: 20px 0px 10px 0px;
  ${mobile({height: "100%"})}
`
const Container = styled.div`
  display: flex;
  width: 100vw;
  ${mobile({ flexDirection:"column"})}

`;
const Header = styled.h1`
  font-size: 60px;
  padding: 10px;
  text-align: center;
  ${mobile({ fontSize:"35px" ,padding: "5px"})}
`;
export const Line=styled.div`
  width: 200px;
  height: 5px;
  background-color: #00a88f;
  left: 0;
  right: 0;
  margin: auto;
  margin-bottom: 15px;
  ${mobile({ height:"2px"})}
`
const Categories = () => {
  return (
    <>
    <Wrapper>
      <Header>Featured <span style={{color:""}}>Products</span></Header>
      <Line/>
      <Container>
        {CategoriesData.map((data, index) => {
          return <CategoriesItem data={data}/>;
        })}
      </Container>
      </Wrapper>
    </>
  );
};

export default Categories;
