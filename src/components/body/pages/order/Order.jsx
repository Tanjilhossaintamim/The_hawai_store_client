import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrder } from "../../../../redux/orderSlice";
import ContentWrapper from "../../../contentwrapper/ContentWrapper";
import SingelOrder from "./SingelOrder";

const Order = () => {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.order);
  console.log(orders);
  useEffect(() => {
    dispatch(fetchOrder(localStorage.getItem("token")));
  }, []);
  return (
    <div className="orderWrapper">
      <ContentWrapper>
        <div className="order">
          {orders?.map((order) => (
            <SingelOrder order={order} key={order.id} />
          ))}
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Order;
