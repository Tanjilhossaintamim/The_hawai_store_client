import React from "react";
import "./smallbanner.scss";
import ContentWrapper from "../../../../contentwrapper/ContentWrapper";

const SmallBanner = () => {
  return (
    <div className="smallbannerwrapper">
      <ContentWrapper>
        <div className="smallbanner">
          FREE SHIPPING on online orders over $89.99!
        </div>
      </ContentWrapper>
    </div>
  );
};

export default SmallBanner;
