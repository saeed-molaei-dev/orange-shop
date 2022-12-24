/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { GetAdDetail } from "../../../store/ad/ad-detail/adDetail.Action";
import "./AdDetail.scss";
import { CgDollar } from "react-icons/cg";
import { GiStarFormation } from "react-icons/gi";
import { cBrockenImg, cSuccess } from "../../../constansts/constanst.Const";
import OshButton from "../../global/button/osh-button/OshButton";
import AddToCart, {
  DecreaseQty,
  Deleted,
  DeleteItem,
  IncreaseQty,
} from "../../../store/cart/cart.Action";
import AdvancedButton from "../../global/button/advanced-button/AdvancedButton";
import OshToast from "../../global/osh-toast/OshToast";

function AdDetail() {
  const { id } = useParams();
  const mergedDispatch = useDispatch();
  const { adDetailState, cartState } = useSelector((response) => response);
  const { adDetailLoading, adDetailList, adDetailError } = adDetailState;
  const { cartLoading, cartList, cartError } = cartState;
  let product = null;
  useEffect(() => {
    mergedDispatch(GetAdDetail(id));
  }, []);
  function HandleAddToCart() {
    mergedDispatch(AddToCart(adDetailList));
  }
  function GetProductFromCart() {
    cartList.forEach((cartProduct) => {
      if (cartProduct._id === id) {
        product = cartProduct;
      }
    });
    return product;
  }
  function QtyPlus() {
    mergedDispatch(IncreaseQty(id));
  }

  function QtyMinus() {
    mergedDispatch(DecreaseQty(id));
  }
  function HandleDelete() {
    mergedDispatch(DeleteItem(id));
  }

  return (
    <div className="osh-ad-detail">
      <div className="osh-ad-detail__header">
        <div className="osh-ad-detail__image-holder">
          <img
            src={adDetailList.image}
            alt={adDetailList.name}
            onError={(event) => (event.target.src = cBrockenImg)}
          />
        </div>
        <div className="osh-ad-detail__detail-holder">
          <div className="osh-ad-detail__detail osh-ad-detail__detail--full-width">
            <span
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              نام: {adDetailList.name}
            </span>
          </div>
          <div className="osh-ad-detail__detail">
            <span> برند: {adDetailList.brand}</span>
          </div>
          <div className="osh-ad-detail__detail">
            <span>دسته بندی: {adDetailList.category}</span>
          </div>
          <div className="osh-ad-detail__detail">
            <span> رنگ: {adDetailList.color}</span>
          </div>
          <div className="osh-ad-detail__detail">
            <span> قیمت: {adDetailList.price}</span>
            <span>
              <CgDollar />
            </span>
          </div>
          <div className="osh-ad-detail__detail">
            <span> امتیاز: {adDetailList.rating}</span>
            <span>
              <GiStarFormation />
            </span>
          </div>
          <div className="osh-ad-detail__detail">
            <span> موجودی: {adDetailList.countInStock}</span>
          </div>
        </div>
      </div>
      <p className="osh-ad-detail__description">
        توضیحات: {adDetailList.description}
      </p>
      {adDetailList.countInStock === 0 ? (
        <span className="osh-ad-detail__out">تموم کردیم</span>
      ) : GetProductFromCart() ? (
        <AdvancedButton
          count={product.qty}
          onPlus={QtyPlus}
          onMinus={QtyMinus}
          onDeleted={HandleDelete}
        />
      ) : (
        <OshButton
          text={"افزودن به لیست خرید"}
          disabled={false}
          click={HandleAddToCart}
        />
      )}
    </div>
  );
}

export default AdDetail;
