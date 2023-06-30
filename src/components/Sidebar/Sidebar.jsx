// import React from 'react'

import { SidebarContainer } from "../../Styles/SidebarContainer.styled";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import Inventory2RoundedIcon from "@mui/icons-material/Inventory2Rounded";
import LocalShippingRoundedIcon from "@mui/icons-material/LocalShippingRounded";
const Sidebar = () => {
  return (
    <>
      <SidebarContainer>
        <div className="main-category">
          <div className="sub-sections">
            <p className="category-header">
              Main <div className="line"></div>
            </p>
            <div className="list-items">
              <DashboardRoundedIcon style={{ marginRight: "5px" }} />
              Dashboard
            </div>
          </div>
          <div className="sub-sections">
            <p className="category-header">
              Useful <div className="line"></div>
            </p>
            <div className="list-items">
              <AccountCircleRoundedIcon style={{ marginRight: "5px" }} />
              Users
            </div>
            <div className="list-items">
              <ShoppingCartRoundedIcon style={{ marginRight: "5px" }} />
              Orders
            </div>
            <div className="list-items">
              <Inventory2RoundedIcon style={{ marginRight: "5px" }} />
              Products
            </div>
            <div className="list-items">
              <LocalShippingRoundedIcon style={{ marginRight: "5px" }} />
              Delivery
            </div>
          </div>
        </div>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
