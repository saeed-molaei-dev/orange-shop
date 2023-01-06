import "./AdList.scss";
import React, { useEffect, useState } from "react";
import AdCard from "../ad-card/AdCard";
import { useDispatch, useSelector } from "react-redux";
import { GetAdList } from "../../../store/ad/ad-list/AdList.Action";
import OshSkelton from "../../global/osh-skelton/OshSkelton";
import AdSkelton from "../ad-skelton/AdSkelton";
import AdFooter from "../ad-footer/AdFooter";
import OshPopup from "../../global/osh-popup/OshPopup";

function AdList() {
  const adListDispatch = useDispatch();
  const { adLoading, adList, adError } = useSelector(
    (response) => response.adListState,
  );
  useEffect(() => {
    adListDispatch(GetAdList());
  }, []);

  return (
    <div className="osh-ad-list-wrapper">
      <div className="osh-ad-list-menu-wrapper">
        {adLoading
          ? [...Array(40)].map((item, index) => {
              return <AdSkelton />;
            })
          : adList.map((item) => {
              return <AdCard data={item} key={item._id} />;
            })}
      </div>
      <AdFooter />
    </div>
  );
}

export default AdList;
