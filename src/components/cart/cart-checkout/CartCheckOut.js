import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import OshButton from "../../global/button/osh-button/OshButton";
import CartItem from "../cart-item/CartItem";
import "./CartCheckOut.scss";
function CartCheckOut() {
  const [submited, setSubmited] = useState(false);
  const mergedDispatch = useDispatch();
  const { cartList, cartTotals } = useSelector((response) => {
    return response.cartState;
  });
  const { userList, userAddress } = useSelector(
    (response) => response.authState,
  );
  function GenerateOrderItems() {
    let orderItems = [];
    cartList.forEach((itemData) => {
      orderItems.push({
        product: itemData._id,
        qty: itemData.qty,
      });
    });
    return orderItems;
  }
  function SubmitOrder() {
    axios
      .post(
        "http://kzico.runflare.run/order/submit",
        {
          orderItems: GenerateOrderItems(),
          shippingAddress: {
            address: userAddress.address,
            city: userAddress.city,
            postalCode: userAddress.postalCode,
            phone: userAddress.phone,
          },
          paymentMethod: "cash",
          shippingPrice: 5,
          totalPrice: cartTotals.totalPrice + 5,
        },
        {
          headers: {
            authorization: "Bearer " + userList.token,
          },
        },
      )
      .then((response) => {
        setSubmited(true);
      });
  }
  return (
    <div className="cart-checkout">
      {cartList.map((itemData, index) => {
        return <CartItem data={itemData} key={index} />;
      })}

      <div className="cart-checkout__footer">
        <Link to="/cart">تغییر</Link>
        <span>مجموع قیمت: {cartTotals.totalPrice}</span>
        <OshButton text={"ذخیره"}  disabled={false} click={SubmitOrder} />
      </div>
      {submited && <Navigate to="/" />}
    </div>
  );
}

export default CartCheckOut;
