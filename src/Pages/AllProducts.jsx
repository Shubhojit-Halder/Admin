import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import { Box, MainContainer } from "../Styles/MainsectionContainer.styled";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { publicRequest } from "../RequestMethods";
const AllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const res = await publicRequest.get("/product");
        setAllProducts(res.data);
        setIsLoaded(true);
      } catch (error) {
        console.log(error);
      }
    };
    getAllProducts();
  }, []);

  return (
    <>
      <Navbar />
      <Sidebar />
      <MainContainer>
        <Box
          className="users"
          width={"100%"}
          height={"100%"}
          header="All Orders"
        >
          <div className="header" style={{ marginBottom: "15px" }}>
            {"All Products".toUpperCase()}
          </div>
          <div style={{ maxHeight: "500px", overflowY: "scroll" }}>
            <Table sx={{ minWidth: "100%" }} aria-label="simple table">
              <TableHead>
                <TableRow> 
                  <TableCell align="center">Image</TableCell>
                  <TableCell align="center">ProductID</TableCell>
                  <TableCell align="center">Brand</TableCell>
                  <TableCell align="center">Title</TableCell>
                  <TableCell align="center">Desc</TableCell>
                  <TableCell align="center">Colors</TableCell>
                  <TableCell align="center">Sizes</TableCell>
                  <TableCell align="center">Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody sx={{ maxHeight: "500px", overflowY: "scroll" }}>
                {isLoaded ? (
                  allProducts.map((data) => (
                    <TableRow
                      key={data.username}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        <img
                          src={data.img}
                          alt="img"
                          style={{
                            width: "100px",
                            height: "100px",
                            objectFit: "cover",
                          }}
                        />
                      </TableCell>
                      <TableCell align="right">{data._id}</TableCell>
                      <TableCell align="right">{data.brand}</TableCell>
                      <TableCell align="right">{data.title}</TableCell>
                      <TableCell align="right">{data.desc}</TableCell>
                      <TableCell align="right" >
                        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                        {data.color.map((data) => {
                          return (
                            <div
                              style={{
                                margin:"0px 5px",
                                width: "20px",
                                height: "20px",
                                borderRadius: "50%",
                                backgroundColor:data
                              }}
                            ></div>
                          );
                        })}
                        </div>
                      </TableCell>
                      <TableCell align="right" >
                        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                        {data.size.map((data) => {
                          return (
                            <span
                              style={{
                                margin:"0px 5px",
                              }}
                            >{data}</span>
                          );
                        })}
                        </div>
                      </TableCell>
                      <TableCell align="right">{data.price}</TableCell>

                    </TableRow>
                  ))
                ) : (
                  <>Please Wait</>
                )}
              </TableBody>
            </Table>
          </div>
        </Box>
      </MainContainer>
    </>
  );
};

export default AllProducts;
