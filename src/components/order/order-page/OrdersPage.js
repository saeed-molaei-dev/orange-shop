import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GetOrders from "../../../store/order/Order.Action";
import OrderItem from "../../order/order-item/OrderItem";
import "./OrdersPage.scss";
function OrdersPage() {
  const orderDispatch = useDispatch();
  const { orderList } = useSelector((response) => response.orderState);
  useEffect(() => {
    orderDispatch(GetOrders());
  }, []);
  return (
    <div className="orders-page">
      {orderList.map((item, index) => {
        return <OrderItem data={item} key={index} />;
      })}
    </div>
  );
}

export default OrdersPage;
