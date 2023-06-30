import React from "react";
import { CardContainer } from "../../Styles/CardContainer.styled";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
const Card = ({ height, width, header, link, total }) => {
  return (
    <CardContainer width={width} height={height}>
      <h3 className="header">{header.toUpperCase()}</h3>
      <div className="number">
        <CountUp end={total} prefix=""/>
      </div>
      <div className="footer">
        <Link to="/user" style={{ color: "#696969dc" }}>
          {link}
        </Link>
      </div>
    </CardContainer>
  );
};

export default Card;
