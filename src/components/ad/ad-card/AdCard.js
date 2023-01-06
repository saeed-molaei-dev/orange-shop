import React, { useState } from "react";
import { cBrockenImg } from "../../../constansts/constanst.Const";
import { CgDollar } from "react-icons/cg";
import { AiFillStar } from "react-icons/ai";
import "./AdCard.scss";
import { Link } from "react-router-dom";
function AdCard({ data }) {
  const [imgSrc, setImgSrc] = useState(data.image);
  return (
    <Link
      to={"/ad-detail/" + data._id}
      className="osh-ad-card"
      title={data.name}
    >
      <img src={imgSrc} alt="undefind" onError={() => setImgSrc(cBrockenImg)} />
      <span className="osh-ad-card__rating">
        <AiFillStar />
        <span>{data.rating}</span>
      </span>
      <div className="osh-ad-card__footer">
        <p className="osh-ad-card__title">{data.name}</p>
        <div className="osh-ad-card__discription">
          <span className="osh-ad-card__sub-title">
            {data.countInStock ? (
              "موجودی " + data.countInStock + "عدد"
            ) : (
              <span style={{ color: "red" }}>اتمام موجودی</span>
            )}
          </span>
          <span className="osh-ad-card__price">{data.price} دلار</span>
        </div>
      </div>
    </Link>
  );
}

export default AdCard;
