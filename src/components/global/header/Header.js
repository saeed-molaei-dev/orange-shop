import React from "react";
import { Link } from "react-router-dom";
import { cOrangeLogo } from "../../../constansts/constanst.Const";
import LoginButton from "../../auth/login-button/LoginButton";
import CartButton from "../../cart/cart-button/CartButton";
import "./Header.scss";
function Header() {
  return (
    <div className="header">
      <div className="header__nav">
        <CartButton />
        <LoginButton />
      </div>
      <Link to="/" className="header__logo-holder">
        <span>فروشگاه آنلاین نارنجی</span>
        <span>Orange Shop</span>
        <div className="header__image-holder">
          <img className="header__image" src={cOrangeLogo} alt="Logo" />
        </div>
      </Link>
    </div>
  );
}

export default Header;
