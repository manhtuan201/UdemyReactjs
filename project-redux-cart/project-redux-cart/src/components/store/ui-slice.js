import { createSlice } from "@reduxjs/toolkit";
const initialUiState = { showCart: false };
const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    showCart(state) {
      state.showCart = !state.showCart;
    },
  },
});
export default uiSlice;
export const uiActions = uiSlice.actions;
