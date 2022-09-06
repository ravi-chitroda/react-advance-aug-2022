import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
  cartItems: cartItems,
  total: 0,
  amount: 3,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      //   console.log("action", action);
      const itemID = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemID);
    },
    increaseItem: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount + 1;
    },
    decreaseItem: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount - 1;
    },
  },
});

console.log(cartSlice);

export const { clearCart, removeItem, increaseItem, decreaseItem } =
  cartSlice.actions;
// console.log("cartSlice", cartSlice);
export default cartSlice.reducer;
