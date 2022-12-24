/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../../store/auth/Auth.Action";
import OshButton from "../../global/button/osh-button/OshButton";
import OshInput from "../../global/osh-input/OshInput";
import "./ChangeProfile.scss";
function ChangeProfile() {
  const mergedDispatch = useDispatch();
  const { userList } = useSelector((response) => response.authState);
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [gender, setGender] = useState("male");
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
    ).then((response)=>{ 
    }) ;
  }
  return (
    <div className="change-profile">
      <OshInput
        errorMessage="نام وارد شده صحیح نیست!!"
        minLength="3"
        maxLength="50"
        pattern="*"
        placeholder="نام"
        defaultValue={firstname}
        change={(value) => {
          setFirstName(value);
        }}
      />
      <OshInput
        errorMessage="نام خانوادگی وارد شده صحیح نیست!!"
        minLength="3"
        maxLength="50"
        pattern="*"
        placeholder="نام خانوادگی"
        defaultValue={lastname}
        change={(value) => {
          setLastName(value);
        }}
      />
      <OshInput
        errorMessage="لطفا سن را به درستی وارد کنید !!"
        minLength="2"
        maxLength="2"
        pattern="*"
        placeholder="سن"
        defaultValue={age}
        change={(value) => {
          setAge(value);
        }}
      />
      <OshInput
        errorMessage="نام شهر وارد شده صحیح نیست!!"
        minLength="2"
        maxLength="50"
        pattern="*"
        placeholder="شهر"
        defaultValue={city}
        change={(value) => {
          setCity(value);
        }}
      />
      <div className="change-profile__radio">
        <span className="change-profile__button-holder">
          <label className="change-profile__button">
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={(event) => {
                setGender("male");
              }}
            />
            مرد
          </label>
          <label className="change-profile__button">
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={(event) => {
                setGender("female");
              }}
            />
            زن
          </label>
        </span>
      </div>

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

{
  /* <input
className="change-profile__input"
type="text"
placeholder="نام"
value={firstname}
onChange={(event) => {
  setFirstName(event.target.value);
}}
/> */
}
