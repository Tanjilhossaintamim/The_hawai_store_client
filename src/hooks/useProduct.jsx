import React, { useEffect, useState } from "react";
import fetchDatafromApi from "../utils/api";

const useProduct = (url) => {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    fetchDatafromApi(url)
      .then((data) => {
        setError(null);
        setLoading(false);
        setProduct(data);
      })
      .catch((error) => setError(error));
  }, [url]);
  return { products, loading, error };
};

export default useProduct;
