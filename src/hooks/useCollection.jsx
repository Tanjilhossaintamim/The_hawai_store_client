import { useState, useEffect } from "react";
import fetchDatafromApi from "../utils/api";

const useCollection = () => {
  const [collection, setCollection] = useState(null);
  useEffect(() => {
    fetchDatafromApi("collections").then((res) => setCollection(res));
  }, []);
  return collection;
};

export default useCollection;
