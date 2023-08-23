import React, { useEffect } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import BodyComponent from "./body/BodyComponent";
import { useDispatch, useSelector } from "react-redux";
import { fetchCollections } from "../redux/collectionSlice";
import { fetchProducts } from "../redux/productSlice";
import { fetchCartItem, get_cartId } from "../redux/cartSlice";
import { check_login } from "../redux/loginSlice";

const MainComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(check_login());
    dispatch(fetchCollections());
    dispatch(fetchProducts());
    dispatch(get_cartId());
  }, []);
  return (
    <div>
      <Header />
      <BodyComponent />
      <Footer />
    </div>
  );
};

export default MainComponent;
