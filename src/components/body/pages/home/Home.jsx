import React from "react";
import Banner from "./banner/Banner";
import PopularProduct from "./populerProduct/PopularProduct";
import SmallBanner from "./smallbanner/SmallBanner";

const Home = () => {
  return (
    <div>
      <Banner />
      <SmallBanner/>
      <PopularProduct />
    </div>
  );
};

export default Home;
