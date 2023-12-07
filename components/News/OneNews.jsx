import React from 'react';
import News from './News';
import './Scss/OneNews.scss';
import { useParams } from 'react-router-dom';

const OneNews = ({ english, russian, uzbek, dataNews }) => {

    const {id} = useParams();

    return (
        <div className='OneNews'>
            {dataNews.filter((c) => c.id == id).map((data) => (
                <div key={data.id} className="wrapper card-new">                  
                    <h1 className="name col-12">{english && data.name_en}{russian && data.name_ru}{uzbek && data.name_uz}</h1>
                    <div className="col-6 image">
                        <img src={data.image} alt="" />
                    </div>
                    <div className="col-6 text">
                        <p>{english && data.description_en}{russian && data.description_ru}{uzbek && data.description_uz}</p>
                    </div>
                </div>
            ))}
            <News english={english} russian={russian} uzbek={uzbek} other={true} id={id} dataNews={dataNews} />
        </div>
    );
};

export default OneNews;