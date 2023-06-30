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
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      <Card width={"280px"} height={"120px"} header="Total users" />
      <Card width={"280px"} height={"120px"} header="Monthly earning" />
      <Card width={"280px"} height={"120px"} header="Total earning" />
      {/* <Card width={"280px"} height={"330px"} header="Users" />
      <Card width={"650px"} height={"330px"} header="New Orders" /> */}
    </div>
  );
};

export default Mainsection;
