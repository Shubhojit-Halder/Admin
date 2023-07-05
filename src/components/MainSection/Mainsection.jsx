import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Box, MainContainer } from "../../Styles/MainsectionContainer.styled";
import Card from "../Cards/Card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { publicRequest } from "../../RequestMethods";
import { useLocation, useNavigate } from "react-router-dom";
import LoaderComp from "../Loader";

const Mainsection = () => {
  const user = useSelector((state) => state.user.currentUser);
  const [usersData, setUsersData] = useState([]);
  const [newOrders, setNewOrders] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [income, setIncome] = useState(0);
  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await publicRequest.post("/user?new=true", {
          token: user.accessToken,
        });
        console.log(res.data);
        setUsersData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    const getNewOrders = async () => {
      try {
        const res = await publicRequest.post("/order/get/all", {
          token: user.accessToken,
        });
        console.log(res.data);
        setNewOrders(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    const totalUserCount = async () => {
      try {
        const res = await publicRequest.post("/user", {
          token: user.accessToken,
        });
        console.log(res.data.length);
        setTotalUsers(res.data.length);
      } catch (error) {
        console.log(error);
      }
    };
    const getIncome = async () => {
      try {
        const res = await publicRequest.post("/order/monthly/income", {
          token: user.accessToken,
        });
        console.log(...res.data);
        setIncome(res.data[0].total / 100);
      } catch (error) {
        console.log(error);
      }
    };
    getNewUsers();
    getNewOrders();
    totalUserCount();
    getIncome();
  }, []);
  const Navigate = useNavigate();

  return (
    <MainContainer>
      <div className="main">
        <Card
          width={"280px"}
          height={"100px"}
          header="Total users"
          link="View all users"
          total={totalUsers}
        />
        <Card
          width={"280px"}
          height={"100px"}
          header="Monthly earning (&#x20B9;)"
          link=""
          total={income}
        />
        <Card
          width={"280px"}
          height={"100px"}
          header="Total earning (&#x20B9;)"
          link=""
          total=""
        />
      </div>
      <div className="main">
        <Box className="users" width={"100%"} height={"330px"}>
          <div className="header">{"New Users".toUpperCase()}</div>
          {usersData.length != 0 ? (
            <div>
              <Table sx={{ minWidth: "100%" }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell align="center">UserName</TableCell>
                    <TableCell align="center">Email</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {usersData.map((data) => (
                    <TableRow
                      key={data.username}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {data._id.slice(0, 10) + "..."}
                      </TableCell>
                      <TableCell align="center">{data.username}</TableCell>
                      <TableCell align="center">{data.email}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ) : (
            <LoaderComp />
          )}
        </Box>
        <Box
          className="orders"
          width={"100%"}
          height={"330px"}
          header="New Orders"
        >
          <div className="header">{"New Orders".toUpperCase()}</div>
          {newOrders.length != 0 ? (
            <div>
              <Table sx={{ minWidth: "100%" }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">UserId</TableCell>
                    <TableCell align="center">Products</TableCell>
                    <TableCell align="center">Amount</TableCell>
                    <TableCell align="center">Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {newOrders.map((data) => (
                    <TableRow
                      style={{ cursor: "pointer" }}
                      key={data._id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                      onClick={() => {
                        Navigate(`/order/${data._id}`);
                      }}
                    >
                      <TableCell component="th" scope="data">
                        {data.userId}
                      </TableCell>
                      <TableCell align="center">
                        {data.products.length}
                      </TableCell>
                      <TableCell align="center">{data.amount / 100}</TableCell>
                      <TableCell align="center">
                        <p className={data.status}>
                          {" "}
                          {data.status.toUpperCase()}
                        </p>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ) : (
            <LoaderComp />
          )}
        </Box>
      </div>
    </MainContainer>
  );
};

export default Mainsection;
