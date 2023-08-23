import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import jwtDecode from "jwt-decode";

const initialState = {
  loading: false,
  token: null,
  userId: null,
  error: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    check_login: (state, action) => {
      const expiredTime = localStorage.getItem("expiredTime");

      if (new Date() >= new Date(parseInt(expiredTime))) {
        state.token = null;
        state.userId = null;
      } else {
        state.token = localStorage.getItem("token");
        state.userId = localStorage.getItem("user_id");
      }
    },
    logout: (state, action) => {
      state.token = null;
      state.userId = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user_id");
      localStorage.removeItem("expiredTime");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.token = localStorage.getItem("token");
      state.userId = localStorage.getItem("user_id");
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});
export const { check_login, logout } = loginSlice.actions;
export default loginSlice.reducer;

export const userLogin = createAsyncThunk("login", async (values) => {
  try {
    const response = await axios.post("http://127.0.0.1:8000/auth/jwt/create", {
      email: values.email,
      password: values.password,
    });
    const access = response.data.access;
    localStorage.setItem("token", access);
    const token = jwtDecode(access);
    localStorage.setItem("expiredTime", token.exp * 1000);
    localStorage.setItem("user_id", token.user_id);

    return access;
  } catch (error) {
    const key = Object.keys(error.response.data)[0];
    throw new Error(error.response.data[key]);
  }
});
