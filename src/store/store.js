import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./filterSlice";
import { loginReducer } from "./loginSlice";
import { cartReducer } from "./cartSlice";

// This will hold all our information
export const store = configureStore({
  // can list all states/slices here,
  reducer: {
    //Can add multiple states locationState
    filterState: filterReducer,
    loginState: loginReducer,
    cartState: cartReducer
  },
});
