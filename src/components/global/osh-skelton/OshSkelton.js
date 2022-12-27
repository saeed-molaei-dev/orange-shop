import React from "react";
import "./OshSkelton.scss";
function OshSkelton({
  tagName = "No name",
  backgroundColor = "gray",
  width = "0",
  height = "0",
  margin = "0",
  padding = "0",
  border = "0",
  borderRadius = "0",
  display = "flex",
  flexWrap = "wrap",
  flexDirection = "row",
  justifyContent = "center",
  alignItems = "center",
  children = <span></span>,
}) {
  const oshSkelton = {
    backgroundColor: backgroundColor,
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
  return (
    <div
      style={oshSkelton}
      className='osh-skelton'
    >
      {children}
    </div>
  );
}

export default OshSkelton;
