import React from "react";
import "./productCard.scss";
import Image from "./Image";
import ProductModal from "./modal/Modal";
import useCart from "../../hooks/useCart";
import axios from "axios";
import { useDispatch } from "react-redux";
import { save_cartId } from "../../redux/cartSlice";
import { useSelector } from "react-redux";

const ProductCard = ({
  product,
  setModalOpen,
  setSelectedProduct,
  openToast,
}) => {
  const dispatch = useDispatch();
  const { cart_id } = useSelector((state) => state.cart);
  const handelClick = () => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const postCartItem = (product) => {
    if (cart_id == null) {
      axios.post("http://127.0.0.1:8000/api/cart/", {}).then((res) => {
        dispatch(save_cartId(res.data.id));
        axios
          .post(`http://127.0.0.1:8000/api/cart/${res.data.id}/items/`, product)
          .then((res) => openToast("Product Added to Your cart !"))
          .catch((err) => openToast("Network Error !"));
      });
    } else {
      axios
        .post(`http://127.0.0.1:8000/api/cart/${cart_id}/items/`, product)
        .then((res) => openToast("Product Added to Your cart !"))
        .catch((err) => openToast("Network Error !"));
    }
  };

  return (
    <div className="card">
      <div
        className="maincard"
        onClick={() => {
          handelClick();
        }}
      >
        <div className="cardImg">
          <Image src={product.image} className={"image"} />
        </div>
        <div className="carddetails">
          <span className="title">{product.title.slice(0, 20)}</span>
          <span className="price">&#2547; {product.price}</span>
        </div>
      </div>
      <button
        className="addtocart"
        onClick={() => postCartItem({ product_id: product.id, quantity: 1 })}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;
