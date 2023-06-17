import {
  FavoriteBorderOutlined,
  HeartBrokenOutlined,
  SearchOutlined,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Circle = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  background: #c5c5c57c;
  position: absolute;
`;
const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: #00000065;
  opacity: 0;
  height: 300px;
  padding: 18px 10px;
  width: 280px;
  top: 0;
  bottom: 50px;
  right: 0;
  left: 0;
  margin: auto;
  transition: all 0.5s;
  z-index: 2;
`;
const Icon = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  cursor: pointer;
  transition: all 0.5s;
  :hover {
    background: #0000002c;
    transform: scale(1.1);
    color: #fff;
  }
`;
const Image = styled.img`
  height: 90%;
  width: 300px;
  object-fit: cover;
  z-index: 2;
`;

const Container = styled.div`
  flex: 1;
  min-width: 280px;
  margin: 25px 5px;
  height: 320px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 70px;
  background: #f7f7f73d;
  transition: 0.5s linear;
  :hover ${Info} {
    opacity: 1;
  }
  :hover{
    background: #00000016;
  }
`;

const Details = styled.div`
  /* position: absolute; */
  z-index: 3;
  bottom: 0px;
  background: #fff;
  padding: 12px 10px;
  font-weight: 600;

  width: 280px;
  font-size: 20px;
  text-align: left;
  .name,
  .price {
    font-size: 16px;
    padding: 4px 0px;
  }
  .name {
    font-weight: 400;
  }
  /* border: 2px solid #0000004c; */
`;
const SingleProduct = (props) => {
  return (
    <Container>
      <Image src={props.data.img} />
      <Details>
        <h4 className="brand">Company</h4>
        <p className="name">T-shirt</p>
        <p className="price">
          &#8377;400{" "}
          <s style={{ fontWeight: "400", padding: "0px 5px" }}>&#8377;800</s>{" "}
          <span style={{ color: "#ff0000cc" }}>(50% off) </span>
        </p>
      </Details>
      <Info>
        <Icon>
          <ShoppingBagOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default SingleProduct;
