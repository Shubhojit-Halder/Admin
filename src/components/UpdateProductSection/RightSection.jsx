import React, { useEffect, useState } from "react";
import { Box } from "../../Styles/MainsectionContainer.styled";
import { publicRequest } from "../../RequestMethods";
import { useLocation } from "react-router-dom";
import LoaderComp from "../Loader";

const RightSection = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  console.log(id);
  const [oldDetails, setoldDetails] = useState([]);
  const [isLoaded, setisLoaded] = useState(false);
  useEffect(() => {
    const getProductData = async () => {
      try {
        const res = await publicRequest.get(`/product/find/${id}`);
        setoldDetails(res.data);
        setisLoaded(true);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProductData();
  }, []);

  return (
    <Box width="25%" height="90%">
      <img
        src={oldDetails.img}
        alt=""
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
      />

      {isLoaded ? (
        <>
          <div className="prod1">
            <span>BRAND:</span>
            <span>{oldDetails.brand.toUpperCase()}</span>
          </div>
          <div className="prod1">
            <span>TITLE:</span>
            <span>{oldDetails.title.toUpperCase()}</span>
          </div>
          <div className="prod1">
            <span>DESCRIPTION:</span>
            <span>{oldDetails.desc.toUpperCase()}</span>
          </div>
          <div className="prod1">
            <span>PRICE:</span>
            <span>{oldDetails.price}</span>
          </div>
          <div className="prod1">
            <span>IN-STOCK:</span>
            <span>{oldDetails.inStock}</span>
          </div>
          <div className="prod1">
            <span>SIZES:</span>
            <span>
              {oldDetails.size.map((data) => {
                return <span>{data}</span>;
              })}
            </span>
          </div>
          <div className="prod1">
            <span>COLORS:</span>
            <span>
              {oldDetails.color.map((data) => {
                return <span>{data.toUpperCase()}</span>;
              })}
            </span>
          </div>
          <div className="prod1">
            <span>CATEGORIES:</span>
            <span>
              {oldDetails.categories.map((data) => {
                return <span>{data.toUpperCase()}</span>;
              })}
            </span>
          </div>
        </>
      ) : (
        <LoaderComp/>
      )}
    </Box>
  );
};

export default RightSection;
