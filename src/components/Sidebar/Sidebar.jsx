// import React from 'react'

import { SidebarContainer } from "../../Styles/SidebarContainer.styled";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import Inventory2RoundedIcon from "@mui/icons-material/Inventory2Rounded";
import LocalShippingRoundedIcon from "@mui/icons-material/LocalShippingRounded";
import InventoryRoundedIcon from '@mui/icons-material/InventoryRounded';
import ChangeCircleRoundedIcon from '@mui/icons-material/ChangeCircleRounded';
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const Navigate =useNavigate();
  return (
    <>
      <SidebarContainer>
        <div className="main-category">
          <div className="sub-sections">
            <p className="category-header">
              Main <div className="line"></div>
            </p>
            <div className="list-items" onClick={()=>{Navigate("/")}}>
              <DashboardRoundedIcon style={{ marginRight: "5px" }} />
              Dashboard
            </div>
          </div>
          <div className="sub-sections">
            <p className="category-header">
              Useful <div className="line"></div>
            </p>
            <div className="list-items"onClick={()=>{Navigate("/users")}}>
              <AccountCircleRoundedIcon style={{ marginRight: "5px" }} />
              Users
            </div>
            <div className="list-items" onClick={()=>{Navigate("/orders")}}>
              <ShoppingCartRoundedIcon style={{ marginRight: "5px" }} />
              Orders
            </div>
            <div className="list-items" onClick={()=>{Navigate("/products")}}>
              <Inventory2RoundedIcon style={{ marginRight: "5px" }} />
              Products
            </div>
            <div className="list-items" onClick={()=>{Navigate("/delivery")}}>
              <LocalShippingRoundedIcon style={{ marginRight: "5px" }} />
              Delivery
            </div>
          </div>
          <div className="sub-sections">
            <p className="category-header">
              Products <div className="line"></div>
            </p>
            <div className="list-items"onClick={()=>{Navigate("/users")}}>
              <InventoryRoundedIcon style={{ marginRight: "5px" }} />
              Add Product
            </div>
            <div className="list-items" onClick={()=>{Navigate("/orders")}}>
              <ChangeCircleRoundedIcon style={{ marginRight: "5px" }} />
              Update Product
            </div>
            </div>
        </div>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
