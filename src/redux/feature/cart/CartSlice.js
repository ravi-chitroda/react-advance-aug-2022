import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
  cartItems: cartItems,
  total: 0,
  amount: 4,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
});

// console.log("cartSlice", cartSlice);
export default cartSlice.reducer;
