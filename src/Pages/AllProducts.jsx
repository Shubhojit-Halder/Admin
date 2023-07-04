import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import { Box, MainContainer } from "../Styles/MainsectionContainer.styled";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import {
  Alert,
  BottomNavigation,
  Button,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { publicRequest } from "../RequestMethods";
import Popup from "../components/Popup/Popup";
const tableHeaders = [
  "Image",
  "ProductID",
  "Brand",
  "Title",
  "Desc",
  "Colors",
  "Sizes",
  "Price",
  "Action",
];
const AllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [deletePre, setDeletePre] = useState(false);
  const [deleteItem, setDeleteItem] = useState("");
  const user = useSelector((state) => state.user.currentUser);
  const Navigate = useNavigate();
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
    const DeleteProduct = async (id) => {
      try {
        console.log(deletePre, id);
        const res = await publicRequest.post(`/product/delete/${id}`, {
          token: user.accessToken,
        });
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    if (deletePre) {
      DeleteProduct(deleteItem);
      setDeleteItem("");
      setDeletePre(false);
    }
    getAllProducts();
  }, [deletePre]);

  return (
    <>
      <Navbar />
      <Sidebar />
      <MainContainer>
        <Snackbar
          open={deleteItem.length != 0}
          autoHideDuration={3000}
          onClose={true}
          // onClose={handleClose}
          message="Item Deleted Successfully"
          // action={action}
        >
          <Alert
            // onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            This is a success message!
          </Alert>
        </Snackbar>
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
                  {tableHeaders.map((data) => (
                    <TableCell align="center">{data}</TableCell>
                  ))}
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
                      <TableCell align="center">{data._id}</TableCell>
                      <TableCell align="center">{data.brand}</TableCell>
                      <TableCell align="center">{data.title}</TableCell>
                      <TableCell align="center">{data.desc}</TableCell>
                      <TableCell align="center">
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          {data.color.map((data) => {
                            return (
                              <div
                                style={{
                                  margin: "0px 5px",
                                  width: "20px",
                                  height: "20px",
                                  borderRadius: "50%",
                                  backgroundColor: data,
                                }}
                              ></div>
                            );
                          })}
                        </div>
                      </TableCell>
                      <TableCell align="center">
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          {data.size.map((data) => {
                            return (
                              <span
                                style={{
                                  margin: "0px 5px",
                                }}
                              >
                                {data}
                              </span>
                            );
                          })}
                        </div>
                      </TableCell>
                      <TableCell align="center">{data.price}</TableCell>
                      <TableCell align="center">
                        <Button
                          variant="contained"
                          sx={{
                            bgcolor: "teal",
                            color: "#fff",
                            "&:hover": { bgcolor: "#606060" },
                            marginBottom: "15px",
                          }}
                          onClick={() => {
                            Navigate(`/product/${data._id}`);
                          }}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="contained"
                          sx={{
                            bgcolor: "#fff",
                            color: "#da1010",
                            "&:hover": { bgcolor: "#da1010", color: "#fff" },
                            marginBottom: "15px",
                          }}
                          onClick={() => setDeleteItem(data._id)}
                        >
                          <DeleteOutlineIcon />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <>Please Wait</>
                )}
              </TableBody>
            </Table>
          </div>
        </Box>
        {deleteItem != "" && (
          <Popup
            setDeletePre={setDeletePre}
            setDeleteItem={setDeleteItem}
            data={"Do you want to delete this item?"}
          />
        )}
      </MainContainer>
    </>
  );
};

export default AllProducts;
