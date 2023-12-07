import React, { useState, useEffect } from "react";
import "./Scss/Header.scss";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Mac1 from "../../assets/images/m1.png";
import Mac2 from "../../assets/images/m2.png";
import { useTranslation } from "react-i18next";
import Side from "../../assets/images/side.png";
import Texture from "../../assets/images/texture.png";
import { useQuery } from "react-query";
import { fetchHeaderData } from "../../api/api";
import { Skeleton } from "@mui/material";

const Header = ({
  english,
  russian,
  uzbek,
  dataProducts,
  // dataHeaderImages,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  function changeIndex(item) {
    setActiveIndex(item);
  }

  const { t } = useTranslation();

  // data header images

  const { isLoading, data } = useQuery("header-data", fetchHeaderData);

  if (isLoading) {
    return (
      <div className="Header">
        <div className="wrapper">
          <div className="col-6 texts">
            <h1 className="title">
              <Skeleton
                variant="text"
                sx={{ bgcolor: "grey.700" }}
                width="100%"
              />
              <Skeleton
                variant="text"
                sx={{ bgcolor: "grey.700" }}
                width="100%"
              />
              <Skeleton
                variant="text"
                sx={{ bgcolor: "grey.700" }}
                width="70%"
              />
            </h1>
            <p className="text">
              <Skeleton
                variant="text"
                sx={{ bgcolor: "grey.700" }}
                width="100%"
              />
              <Skeleton
                variant="text"
                sx={{ bgcolor: "grey.700" }}
                width="100%"
              />
              <Skeleton
                variant="text"
                sx={{ bgcolor: "grey.700" }}
                width="100%"
              />
              <Skeleton
                variant="text"
                sx={{ bgcolor: "grey.700" }}
                width="100%"
              />
              <Skeleton
                variant="text"
                sx={{ bgcolor: "grey.700" }}
                width="70%"
              />
            </p>
            <div className="btns" style={{ gap: "10px" }}>
              <Skeleton
                variant="rounded"
                sx={{ bgcolor: "grey.700" }}
                width="45%"
                height="3vw"
              />
              <Skeleton
                variant="rounded"
                sx={{ bgcolor: "grey.700" }}
                width="45%"
                height="3vw"
              />
            </div>
            <p className="batafsil col-12">
              <Skeleton
                variant="text"
                sx={{ bgcolor: "grey.700" }}
                width="30%"
              />
            </p>
          </div>
          {window.innerWidth > 767 && (
            <div className="col-6 texts">
              <Skeleton
                variant="circular"
                sx={{ bgcolor: "grey.700" }}
                width="100%"
                height="28vw"
              />
            </div>
          )}
        </div>
      </div>
    );
  }

  const dataHeaderImages = data?.data;

  return (
    <div className="Header">
      {dataHeaderImages.slice(0, 1).map((data, index) => (
        <div key={data.id} className="wrapper">
          <div className="col-6 texts">
            <h1 className="title">
              {english && "Looking for high quality pasta products?"}
              {russian && "Ищете качественные макаронные изделия?"}
              {uzbek && "Yuqori sifatli makaron mahsulotlarini qidiryapsizmi?"}
            </h1>
            <p className="text">
              {english &&
                "Do you want an Italian pasta producer who can deliver 3 times faster while saving you $500 on your delivery and give you $1000 worth of consultation for free? Then click below for more information."}
              {russian &&
                "Вам нужен итальянский производитель макарон, который сможет доставить в 3 раза быстрее, сэкономив вам 500 долларов на доставке и предоставив вам бесплатную консультацию на 1000 долларов? Нажмите ниже для получения дополнительной информации."}
              {uzbek &&
                "Yetkazib berishda sizga 500 dollar tejab, 3 baravar tezroq yetkazib beradigan va 1000 dollarga bepul maslahat beradigan Italyan makaron ishlab chiqaruvchisini xohlaysizmi? Keyin qo'shimcha ma'lumot olish uchun pastga bosing."}
            </p>
            <div className="btns">
              <a href="#categories" className="retsep">
                {english && "Explore products"}
                {russian && "Приготовление этой еды"}
                {uzbek && "Mahsulotlarni ko’ring"}
              </a>
              <a href="/#contacts" className="other">
                {english && "Get your $1500"} {russian && "Стоимость: 1500$"}
                {uzbek && "$1500 qiymatni oling"}
              </a>
            </div>
            <a href="#contacts" className="batafsil">
              {english && "Claim your $1500 worth of value now!"}
              {russian &&
                "ПОЛУЧИТЕ БЕСПЛАТНУЮ КОНСУЛЬТАЦИЮ (Стоимость: $1500) "}
              {uzbek && "$1,500 qiymatingizni hoziroq qo’lga kiriting"}
            </a>
          </div>
          {dataHeaderImages.map(
            (item) =>
              dataHeaderImages.indexOf(item) ==
                dataHeaderImages.slice(0, 1).indexOf(data) && (
                <img src={item.image} className="back-img" alt="back" />
              )
          )}
        </div>
      ))}
    </div>
  );
};

export default Header;
