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
  };
  return <span style={oshSkelton} className="osh-skelton"></span>;
}

export default OshSkelton;
