import React, { useState } from "react";
import "./Scss/Icons.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Img1 from "../../assets/images/process.png";
import Img2 from "../../assets/images/stamp.png";
import Img3 from "../../assets/images/shield.png";
import Img4 from "../../assets/images/halal.png";
import Img5 from "../../assets/images/audit.png";
import Img6 from "../../assets/images/eye.png";

const Icons = ({ english, russian, uzbek }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  function changeIndex(item) {
    setActiveIndex(item);
  }

  const { t } = useTranslation();

  return (
    <div className="Icons" id="icons">
      <h2 className="title_name">
        {english && "Why work with Mac Pronto?"}
        {russian && "Почему стоит работать с Mac Pronto?"}
        {uzbek && "Nima uchun Mac Pronto bilan ishlash kerak?"}
      </h2>
      <div className="wrapper">
        <div className="col-3">
          <div className="body">
            <div className="body__img">
              <img src={Img1} alt="stamp" className="img img1" />
            </div>
            <div className="body__name">
              <h6 className="name name1"> {t("icons1")} </h6>
            </div>
            <p className="desc desc1">{t("icons2")}</p>
          </div>
        </div>
        {/* <div className="col-3">
          <div className="body">
            <div className="body__img">
              <img src={Img3} alt="shield" className="img img2" />
            </div>
            <div className="body__name">
              <h6 className="name name2">{t("icons3")}</h6>
            </div>
            <p className="desc desc2">{t("icons4")}</p>
          </div>
        </div> */}
        <div className="col-3">
          <div className="body">
            <div className="body__img">
              <img src={Img2} alt="halal" className="img img2" />
            </div>
            <div className="body__name">
              <h6 className="name name4">{t("icons7")}</h6>
            </div>
            <p className="desc desc4">{t("icons8")}</p>
          </div>
        </div>
        <div className="col-3">
          <div className="body">
            <div className="body__img">
              <img src={Img5} alt="eye" className="img img3" />
            </div>
            <div className="body__name">
              <h6 className="name name3">{t("icons5")}</h6>
            </div>
            <p className="desc desc3">{t("icons6")}</p>
          </div>
        </div>
        <div className="col-3">
          <div className="body">
            <div className="body__img">
              <img src={Img6} alt="halal" className="img img4" />
              {/* <h1 className="dollar">$500</h1> */}
            </div>
            <div className="body__name">
              <h6 className="name name4">
                {english && "Innovation"}
                {uzbek && "Innovatsiya"}
                {russian && "Инновации"}
              </h6>
            </div>
            <p className="desc desc4">
              {english &&
                "It is really important for us to chase after and be parallel to the developing world. For this reason, we invest in production technology and human resources."}
              {uzbek &&
                "Biz uchun rivojlanayotgan dunyo bilan hamnafas bo’lish juda muhim. Shu sababli, biz ishlab chiqarish texnologiyasiga va o’z kadrlarimizga investitsiya kiritamiz."}
              {russian &&
                "Для нас действительно важно идти в ногу с развивающимся миром и быть наравне с ним. По этой причине мы инвестируем в производственные технологии и человеческие ресурсы."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Icons;
