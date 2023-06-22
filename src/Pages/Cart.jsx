import React, { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import styled from "styled-components";
import Navbar from "../components/Navbar/Navbar";
import Announcement from "../components/Announcement";
import { Add, Remove } from "@mui/icons-material";
import { mobile } from "../Responsive";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../ReduxStore/CartRedux";
import StripeCheckout from "react-stripe-checkout";
import { userRequest } from "../RequestMethods";
import { useNavigate } from "react-router-dom";
import axios from "axios";
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
  ${mobile({ display: "none" })}
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
  flex-wrap: wrap;
  min-height: 70vh;
  ${mobile({ marginTop: "30px" })}/* align-items: center; */
`;
const Info = styled.div`
  flex: 3;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  flex-wrap: wrap;
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
const ProductId = styled.span`
  /* display: "flex";
  flex-wrap: wrap; */
  font-size: 10px;
`;

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
  ${mobile({
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "10px 0px 15px 0px",
  })}
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
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const [stripeToken, setStripeToken] = useState(null);
  const onToken = (token) => {
    setStripeToken(token);
    console.log(token);
  };
  const handleClick = async () => {
    console.log(cart.product);
    try {
      const res = await userRequest.post("/checkout/payment", cart.product);
      if (res.data.url) {
        window.location.href = res.data.url;
      }
    } catch (error) {
      console.log("haan bhai abr error");
    }
  };
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 500,
        });
        console.log(res.data);
        Navigate("/sucess", { state: res.data });
      } catch (error) {
        console.log("arey bhai" + error);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.price, Navigate]);
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
            {cart.product.map((product) => {
              return (
                <Product key={product._id}>
                  <ProductDetails>
                    <Image src={product.img} />
                    <Details>
                      <ProductBrand>{product.brand}</ProductBrand>
                      <ProductName>
                        <b>Product:</b>
                        {product.title}
                      </ProductName>
                      <ProductId>
                        <b>ID:</b> {product._id}
                      </ProductId>
                      <ProductColor color={product.color} />
                      <ProductSize>
                        <b>Size:</b>
                        {product.size}
                      </ProductSize>
                    </Details>
                  </ProductDetails>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <Add
                        onclick={() => {
                          quantity + 1;
                          dispatch(addProduct({ ...product, quantity }));
                        }}
                      />
                      <ProductAmount>{product.quantity}</ProductAmount>
                      <Remove
                        onclick={() => {
                          quantity = quantity - 1;
                          dispatch(addProduct({ ...product, quantity }));
                        }}
                      />
                    </ProductAmountContainer>
                    <ProductPrice>
                      Rs. {product.price * product.quantity}
                    </ProductPrice>
                  </PriceDetail>
                </Product>
              );
            })}
          </Info>
          <Summary>
            <SummaryHeader>ORDER SUMMARY</SummaryHeader>
            <SummaryItem>
              <SummaryItemText fontWeight="600">Subtotal: </SummaryItemText>
              <SummaryItemPrice>Rs. {cart.price}</SummaryItemPrice>
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
              <SummaryItemPrice fontSize="28px">
                Rs. {cart.price}
              </SummaryItemPrice>
            </SummaryItem>
            <Button
              bg="filled"
              margin="20px 0px 0px 0px"
              width="100%"
              onClick={handleClick}
            >
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
