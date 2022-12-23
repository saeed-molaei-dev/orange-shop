import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { cLocalStorageUser } from "../../../constansts/constanst.Const";
import ChangePassword from "../change-password/ChangePassword";
import ChangeProfile from "../change-profile/ChangeProfile";
import SideBar from "../side-bar/SideBar";
import UploadAvatar from "../upload-avatar/UploadAvatar";
import "./SettingPage.scss";
function SettingPage() {
  const [selectedTab, setSelectedTab] = useState("profile");
  function changeTab(tabValue) {
    setSelectedTab(tabValue);
  }
  const [hasToken, sethasToken] = useState(true);
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
    CheckToken()  
  }, []);

  return (
    <div className="setting-page">
      {!hasToken && <Navigate to={"/"} />}
      <SideBar
        click={(tabValue) => {
          changeTab(tabValue);
        }}
      />
      {selectedTab === "profile" ? (
        <ChangeProfile />
      ) : selectedTab === "password" ? (
        <ChangePassword />
      ) : (
        selectedTab === "avatar" && <UploadAvatar />
      )}
    </div>
  );
}

export default SettingPage;
