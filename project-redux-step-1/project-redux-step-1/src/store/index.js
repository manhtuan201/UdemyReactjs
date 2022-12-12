import { configureStore, createSlice } from "@reduxjs/toolkit";
import { createStore } from "redux";
import authSlice from "./auth";
import counterSlice from "./counter";

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});
export default store;
