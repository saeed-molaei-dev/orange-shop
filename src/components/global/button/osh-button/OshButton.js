import React from "react";
import "./OshButton.scss";
function OshButton({ text, disabled, click }) {
  return (
    <button
      className={disabled ? "osh-button osh-button--disabled" : "osh-button"}
      disabled={disabled}
      onClick={click}
    >
      {text}
    </button>
  );
}

export default OshButton;
