import React from 'react'
import SingleProduct from '../PopularProducts/SingleProduct';
import { PopularProducts } from '../PopularProducts/Data';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 30px;
`;
const AllProducts = () => {
  return (
      <Container>
        {PopularProducts.map((data, index) => {
          return <SingleProduct data={data} />;
        })}
      </Container>
  )
}

export default AllProducts