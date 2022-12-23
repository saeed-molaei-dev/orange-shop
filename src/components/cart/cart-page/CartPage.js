import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import OshButton from "../../global/button/osh-button/OshButton";
import CartItem from "../cart-item/CartItem";
import "./CartPage.scss";
function CartPage() {
  const mergedDispatch = useDispatch();
  const { cartList, cartTotals } = useSelector((response) => {
    return response.cartState;
  });
  const { userList } = useSelector((response) => {
    return response.authState;
  }); 
  return (
    <div className="cart-page">
      {cartList.length === 0 ? (
        <p>هنوز محصولی برای خرید انتخاب نکرده اید!!!</p>
      ) : (
        cartList.map((itemData,index) => {
          return <CartItem data={itemData} key={index}/>;
        })
      )}

      <div className="cart-page__footer">
        <span>مجموع قیمت: {cartTotals.totalPrice}</span>
        {userList ? (
          cartList.length !== 0 && (
            <Link to='/address'   >مرحله بعد</Link>
          )
        ) : (
          <Link to="/login">ورود</Link>
        )}
      </div>
    </div>
  );
}

export default CartPage;
