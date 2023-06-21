import React, { useEffect } from "react";
import SingleProduct from "../PopularProducts/SingleProduct";
import { PopularProducts } from "../PopularProducts/Data";
import styled from "styled-components";
import { mobile } from "../../Responsive";
import axios from "axios";
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 30px;
  ${mobile({ marginTop: "0px" })}
`;
const AllProducts = ({ category, filters, sort }) => {
  // console.log({category,...filters,sort});
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          category
            ? `http://localhost:5000/api/product?category=${category}`
            : "http://localhost:5000/api/product"
        );
        console.log(res);
      } catch (error) {}
    };
    getProducts();
  }, [category]);

  return (
    <Container>
      {PopularProducts.map((data, index) => {
        return <SingleProduct data={data} />;
      })}
    </Container>
  );
};

export default AllProducts;
