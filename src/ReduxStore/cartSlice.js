import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    product: [],
    quantity: 0,
    price: 0,
  },
  reducers: {
    setProduct:(state,action)=>{
      state.quantity = action.payload.quantity;
      state.product=action.payload.products;
      state.price = action.payload.price;
    },
    addProduct: (state, action) => {
      state.quantity += 1;
      state.product.push(action.payload);
      state.price += action.payload.price * action.payload.quantity;
    },
    updateProductQuantity: (state, action) => {
      state.product = action.payload;
      // state.price += (action.payload.quantity-state.product.quantity)*action.payload.price;
    },
    updateCartValuewithQuantity:(state,action)=>{
      state.price += action.payload;
    },
    removeOneProduct: (state, action) => {
      state.product = action.payload;
      state.quantity -= 1;
      // state.price = action.payload.price * action.payload.quantity;
    },
    moneyReductionWhenProductRemoved: (state, action) => {
      state.price -= action.payload;
    },
    removeAllProducts: (state) => {
      state.quantity = 0;
      state.product = [];
      state.price = 0;
    },
  },
});

export const {
  setProduct,
  addProduct,
  moneyReductionWhenProductRemoved,
  removeAllProducts,
  removeOneProduct,
  updateProductQuantity,
  updateCartValuewithQuantity
} = cartSlice.actions;
export default cartSlice.reducer;
