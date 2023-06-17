import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import { Badge, MenuItem } from "@mui/material";
import { ShoppingCartCheckoutOutlined } from "@mui/icons-material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
const Container = styled.div`
  height: 60px;
  /* background-color: black; */
`;

const Wrapper = styled.div`
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 12px;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  /* border: 0.5px solid #d8d8d8; */
  border-radius: 15px;
  display: flex;
  align-items: center;
  margin-left: 15px;
  padding: 10px;
  background-color: #bdbdbd2a;
  width: 280px;
  height: 20px;
`;
const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  padding:3px 3px;
  background-color: #e6e6e62a;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;
export const Logo = styled.h1`
  font-weight: bold;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: end;
`;
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search for brands, products and more" />
            <SearchIcon style={{ color: "gray", fontSize: "16px" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Halder's</Logo>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Login</MenuItem>
          <MenuItem>
            <Badge badgeContent={5} color="primary">
              {/* <ShoppingCartCheckoutOutlined/> */}
              <ShoppingBagOutlinedIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
