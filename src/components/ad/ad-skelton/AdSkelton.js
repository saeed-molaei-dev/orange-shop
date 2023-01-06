import React from "react";
import OshSkelton from "../../global/osh-skelton/OshSkelton";
import "./AdSkelton.scss";
function AdSkelton() {
  return (
    <div className="osh-ad-skelton">
      <OshSkelton tagName="image" width="100%" height="100%" colorNumber="1" />
      <div className="osh-ad-skelton__rating">
        <OshSkelton
          tagName="rating"
          width="64px"
          height="30px"
          borderRadius="0"
          colorNumber="2"
        />
      </div>
      <div className="osh-ad-skelton__footer">
        <OshSkelton
          tagName="footer"
          width="300px"
          height="60px"
          borderRadius="0"
          colorNumber="2"
        />
      </div>
      <div className="osh-ad-skelton__footer-wrapper">
        <OshSkelton
          tagName="title"
          width="200px"
          height="16px"
          margin="4px"
          colorNumber="1"
        />
        <div className="osh-ad-skelton__discription">
          <OshSkelton
            tagName="sub-title"
            width="150px"
            height="16px"
            margin="8px"
            colorNumber="1"
          />
          <OshSkelton
            tagName="price"
            width="48px"
            height="16px"
            margin="8px"
            colorNumber="1"
          />
        </div>
      </div>
    </div>
  );
}

export default AdSkelton;
