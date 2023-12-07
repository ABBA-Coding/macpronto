import React, { useState } from "react";
import Slider from "react-slick";
import "./Scss/Comments.scss";
import Apple from "../../assets/images/apple.png";

function Comments({ english, uzbek, russian }) {
  const [slideIndex, setSlideIndex] = useState(0);
  const api = [
    {
      id: 1,
      name: "apple company",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, sit alias rerum itaque sed illo sint quasi consequuntur.",
      image: Apple,
      date: "18.11.2022",
    },
    {
      id: 2,
      name: "apple company",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, sit alias rerum itaque sed illo sint quasi consequuntur.",
      image: Apple,
      date: "18.11.2022",
    },
    {
      id: 3,
      name: "apple company",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, sit alias rerum itaque sed illo sint quasi consequuntur.",
      image: Apple,
      date: "18.11.2022",
    },
    {
      id: 4,
      name: "apple company",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, sit alias rerum itaque sed illo sint quasi consequuntur.",
      image: Apple,
      date: "18.11.2022",
    },
  ];
  const settings = {
    dots: false,
    speed: 1000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    pauseOnHover: false,
    autoplaySpeed: 4000,
    centerMode: true,
    centerPadding: "25%",
    className: "slider variable-width",
    beforeChange: (current, next) => setSlideIndex(next),
    responsive: [
      {
          breakpoint: 500,
          settings: {
              centerPadding: "10%"
          }
      },
  ]
  };
  return (
    <div className="Comments">
      <div className="wrapper">
        <h1 className="name">
          {english && "Reviews"} {uzbek && "Mijozlarimiz fikrlari"}
          {russian && "Отзывы"}
        </h1>
        <Slider {...settings} className="carousel">
          {api.map((data, index) => (
            <div className={slideIndex == index ? "carousel-page slide-active" : "carousel-page"}>
              <div className="body">
                <img src={data.image} alt="img" />
                <h1>{data.name}</h1>
                <div className="dates">
                  <p className="date">{data.date}</p>
                </div>
                <p className="desc">{data.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Comments;
