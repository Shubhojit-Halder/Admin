import React from 'react'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import SingleOrderContainer from './SingleOrderContainer'
const SingleOrder = () => {
  return (
    <>
        <Navbar/>
        <Sidebar/>
        <SingleOrderContainer/>
    </>
  )
}

export default SingleOrder