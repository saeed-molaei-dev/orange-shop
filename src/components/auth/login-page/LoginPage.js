import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { Login } from "../../../store/auth/Auth.Action";
import OshButton from "../../global/button/osh-button/OshButton";
import "./LoginPage.scss";
function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const mergedDispatch = useDispatch();
  const { userList } = useSelector((response) => {
    return response.authState;
  });
  function handleLogin() {
    mergedDispatch(Login({ email, password }));
  }
  return (
    <div className="login-page">
      <input
        className="login-page__input"
        type="text"
        placeholder="نام کاربری / ایمیل"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <input
        className="login-page__input"
        type="password"
        placeholder="پسورد"
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <div className="login-page__action-holder">
        <OshButton text={"Log In"} click={handleLogin} disabled={false}  />
        <Link to="/sign-up">Sign Up</Link>
      </div>
      {userList && <Navigate to="/" />}
    </div>
  );
}

export default LoginPage;
