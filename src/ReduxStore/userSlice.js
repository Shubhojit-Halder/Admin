import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    isError: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccessful: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailed: (state) => {
      state.isFetching = false;
      state.isError = true;
    },
  },
});

export const { loginStart,loginSuccessful,loginFailed } = userSlice.actions;
export default userSlice.reducer;
