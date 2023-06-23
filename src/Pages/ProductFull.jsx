import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";
import Announcement from "../components/Announcement";
import styled from "styled-components";
import { Add, Remove } from "@mui/icons-material";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../RequestMethods";
import {
  AddtoContainer,
  Button,
  Container,
  Desc,
  Filter,
  FilterColor,
  FilterContainer,
  FilterSize,
  FilterTitle,
  Header,
  Image,
  ImageContainer,
  InfoContainer,
  Price,
  Title,
  Total,
  Wrapper,
} from "./Styles/ProductFullContainer";
import { addProduct, updateProductQuantity } from "../ReduxStore/cartSlice";
import { useDispatch, useSelector } from "react-redux";
const ProductFull = () => {
  const cart = useSelector((state) => state.cart);

  const location = useLocation();
  const dispatch = useDispatch();
  const id = location.pathname.split("/")[2];
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState([]);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [isLoaded, setisloaded] = useState(false);
  const cartData =JSON.parse(JSON.stringify(cart.product));
  
  
  let push = false;
  let newq = 0;
  console.log(product.price);

  const handleAddToCart = () => {
    for (let i = 0; i < cartData.length; i++) {
      if (cartData[i]._id === product._id) {
        newq = quantity + cartData[i].quantity;
        console.log(cartData[i].quantity, newq);
        cartData[i].quantity = newq;
        console.log(cartData[i].quantity, newq);
        dispatch(updateProductQuantity(cartData));
        push = true;
        newq = 0;
        break;
      }
    }
    if (!push) dispatch(addProduct({ ...product, quantity, color, size }));
    console.log(cartData);

  };
  // console.log({ ...product, quantity, color, size });
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(`/product/find/${id}`);
        console.log(res.data);
        setProduct(res.data);
        setisloaded(true);
        setColor(res.data.color[0]);
        setSize(res.data.size[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [id]);
  return (
    <>
      <Container>
        <Announcement />
        <Navbar />
        {isLoaded ? (
          <Wrapper>
            <ImageContainer>
              <Image src={product.img} />
            </ImageContainer>
            <InfoContainer>
              <Header>{product.brand}</Header>
              <Title>{product.title}</Title>
              <Desc>{product.desc}</Desc>
              <Price>Rs.{product.price}</Price>
              <FilterContainer>
                <Filter>
                  <FilterTitle>Color</FilterTitle>
                  {product.color?.map((data, index) => {
                    return (
                      <FilterColor
                        bg={data}
                        key={index}
                        onClick={() => {
                          setColor(data);
                        }}
                        style={{
                          border: data === color && "2px solid #070707bd",
                          scale: data === color && "1.15",
                        }}
                      />
                    );
                  })}
                </Filter>
                <Filter>
                  <FilterTitle>Size</FilterTitle>
                  {product.size?.map((data) => {
                    return (
                      <FilterSize
                        key={data}
                        onClick={() => {
                          setSize(data);
                        }}
                        style={{
                          backgroundColor: data === size && "#0c0c0c",
                          color: data === size && "#fff",
                        }}
                      >
                        {data}
                      </FilterSize>
                    );
                  })}
                </Filter>
              </FilterContainer>
              <AddtoContainer>
                <Remove
                  onClick={() => {
                    if (quantity > 1) setQuantity(quantity - 1);
                  }}
                  sx={{ color: quantity > 1 ? "#000" : "#47474775" }}
                />
                <Total>{quantity}</Total>
                <Add
                  onClick={() => {
                    setQuantity(quantity + 1);
                  }}
                />
                <Button
                  style={{ marginRight: "100px" }}
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </Button>
              </AddtoContainer>
            </InfoContainer>
          </Wrapper>
        ) : (
          <h1>please wait</h1>
        )}
        <Newsletter />
        <Footer />
      </Container>
    </>
  );
};

export default ProductFull;
