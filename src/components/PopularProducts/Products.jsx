import React, { useEffect, useState } from "react";
import { PopularProducts } from "./Data";
import SingleProduct from "./SingleProduct";
import styled from "styled-components";
import { mobile } from "../../Responsive";
import { publicRequest } from "../../RequestMethods";

const Wrapper = styled.div`
  margin-top: 20px;
  text-align: center;
`;
const Header = styled.h1`
  font-size: 60px;
  padding: 10px;
  ${mobile({ fontSize: "35px", padding: "5px" })}
`;
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Line = styled.div`
  width: 200px;
  height: 5px;
  background-color: #00a88f;
  left: 0;
  right: 0;
  margin: auto;
  margin-bottom: 40px;
  ${mobile({ height: "2px" })}
`;

const Products = () => {
  const [popularProducts, setPopularProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await publicRequest.get("/product?new=true");
        setPopularProducts(res.data);
      } catch (err) {
        console.log("error in popular product", err);
      }
    };
    fetchProducts();
  }, []);

  return (
    <Wrapper>
      <Header>Popular Items</Header>
      <Line />
      <Container>
        {popularProducts ? (
          popularProducts.map((data, index) => {
            return <SingleProduct data={data} key={index} />;
          })
        ) : (
          <>loading</>
        )}
      </Container>
    </Wrapper>
  );
};

export default Products;
