import React from "react";
import bannerimage from "../../../../../assets/360_F_428871017_JA5t4Up7nNxpIlgyQli0GKfYveJcKi8U.jpg";
import "./banner.scss";
import ContentWrapper from "../../../../contentwrapper/ContentWrapper";
import shoe from "../../../../../assets/blue_shoe-min.png";

const Banner = () => {
  return (
    <div className="bannerwrapper">
      <img src={bannerimage} alt="" />

      <div className="mainbanner">
        <ContentWrapper>
          <div className="banner">
            <div className="bannerleft">
              <span>Our Exclusive</span>
              <h1>Adidas Campus</h1>
              <p>
                We have all your auto parts need! are you looking best shoes ?
                <br />
                We have queality full shoes
              </p>
              <button>Shop Now</button>
            </div>
            <div className="bannerright">
              <img src={shoe} alt="" />
            </div>
          </div>
        </ContentWrapper>
      </div>
    </div>
  );
};

export default Banner;
