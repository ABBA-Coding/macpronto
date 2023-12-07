import React from "react";
import "./Scss/Categories.scss";
import { Link } from "react-router-dom";
import Mac from "../../assets/images/m1.png";
import { useTranslation } from "react-i18next";

const Categories = ({ english, russian, uzbek, dataCategories }) => {
  const { t } = useTranslation();

  return (
    <div className="Categories" id="categories">
      <div className="wrapper">
        <h1 className="title">{t("categ1")}</h1>
        <div className="cards">
          {dataCategories.map((data) => (
            <div key={data.id} className="col-4 category">
              <Link to={`/category/${data.id}`} className="body">
                <div className="contr-body"></div>
                <h1 className="name">
                  {english && data.name_en}
                  {russian && data.name_ru}
                  {uzbek && data.name_uz}
                </h1>
                <img src={data.image} alt="category" />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <img src={Mac} className="mac1" alt="mac" />
      <img src={Mac} className="mac2" alt="mac" />
    </div>
  );
};

export default Categories;
