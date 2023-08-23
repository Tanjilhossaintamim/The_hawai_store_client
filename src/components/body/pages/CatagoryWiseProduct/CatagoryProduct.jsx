import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./catgoryproduct.scss";
import useProduct from "../../../../hooks/useProduct";
import ContentWrapper from "../../../contentwrapper/ContentWrapper";
import ProductCard from "../../../common/ProductCard";
import ProductModal from "../../../common/modal/Modal";
import { ToastContainer, toast } from "react-toastify";
import DropdownMenu from "../../../common/droopdown/DropDown";

const CatagoryProduct = () => {
  const { id } = useParams();
  const [modalOpen, setModalOpen] = useState(false);
  const { products } = useProduct(`products?collection_id=${id}`);
  const [selectedProduct, setSelectedProduct] = useState("");
  const openToast = (message) => {
    toast(message);
  };

  return (
    <div className="catagoryWrapper">
     
      <div className="rightside">
        <ContentWrapper>
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

export default CatagoryProduct;
