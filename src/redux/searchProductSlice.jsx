import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
};

const searchProductSlice = createSlice({
  name: "search",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchSearchProduct.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export default searchProductSlice.reducer;

export const fetchSearchProduct = createAsyncThunk("search", async (query) => {
  try {
    const response = await axios.get(
      `http://127.0.0.1:8000/api/products/?search=${query}`
    );

    return response.data.results;
  } catch (error) {}
});
