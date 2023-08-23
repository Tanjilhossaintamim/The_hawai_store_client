import React, { useEffect, useState } from "react";
import ContentWrapper from "../../../../contentwrapper/ContentWrapper";
import "./popular.scss";
import useProduct from "../../../../../hooks/useProduct";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../../../redux/productSlice";
import ProductCard from "../../../../common/ProductCard";
import ProductModal from "../../../../common/modal/Modal";
import Toast from "../../../../common/toast/Toast";
import { ToastContainer, toast } from "react-toastify";
import { fetchCartItem } from "../../../../../redux/cartSlice";

const PopularProduct = () => {
  const { cart_id } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { products, is_loading } = useSelector((state) => state.products);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");
  useEffect(() => {
    if (cart_id) {
      dispatch(fetchCartItem(cart_id));
    }
  }, []);

  const openToast = (message) => {
    toast(message);
  };

  return (
    <div className="popularWrapper">
      <ContentWrapper>
        <div className="heading">
          <h1>Popular Shoes</h1>
        </div>
        <div className="products">
          {products?.map((item) => (
            <ProductCard
              key={item.id}
              product={item}
              setModalOpen={setModalOpen}
              setSelectedProduct={setSelectedProduct}
              openToast={openToast}
            />
          ))}
        </div>
        <ProductModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          product={selectedProduct}
          openToast={openToast}
        />
        <ToastContainer />
      </ContentWrapper>
    </div>
  );
};

export default PopularProduct;
