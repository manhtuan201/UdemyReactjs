// import { createSlice } from "@reduxjs/toolkit";

import { createSlice } from "@reduxjs/toolkit";

// const initialCartState = { product: 0 };

// const addCartSlice = createSlice({
//   name: "product",
//   initialState: initialCartState,
//   reducers: {
//     addCart(state) {
//       state.product = state.product + 1;
//     },
//     minusCart(state) {
//       state.product = state.product - 1;
//     },
//   },
// });
// export default addCartSlice;
// export const addCartActions = addCartSlice.actions;
const initialCartState = { items: [], totalQuantity: 0 };
const cartSlice = createSlice({
  name: "product",
  initialState: initialCartState,
  reducers: {
    addItemHandler(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemHandler(state,action) {
        const id = action.payload;
        const removeItem = state.items.find((item)=> item.id === id) 
        state.totalQuantity--
        if(removeItem.quantity === 1){
            state.items = state.items.filter((item)=>item.id !== id)
        }else{
            removeItem.quantity--;
        }
    },
  },
});
export const cartActions = cartSlice.actions;
export default cartSlice;