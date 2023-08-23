import React from "react";
import Home from "./pages/home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import CatagoryProduct from "./pages/CatagoryWiseProduct/CatagoryProduct";
import Cart from "./pages/cart/Cart";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import { useSelector } from "react-redux";
import Order from "./pages/order/Order";
import SearchProduct from "./pages/searchProduct/SearchProduct";

const BodyComponent = () => {
  const { token } = useSelector((state) => state.login);
  return (
    <>
      {token ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products/collection_id=/:id"
            element={<CatagoryProduct />}
          />

          <Route path="/cart" element={<Cart />} />
          <Route path="/myorder" element={<Order />} />
          <Route path="/product/search/:query" element={<SearchProduct />} />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/" element={<Home />} />
          <Route
            path="/products/collection_id=/:id"
            element={<CatagoryProduct />}
          />

          <Route path="/cart" element={<Cart />} />
          <Route path="/product/search/:query" element={<SearchProduct />} />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      )}
    </>
  );
};

export default BodyComponent;
