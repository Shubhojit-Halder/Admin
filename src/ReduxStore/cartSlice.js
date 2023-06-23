import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    product: [],
    quantity: 0,
    price: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.product.push(action.payload);
      state.price += action.payload.price * action.payload.quantity;
    },
    updateProductQuantity: (state, action) => {
      state.product =action.payload;
      // state.price += (action.payload.quantity-state.product.quantity)*action.payload.price;
    },
    removeOneProduct: (state, action) => {
      state.product = action.payload;
      state.quantity -=1;
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
  addProduct,
  moneyReductionWhenProductRemoved,
  removeAllProducts,
  removeOneProduct,
  updateProductQuantity
} = cartSlice.actions;
export default cartSlice.reducer;
