import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import OshButton from "../../global/button/osh-button/OshButton";
import "./ChangePassword.scss";
function ChangePassword() {
  const [isFormValid, setIsFormValid] = useState(true);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatPassword, setrepeatPassword] = useState("");
  const mergedDispatch = useDispatch();
  const { userList } = useSelector((response) => response.authState);
  async function CallPasswordApi() {
    await axios.put(
      "http://kzico.runflare.run/user/change-password",
      {
        old_password: oldPassword,
        new_password: newPassword,
      },
      {
        headers: {
          authorization: "Bearer " + userList.token,
        },
      },
    );
  }

  return (
    <div className="change-password">
      <input
        value={oldPassword}
        type="password"
        placeholder="رمز قبلی"
        onChange={(event) => setOldPassword(event.target.value)}
      />
      <input
        value={newPassword}
        type="password"
        placeholder="رمز جدید"
        onChange={(event) => setNewPassword(event.target.value)}
      />
      <input
        value={repeatPassword}
        type="password"
        placeholder="تکرار رمز جدید"
        onChange={(event) => setrepeatPassword(event.target.value)}
      />
      <OshButton
        text={"بارگزاری"}
        disabled={
          newPassword !== repeatPassword ||
          newPassword.length < 7 ||
          oldPassword.length < 7
        }
        click={() => {
          if (
            newPassword === repeatPassword &&
            newPassword.length > 7 &&
            oldPassword.length > 7
          ) {
            CallPasswordApi();
          }
        }}
      />
    </div>
  );
}

export default ChangePassword;
