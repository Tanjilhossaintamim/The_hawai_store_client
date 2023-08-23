import React from "react";
import FooterLink from "./FooterLink";
import ContentWrapper from "../contentwrapper/ContentWrapper";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footerWrapper">
      <ContentWrapper>
        <div className="contact">
          <h6>CONTACT US</h6>
          <p>
            Customer Service Hours: Monday - Friday: 8a-1p, HST Toll Free: (844)
            299-3024
          </p>
          <p>Send us an Email anytime</p>
          <p>55-370 Kamehameha Hwy Laie, Hawaii 96762</p>
        </div>
        <FooterLink
          heading={"CUSTOMER SERVICE"}
          link1={"Shipping Information"}
          link2={"Terms Of Use"}
          link3={"Return Policy"}
          link4={"Privacy Policy"}
        />
        <FooterLink
          heading={"ABOUT US"}
          link1={"Store Hours & Locations"}
          link2={"Polynesian Cultural Center"}
          link3={"Visit our blog!"}
          link4={"Our Purpose"}
          link5={"Deals"}
        />
        <FooterLink
          heading={"NEWSLETTER"}
          link1={"Promotions, new products and sales. Directly to your inbox."}
        />
      </ContentWrapper>
    </div>
  );
};

export default Footer;
