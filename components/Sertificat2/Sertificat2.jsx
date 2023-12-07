import React, { useState } from "react";
import "./Scss/Sertificat2.scss";
import Sert1 from "../../assets/images/ser1.png";
import Sert2 from "../../assets/images/ser2.png";
import Sert3 from "../../assets/images/ser3.png";
import Sert4 from "../../assets/images/ser4.png";
import Sert5 from "../../assets/images/ser5.png";
import Sert6 from "../../assets/images/ser6.png";
import Sert7 from "../../assets/images/ser7.png";
import Sert8 from "../../assets/images/ser8.png";

function Sertificat2({ english, russian, uzbek }) {
  const api = [
    {
      id: 1,
      image: Sert1,
      name_uz: "Mahsulot ishlab chiqarish uchun rasmiy ruxsatnoma sertifikati",
      name_ru:
        "Свидетельство об официальном разрешении на производство продукции",
      name_en:
        "Certificate of official authorisation for production of products",
    },
    {
      id: 2,
      image: Sert2,
      name_uz:
        "Sanitariya, epidemiologik va gigienik talablarga muvofiqlik sertifikati",
      name_ru:
        "Сертификат соответствия санитарно-эпидемиологическим и гигиеническим требованиям",
      name_en:
        "Certificate of compliance with sanitary, epidemiological and hygienic requirements",
    },
    {
      id: 3,
      image: Sert4,
      name_uz: "Halol Sertifikati",
      name_ru: "Халяль Сертификат",
      name_en: "Halal Certificate",
    },
    {
      id: 4,
      image: Sert3,
      name_uz: "Muvofiqlik Sertifikati",
      name_ru: "Сертификат Соответствия",
      name_en: "Certificate of Conformity",
    },
    {
      id: 5,
      image: Sert5,
      name_uz: "Mahsulot ishlab chiqarish uchun rasmiy ruxsatnoma sertifikati",
      name_ru:
        "Свидетельство об официальном разрешении на производство продукции",
      name_en:
        "Certificate of official authorisation for production of products",
    },
    {
      id: 6,
      image: Sert6,
      name_uz: "Mahsulot ishlab chiqarish uchun rasmiy ruxsatnoma sertifikati",
      name_ru:
        "Свидетельство об официальном разрешении на производство продукции",
      name_en:
        "Certification of quality systems Products",
    },
    {
      id: 7,
      image: Sert7,
      name_uz: "Mahsulot ishlab chiqarish uchun rasmiy ruxsatnoma sertifikati",
      name_ru:
        "Свидетельство об официальном разрешении на производство продукции",
      name_en:
        "Certificate of official authorisation for production of products",
    },
    {
      id: 8,
      image: Sert8,
      name_uz: "Mahsulot ishlab chiqarish uchun rasmiy ruxsatnoma sertifikati",
      name_ru:
        "Свидетельство об официальном разрешении на производство продукции",
      name_en:
        "Certificate of production and cooperation agreement.",
    },
  ];

  const [index, setindex] = useState(4);

  function changeIndex() {
    setindex(index + 4);
  }

  return (
    <div className="Sertificat2">
      <div className="wrapper">
        <h1 className="title">
          {english && "Our certificates"}
          {russian && "Наши сертификаты"}
          {uzbek && "Sertifikatlarimiz"}
        </h1>
        <div className="col-12 cards">
          {api.slice(0, index).map((data) => (
            <div className="col-6 card">
              <div className="body">
                <div className="sertificat">
                  <img src={data.image} alt="sertificat" />
                  <h3>
                    {uzbek && data.name_uz} {russian && data.name_ru}
                    {english && data.name_en}
                  </h3>
                </div>
              </div>
            </div>
          ))}
          <div className="btnlar">
            <div className="buttons" onClick={() => changeIndex()}>
              {english && "All our certificates"}
              {russian && "Все наши сертификаты"}
              {uzbek && "Barcha sertifikatlarimiz"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sertificat2;
