import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import { Badge, MenuItem } from "@mui/material";
import { ShoppingCartCheckoutOutlined } from "@mui/icons-material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { mobile } from "../../Responsive";
const Container = styled.div`
  height: 60px;
  z-index: 3;
  padding-bottom: 10px;
  background: #fff;
  box-shadow: 2px 2px 5px #00000046;

  ${mobile({ height: "50px", padding: "0px 10px 15px 10px" })}/* background-color: black; */
`;

const Wrapper = styled.div`
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}

  @media(max-width:420px) {
    .menuitem {
      display: none;
    }
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 12px;
  cursor: pointer;
  ${mobile({ display: "none" })}
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
  ${mobile({ width: "100%" })}
`;
const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  padding: 3px 3px;
  background-color: #e6e6e62a;
`;

const Center = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  ${mobile({flex:0.5})}
  /* justify-content: center; */
  /* text-align: center; */
`;
export const Logo = styled.h1`
  font-weight: bold;
  font-size: 30px;
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
        <Center>
          <Logo>HALDER'S</Logo>
          <MenuItem style={{ marginLeft: "20px" }} className="menuitem">
            MEN
          </MenuItem>
          <MenuItem style={{ marginLeft: "20px" }} className="menuitem">
            WOMEN
          </MenuItem>
          <MenuItem style={{ marginLeft: "20px" }} className="menuitem">
            KIDS
          </MenuItem>
        </Center>
        <Right>
          <Left>
            <Language>EN</Language>
            <SearchContainer>
              <Input placeholder="Search for brands, products and more" />
              <SearchIcon style={{ color: "gray", fontSize: "16px" }} />
            </SearchContainer>
          </Left>
          <MenuItem className="menuitem">Register</MenuItem>
          <MenuItem className="menuitem">Login</MenuItem>

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
