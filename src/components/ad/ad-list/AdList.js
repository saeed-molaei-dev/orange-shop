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
      {adLoading
        ? [...Array(40)].map((item, index) => {
            return (
              <OshSkelton
                key={index}
                tagName="list-wrapper"
                backgroundColor="transparent"
                width="calc(25% - 12px)"
                height="fit-content"
                padding="16px 16px 0 16px "
                border="1px solid gray"
                justifyContent="space-between"
                children={
                  <>
                    <OshSkelton
                      tagName="image"
                      backgroundColor="gray"
                      width="100%"
                      height="150px"
                    />
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
                  </>
                }
              />
            );
          })
        : adList.map((item) => {
            return <AdCard data={item} key={item._id} />;
          })
          
          }
    </div>
  );
}

export default AdList;
