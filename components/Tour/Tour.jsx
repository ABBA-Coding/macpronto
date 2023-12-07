import "./Scss/Tour.scss";
import React, { useState } from "react";
import { Close } from "@mui/icons-material";
import Img from "../../assets/images/tour.png";
import { useTranslation } from "react-i18next";
import Tours from "../../assets/images/image.jpg.png";

const Tour = () => {
  const [showTour, setShowTour] = useState(false);

  const { t } = useTranslation();

  return (
    <div className="Tour" id="tour">
      <img src={Img} alt="tour" className="back-tour" />
      <Close
        className={`close-icon ${!showTour && "d-none"}`}
        onClick={() => setShowTour(false)}
      />
      <div
        className={`contr ${showTour && "d-none"}`}
        onClick={() => setShowTour(true)}
      >
        {/* <h1 className='title'>360</h1> */}
        <img src={Tours} alt="tour" className="front-tour" />
        <p className="text">{t("tour")}</p>
      </div>
    </div>
  );
};

export default Tour;
