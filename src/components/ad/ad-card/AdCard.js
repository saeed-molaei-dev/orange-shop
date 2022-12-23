import React, { useState } from "react";
import { cBrockenImg } from "../../../constansts/constanst.Const";
import { CgDollar } from "react-icons/cg";
import { GiStarFormation } from "react-icons/gi";
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
      <div className="osh-ad-card__image-holder">
        <img
          src={imgSrc}
          alt="undefind"
          onError={() => setImgSrc(cBrockenImg)}
        />
      </div>
      <p className="osh-ad-card__title">{data.name}</p>
      <p className="osh-ad-card__sub-title">
        {data.countInStock
          ? "موجودی " + data.countInStock + "عدد"
          : " اتمام موجودی"}
      </p>
      <div className="osh-ad-card__footer">
        <span>
          {data.price} <CgDollar />
        </span>
        <span>
          {data.rating} <GiStarFormation />
        </span>
      </div>
    </Link>
  );
}

export default AdCard;
