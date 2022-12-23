import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Login, { SignUp } from "../../../store/auth/Auth.Action";
import OshButton from "../../global/button/osh-button/OshButton";
import "./SignUpPage.scss";
function SignUpPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const mergedDispatch = useDispatch();
  const { userSignedUp } = useSelector((response) => {
    return response.authState;
  });
  function handleSignUp() {
    mergedDispatch(
      SignUp({ username, email, password, confirmPassword, mobile }),
    );
  }
  return (
    <div className="sign-up-page">
      <input
        className="sign-up-page__input"
        type="text"
        placeholder="نام کاربری"
        value={username}
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <input
        className="sign-up-page__input"
        type="text"
        placeholder="ایمیل"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <input
        className="sign-up-page__input"
        type="password"
        placeholder="پسورد"
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <input
        className="sign-up-page__input"
        type="password"
        placeholder="تکرار پسورد"
        value={confirmPassword}
        onChange={(event) => {
          setConfirmPassword(event.target.value);
        }}
      />
      <input
        className="sign-up-page__input"
        type="text"
        placeholder="شماره تماس"
        value={mobile}
        onChange={(event) => {
          setMobile(event.target.value);
        }}
      />
      <OshButton text={"Sign Up"} disabled={false}  click={handleSignUp} />
      {userSignedUp && <Navigate to="/login" />}
    </div>
  );
}

export default SignUpPage;
