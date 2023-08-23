import { configureStore } from "@reduxjs/toolkit";
import collectionSlice from "./collectionSlice";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";
import signupSlice from "./signupSlice";
import loginSlice from "./loginSlice";
import orderSlice from "./orderSlice";
import searchProductSlice from "./searchProductSlice";

const Store = configureStore({
  reducer: {
    collections: collectionSlice,
    products: productSlice,
    cart: cartSlice,
    signup: signupSlice,
    login: loginSlice,
    order: orderSlice,
    search: searchProductSlice,
  },
});
export default Store;
