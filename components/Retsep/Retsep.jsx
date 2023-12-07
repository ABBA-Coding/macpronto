import React, { useState } from "react";
import "./Scss/Retsep.scss";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Leaf from "../../assets/images/side.png";

const Retsep = ({ english, russian, uzbek, dataRecipes }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const settings = {
    dots: true,
    speed: 1500,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    pauseOnHover: false,
    autoplaySpeed: 4000,
    beforeChange: (current, next) => setSlideIndex(next),
  };

  const { t } = useTranslation();

  return (
    <div className="Retsep" id="Retsep">
      <Slider {...settings} className="carousel">
        {dataRecipes.map((data) => (
          <div className="carousel-page" key={data.id}>
            <div className="body">
              <img className="inside-image" src={data.image} alt="inside" />
              <div className="texts">
                <h1 className="name">
                  {english && data.name_en} {russian && data.name_ru}
                  {uzbek && data.name_uz}
                </h1>
                {/* <p className="desc">
                  {english &&
                    "Quick and easy Mac Pronto pasta  is a delicious 30-minute dinner. A family-favourite comfort food for busy weeknights. You can enjoy by our food"}
                  {russian &&
                    "Быстрая и простая паста Mac Pronto — это вкусный 30-минутный ужин. Любимое семейное угощение для насыщенных будних вечеров. Вы можете наслаждаться нашей едой"}
                  {uzbek &&
                    "Tez va oson Mac Pronto makaron 30 daqiqalik mazali kechki ovqatdir. Haftaning gavjum kechalari uchun oilaviy sevimli taom. Siz bizning taomlarimizdan bahramand bo'lishingiz mumkin"}
                </p> */}
                <p className="desc">
                  {english && data.recipe_en.slice(0, 180)}
                  {russian && data.recipe_ru.slice(0, 180)}
                  {uzbek && data.recipe_uz.slice(0, 180)}...
                </p>
                <div className="rating">
                  <div className="stars">
                    <i className="fa fa-star active"></i>
                    <i className="fa fa-star active"></i>
                    <i className="fa fa-star active"></i>
                    <i className="fa fa-star active"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <p className="grade">{t("retsep2")}</p>
                </div>
                <div className="link">
                  <Link to={`/retsep/${data.id}`} className="explore">
                    {t("retsep1")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      {dataRecipes.map((data, index) => (
        <img
          key={data.id}
          className={index == slideIndex ? "back-image active" : "back-image"}
          src={data.image}
          alt="back"
        />
      ))}
      <img src={Leaf} className="leaf" alt="leaf" />
    </div>
  );
};

export default Retsep;
