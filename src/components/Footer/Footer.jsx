import React from "react";
import styled from "styled-components";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import {
  LocationOnOutlined,
  Mail,
  MailLockOutlined,
  MailOutlined,
  Phone,
  Pinterest,
} from "@mui/icons-material";
import { Logo } from "../Navbar/Navbar";
import cards from "../Statics/cards.png";
import { mobile } from "../../Responsive";
const Container = styled.div`
  padding: 10px;
  display: flex;
  ${mobile({flexDirection:"column"})}
`;
const Left = styled.div`
  flex: 1;
  /* display: flex; */
  /* flex-direction: column; */
  padding: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 10px 20px 10px;
`;
const Icon = styled.button`
  padding: 5px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  transition: 0.2s linear;

  :hover {
    transform: translateY(-10px);
  }
`;
const Desc = styled.div`
  margin: 20px 0px;
  line-height: 20px;
  letter-spacing: 0.5pt;
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  letter-spacing: 0.5pt;
  cursor: pointer;
`;
const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
const Payment = styled.img`
  width: 50%;
`;
const Footer = () => {
  return (
    <>
      <Container>
        <Left>
          <Logo>Halder's</Logo>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic,
            quibusdam repellendus? Deserunt repellat autem consequatur omnis
            consequuntur dicta est quis, reprehenderit expedita minus voluptatem
            vel, asperiores itaque recusandae! Assumenda, exercitationem?
          </Desc>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Men's Fashion</ListItem>
            <ListItem>Women's Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms and Conditions</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <LocationOnOutlined style={{ marginRight: "10px" }} />
            45/1, Agarwala Garden Road, Kolkata-700038
          </ContactItem>
          <ContactItem>
            <Phone style={{ marginRight: "10px" }} />
            +91 9903247560
          </ContactItem>
          <ContactItem>
            <MailOutlined style={{ marginRight: "10px" }} />
            contact@halderfashion.com
          </ContactItem>
          <Payment src={cards} />
        </Right>
      </Container>
      <SocialMedia>
        <Icon>
          <FacebookRoundedIcon />
        </Icon>
        <Icon>
          <InstagramIcon />
        </Icon>
        <Icon>
          <Pinterest />
        </Icon>
      </SocialMedia>
    </>
  );
};

export default Footer;
