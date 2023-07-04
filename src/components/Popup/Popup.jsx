import React from "react";
import { Box } from "../../Styles/MainsectionContainer.styled";
import { Button } from "@mui/material";

const Popup = (props) => {
  return (
    <div style={{ position: "absolute", top: "30%", textAlign: "center" }}>
      <Box width="500px" height="40px">
        <span>{props.data}</span>
        <Button
          variant="contained"
          onClick={() => {
            props.setDeletePre(true);
          }}
          sx={{
            width: "80px",
            marginLeft: "20px",
          }}
        >
          Yes
        </Button>
        <Button
          variant="outlined"
          sx={{
            width: "80px",
            borderColor: "#ea1111",
            color: "red",
            marginLeft: "10px",
            "&:hover": {
              bgcolor: "#ea111154",
              borderColor: "#ea1111",
              color: "#fff",
            },
          }}
          onClick={() => {
            props.setDeletePre(false);
            props.setDeleteItem("");
          }}
        >
          No
        </Button>
      </Box>
    </div>
  );
};

export default Popup;
