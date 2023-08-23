import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCartItem,
  remove_cartId,
  reset_cartItem,
} from "../../../../redux/cartSlice";
import ContentWrapper from "../../../contentwrapper/ContentWrapper";
import Image from "../../../common/Image";
import CartItem from "./cartItem/CartItem";
import axios from "axios";
import "./cart.scss";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Cart = () => {
  const { cartItem } = useSelector((state) => state.cart);
  const { token } = useSelector((state) => state.login);
  const navigate = useNavigate();

  const cart_id = localStorage.getItem("cart_id");
  const dispatch = useDispatch();
  useEffect(() => {
    if (cart_id) {
      dispatch(fetchCartItem(cart_id));
    } else {
      dispatch(reset_cartItem());
    }
  }, []);

  const increaseCartquantity = (id, quantity) => {
    axios
      .patch(`http://127.0.0.1:8000/api/cart/${cart_id}/items/${id}/`, {
        quantity: quantity,
      })
      .then((res) => dispatch(fetchCartItem(cart_id)));
  };
  const decreaseCartquantity = (id, quantity) => {
    if (quantity == 0) {
      axios
        .delete(`http://127.0.0.1:8000/api/cart/${cart_id}/items/${id}/`)
        .then((res) => dispatch(fetchCartItem(cart_id)));
    } else {
      axios
        .patch(`http://127.0.0.1:8000/api/cart/${cart_id}/items/${id}/`, {
          quantity: quantity,
        })
        .then((res) => dispatch(fetchCartItem(cart_id)));
    }
  };
  const deleteToCart = (id) => {
    axios
      .delete(`http://127.0.0.1:8000/api/cart/${cart_id}/items/${id}/`)
      .then((res) => dispatch(fetchCartItem(cart_id)));
  };

  const placeOrder = () => {
    const header = {
      headers: {
        Authorization: `JWT ${token}`,
      },
    };
    axios
      .post(
        "http://127.0.0.1:8000/api/order/",
        {
          cart_id: cart_id,
        },
        header
      )
      .then((res) => {
        toast("Order Placed successfully !");
        dispatch(remove_cartId());
        // navigate("/");
      });
  };

  return (
    <div className="cartWrapper">
      <ToastContainer />
      <ContentWrapper>
        <div className="table">
          {cartItem.subtotal != 0 || cartItem.length != 0 ? (
            <>
              <table border={1}>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total Price</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItem?.items?.map((item) => (
                    <CartItem
                      cartItem={item}
                      key={item.id}
                      increaseCartquantity={increaseCartquantity}
                      decreaseCartquantity={decreaseCartquantity}
                      deleteToCart={deleteToCart}
                    />
                  ))}
                  <tr>
                    <td colSpan={6} style={{ fontWeight: 700, color: "green" }}>
                      Subtotal : {cartItem?.subtotal}
                    </td>
                  </tr>
                </tbody>
              </table>
              {token && (
                <button className="orderbtn" onClick={placeOrder}>
                  Order Now
                </button>
              )}
            </>
          ) : (
            <h1>Cart Is Empty</h1>
          )}
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Cart;
