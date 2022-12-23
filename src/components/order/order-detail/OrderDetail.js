import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { cLocalStorageUser } from "../../../constansts/constanst.Const";
import { GetOrderDetail } from "../../../store/order/Order.Action";
import OrderItem from "../order-item/OrderItem";
import "./OrderDetail.scss";
function OrderDetail() {
  const { id } = useParams();
  const orderDispatch = useDispatch();
  const { orderDetail } = useSelector((response) => response.orderState);
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
    orderDispatch(GetOrderDetail(id));
  }, []);
  return (
    <div className="order-detail">
      {!hasToken && <Navigate to={"/"} />}
      {orderDetail && <OrderItem data={orderDetail} />}
    </div>
  );
}

export default OrderDetail;
