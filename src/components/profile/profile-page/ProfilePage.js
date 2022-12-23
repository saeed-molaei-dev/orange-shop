import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../../store/auth/Auth.Action";
import "./ProfilePage.scss";
function ProfilePage() {
  const mergedDispatch = useDispatch();
  const { user } = useSelector(
    (response) => response.authState.userProfileInfo,
  );
  useEffect(() => {
    mergedDispatch(getProfile());
  }, []);
  return (
    <div className="profile-page">
      {user && user.image && (
        <div className="profile-page__image-holder">
          <img src={user.image} alt={user.username} />
        </div>
      )}
      {user && user.email && <p>ایمیل : {user.email}</p>}
      {user && user.username && <p>نام کاربری : {user.username}</p>}
      {user && user.mobile && <p>شماره تماس : {user.mobile}</p>}
      {user && user.firstname && <p>نام : {user.firstname}</p>}
      {user && user.lastname && <p>نام خانوادگی : {user.lastname}</p>}
      {user && user.gender && <p>جنسیت : {user.gender}</p>}
      {user && user.age && <p>سن : {user.age}</p>}
      {user && user.city && <p>شهر : {user.city}</p>}
    </div>
  );
}

export default ProfilePage;
