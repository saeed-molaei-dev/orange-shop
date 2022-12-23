import React, { useState } from "react";
import "./OshInput.scss";

function OshInput({
  change,
  errorMessage,
  pattern,
  minLength,
  maxLength,
  placeholder,
  defaultValue,
}) {
  const [hasError, setHasError] = useState(false);
  function handleChange(inputEvent) {
    if (inputEvent.target.validity.valid) {
      setHasError(false);
    } else {
      setHasError(true);
    }
  }
  if (!defaultValue) {
    defaultValue = "";
  }
  return (
    <div className="osh-input">
      <input
        className="osh-input__input"
        type="text"
        placeholder={placeholder}
        minLength={minLength}
        maxLength={maxLength}
        pattern={pattern}
        value={defaultValue}
        onChange={(event) => {
          handleChange(event);
          change(event.target.value);
        }}
      />
      {hasError && <p className="osh-input__message">{errorMessage}</p>}
    </div>
  );
}

export default OshInput;
