import './Scss/HomeAbout.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Img from '../../assets/images/about.png';
import React, { useEffect, useState } from 'react';
import PlayButton from '../../assets/images/play.png';

const HomeAbout = () => {

    // scroll animation

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
        const gallery = document.getElementById("about");
        observer.observe(gallery);
    }, []);

    // video

    const [showVideo, setShowVideo] = useState(false);

    // i18next

    const {t} = useTranslation();

    return (
        <>
            <div className='HomeAbout' id='about'>            
                <div className="wrapper">                
                    <div className="title">
                        <img src={PlayButton} alt="play" onClick={() => setShowVideo(true)} />
                        <h1>{t("about1")}</h1>
                    </div>                
                    <div className="cards">                    
                        <div className="col-8 texts">                            
                            {/* <h1 className='name'>{t("about3")}</h1> */}
                            <div className="anim-texts">
                                <div className="left-text">
                                    <p className="text">{t("about2").slice(0, 500)}...</p>
                                </div>
                                {/* <div className="left-text" style={{transform: `rotate(-${window.innerHeight > 850 ? window.innerWidth > 500 ? 90-scroll/10 : 90-scroll/5 : 90-scroll/5}deg)`, transformOrigin: "bottom"}}>
                                    <p className="text">{t("about2").slice(0, 600)}...</p>
                                </div> */}
                                {/* <div className="right-text" style={{transform: `rotate(${window.innerHeight > 850 ? window.innerWidth > 500 ? 90-scroll/10 : 90-scroll/5 : 90-scroll/5}deg)`, transformOrigin: "bottom"}}>
                                    <p className="text">{t("about2").slice(0, 600)}...</p>
                                </div> */}
                            </div>
                            <Link to='/about' className='explore'>
                                <div className="one">{t("nav1")}</div>
                                <div className="two">{t("nav1")}</div>
                            </Link>
                        </div>                                        
                        <div className="col-4 society">
                            <img src={Img} alt="img" />
                        </div>                    
                    </div>
                </div>
            </div>
            {showVideo &&
                <div className="media">
                    <div className="contrast" onClick={() => setShowVideo(false)}></div>
                    <div className="video col-6">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/XqYeXPGphZg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            }
        </>
    );
};

export default HomeAbout;