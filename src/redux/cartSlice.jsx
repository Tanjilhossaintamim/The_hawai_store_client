import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  cart_id: null,
  cartItem: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    save_cartId: (state, action) => {
      state.cart_id = action.payload;
      localStorage.setItem("cart_id", action.payload);
    },
    get_cartId: (state, action) => {
      state.cart_id = localStorage.getItem("cart_id");
    },
    remove_cartId: (state, action) => {
      localStorage.removeItem("cart_id");
      state.cart_id = null;
      state.cartItem = [];
    },
    reset_cartItem: (state, action) => {
      state.cartItem = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCartItem.fulfilled, (state, action) => {
      state.cartItem = action.payload;
    });
  },
});

export const fetchCartItem = createAsyncThunk("cart/get", async (cart_id) => {
  try {
    const response = await axios.get(
      `http://127.0.0.1:8000/api/cart/${cart_id}/`
    );

    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
});
export const { save_cartId, get_cartId, remove_cartId,reset_cartItem } = cartSlice.actions;
export default cartSlice.reducer;
