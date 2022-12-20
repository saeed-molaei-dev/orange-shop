import React from "react";
import { useDispatch } from "react-redux";
import { cBrockenImg, cImg } from "../../../constansts/constanst.Const";
import {
  DecreaseQty,
  DeleteItem,
  IncreaseQty,
} from "../../../store/cart/cart.Action";
import AdvancedButton from "../../global/button/advanced-button/AdvancedButton";
import "./CartItem.scss";
function CartItem({ data }) {
  const mergedDispatch = useDispatch();
  function QtyPlus() {
    mergedDispatch(IncreaseQty(data._id));
  }

  function QtyMinus() {
    mergedDispatch(DecreaseQty(data._id));
  }
  function HandleDelete() {
    mergedDispatch(DeleteItem(data._id));
  }
  return (
    <div className="cart-item">
      <div className="cart-item__content-holder">
        <div className="cart-item__image-holder">
          <img
            src={data.image}
            alt={data.name}
            onError={(event) => (event.target.src = cBrockenImg)}
          />
        </div>
        <p className="cart-item__name">{data.name}</p>
      </div>
      <div className="cart-item__action-holder">
        <span className="cart-item__price">{data.price}</span>
        <AdvancedButton
          count={data.qty}
          onPlus={QtyPlus}
          onMinus={QtyMinus}
          onDeleted={HandleDelete}
        />
      </div>
    </div>
  );
}

export default CartItem;
