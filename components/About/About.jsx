import React from 'react';
import './Scss/About.scss';
import { useTranslation } from 'react-i18next';

const About = () => {

    const {t} = useTranslation()

    return (
        <div className='About'>
            <div className="wrapper">
                <h1 className="title">{t("nav1")}</h1>
                <div className="about-body">
                    <div className="col-6 text">
                        <p>{t("about2")}</p>
                    </div>
                    <div className="col-6 img">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/XqYeXPGphZg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
            <div className="square"></div>
            <div className="square1"></div>
            <div className="square2"></div>
            <div className="square3"></div>
            <div className="square4"></div>
        </div>
    );
};

export default About;