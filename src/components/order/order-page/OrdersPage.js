import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { cLocalStorageUser } from "../../../constansts/constanst.Const";
import GetOrders from "../../../store/order/Order.Action";
import OrderItem from "../../order/order-item/OrderItem";
import "./OrdersPage.scss";
function OrdersPage() {
  const orderDispatch = useDispatch();
  const { orderList } = useSelector((response) => response.orderState);
  const [hasToken, sethasToken] = useState(true);
   function CheckToken() {
    if (JSON.parse(localStorage.getItem(cLocalStorageUser)) !== null) {
      sethasToken(true);
      return true;
    } else {
      sethasToken(false);
      return false;
    }
  }
  useEffect(() => {
    CheckToken() &&
    orderDispatch(GetOrders());
  }, []);
  return (
    <div className="orders-page">
      {!hasToken && <Navigate to={"/"} />}
      {orderList.map((item, index) => {
        return <OrderItem data={item} key={index} />;
      })}
    </div>
  );
}

export default OrdersPage;
