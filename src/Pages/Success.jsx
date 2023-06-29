import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import { removeAllProducts } from '../ReduxStore/cartSlice';
const Success = () => {
    const location = useLocation();
    console.log(location);
    const dispatch = useDispatch();
    const cart = useSelector(state=>state.cart);
    useEffect(()=>{
      dispatch(removeAllProducts());
    },[]);
  return (
    <div>Success</div>
  )
}

export default Success