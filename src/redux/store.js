import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./feature/cart/CartSlice";
import modalReducer from "./feature/modal/ModalSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
});
