import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { GetOrderDetail } from "../../../store/order/Order.Action";
import OrderItem from "../order-item/OrderItem";
import "./OrderDetail.scss";
function OrderDetail() {
  const { id } = useParams();
  const orderDispatch = useDispatch();
  const { orderDetail } = useSelector((response) => response.orderState);
  useEffect(() => {
    orderDispatch(GetOrderDetail(id));
  }, []);
  return (
    <div className="order-detail">
      {orderDetail && <OrderItem data={orderDetail} />}
    </div>
  );
}

export default OrderDetail;
