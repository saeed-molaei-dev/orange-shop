/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-lone-blocks */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { cLocalStorageUser } from "../../../constansts/constanst.Const";
import { SignUp, StoreAddress } from "../../../store/auth/Auth.Action";
import OshButton from "../../global/button/osh-button/OshButton";
import OshInput from "../../global/osh-input/OshInput";
import "./CartAddress.scss";
function CartAddress() {
  const { userAddress } = useSelector((response) => response.authState);
  const [city, setCity] = useState(
    userAddress === null ? "" : userAddress.city,
  );
  const [address, setAddress] = useState(
    userAddress === null ? "" : userAddress.address,
  );
  const [postalCode, setPostalCode] = useState(
    userAddress === null ? "" : userAddress.postalCode,
  );
  const [phone, setPhone] = useState(
    userAddress === null ? "" : userAddress.phone,
  );
  const [saved, setSaved] = useState(false);
  const [btnInable, setBtnInable] = useState(false);
  const [hasToken, sethasToken] = useState(true);
  const mergedDispatch = useDispatch();
  function handleAddressForm() {
    mergedDispatch(StoreAddress({ city, address, postalCode, phone }));
    setSaved(true);
  }
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
    CheckToken() && handleButton();
  }, [city, address, postalCode, phone]);

  function handleButton() {
    if (
      city?.trim().length > 2 &&
      address?.trim().length > 9 &&
      postalCode?.trim().length > 9 &&
      phone?.length > 10
    ) {
      setBtnInable(false);
    } else {
      setBtnInable(true);
    }
  }
  return (
    <div className="cart-address">
      {!hasToken && <Navigate to={"/"} />}
      <OshInput
        errorMessage="نام شهر وارد شده صحیح نیست!!"
        minLength="2"
        maxLength="50"
        pattern="*"
        placeholder="شهر"
        defaultValue={city}
        change={(value) => {
          setCity(value);
        }}
      />
      <OshInput
        errorMessage="آدرس وارد شده کوتاه است!!"
        minLength="10"
        maxLength="200"
        pattern="*"
        placeholder="آدرس"
        defaultValue={address}
        change={(value) => {
          setAddress(value);
        }}
      />
      <OshInput
        errorMessage="کدپستی وارد شده صحیح نیست!!"
        minLength="10"
        maxLength="10"
        pattern="*"
        placeholder="کدپستی"
        defaultValue={postalCode}
        change={(value) => {
          setPostalCode(value);
        }}
      />
      <OshInput
        errorMessage="شماره تماس وارد شده صحیح نیست!!"
        minLength="11"
        maxLength="11"
        pattern={/^09\d{9}/}
        placeholder="شماره تماس"
        defaultValue={phone}
        type="number"
        change={(value) => {
          setPhone(value);
        }}
      />
      <OshButton disabled={btnInable} text={"بعدی"} click={handleAddressForm} />
      {saved && <Navigate to="/checkout"></Navigate>}
    </div>
  );
}

export default CartAddress;

{
  /* <input
className="cart-address__input"
type="text"
placeholder="کدپستی"
value={postalCode}
onChange={(event) => {
  setPostalCode(event.target.value);
  handleButton();
}}
/> */
}
