import './Scss/News.scss';
import { Link } from 'react-router-dom';
import Mac from '../../assets/images/m2.png';
import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react';

const News = ({ english, russian, uzbek, other, id, dataNews }) => {

    const [viewCount, setViewCount] = useState(localStorage.getItem("view") ? localStorage.getItem("view") : 0)

    function increment(){
        setViewCount(Number(viewCount) + 1)
        localStorage.setItem("view", Number(viewCount) + 1)
    }

    const [newsIndex, setNewsIndex] = useState(window.innerWidth > 767 ? 3 : 2)
    const [active, setActive] = useState(true)

    function showAll(item){
        setNewsIndex(item)
        setActive(!active)
    }

    // scroll animation

    const [scroll, setScroll] = useState(0);
    const [rotate, setRotate] = useState(false);

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {    
                window.addEventListener("scroll", () => {
                    if(window.scrollY - entry.target.offsetTop > -window.innerHeight && (window.scrollY - entry.target.offsetTop + window.innerHeight)/10 - 90 <= 0 && window.innerHeight > 850 && window.innerWidth > 500){
                        setScroll(window.scrollY - entry.target.offsetTop + window.innerHeight)
                        setRotate(false)
                    }
                    if((window.scrollY - entry.target.offsetTop + window.innerHeight)/10 - 90 >= 0 && window.innerHeight > 850 && window.innerWidth > 500){
                        setScroll(900)
                        setRotate(true)
                    }

                    if(window.scrollY - entry.target.offsetTop > -window.innerHeight && (window.scrollY - entry.target.offsetTop + window.innerHeight)/5 - 90 <= 0 && window.innerHeight > 850 && window.innerWidth <= 500){
                        setScroll(window.scrollY - entry.target.offsetTop + window.innerHeight)
                        setRotate(false)
                    }
                    if((window.scrollY - entry.target.offsetTop + window.innerHeight)/5 - 90 >= 0 && window.innerHeight > 850 && window.innerWidth <= 500){
                        setScroll(450)
                        setRotate(true)
                    }

                    //-----

                    if(window.scrollY - entry.target.offsetTop > -window.innerHeight && (window.scrollY - entry.target.offsetTop + window.innerHeight)/5 - 90 <= 0 && window.innerHeight <= 850 && window.innerWidth > 500){
                        setScroll(window.scrollY - entry.target.offsetTop + window.innerHeight)
                        setRotate(false)
                    }
                    if((window.scrollY - entry.target.offsetTop + window.innerHeight)/5 - 90 >= 0 && window.innerHeight <= 850 && window.innerWidth > 500){
                        setScroll(450)
                        setRotate(true)
                    }

                    if(window.scrollY - entry.target.offsetTop > -window.innerHeight && (window.scrollY - entry.target.offsetTop + window.innerHeight)/5 - 90 <= 0 && window.innerHeight <= 850 && window.innerWidth <= 500){
                        setScroll(window.scrollY - entry.target.offsetTop + window.innerHeight)
                        setRotate(false)
                    }
                    if((window.scrollY - entry.target.offsetTop + window.innerHeight)/5 - 90 >= 0 && window.innerHeight <= 850 && window.innerWidth <= 500){
                        setScroll(450)
                        setRotate(true)
                    }
                })
            })
        }
    );
    
    useEffect(() => {       
        const gallery = document.getElementById("news");
        observer.observe(gallery);
    }, []);

    const {t} = useTranslation();

    return (
        <div className='News' id='news'>
            <div className="wrapper">                
                {other ? 
                    <h1 className="title">{t("news2")}</h1>:
                    <h1 className="title">{t("news1")}</h1>
                }                              
                <div className="cards">
                    {dataNews.filter((c) => c.id != id).slice(0, newsIndex).map((data) => (
                        <div key={data.id} className="col-4 new">
                            <div className="body" style={{transform: `rotateY(${window.innerHeight > 850 ? window.innerWidth > 500 ? -180+scroll/5 : -180+2*scroll/5 : -180+scroll*2/5}deg)`}}>
                                <span className='stamp'>new</span>
                                <img src={data.image} alt="new" />
                                <div className="texts">
                                    <p className="name">{english && data.name_en} {russian && data.name_ru} {uzbek && data.name_uz}</p>
                                    <h3 className="desc">{english && data.description_en.slice(0, 44)}{russian && data.description_ru.slice(0, 44)}{uzbek && data.description_uz.slice(0, 44)}...</h3>
                                    <div className="bottom">
                                        <div className="views">{viewCount} views</div>
                                        <div className="point"></div>
                                        <div className="date">{data.date}</div>
                                    </div>
                                    <Link to={`/news/${data.id}`} className={`explore ${rotate && "rotate"}`} onClick={() => increment()}>
                                        <i className="fa fa-angle-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>                
                <div className={`more ${!active && "d-none"}`}>
                    <button className='button' onClick={() => showAll(dataNews.length)}>{t("news3")}
                        <div className='second button' onClick={() => showAll(dataNews.length)}>{t("news3")}</div>
                    </button>                    
                </div>
                <div className={`more ${active && "d-none"}`}>
                    <button className='button' onClick={() => showAll(window.innerWidth > 767 ? 3 : 2)}>{t("news4")}
                        <div className='second button' onClick={() => showAll(window.innerWidth > 767 ? 3 : 2)}>{t("news4")}</div>
                    </button>
                </div>
            </div>
            <img src={Mac} className="mac1" alt="mac" />
            <img src={Mac} className="mac2" alt="mac" />
        </div>
    );
};

export default News;