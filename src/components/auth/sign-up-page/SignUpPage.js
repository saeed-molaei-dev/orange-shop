import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Login, { SignUp } from "../../../store/auth/Auth.Action";
import OshButton from "../../global/button/osh-button/OshButton";
import OshInput from "../../global/osh-input/OshInput";
import OshToast from "../../global/osh-toast/OshToast";
import "./SignUpPage.scss";
function SignUpPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [showToast, setShowToast] = useState(false);
  const mergedDispatch = useDispatch();
  const { userSignedUp } = useSelector((response) => {
    return response.authState;
  });
  function HandleSignUp() {
    mergedDispatch(
      SignUp({ username, email, password, confirmPassword, mobile }),
    );
  }
  function HandleToast() {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  }

  return (
    <div className="sign-up-page">
      <OshInput
        errorMessage="نام کاربری انتخاب شده کوتاه است !!"
        minLength="5"
        maxLength="50"
        pattern="*"
        placeholder="نام کاربری"
        defaultValue={username}
        change={(value) => {
          setUsername(value);
        }}
      />
      <OshInput
        errorMessage="لطفا ایمیل را به درستی وارد کنید !!"
        minLength="12"
        maxLength="60"
        pattern={/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g}
        placeholder="ایمیل"
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
      <OshInput
        errorMessage="رمز عبور و تکرار آن باید برابر باشد !!"
        minLength="10"
        maxLength="50"
        pattern={
          /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
        }
        placeholder="تکرار رمز عبور"
        defaultValue={confirmPassword}
        type="password"
        change={(value) => {
          setConfirmPassword(value);
        }}
      />
      <OshInput
        errorMessage="لطفا با دقت بیشتری شماره موبایل خود را وارد کنید !!"
        minLength="11"
        maxLength="11"
        pattern="*"
        placeholder="شماره تماس"
        defaultValue={mobile}
        type="number"
        change={(value) => {
          setMobile(value);
        }}
      />
      {!showToast && (
        <OshButton
          text={"Sign Up"}
          disabled={false}
          click={() => {
            password.length > 7 && password === confirmPassword
              ? HandleSignUp()
              : HandleToast();
          }}
        />
 
      
      )}
      {showToast && (
        <OshToast
          text="رمز عبور و تکرار آن یکسان نیست!"
          type="osh-toast__danger"
        />
      )}
      {userSignedUp && <Navigate to="/login" />}
    </div>
  );
}

export default SignUpPage;
