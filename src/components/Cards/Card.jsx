import React from 'react'
import { CardContainer } from "../../Styles/CardContainer.styled"
import {Link} from "react-router-dom"
const Card = ({height,width,header}) => {
  return (
    <CardContainer width={width} height={height}>
      <h3 className="header">{header.toUpperCase()}</h3>
      <div className='number'>
        201
      </div>
      <div className="footer">
        <Link to="/user" style={{color:"#696969dc"}}>View All Users</Link>
      </div>
    </CardContainer>
  )
}

export default Card