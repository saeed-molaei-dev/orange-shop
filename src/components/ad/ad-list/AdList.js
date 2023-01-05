import "./AdList.scss";
import React, { useEffect } from "react";
import AdCard from "../ad-card/AdCard";
import { useDispatch, useSelector } from "react-redux";
import { GetAdList } from "../../../store/ad/ad-list/AdList.Action";
import OshSkelton from "../../global/osh-skelton/OshSkelton";

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
      {adLoading || true
        ? [...Array(40)].map((item, index) => {
            return (
              <div className="osh-ad-list-skelton">
                <OshSkelton
                  tagName="image"
                  backgroundColor="gray"
                  width="100%"
                  height="150px"
                />
                <div className="osh-ad-list-skelton__body-holder">
                  <OshSkelton
                    tagName="title"
                    backgroundColor="gray"
                    width="100%"
                    height="16px"
                    margin="14px 0"
                  />
                  <OshSkelton
                    tagName="sub-title"
                    backgroundColor="gray"
                    width="100%"
                    height="12px"
                  />
                  <div className="osh-ad-list-loading__footer">
                    <OshSkelton
                      tagName="price"
                      backgroundColor="gray"
                      width="20%"
                      height="16px"
                      margin="14px  0"
                    />
                    <OshSkelton
                      tagName="rank"
                      backgroundColor="gray"
                      width="20%"
                      height="16px"
                      margin="14px  0"
                    />
                  </div>
                </div>
              </div>
            );
          })
        : adList.map((item) => {
            return <AdCard data={item} key={item._id} />;
          })}
    </div>
  );
}

export default AdList;
