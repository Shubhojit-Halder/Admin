import React from "react";
import Navbar from "../components/Navbar/Navbar";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Products from "../components/PopularProducts/Products";
import AllProducts from "../components/AllProducts/AllProducts";

const Container = styled.div``;
const Header = styled.h1`
  padding: 10px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 10px;
`;
const Select = styled.select`
  /* width:100px ; */
  padding: 10px;
  margin: 0px 5px;
  outline: none;
`;
const Option = styled.option``;
const ProductList = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Header>Dresses</Header>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products: </FilterText>
          <Select>
            <Option selected disabled>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Green</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
          </Select>
          <Select>
            <Option selected disabled>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
            <Option>XXL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products: </FilterText>
          <Select>
            <Option selected disabled>
              None
            </Option>
            <Option>Price(Asc)</Option>
            <Option>Price(Desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <AllProducts />
    </Container>
  );
};

export default ProductList;
