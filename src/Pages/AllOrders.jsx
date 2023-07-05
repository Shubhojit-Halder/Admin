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
import { publicRequest } from "../RequestMethods";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoaderComp from "../components/Loader";

const AllOrders = () => {
  const user = useSelector((state) => state.user.currentUser);
  const [allOrders, setallOrders] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const Navigate = useNavigate();
  useEffect(() => {
    const getAllOrders = async () => {
      try {
        const res = await publicRequest.post("/order/get/all", {
          token: user.accessToken,
        });
        // console.log();
        setallOrders(res.data);
        setIsLoaded(true);
      } catch (error) {
        console.log(error);
      }
    };
    getAllOrders();
  }, []);
  return (
    <>
      <Navbar />
      <Sidebar />
      <MainContainer>
        <Box
          className="orders"
          width={"100%"}
          height={"330px"}
          header="New Orders"
        >
          <div className="header">{"New Orders".toUpperCase()}</div>
          <div>
            <Table sx={{ minWidth: "100%" }} aria-label="simple table">
              <TableHead>
                <TableRow >
                  <TableCell align="center">USER</TableCell>
                  <TableCell align="center">Address</TableCell>
                  <TableCell align="center">Products</TableCell>
                  <TableCell align="center">Amount</TableCell>
                  <TableCell align="center">Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {isLoaded ? (
                  allOrders.map((data) => (
                    <TableRow
                      style={{ cursor: "pointer" }}
                      key={data._id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                      onClick={() => {
                        Navigate(`/order/${data._id}`);
                      }}
                    >
                      <TableCell component="th" scope="data" align="center"> 
                        {data.userId}
                      </TableCell>
                      <TableCell component="th" scope="data" align="center">
                        {data.address.line1}
                        {data.address.city}
                        {data.address.postal_code}
                      </TableCell>
                      <TableCell align="center">
                        {data.products.length}
                      </TableCell>
                      <TableCell align="center">{data.amount / 100}</TableCell>
                      <TableCell
                        align="center"
                        style={{ display: "flex", justifyContent: "flex-end" }}
                      >
                        <p className={data.status} style={{ width: "100px" }}>
                          {" "}
                          {data.status.toUpperCase()}
                        </p>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <LoaderComp/>
                )}
              </TableBody>
            </Table>
          </div>
        </Box>
      </MainContainer>
    </>
  );
};

export default AllOrders;
