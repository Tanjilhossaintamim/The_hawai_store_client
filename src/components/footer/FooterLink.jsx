import React from "react";

const FooterLink = ({ heading, link1, link2, link3, link4, link5 }) => {
  return (
    <div>
      <h6>{heading}</h6>
      <p>{link1}</p>
      <p>{link2}</p>
      <p>{link3}</p>
      <p>{link4}</p>
      <p>{link5}</p>
    </div>
  );
};

export default FooterLink;
