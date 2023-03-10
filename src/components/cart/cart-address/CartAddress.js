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
        errorMessage="?????? ?????? ???????? ?????? ???????? ????????!!"
        minLength="2"
        maxLength="50"
        pattern="*"
        placeholder="??????"
        defaultValue={city}
        change={(value) => {
          setCity(value);
        }}
      />
      <OshInput
        errorMessage="???????? ???????? ?????? ?????????? ??????!!"
        minLength="10"
        maxLength="200"
        pattern="*"
        placeholder="????????"
        defaultValue={address}
        change={(value) => {
          setAddress(value);
        }}
      />
      <OshInput
        errorMessage="???????????? ???????? ?????? ???????? ????????!!"
        minLength="10"
        maxLength="10"
        pattern="*"
        placeholder="????????????"
        defaultValue={postalCode}
        change={(value) => {
          setPostalCode(value);
        }}
      />
      <OshInput
        errorMessage="?????????? ???????? ???????? ?????? ???????? ????????!!"
        minLength="11"
        maxLength="11"
        pattern={/^09\d{9}/}
        placeholder="?????????? ????????"
        defaultValue={phone}
        type="number"
        change={(value) => {
          setPhone(value);
        }}
      />
      <OshButton disabled={btnInable} text={"????????"} click={handleAddressForm} />
      {saved && <Navigate to="/checkout"></Navigate>}
    </div>
  );
}

export default CartAddress;

{
  /* <input
className="cart-address__input"
type="text"
placeholder="????????????"
value={postalCode}
onChange={(event) => {
  setPostalCode(event.target.value);
  handleButton();
}}
/> */
}
