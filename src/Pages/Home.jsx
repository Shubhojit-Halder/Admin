import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Announcement from "../components/Announcement";
import Slider from "../components/Slider/Slider";
import Categories from "../components/Categories/Categories";
import Products from "../components/PopularProducts/Products";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";
import { useSelector } from "react-redux";
import Login from "./Login";
import { publicRequest } from "../RequestMethods";

const Home = () => {
  // const user = useSelector((state) => state.user.currentUser);
  
  return (
    <>
      <div>
        <Announcement />
        <Navbar />
        <Slider />
        <Categories />
        <Products />
        <Newsletter />
        <Footer />
      </div>
    </>
  );
};

export default Home;
