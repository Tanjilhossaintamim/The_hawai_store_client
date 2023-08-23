import React, { useEffect, useState } from "react";
import { Button, Drawer } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { fetchCartItem } from "../../../redux/cartSlice";
const CartDrawer = ({ openDrawer, setDrawerOpen }) => {
 
  const dispatch = useDispatch();
  const onClose = () => {
    setDrawerOpen(false);
  };
  useEffect(() => {
    cart_id != null && dispatch(fetchCartItem(cart_id));
  }, []);

  return (
    <>
      <Drawer
        title="Your Cart"
        placement="right"
        onClose={onClose}
        open={openDrawer}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};
export default CartDrawer;
