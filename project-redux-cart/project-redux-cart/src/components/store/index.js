import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import addCartSlice from "./cart-slice";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: { product: cartSlice.reducer,show:uiSlice.reducer },
});
export default store;
