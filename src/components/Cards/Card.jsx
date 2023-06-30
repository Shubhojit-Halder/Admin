import React from 'react'
import { CardContainer } from "../../Styles/CardContainer.styled"
import {Link} from "react-router-dom"
const Card = ({height,width}) => {
  return (
    <CardContainer width={width} height={height}>
      <h3 className="header">{"Total Users".toUpperCase()}</h3>
      <div></div>
      <div className="footer">
        <Link to="/user"></Link>
      </div>
    </CardContainer>
  )
}

export default Card