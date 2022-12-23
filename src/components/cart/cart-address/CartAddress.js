import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { SignUp, StoreAddress } from "../../../store/auth/Auth.Action";
import OshButton from "../../global/button/osh-button/OshButton";
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
  const mergedDispatch = useDispatch();
  function handleAddressForm() {
    mergedDispatch(StoreAddress({ city, address, postalCode, phone }));
    setSaved(true);
  }
  useEffect(() => {
    handleButton();
  }, []);

  function handleButton() {
    if (
      city.trim() === "" &&
      address.trim() === "" &&
      postalCode.trim() === "" &&
      phone.trim() === ""
    ) {
      setBtnInable(false);
    } else {
      setBtnInable(true);
    }
  }
  return (
    <div className="cart-address">
      <input
        className="cart-address__input"
        type="text"
        placeholder="شهر"
        value={city}
        onChange={(event) => {
          setCity(event.target.value);
          handleButton();
        }}
      />
      <input
        className="cart-address__input"
        type="text"
        placeholder="آدرس"
        value={address}
        onChange={(event) => {
          setAddress(event.target.value);
          handleButton();
        }}
      />
      <input
        className="cart-address__input"
        type="text"
        placeholder="کدپستی"
        value={postalCode}
        onChange={(event) => {
          setPostalCode(event.target.value);
          handleButton();
        }}
      />
      <input
        className="cart-address__input"
        type="text"
        placeholder="شماره تماس"
        value={phone}
        onChange={(event) => {
          setPhone(event.target.value);
          handleButton();
        }}
      />
      <span
        className={
          btnInable
            ? "cart-address__inable-button"
            : "cart-address__disable-button"
        }
      >
        <OshButton disabled={false}  text={"بعدی"} click={handleAddressForm} />
      </span>
      {saved && <Navigate to="/checkout"></Navigate>}
    </div>
  );
}

export default CartAddress;
