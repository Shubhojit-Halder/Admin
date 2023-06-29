import React, { useEffect, useMemo, useState } from "react";
import Footer from "../components/Footer/Footer";
import styled from "styled-components";
import Navbar from "../components/Navbar/Navbar";
import Announcement from "../components/Announcement";
import { Add, Remove } from "@mui/icons-material";
import { mobile } from "../Responsive";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  moneyReductionWhenProductRemoved,
  removeOneProduct,
} from "../ReduxStore/cartSlice";
import StripeCheckout from "react-stripe-checkout";
import { publicRequest } from "../RequestMethods";
// import { userRequest } from "../App";
import { useNavigate } from "react-router-dom";
import {
  Bottom,
  Button,
  Details,
  Image,
  Info,
  PriceDetail,
  Product,
  ProductAmount,
  ProductAmountContainer,
  ProductBrand,
  ProductColor,
  ProductDetails,
  ProductId,
  ProductName,
  ProductPrice,
  ProductSize,
  Summary,
  SummaryHeader,
  SummaryItem,
  SummaryItemPrice,
  SummaryItemText,
  Title,
  Top,
  TopText,
  TopTexts,
  Wrapper,
} from "./Styles/CartStyles";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const [cartData, setCartData] = useState(cart.product);

  const handlePaymentRequest = async () => {
    try {
      let paymentItem = [];
      cartData.forEach((item) => {
        paymentItem.push({
          _id: item._id,
          size: item.size,
          color: item.color,
          price: item.price,
          quantity: item.quantity,
        });
      });
      // console.log(paymentItem);
      const res = await publicRequest.post("/checkout/payment", {
        userId: user.currentUser._id,
        productData: paymentItem,
        products: cartData,
        token: user.currentUser.accessToken,
      });
      if (res.data.url) {
        window.location.href = res.data.url;
      }
      console.log(res.data);
    } catch (error) {
      console.log("Error in payment processing");
    }
  };

  return (
    <>
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
            {cartData.length != 0 ? (
              cartData.map((product, index) => {
                return (
                  <Product key={product._id + index}>
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
                          onClick={() => {
                            product.quantity = product.quantity + 1;
                            // dispatch(addProduct(product));
                          }}
                        />
                        <ProductAmount>{product.quantity}</ProductAmount>
                        <Remove
                          onClick={() => {
                            console.log(index);
                            setCartData(
                              cartData
                                .slice(0, index)
                                .concat(cartData.slice(index + 1))
                            );
                            dispatch(
                              moneyReductionWhenProductRemoved(
                                cartData[index].price * cartData[index].quantity
                              )
                            );
                            dispatch(
                              removeOneProduct(
                                cartData
                                  .slice(0, index)
                                  .concat(cartData.slice(index + 1))
                              )
                            );
                          }}
                        />
                      </ProductAmountContainer>
                      <ProductPrice>
                        Rs. {product.price * product.quantity}
                      </ProductPrice>
                    </PriceDetail>
                  </Product>
                );
              })
            ) : (
              <Image
                style={{ width: "100%", height: "70%" }}
                src="https://assets.materialup.com/uploads/16e7d0ed-140b-4f86-9b7e-d9d1c04edb2b/preview.png"
              />
            )}
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
              onClick={handlePaymentRequest}
            >
              CHECKOUT NOW
            </Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Cart;
