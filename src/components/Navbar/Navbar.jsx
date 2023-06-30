// import React from "react";
import { NavContainer } from "../../Styles/Navbar.styled";
import Badge from "@mui/material/Badge";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import { Button } from "@mui/material";
const Navbar = () => {
  return (
    <>
      <NavContainer>
        <div className="searchDiv">
          <input
            type="text"
            className="search"
            placeholder="search for products"
          />
        </div>
        <h3 className="logo">HALDER&apos;S</h3>
        <div className="right">
          <Badge
            badgeContent={2}
            color="primary"
            style={{ margin: "0px 10px" }}
          >
            <NotificationsNoneRoundedIcon />
            </Badge>
          <Button
            style={{
              margin: "0px 20px 0px 10px",
              border: "1px solid #000",
              color: "#000",
              padding: "5px 10px",
              width: "100px",
            }}
          >
            Login
          </Button>
        </div>
      </NavContainer>
    </>
  );
};

export default Navbar;
