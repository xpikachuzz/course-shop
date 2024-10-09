import { createSlice } from "@reduxjs/toolkit"

// name it because it's relating to cart only.
const loginSlice = createSlice({
  name: "filter",
  initialState: {
    email: false
  },
  // functions which will be performed
  reducers: {
    // action param holds type and payload
    email(state, action) {
      return { email: action.payload }
    }
  },
});

// to access the functions
// Now register this to store so it can be stored.
export const { email } = loginSlice.actions;
export const loginReducer = loginSlice.reducer;