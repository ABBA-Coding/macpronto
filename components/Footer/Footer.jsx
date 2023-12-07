import React from 'react';
import './Scss/Footer.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Img1 from '../../assets/images/logo2.png';

const Footer = () => {

    const {t} = useTranslation();

    return (
        <div className='Footer'>
            <div className="wrapper">
                <div className="footer-tools">
                    <div className="col-3 tool">
                        <a href='/#'>
                            <img src={Img1} alt="logo" />
                        </a>
                        <div className="text">{t("footer1")}</div>
                        <div className="icons">
                            <a href="https://www.facebook.com/profile.php?id=100083604484791" className='icon'>
                                <i className="fa fa-facebook"></i>
                            </a>
                            <a href="https://www.instagram.com/macpronto/" className='icon'>
                                <i className="fa fa-instagram"></i>
                            </a>
                            <a href="https://www.youtube.com/channel/UCG76j-r42Ck91P3dD7LQk7A" className='icon'>
                                <i className="fa fa-youtube-play"></i>
                            </a>
                            <a href="https://www.linkedin.com/company/86836142/" className='icon'>
                                <i className="fa fa-linkedin"></i>
                            </a>
                        </div>
                    </div>
                    <div className="col-3 tool">
                        <ul>
                            <li className='title'>{t("footer2")}</li>    
                            <li className="link"><a href='/#categories' className='nav-link p-0'>{t("footer3")}</a></li>
                            <li className="link"><a href='/#news' className='nav-link p-0'>{t("footer4")}</a></li>
                            <li className="link"><a href='/#shorts' className='nav-link p-0'>{t("footer5")}</a></li>
                            <li className="link"><a href='/#about' className='nav-link p-0'>{t("footer6")}</a></li>
                        </ul>                       
                    </div>
                    <div className="col-3 tool">
                        <ul>
                            <li className='title'>{t("footer7")}</li>    
                            <li className="link"><a href='/#Infografics' className='nav-link p-0'>{t("footer8")}</a></li>
                            <li className="link"><a href='/#tour' className='nav-link p-0'>{t("footer9")}</a></li>
                            <li className="link"><a href='/#Retsep' className='nav-link p-0'>{t("footer10")}</a></li>
                            <li className="link"><a href='/#shorts' className='nav-link p-0'>{t("footer11")}</a></li>
                        </ul>                       
                    </div>
                    <div className="col-3 tool">
                        <ul>
                            <li className='title'>{t("footer12")}</li>    
                            <li className="link"><a href='/' className='nav-link p-0'>{t("footer13")}</a></li>
                            <li className="link"><a href='tel:+998-88-408-58-58' className='nav-link p-0'>{t("footer14")}</a></li>
                            <li className="link"><a href='/#categories' className='nav-link p-0'>{t("footer15")}</a></li>
                            <li className="link"><a href='/#icons' className='nav-link p-0'>{t("footer16")}</a></li>
                        </ul>                       
                    </div>
                </div>
            </div>
            <div className="copywrite">
                <div className="res">
                    <p className="reserve">Copyright © Mac Pronto | Designed by</p>   
                    <p className='yellow reserve res'>ABBA Marketing</p>    
                </div>
                <div className="res">
                    <p className="reserve"> - Powered by</p>      
                    <p className='yellow reserve'>ABBA Coding</p>  
                </div> 
            </div>
        </div>
    );
};

export default Footer;