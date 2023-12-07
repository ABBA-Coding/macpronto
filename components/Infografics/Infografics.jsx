import "./Scss/Infografics.scss";
import CountUp from "react-countup";
import Img from "../../assets/images/leaf.png";
import Img2 from "../../assets/images/technology.png";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Infografics = ({ uzbek, english, russian }) => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [number3, setNumber3] = useState(0);
  // const [number4, setNumber4] = useState(0);
  const [number5, setNumber5] = useState(0);
  const [number6, setNumber6] = useState(0);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      window.addEventListener("scroll", () => {
        if (window.scrollY - entry.target.offsetTop > -window.innerHeight) {
          setNumber1(10);
          setNumber2(17);
          setNumber3(200);
          // setNumber4(7);
          setNumber5(12000);
          setNumber6(0);
        } else if (window.scrollY - entry.target.offsetTop < 0) {
          setNumber1(0);
          setNumber2(0);
          setNumber3(0);
          // setNumber4(0);
          setNumber5(0);
          setNumber6(0);
        }
      });
    });
  });

  useEffect(() => {
    const infografics = document.getElementById("Infografics");
    observer.observe(infografics);
  }, []);

  const { t } = useTranslation();

  return (
    <div className="Infografics" id="Infografics">
      <div className="wrapper">
        <h1 className="title">{t("info1")}</h1>
        <div className="numbers">
          {/* <div className="circle"></div> */}
          <div className="col-4">
            <div className="body">
              <h1 className="number">
                <CountUp start={0} end={number1} duration={2} />{" "}
                <span className="span">+</span>
              </h1>
              <p className="text">
                {uzbek && "Sifat kafolati sertifikatlari"}{" "}
                {english && "Quality assurance certificates"}{" "}
                {russian && "Сертификатов качества"}
              </p>
              <img className="leaf" src={Img} alt="leaf" />
            </div>
          </div>
          <div className="col-4">
            <div className="body">
              <h1 className="number">
                <CountUp start={0} end={number2} duration={2} />{" "}
                <span className="span">+</span>
              </h1>

              <p className="text">{t("info2")}</p>
              <img className="leaf" src={Img} alt="leaf" />
            </div>
          </div>
          <div className="col-4">
            <div className="body">
              <h1 className="number">
                <CountUp start={0} end={number3} duration={3} />{" "}
                <span className="span">+</span>
              </h1>
              <p className="text">
                {uzbek && "SKU"}
                {english && "SKU"}
                {russian && "СКУ"}
              </p>
              <img className="leaf" src={Img} alt="leaf" />
            </div>
          </div>
          <div className="col-4">
            <div className="body">
              <h1 className="number">
                <img className="technology" src={Img2} alt="technology" />
                {/* <span className="span">+</span> */}
              </h1>
              <p className="text">
                {uzbek && "Zamonaviy Italyan texnologiyasi"}{" "}
                {english && "Modern Italian Technology"}{" "}
                {russian && "Современные Итальянские технологии"}
              </p>
              <img className="leaf" src={Img} alt="leaf" />
            </div>
          </div>
          <div className="col-4">
            <div className="body">
              <h1 className="number">
                <CountUp start={0} end={number5} duration={3} />{" "}
                <span className="span">+</span>
              </h1>
              {/* <p className="text">{t("info3")}</p> */}
              <p className="text">
                {uzbek && "Tonna (oylik ishlab chiqarish hajmi)"}{" "}
                {english && "Tons (Monthly Production Volume)"}{" "}
                {russian && "Тонн (ежемесячный объем производства)"}
              </p>
              <img className="leaf" src={Img} alt="leaf" />
            </div>
          </div>
          <div className="col-4">
            <div className="body">
              <h1 className="number">
                {/* <CountUp start={'&#8734;'} end={number6} duration={3} />{" "} */}
                &#8734;
                {/* <span className="span">+</span> */}
              </h1>
              <p className="text">
              {uzbek && "Неограниченное количество типов рецептов еды"}{" "}
                {english && "Endless types of recipes"}{" "}
                {russian && "Неограниченное количество типов рецептов еды"}</p>
              <img className="leaf" src={Img} alt="leaf" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infografics;
