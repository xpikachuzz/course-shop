import { createSlice } from "@reduxjs/toolkit"

// name it because it's relating to cart only.
const filterSlice = createSlice({
  name: "filter",
  initialState: {
    products: [],
    onlyInStock: false,
    bestSellerOnly: false,
    sortBy: null,
    rating: null,
  },
  // functions which will be performed
  reducers: {
    // action param holds type and payload
    product_list(state, action) {
      return { ...state, products: action.payload }
    },
    sort_by(state, action) {
      return { ...state, sortBy: action.payload }
    },
    rating(state, action) {
      return { ...state, rating: action.payload }
    },
    only_in_stock(state, action) {
      return { ...state, onlyInStock: action.payload }
    },
    best_seller(state, action) {
      return { ...state, bestSellerOnly: action.payload }
    },
    clear_filter(state, action) {
      return {
        ...state,
        onlyInStock: false,
        bestSellerOnly: false,
        sortBy: null,
        rating: null,
      }
    }
  },
});

// to access the functions
// Now register this to store so it can be stored.
export const { product_list, sort_by, rating, best_seller, only_in_stock, clear_filter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;