import { createSlice } from "@reduxjs/toolkit";

const initialCouterState = { counter: 0, showCounter: true };
const counterSlice = createSlice({
  name: "counter",
  initialState : initialCouterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.counter = !state.showCounter;
    },
  },
});
export default counterSlice;
export const couterActions = counterSlice.actions;
