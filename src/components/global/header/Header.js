import React from "react";
import { Link } from "react-router-dom";
import LoginButton from "../../auth/login-button/LoginButton";
import CartButton from "../../cart/cart-button/CartButton";
import "./Header.scss";
function Header() {
  return (
    <div className="header">
      <Link to="/">Orange Shop</Link>
      <div className="header__nav">
        <CartButton />
        <LoginButton />
      </div>
    </div>
  );
}

export default Header;
