import React, { useState } from "react";
import { useSelector } from "react-redux";
import ContentWrapper from "../../../contentwrapper/ContentWrapper";
import { useParams } from "react-router-dom";
import useProduct from "../../../../hooks/useProduct";
import ProductModal from "../../../common/modal/Modal";
import ProductCard from "../../../common/ProductCard";
import { ToastContainer, toast } from "react-toastify";
import "./search.scss";

const SearchProduct = () => {
  // const { products } = useSelector((state) => state.search);
  const { query } = useParams();
  const [modalOpen, setModalOpen] = useState(false);
  const { products } = useProduct(`products?search=${query}`);
  const [selectedProduct, setSelectedProduct] = useState("");
  const openToast = (message) => {
    toast(message);
  };
  return (
    <div className="searchWrapper">
      <div className="rightside">
        <ContentWrapper>
          <h4>{products.length} results found !</h4>
          <div className="products">
            {products.length != 0 ? (
              products?.map((item) => (
                <ProductCard
                  key={item.id}
                  product={item}
                  setModalOpen={setModalOpen}
                  setSelectedProduct={setSelectedProduct}
                  openToast={openToast}
                />
              ))
            ) : (
              <h1 style={{ marginTop: "30px" }}>No Products Available !</h1>
            )}
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
    </div>
  );
};

export default SearchProduct;
