import React, { useState } from "react";
import "./OshPopup.scss";
function OshPopup({ itemShow, itemEnable }) {
  return (
    <div className="osh-popup">
      <div
        className="osh-popup__wrapper"
        onClick={() => {
          itemEnable(false);
        }}
      ></div>
      <div className="osh-popup__item">{itemShow}</div>
    </div>
  );
}

export default OshPopup;
