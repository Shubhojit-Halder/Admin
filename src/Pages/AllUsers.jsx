import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import { Box,MainContainer } from "../Styles/MainsectionContainer.styled";
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

const AllUsers = () => {
  const user = useSelector((state) => state.user.currentUser);
  const [usersData, setUsersData] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const Navigate = useNavigate();
  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const res = await publicRequest.post("/user", {
          token: user.accessToken,
        });
        setUsersData(res.data);
        setIsLoaded(true)
      } catch (error) {
        console.log(error);
      }
    };
    getAllUsers();
  });
  return (
    <>
      <Navbar />
      <Sidebar />
      <MainContainer>
        <Box className="users" width={"100%"} height={"100%"}  header="All Orders">
          <div className="header">{"All Users".toUpperCase()}</div>
          <div>
            <Table sx={{ minWidth: "100%" }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell align="right">UserName</TableCell>
                  <TableCell align="right">Email</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {isLoaded ?  usersData.map((data) => (
                  <TableRow
                    key={data.username}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {data._id}
                    </TableCell>
                    <TableCell align="right">{data.username}</TableCell>
                    <TableCell align="right">{data.email}</TableCell>
                  </TableRow>
                )) : <>Please Wait</>}
              </TableBody>
            </Table>
          </div>
        </Box>
      </MainContainer>
    </>
  );
};

export default AllUsers;
