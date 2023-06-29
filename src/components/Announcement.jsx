import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #00a88f;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  position: sticky;
  z-index: 10;
  width: 100vw;
  top:0px;
`;
const Announcement = () => {
  return (
    <Container>
      <marquee>
        Super Duper Deal! Free Shipping on order above &#8377;500
      </marquee>
    </Container>
  );
};

export default Announcement;
