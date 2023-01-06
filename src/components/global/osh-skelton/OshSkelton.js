import React from "react";
import "./OshSkelton.scss";
function OshSkelton({
  tagName = "No name",
  width = "0",
  height = "0",
  margin = "0",
  padding = "0",
  border = "0",
  borderRadius = "4px",
  display = "flex",
  flexWrap = "wrap",
  flexDirection = "row",
  justifyContent = "center",
  alignItems = "center",
  colorNumber = "1",
  // backgroundColor = "red",
}) {
  const oshSkelton = {
    width: width,
    height: height,
    margin: margin,
    padding: padding,
    border: border,
    borderRadius: borderRadius,
    display: display,
    flexWrap: flexWrap,
    flexDirection: flexDirection,
    justifyContent: justifyContent,
    alignItems: alignItems,
    // backgroundColor: backgroundColor,
  };

  return (
    <span
      style={oshSkelton}
      className={
        colorNumber === "1"
          ? "osh-skelton-first-color"
          : "osh-skelton-second-color"
      }
    ></span>
  );
}

export default OshSkelton;
