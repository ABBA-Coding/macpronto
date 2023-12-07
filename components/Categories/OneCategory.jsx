import React from 'react';
import './Scss/OneCategory.scss';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';

const OneCategory = ({ english, russian, uzbek, dataProducts }) => {
    
    const {id} = useParams();

    const {t} = useTranslation();

    return (
        <div className='OneCategory'>
            <div className="wrapper">
                <h1 className="title">{t("products")}</h1>
                <div className="cards">
                    {dataProducts.filter((c) => c.category == id).map((data) => (
                        <div key={data.id} className="col-4 product">
                            <Link to={`/product/${data.id}`} className="body">
                                <img src={data.image} alt="prod" />
                                <div className="texts">
                                    <h4 className="name">{english && data.name_en}{russian && data.name_ru}{uzbek && data.name_uz}</h4>
                                    <p className="desc">{english && data.description_en.slice(0,70)}{russian && data.description_ru.slice(0,70)}{uzbek && data.description_uz.slice(0,70)}...</p>
                                    <div className="explore"><i className="fa fa-angle-right"></i></div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OneCategory;