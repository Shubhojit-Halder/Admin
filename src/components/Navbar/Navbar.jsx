import React from "react";
import { NavContainer } from "../../Styles/Navbar.styled";
import Badge from "@mui/material/Badge";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {logout} from "../../ReduxStore/userSlice"
const Navbar = () => {
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
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
          {user === null ? (
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
          ) : (
            <>
            <div
              style={{
                margin: "0px 10px",

                background: "#9a9a9a68",
                width: "40px",
                height: "40px",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                borderRadius: "50%",
              }}
            >
              {user.username[0].toUpperCase()}
            </div>
            <Button variant="outlined" style={{marginRight:"20px",marginLeft:"10px"}} onClick={()=>dispatch(logout())}>LOGOUT</Button>
            </>
          )}
        </div>
      </NavContainer>
    </>
  );
};

export default Navbar;
