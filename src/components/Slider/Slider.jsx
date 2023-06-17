import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import styled from "styled-components";
import SliderData from "./SliderData";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #fff;
  overflow-x: hidden;
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #e4e4e44e;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.side === "left" && "10px"};
  right: ${(props) => props.side === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: all 1.2s ease-in-out;
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`;
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  flex: 1;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;
const Image = styled.img`
  height: 80%;
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 22px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  background-color: #fff;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  transition: 0.5s;
  width: 150px;
  :hover{
    width: 200px;
  }
`;
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState("");
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow side="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {SliderData.map((data, index) => {
          return (
            <Slide bg="#fdaf12" key={index}>
              <ImageContainer>
                <Image src={data.img} />
              </ImageContainer>
              <InfoContainer>
                <Title>{data.Title}</Title>
                <Desc>{data.desc}</Desc>
                <Button>SHOP NOW</Button>
              </InfoContainer>
            </Slide>
          );
        })}
      </Wrapper>
      <Arrow side="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
