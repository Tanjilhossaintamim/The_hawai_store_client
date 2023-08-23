import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  errormessage: "",
  signupSuccess: false,
};

const signupSlice = createSlice({
  name: "signup",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(userSignup.pending, (state, action) => {
      state.loading = true;
      state.errormessage = "";
      state.signupSuccess = false;
    });
    builder.addCase(userSignup.fulfilled, (state, action) => {
      state.loading = false;
      state.errormessage = "";
      state.signupSuccess = true;
    });
    builder.addCase(userSignup.rejected, (state, action) => {
      state.errormessage = action.error.message;
      state.signupSuccess = false;
    });
  },
});

export default signupSlice.reducer;

export const userSignup = createAsyncThunk("signup", async (values) => {
  console.log(values);
  try {
    const response = await axios.post("http://127.0.0.1:8000/auth/users/", {
      email: values.email,
      password: values.password,
    });

    return response.status;
  } catch (error) {
    const key = Object.keys(error.response.data)[0];
    throw new Error(error.response.data[key]);
  }
});
