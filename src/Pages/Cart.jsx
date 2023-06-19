import React from "react";
import Footer from "../components/Footer/Footer";
import styled from "styled-components";
import Navbar from "../components/Navbar/Navbar";
import Announcement from "../components/Announcement";
import { Add, Remove } from "@mui/icons-material";
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.div`
  font-weight: 400;
  text-align: center;
  font-size: 25px;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;
const Button = styled.button`
  background-color: ${(props) => (props.bg === "filled" ? "#000" : "#fff")};
  color: ${(props) => (props.bg === "filled" ? "#fff" : "#000")};
  padding: 10px;
  border: ${(props) => (props.bg === "filled" ? "none" : "1.5px solid black")};
  margin: ${(props) => props.margin};
  width: ${(props) => props.width};
`;
const TopTexts = styled.div``;
const TopText = styled.span`
  cursor: pointer;
  margin: 0px 10px;
  text-decoration: underline;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
`;
const Info = styled.div`
  flex: 3;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;
const ProductDetails = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductSize = styled.span``;
const ProductName = styled.span`
  font-size: 17px;
`;
const ProductId = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div``;
const ProductAmountContainer = styled.div`
  display: flex;
  margin: 10px;
  justify-content: center;
  align-items: center;
`;
const ProductAmount = styled.div`
  border: 1px solid black;
  width: 20px;
  height: 20px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 5px;
`;
const ProductBrand = styled.h3`
  font-size: 22px;
`;
const ProductPrice = styled.div`
  font-size: 25px;
  font-weight: 500;
  margin-top: 10px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.2px solid #00000071;
  padding: 10px;
  height: 280px;
`;
const SummaryHeader = styled.h3`
  font-size: 28px;
  margin-bottom: 10px;
`;
const SummaryItem = styled.div`
  padding: 10px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SummaryItemText = styled.span`
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  margin-right: 10px;
`;
const SummaryItemPrice = styled.span`
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
`;
const Cart = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>Your Bag</Title>
        <Top>
          <Button bg="transparent">CONTINUE SHOPPING</Button>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Wishlist(0)</TopText>
            <TopText></TopText>
          </TopTexts>
          <Button bg="filled">CHECKOUT NOW</Button>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetails>
                <Image src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" />
                <Details>
                  <ProductBrand>Nike</ProductBrand>
                  <ProductName>
                    <b>Product:</b>Red Sneaker
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 23SA1242WEZ
                  </ProductId>
                  <ProductColor color="red" />
                  <ProductSize>
                    <b>Size:</b>10
                  </ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>Rs. 3299</ProductPrice>
              </PriceDetail>
            </Product>
            <Product>
              <ProductDetails>
                <Image src="https://images.unsplash.com/photo-1605408499391-6368c628ef42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" />
              </ProductDetails>
            </Product>
          </Info>
          <Summary>
            <SummaryHeader>ORDER SUMMARY</SummaryHeader>
            <SummaryItem>
              <SummaryItemText fontWeight="600">Subtotal: </SummaryItemText>
              <SummaryItemPrice>Rs. 5490</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText fontWeight="600">
                Estimated Shipping:
              </SummaryItemText>
              <SummaryItemPrice>Rs. 200</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText fontWeight="600">
                Shipping Discount:
              </SummaryItemText>
              <SummaryItemPrice>Rs. 200</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText fontSize="28px" fontWeight="600">
                Total
              </SummaryItemText>
              <SummaryItemPrice fontSize="28px">Rs. 5490</SummaryItemPrice>
            </SummaryItem>

            <Button bg="filled" margin="20px 0px 0px 0px" width="100%">
              CHECKOUT NOW
            </Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
