import React, { useEffect, useState } from "react";
import { SingleOrderPage } from "../../Styles/SingleOrderPage.styled";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../../RequestMethods";
import { useSelector } from "react-redux";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  colors,
} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Box } from "../../Styles/MainsectionContainer.styled";
import LoaderComp from "../Loader";

const SingleOrderContainer = () => {
  const user = useSelector((state) => state.user.currentUser);
  const location = useLocation();
  const orderId = location.pathname.split("/")[2];
  const [orderDetails, setOrderDetails] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [show, setShow] = useState(false);
  const [update, setUpdate] = useState(false);
  const [pId, setPId] = useState("");
  const [product, setProduct] = useState([]);
  const [updateStatus, setUpdateStatus] = useState("");
  const [color, setColor] = useState("");
  useEffect(() => {
    const getOrderDetails = async () => {
      try {
        const res = await publicRequest.post(`/order/${orderId}`, {
          token: user.accessToken,
        });
        console.log(res.data);
        if (res.data.status === "pending") setColor("#e30040");
        else if (res.data.status === "dispatched") setColor("#0021c6c4");
        else setColor("#0eb73e");
        setOrderDetails(res.data);
        setIsLoaded(true);
      } catch (error) {
        console.log(error);
      }
    };
    getOrderDetails();
  }, [product]);

  useEffect(() => {
    const searchProd = async () => {
      try {
        const res = await publicRequest.post(`/product/find/${pId}`, {
          token: user.accessToken,
        });
        console.log(res.data);
        setProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    searchProd();
  }, [pId]);

  useEffect(() => {
    const updateOrderStatus = async () => {
      try {
        if (updateStatus != "") {
          const res = await publicRequest.put(`/order/${orderId}`, {
            token: user.accessToken,
            status: updateStatus,
          });
          console.log(res.data);
          setProduct(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    updateOrderStatus();
  }, [updateStatus]);

  return (
    <SingleOrderPage>
      <Box
        className="orders"
        width={"100%"}
        height={"480px"}
        header="New Orders"
      >
        <div>
          <Table
            sx={{ maxWidth: "100%", marginBottom: "30px" }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell align="right">UserID</TableCell>
                <TableCell align="right">OrderID</TableCell>
                <TableCell align="right">Address</TableCell>
                <TableCell align="right">Amount</TableCell>
                <TableCell align="right">Status</TableCell>
              </TableRow>
            </TableHead>
            {isLoaded ? (
              <TableBody>
                <TableRow
                  key={orderDetails._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  onClick={() => {}}
                >
                  <TableCell component="th" scope="data">
                    {orderDetails.userId}
                  </TableCell>
                  <TableCell component="th" scope="data">
                    {orderDetails._id}
                  </TableCell>
                  <TableCell align="right">
                    {orderDetails.address.line1} {orderDetails.address.city}
                    {orderDetails.address.postal_code}
                  </TableCell>
                  <TableCell align="right">
                    {orderDetails.amount / 100}
                  </TableCell>
                  <TableCell align="right">
                    <p
                      style={{
                        background: color,
                        color: "#fff",
                        padding: "5px",
                        fontWeight: 600,
                        borderRadius: "5px",
                      }}
                    >
                      {orderDetails.status.toUpperCase()}
                    </p>
                  </TableCell>
                </TableRow>
              </TableBody>
            ) : (
              <LoaderComp/>
            )}
          </Table>
          <Table sx={{ minWidth: "100%" }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {/* <TableCell align="right">Product</TableCell> */}
                <TableCell align="center">ProductID</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right">Color</TableCell>
                <TableCell align="right">Size</TableCell>
              </TableRow>
            </TableHead>
            {isLoaded ? (
              <TableBody>
                {orderDetails.products.map((data) => {
                  return (
                    <>
                      <TableRow
                        key={data._id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell scope="data" align="left">
                          <Button
                            onClick={() => {
                              setShow(true);
                              setPId(data._id);
                            }}
                          >
                            Search
                          </Button>
                        </TableCell>
                        <TableCell scope="data" align="left">
                          {data._id}
                        </TableCell>
                        <TableCell scope="data">{data.quantity}</TableCell>
                        <TableCell scope="data" align="right">
                          <div
                            style={{
                              width: "20px",
                              height: "20px",
                              background: data.color,
                              zIndex: 4,
                            }}
                          ></div>
                        </TableCell>
                        <TableCell scope="data" align="left">
                          {data.size}
                        </TableCell>
                      </TableRow>
                    </>
                  );
                })}
              </TableBody>
            ) : (
              <LoaderComp/>
            )}
          </Table>
        </div>
        <Button
          variant="contained"
          style={{
            textAlign: "center",
            position: "fixed",
            bottom: "40px",
            left: "50%",
          }}
          onClick={() => {
            setUpdate(!update);
          }}
        >
          Update Status
        </Button>
      </Box>
      {update && (
        <Box
          width="300px"
          height="40px"
          style={{ position: "absolute", top: "50px" }}
        >
          <Button
            onClick={() => {
              setUpdateStatus("pending");
              setUpdate(false);
            }}
          >
            Pending
          </Button>
          <Button
            onClick={() => {
              setUpdateStatus("dispatched");
              setUpdate(false);
            }}
          >
            Dispatched
          </Button>
          <Button
            onClick={() => {
              setUpdateStatus("delivered");
              setUpdate(false);
            }}
          >
            Delivered
          </Button>
        </Box>
      )}
      {show && (
        <Box width={"400px"} height={"210px"} style={{ position: "absolute" }}>
          <div
            className="header"
            style={{
              marginBottom: "10px",
              textAlign: "center",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p> Product : {pId}</p>
            <CloseRoundedIcon
              onClick={() => {
                setShow(false);
                setProduct([]);
                setPId("");
              }}
            />
          </div>
          <div style={{ display: "flex" }}>
            {product.length != 0 ? (
              <>
                {" "}
                <img
                  style={{
                    width: "150px",
                    height: "170px",
                    objectFit: "cover",
                    marginRight: "20px",
                  }}
                  src={product.img}
                  alt=""
                />
                <div>
                  <p>Brand: {product.brand}</p>
                  <p>Title: {product.title}</p>
                  <p>Description : {product.desc}</p>
                  <p>Title: {product.title}</p>
                </div>
              </>
            ) : (
              <>Loading</>
            )}
          </div>
        </Box>
      )}
    </SingleOrderPage>
  );
};

export default SingleOrderContainer;
