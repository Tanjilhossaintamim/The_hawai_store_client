import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  collections: [],
};

const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    add_collection: (state, action) => {
      state.collections = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCollections.fulfilled, (state, action) => {
      state.collections = action.payload;
    });
  },
});
export const fetchCollections = createAsyncThunk("collection/get", async () => {
  try {
    const response = await axios.get("http://127.0.0.1:8000/api/collections/");
    return response.data.results;
  } catch (error) {
    throw new Error(error.message);
  }
});

export const { add_collection } = collectionSlice.actions;

export default collectionSlice.reducer;
