/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../../store/auth/Auth.Action";
import OshButton from "../../global/button/osh-button/OshButton";
import "./ChangeProfile.scss";
function ChangeProfile() {
  const mergedDispatch = useDispatch();
  const { userList } = useSelector((response) => response.authState);
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  async function SubmitForm() {
    await axios.put(
      "http://kzico.runflare.run/user/change-profile",
      {
        firstname,
        lastname,
        gender,
        age,
        city,
      },
      {
        headers: {
          authorization: "Bearer " + userList.token,
        },
      },
    );
  }
  return (
    <div className="change-profile">
      <input
        className="change-profile__input"
        type="text"
        placeholder="نام"
        value={firstname}
        onChange={(event) => {
          setFirstName(event.target.value);
        }}
      />
      <input
        className="change-profile__input"
        type="text"
        placeholder="نام خانوادگی"
        value={lastname}
        onChange={(event) => {
          setLastName(event.target.value);
        }}
      />
      <input
        className="change-profile__input"
        type="text"
        placeholder="جنسیت"
        value={gender}
        onChange={(event) => {
          setGender(event.target.value);
        }}
      />
      <input
        className="change-profile__input"
        type="text"
        placeholder="سن"
        value={age}
        onChange={(event) => {
          setAge(event.target.value);
        }}
      />
      <input
        className="change-profile__input"
        type="text"
        placeholder="شهر"
        value={city}
        onChange={(event) => {
          setCity(event.target.value);
        }}
      />
      <OshButton
        className="change-profile__button"
        text={"ذخیره"}
        disabled={false}
        click={() => {
          SubmitForm();
        }}
      />
    </div>
  );
}

export default ChangeProfile;
