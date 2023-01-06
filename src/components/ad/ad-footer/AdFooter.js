import React, { useState } from "react";
import "./AdFooter.scss";
import { TbCurrencyDollar } from "react-icons/tb";
import { SlRefresh } from "react-icons/sl";
import { BsTruck, BsClock } from "react-icons/bs";
import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbPhoneOutgoing,
  TbUser,
  TbBrandTelegram,
  TbBrandWhatsapp,
} from "react-icons/tb";
import { cCv } from "../../../constansts/constanst.Const";
function AdFooter() {
  const [showCv, setShowCv] = useState(false);
  return (
    <div className="osh-ad-footer">
      <span className="osh-ad-footer__cv">{showCv && <embed src={cCv} />}</span>
      <div className="osh-ad-footer__discription">
        <div>
          <p>
            <BsClock />
          </p>
          <span>خدمات 24 ساعته</span>
        </div>
        <div>
          <p>
            <BsTruck />
          </p>
          <span>ارسال رایگان و به موقع</span>
        </div>
        <div>
          <p>
            <SlRefresh />
          </p>
          <span>امکان مرجوع و تعویض</span>
        </div>
        <div>
          <p>
            <TbCurrencyDollar />
          </p>
          <span>امکان مقایسه قیمت</span>
        </div>
      </div>
      <div className="osh-ad-footer__main">
        <div className="osh-ad-footer__items-wrapper">
          <p>راهنما</p>
          <div className="osh-ad-footer__items">
            <span>چگونگی ثبت سفارش</span>
            <span>چگونگی پرداخت</span>
            <span>چگونگی ارسال کالا</span>
          </div>
        </div>
        <div className="osh-ad-footer__items-wrapper">
          <p>خدمات مشتریان</p>
          <div className="osh-ad-footer__items">
            <span>چگونگی بازگشت کالا</span>
            <span>اطلاع رسانی</span>
            <span>پرسش‌های متداول</span>
          </div>
        </div>
        <div className="osh-ad-footer__items-wrapper">
          <p>درباره ما</p>
          <div className="osh-ad-footer__items">
            <p>
              فروشگاه آنلاین نارنجی آماده ارائه خدمات 24 ساعته به شما عزیزان
              است. این فروشگاه از اولین سال تاسیس یکی از بهترین و کامل‌ترین
              مراکز فروش لوازم مورد نیاز شماست.
            </p>
          </div>
        </div>
        <div className="osh-ad-footer__items-wrapper">
          <p>ارتباط با ما</p>
          <div className="osh-ad-footer__social-media">
            <span
              title="برای مشاهده رزومه من لطفاً اینجا کلید کنید"
              onClick={() => {
                setShowCv((showCv) => !showCv);
              }}
            >
              <TbUser />
            </span>
            <span>
              <a
                href="https://www.linkedin.com/in/Saeedmolaei-dev"
                target="_blank"
                rel="noreferrer"
              >
                <TbBrandLinkedin />
              </a>
            </span>
            <span title="تماس صوتی">
              <a href="tel:+989369486468">
                <TbPhoneOutgoing />
              </a>
            </span>
            <span>
              <a
                href="https://github.com/saeed-molaei-dev/orange-shop"
                target="_blank"
                rel="noreferrer"
              >
                <TbBrandGithub />
              </a>
            </span>
            <span>
              <a
                href="https://telegram.me/sam_1996"
                target="_blank"
                rel="noreferrer"
              >
                <TbBrandTelegram />
              </a>
            </span>
            <span>
              <a
                href="https://wa.me/+989369486468?text=Hello!"
                target="_blank"
                rel="noreferrer"
              >
                <TbBrandWhatsapp />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdFooter;

{
  /* <OshPopup itemShow={<embed src={cCv} />} itemEnable={setShowCv}  /> */
}

 