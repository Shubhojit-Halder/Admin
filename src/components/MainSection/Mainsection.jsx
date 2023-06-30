// import React from 'react'

import Card from "../Cards/Card";

const Mainsection = () => {
  return (
    <div
      style={{
        // width: "",
        height: "530px",
        background: "#eaeaea5c",
        padding: "20px 10px",
        marginLeft: "200px",
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"space-around"
      }}
    >
      <Card width={"280px"} height={"150px"} />
      <Card width={"280px"} height={"150px"} />
      <Card width={"280px"} height={"150px"} />
      <Card width={"280px"} height={"330px"} />
      <Card width={"650px"} height={"330px"} />
    </div>
  );
};

export default Mainsection;
