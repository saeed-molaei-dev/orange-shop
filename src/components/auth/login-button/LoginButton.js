import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { Logout } from "../../../store/auth/Auth.Action";
import "./LoginButton.scss";
function LoginButton() {
  const mergedDispatch = useDispatch();
  const { userList } = useSelector((response) => {
    return response.authState;
  });
  const [userLoggedOut, setuserLoggedOut] = useState(false);
  function LogOutUser() {
    mergedDispatch(Logout());
    setuserLoggedOut(true);
  }
  return (
    <div className="login-button">
      {userList ? (
        <div>{userList.username}</div>
      ) : (
        <Link to="/login">ورود</Link>
      )}
      {userList ? (
        <div className="login-button__nav-wrapper">
          <div className="login-button__items-holder">
            <Link to="/profile">Profile</Link>
            <Link to="/orders">Orders</Link>
            <Link to="/setting">Setting</Link>
            <div onClick={LogOutUser}>Log Out</div>
          </div>
        </div>
      ) : (
        ""
      )}
      {userLoggedOut && <Navigate to="/" />}
    </div>
  );
}

export default LoginButton;
