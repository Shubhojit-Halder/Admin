import React from "react";
import SingleProduct from "../PopularProducts/SingleProduct";
import { PopularProducts } from "../PopularProducts/Data";
import styled from "styled-components";
import { mobile } from "../../Responsive";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 30px;
  ${mobile({ marginTop: "0px" })}
`;
const AllProducts = () => {
  return (
    <Container>
      {PopularProducts.map((data, index) => {
        return <SingleProduct data={data} />;
      })}
    </Container>
  );
};

export default AllProducts;
