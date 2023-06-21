import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";
import Announcement from "../components/Announcement";
import styled from "styled-components";
import { Add, Delete, Remove } from "@mui/icons-material";
import { mobile } from "../Responsive";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;
const ImageContainer = styled.div`
  flex: 1;
  margin-bottom: 10px;
`;
const Image = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  ${mobile({height:"350px"})}
`;
const InfoContainer = styled.div`
  flex: 1;
  border-left: 1px solid #00000018;
  padding-left: 30px;
  ${mobile({ borderTop: "1px solid #00000018",borderLeft:"none",paddingLeft: "0px" })}
`;
const Desc = styled.p`
  margin: 10px 0px;
  padding: 10px 0px;
`;
const Header = styled.h1`
  margin: 10px 0px;
`;
const Title = styled.h3`
  margin: 10px 0px;
`;
const Price = styled.h3`
  margin: 10px 0px;
  font-size: 35px;
  font-weight: 200;
`;
const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 20px 0px;
  justify-content: space-between;
`;
const Filter = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${mobile({ marginBottom: "15px" })}
`;
const FilterTitle = styled.h4`
  margin-right: 10px;
`;
const FilterColor = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${(props) => props.bg};
  border: 0.5px solid black;
  padding: 5px;
  margin: 4px;
  border-radius: 50%;
  cursor: pointer;
`;
const FilterSize = styled.div`
  border: 1px solid black;
  width: 30px;
  height: 30px;
  padding: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 2px;
  cursor: pointer;
`;
const AddtoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
const Total = styled.span`
  font-size: 25px;
  padding: 10px;
  margin: 10px;
  border: 2px solid teal;
  height: 10px;
  width: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  width: 200px;
  padding: 10px;
  margin: 20px 20px 20px 40px;
  background: transparent;
  font-size: 20px;
  transition: 0.5s;
  ${mobile({margin: "20px 20px 20px 0px"})}
  :hover {
    border: 2px solid teal;
    background: teal;
    color: #fff;
  }
`;

const ProductFull = () => {
  return (
    <>
      <Container>
        <Announcement />
        <Navbar />
        <Wrapper>
          <ImageContainer>
            <Image src="https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hpcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" />
          </ImageContainer>
          <InfoContainer>
            <Header>Tommy Hilfiger</Header>
            <Title>White T-shirt for men</Title>
            <Desc>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              beatae similique ea repellat, voluptate quas quam accusantium
              commodi sit rerum quos incidunt quae, ducimus molestias tempore
              nobis sed quis aspernatur corporis odio, minus architecto
              deserunt? Sint, aperiam ducimus voluptatum qui delectus odio
              cupiditate nostrum numquam inventore deserunt perferendis dolorem
              aliquam.
            </Desc>
            <Price>Rs.500</Price>
            <FilterContainer>
              <Filter>
                <FilterTitle>Color</FilterTitle>
                <FilterColor bg="white" />
                <FilterColor bg="red" />
                <FilterColor bg="black" />
              </Filter>
              <Filter>
                <FilterTitle>Size</FilterTitle>
                <FilterSize>XS</FilterSize>
                <FilterSize>S</FilterSize>
                <FilterSize>M</FilterSize>
                <FilterSize>L</FilterSize>
                <FilterSize>XL</FilterSize>
                <FilterSize>XXL</FilterSize>
              </Filter>
            </FilterContainer>
            <AddtoContainer>
              <Remove />
              <Total>1</Total>
              <Add />
              <Button style={{ marginRight: "100px" }}>Add to Cart</Button>
            </AddtoContainer>
          </InfoContainer>
        </Wrapper>
        <Newsletter />
        <Footer />
      </Container>
    </>
  );
};

export default ProductFull;
