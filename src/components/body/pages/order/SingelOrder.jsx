import React from "react";
import "./singelorder.scss";

const SingelOrder = ({ order }) => {
  return (
    <div className="mainorder">
      <span>order id :{order.id}</span>
      <span>payment Status :{order.payment_status}</span>
      <span>Order Date :{new Date(order.placed_at).toDateString()}</span>
      <hr />
      <div>
        {order?.items?.map((item) => (
          <div key={item.id}>
            <span>Product Name :{item.product.title}</span>
            <span>Price :{item.product.price}</span>
            <span>Quantity :{item.quantity}</span>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingelOrder;
