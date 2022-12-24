import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { Login } from "../../../store/auth/Auth.Action";
import OshButton from "../../global/button/osh-button/OshButton";
import OshInput from "../../global/osh-input/OshInput";
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
      <OshInput
        errorMessage="لطفا ایمیل را به درستی وارد کنید !!"
        minLength="12"
        maxLength="60"
        pattern={/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g}
        placeholder="نام کاربری / ایمیل"
        defaultValue={email}
        change={(value) => {
          setEmail(value);
        }}
      />
      <OshInput
        errorMessage="رمز باید حداقل 10 کاراکتر و شامل حروف، عدد و سیمبل باشد !!"
        minLength="10"
        maxLength="50"
        pattern={
          /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
        }
        placeholder="رمز عبور"
        defaultValue={password}
        type="password"
        change={(value) => {
          setPassword(value);
        }}
      /> 
      <div className="login-page__action-holder">
        <OshButton text={"Log In"} click={handleLogin} disabled={false} />
        <Link to="/sign-up">Sign Up</Link>
      </div>
      {userList && <Navigate to="/" />}
    </div>
  );
}

export default LoginPage;
