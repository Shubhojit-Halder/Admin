import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import { Box, MainContainer } from "../Styles/MainsectionContainer.styled";
import Input from "@mui/joy/Input";
import { Button } from "@mui/material";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../firebase";
import { publicRequest } from "../RequestMethods";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import RightSection from "../components/UpdateProductSection/RightSection";
const initialValues = {
  brand: "",
  title: "",
  desc: "",
  inStock: true,
};
const UpdateProducts = () => {
 const id = useLocation().pathname.split("/")[2];
  const [productDetails, setProductDetails] = useState(initialValues);
  const [img, setImg] = useState(null);
  const [color, setColor] = useState([]);
  const [size, setSize] = useState([]);
  const [categories, setCategory] = useState([]);
  const [imgUrl, setImgUrl] = useState("");
  const user = useSelector((state) => state.user.currentUser);

 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductDetails({
      ...productDetails,
      [name]: value,
    });
    // console.log(productDetails);
  };
  const handleSetData = () => {
    const fileName = new Date().getTime() + img.name;
    setProductDetails({ ...productDetails });
    // console.log({ ...productDetails, color, size, categories });
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, img);
    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
        console.log(error);
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          // console.log("File available at", downloadURL);
          setImgUrl(downloadURL);
          setProductDetails({
            ...productDetails,
            img: downloadURL,
            color: color,
            size: size,
            categories: categories,
          });
          console.log({
            ...productDetails,
            img: downloadURL,
            color: color,
            size: size,
            categories: categories,
          });
          // setProductDetails({productDetails img: downloadURL});
        });
      }
    );
  };

  useEffect(() => {
    const postProductData = async () => {
      const res = await publicRequest.put(`/product/${id}`, {
        token: user.accessToken,
        productData: { ...productDetails },
      });
      console.log(res.data);
    };
    // console.log(productDetails);
    if (imgUrl !== "") {
      postProductData();
    }
  }, [imgUrl]);
  return (
    <>
      <Navbar />
      <Sidebar />
      <MainContainer>
        <div style={{ display: "flex" }}>
          <Box
            width="75%"
            height="90%"
            style={{ padding: "10px", display: "flex", flexWrap: "wrap" }}
          >
            <div className="sub">
              <label>IMAGE:</label>
              <input
                type="file"
                accept="image/*"
                style={{ padding: "10px 20px", width: "200px" }}
                onChange={(e) => {
                  setImg(e.target.files[0]);
                  console.log(e.target.files[0]);
                }}
              />
            </div>
            <div style={{ display: "flex", width: "100%", flexWrap: "wrap" }}>
              <div className="sub">
                <label>BRAND:</label>
                <input
                  type="text"
                  className="prod"
                  name="brand"
                  onChange={handleInputChange}
                  value={productDetails.brand}
                />
              </div>
              <div className="sub">
                <label>TITLE:</label>
                <input
                  type="text"
                  className="prod"
                  name="title"
                  onChange={handleInputChange}
                  value={productDetails.title}
                />
              </div>
              <div className="sub">
                <label>DESCRIPTION:</label>
                <textarea
                  name="desc"
                  onChange={handleInputChange}
                  className="prod"
                  style={{ resize: "none" }}
                  value={productDetails.desc}
                />
              </div>
              <div className="sub">
                <label>CATEGORY:</label>
                <input
                  type="text"
                  className="prod"
                  onChange={(e) => {
                    setCategory(e.target.value.split(","));
                  }}
                />
              </div>
              <div className="sub">
                <label>SIZE:</label>
                <input
                  type="text"
                  className="prod"
                  onChange={(e) => {
                    setSize(e.target.value.split(","));
                  }}
                />
              </div>
              <div className="sub">
                <label>COLOR:</label>
                <input
                  type="text"
                  className="prod"
                  onChange={(e) => {
                    setColor(e.target.value.split(","));
                  }}
                />
              </div>
              <div className="sub">
                <label>PRICE:</label>
                <input
                  type="number"
                  className="prod"
                  name="price"
                  onChange={handleInputChange}
                />
              </div>
              <div className="sub">
                <label>IN STOCK:</label>
                <select
                  name="inStock"
                  onChange={handleInputChange}
                  value={productDetails.inStock}
                  className="prod"
                  style={{ width: "170px", padding: "2px" }}
                >
                  <option value={true} selected defaultChecked>
                    Yes
                  </option>
                  <option value={false}>No</option>
                </select>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
              }}
            >
              <Button
                variant="contained"
                style={{
                  marginTop: "40px",
                  background: "teal",
                  width: "200px",
                  height: "40px",
                }}
                onClick={handleSetData}
              >
                Update Product
              </Button>
            </div>
          </Box>
          <RightSection />
        </div>
      </MainContainer>
    </>
  );
};

export default UpdateProducts;
