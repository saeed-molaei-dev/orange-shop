/* eslint-disable default-case */
import React from "react";
import "./OshToast.scss";
import { RiCloseFill } from "react-icons/ri";
import {
  cDanger,
  cSuccess,
  cWarning,
} from "../../../constansts/constanst.Const";

function OshToast({ text, type }) {
  function DynamicClass(params) {
    let dynamicClass = "";
    switch (type) {
      case cSuccess:
        dynamicClass = " osh-toast__success";
        break;
      case cWarning:
        dynamicClass = " osh-toast__warning";
        break;
      case cDanger:
        dynamicClass = " osh-toast__danger";
        break;
    }
    return dynamicClass;
  }
  return (
    <div className={"osh-toast" + DynamicClass()}>
      <RiCloseFill />
      <span>{text}</span>
    </div>
  );
}

export default OshToast;
