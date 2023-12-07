import './Scss/Gallery.scss';
import Slider from 'react-slick';
import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react';

const Gallery = ({ dataGallery }) => {

    const settings = {
        dots: true,
        speed: 1000,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: "linear",
        pauseOnHover: false,
        autoplaySpeed: 4000,
        className: "slider variable-width"
    };

    const [scroll, setScroll] = useState(0)

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {    
                window.addEventListener("scroll", () => {
                    if(window.scrollY - entry.target.offsetTop > -window.innerHeight && (window.scrollY - entry.target.offsetTop + window.innerHeight)/10 - 90 <= 0 && window.innerHeight > 850 && window.innerWidth > 500){
                        setScroll(window.scrollY - entry.target.offsetTop + window.innerHeight)
                    }
                    if((window.scrollY - entry.target.offsetTop + window.innerHeight)/10 - 90 >= 0 && window.innerHeight > 850 && window.innerWidth > 500){
                        setScroll(900)
                    }

                    if(window.scrollY - entry.target.offsetTop > -window.innerHeight && (window.scrollY - entry.target.offsetTop + window.innerHeight)/5 - 90 <= 0 && window.innerHeight > 850 && window.innerWidth <= 500){
                        setScroll(window.scrollY - entry.target.offsetTop + window.innerHeight)
                    }
                    if((window.scrollY - entry.target.offsetTop + window.innerHeight)/5 - 90 >= 0 && window.innerHeight > 850 && window.innerWidth <= 500){
                        setScroll(450)
                    }

                    //----

                    if(window.scrollY - entry.target.offsetTop > -window.innerHeight && (window.scrollY - entry.target.offsetTop + window.innerHeight)/5 - 90 <= 0 && window.innerHeight <= 850 && window.innerWidth > 500){
                        setScroll(window.scrollY - entry.target.offsetTop + window.innerHeight)
                    }
                    if((window.scrollY - entry.target.offsetTop + window.innerHeight)/5 - 90 >= 0 && window.innerHeight <= 850 && window.innerWidth > 500){
                        setScroll(450)
                    }

                    if(window.scrollY - entry.target.offsetTop > -window.innerHeight && (window.scrollY - entry.target.offsetTop + window.innerHeight)/5 - 90 <= 0 && window.innerHeight <= 850 && window.innerWidth <= 500){
                        setScroll(window.scrollY - entry.target.offsetTop + window.innerHeight)
                    }
                    if((window.scrollY - entry.target.offsetTop + window.innerHeight)/5 - 90 >= 0 && window.innerHeight <= 850 && window.innerWidth <= 500){
                        setScroll(450)
                    }
                })
            })
        }
    );
    
    useEffect(() => {       
        const gallery = document.getElementById("Gallery");
        observer.observe(gallery);
    }, []);

    const {t} = useTranslation();

    return (
        <div className='Gallery' id='Gallery'>
            <div className="wrapper1">                
                <h1 className="title">{t("gallery")}</h1>                                 
                <div style={{transform: `rotate(${window.innerHeight > 850 ? window.innerWidth > 500 ? -90+scroll/10 : -90+scroll/5 : -90+scroll/5}deg)`, transformOrigin: "right"}}>            
                    <Slider {...settings} className='carousel'>
                        {dataGallery.map((data) => (
                            <div key={data.id} className="carousel-page">
                                <div className="body">
                                    <img src={data.image} alt="gallery" />
                                </div>
                            </div>
                        ))}
                    </Slider>                
                </div>           
            </div>
        </div>
    );
};

export default Gallery;