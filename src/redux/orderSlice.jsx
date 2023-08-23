import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  orders: [],
  loading: false,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchOrder.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchOrder.fulfilled, (state, action) => {
      state.loading = false;
      state.orders = action.payload;
    });
  },
});

export default orderSlice.reducer;

export const fetchOrder = createAsyncThunk("order/get", async (token) => {
  const header = {
    headers: {
      Authorization: `JWT ${token}`,
    },
  };
  try {
    const response = await axios.get(
      "http://127.0.0.1:8000/api/order/",
      header
    );
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
});
