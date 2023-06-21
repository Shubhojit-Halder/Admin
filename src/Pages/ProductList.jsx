import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Products from "../components/PopularProducts/Products";
import AllProducts from "../components/AllProducts/AllProducts";
import { mobile } from "../Responsive";
import { useLocation } from "react-router-dom";

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
  ${mobile({ margin: "10px 5px 10px 0px" })}
`;
const Option = styled.option``;
const ProductList = () => {
  const location = useLocation();
  const category = location.pathname.split("/")[2];

  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("new");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };
  const handleSort = (e) => {
    setSort(e.target.value);
  };
  // console.log({...filters,sort});
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Header>Dresses</Header>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products: </FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option selected disabled>
              Color
            </Option>
            {["White", "Black", "Red"].map((item, index) => {
              return <Option key={index}>{item}</Option>;
            })}
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option selected disabled>
              Size
            </Option>
            {["XS", "S", "M"].map((item, index) => {
              return <Option key={index}>{item}</Option>;
            })}
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products: </FilterText>
          <Select onChange={handleSort}>
            <Option selected value="new">Newest</Option>
            <Option value="asc">Price(Asc)</Option>
            <Option value="desc">Price(Desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <AllProducts category={category} filters={filters} sort={sort}/>
    </Container>
  );
};

export default ProductList;
