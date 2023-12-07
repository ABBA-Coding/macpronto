import './Scss/Navbar.scss';
import { useTranslation } from 'react-i18next';
import Logo from '../../assets/images/logo2.png';
import { Close, Menu } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import Support from '../../assets/images/support.png';

const Navbar = ({ changeUzbek, changeEnglish, changeRussian, langTitle }) => {

    window.addEventListener("scroll", () => {
        const navbar = document.getElementById("navbar");
        navbar.classList.toggle("black", window.scrollY > 10);
    });

    const [open, setOpen] = useState(false);

    const liTools = document.querySelectorAll(".c1");

    const [top, setTop] = useState(0);
    const [left, setLeft] = useState(0);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [active, setActive] = useState(false);

    useEffect(() => {
    }, [])
    liTools.forEach((c) => {
        c.addEventListener("mouseover", () => {
            setActive(true);
            setTop(c.getBoundingClientRect().y);
            setLeft(c.getBoundingClientRect().x);
            setWidth(c.getBoundingClientRect().width);
            setHeight(c.getBoundingClientRect().height);
        })

        c.addEventListener("mouseout", () => {
            setActive(false)
        })
    })

    function getActive(c){
        setActive(true);
        setTop(c.getBoundingClientRect().y);
        setLeft(c.getBoundingClientRect().x);
        setWidth(c.getBoundingClientRect().width);
        setHeight(c.getBoundingClientRect().height);
    }

    function noActive(){
        setActive(false)
    }

    // languages

    const [language, setLanguage] = useState(false);

    function changeHandleUzbek() {
        changeUzbek(true)
        setLanguage(!language)        
    };

    function changeHandleEnglish() {
        changeEnglish(true)
        setLanguage(!language)        
    }
    function changeHandleRussian() {
        changeRussian(true)
        setLanguage(!language)        
    }

    const {t} = useTranslation();

    return (
        <div className='Navbar' id='navbar'>
            <nav className='navbar navbar-expand'>
                <a href='/#' className='navbar-brand logo'>
                    <img src={Logo} alt="logo" />
                </a>
                <div className={`overlay ${active && "active"}`} style={{top: `${top}px`, left: `${left}px`, width: `${width}px`, height: `${height}px`}}></div>
                <ul className={`navbar-nav ${open && "open"}`}>
                    <li className="nav-item c1">
                        <a href='/#about' className="nav-link">{t("nav1")}</a>
                    </li>
                    <li className="nav-item c1">
                        <a href='/#categories' className="nav-link">{t("nav2")}</a>
                    </li>
                    <li className="nav-item c1">
                        <a href='/#shorts' className="nav-link">{t("nav3")}</a>
                    </li>
                    <li className="nav-item c1">
                        <a href='/#news' className="nav-link">{t("nav4")}</a>
                    </li>
                    <li className="nav-item c1">
                        <a href='#contacts' className="nav-link">{t("nav5")}</a>
                    </li>
                    <li className="nav-item nav-tel">
                        <a href='tel:+998-88-408-58-58' className="nav-link">+998 88 408 58 58</a>
                    </li>
                    <li className="nav-item">
                        <div className="language">
                            <input type="checkbox" id="language" checked={language} onChange={() => setLanguage(!language)} />
                            <label htmlFor='language'>{langTitle} <i className="fa fa-angle-down"></i></label>                                
                            <ul className={`language-menu ${!language && "d-none"}`}>
                                <li onClick={() => changeHandleUzbek()}><div className='lang-link'>UZ</div></li>                
                                <li onClick={() => changeHandleEnglish()}><div className='lang-link'>ENG</div></li>
                                <li onClick={() => changeHandleRussian()}><div className='lang-link'>RU</div></li>
                            </ul>
                            <div className={`contrast-0 ${!language && "d-none"}`} onClick={() => setLanguage(!language)}></div>
                        </div> 
                    </li>
                    <Close className='close-icon' onClick={() => setOpen(false)} />
                </ul>
                <a href='tel:+998-88-408-58-58' className='navbar-bran tel-number'>
                    <img src={Support} alt="support" />
                    <div className="tel">{t("nav5")}</div>                
                </a>
                <Menu className='open-icon' onClick={() => setOpen(true)} />
            </nav>
            <div className={`contrast ${!open && "d-none"}`} onClick={() => setOpen(false)}></div>
        </div>
    );
};

export default Navbar;