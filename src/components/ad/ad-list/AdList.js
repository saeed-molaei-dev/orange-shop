import "./AdList.scss";
import React, { useEffect } from "react";
import AdCard from "../ad-card/AdCard";
import { useDispatch, useSelector } from "react-redux";
import { GetAdList } from "../../../store/ad/ad-list/AdList.Action";

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
      {adList.map((item) => {
        return <AdCard data={item} key={item._id} />;
      })}
    </div>
  );
}

export default AdList;
