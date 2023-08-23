import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  is_loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.is_loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.is_loading = false;
      state.products = action.payload;
      state.error = null;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.is_loading = false;
      state.error = action.error.message;
      
    });
  },
});

export const fetchProducts = createAsyncThunk("product/get", async () => {
  try {
    const response = await axios.get("http://127.0.0.1:8000/api/products/");
    return response.data.results;
  } catch (error) {
    throw new Error(error.message);
  }
});

export default productSlice.reducer;
