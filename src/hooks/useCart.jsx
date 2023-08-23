import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { save_cartId } from "../redux/cartSlice";

const useCart = () => {
  const dispatch = useDispatch();
  axios.post("http://127.0.0.1:8000/api/cart/", {}).then((res) => {
    dispatch(save_cartId(res.data.id));
    console.log(res.data.id);
  });
  return;
};

export default useCart;
