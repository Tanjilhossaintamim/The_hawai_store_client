import React, { useState } from "react";
import { Button, Modal } from "antd";
import Image from "../Image";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { save_cartId } from "../../../redux/cartSlice";

import "./modal.scss";

const ProductModal = ({ modalOpen, setModalOpen, product, openToast }) => {
  const { cart_id, cartItem } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decreaseQuantity = () => {
    setQuantity(quantity > 1 ? quantity - 1 : 1);
  };

  const postCartItem = (product) => {
    if (cart_id == null) {
      axios.post("http://127.0.0.1:8000/api/cart/", {}).then((res) => {
        dispatch(save_cartId(res.data.id));
        axios
          .post(`http://127.0.0.1:8000/api/cart/${res.data.id}/items/`, product)
          .then((res) => openToast("Product Added to Your cart !"));
      });
    } else {
      axios
        .post(`http://127.0.0.1:8000/api/cart/${cart_id}/items/`, product)
        .then((res) => {
          if (res.status == 201) {
            openToast("Product Added to Your cart !");
          }
          setModalOpen(false);
        })
        .catch((err) => openToast("NetWork Error !"));
    }
  };

  return (
    <>
      <Modal
        title={product.title}
        centered
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        footer={null}
      >
        <Image src={product.image} />
        <div className="details">
          <span>&#2547; {product.price}</span>
          <p>{product.description}</p>
        </div>
        <div className="addoptions">
          <div className="quantity">
            <button onClick={increaseQuantity}>+</button>
            <input type="text" value={quantity} disabled />
            <button onClick={decreaseQuantity}>-</button>
          </div>
          <button
            className="addto"
            onClick={() => {
              postCartItem({ product_id: product.id, quantity: quantity });
            }}
          >
            Add To Cart
          </button>
        </div>
      </Modal>
    </>
  );
};

export default ProductModal;
