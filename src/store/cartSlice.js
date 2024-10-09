import { createSlice } from "@reduxjs/toolkit"

// name it because it's relating to cart only.
const cartSlice = createSlice({
  name: "filter",
  initialState: {
    products: [],
    cost: 0
  },
  // functions which will be performed
  reducers: {
    // action param holds type and payload
    add_product(state, action) {
      return { products: [...state.products, action.payload], cost: state.cost + action.payload.price }
    },
    remove_product(state, action) {
      return { products: [...state.products].filter(prod => action.payload.id !== prod.id), cost: state.cost - action.payload.price }
    },
    reset_cart(state, action) {
      return { products: [], cost: 0 }
    }
  },
});

// to access the functions
// Now register this to store so it can be stored.
export const { remove_product, add_product, reset_cart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;