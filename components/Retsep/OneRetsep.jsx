import React from "react";
import "./Scss/OneRetsep.scss";
import { useParams } from "react-router-dom";

const OneRetsep = ({ english, uzbek, russian, dataRecipes }) => {
  const { id } = useParams();

  return (
    <div className="OneRetsep">
      {dataRecipes
        .filter((c) => c.id == id)
        .map((data) => (
          <div key={data.id} className="wrapper">
            <h1 className="title">
              {english && data.name_en}
              {russian && data.name_ru}
              {uzbek && data.name_uz}
            </h1>
            <div className="cards">
              <div className="col-6 image">
                <img src={data.image} alt="img" />
              </div>
              <div className="col-6 texts">
                <p>
                  {english && data.recipe_en}
                  {russian && data.recipe_ru}
                  {uzbek && data.recipe_uz}
                </p>
              </div>
              <div className="texts description">
                <p>
                  {english &&
                    "Quick and easy Mac Pronto pasta  is a delicious 30-minute dinner. A family-favourite comfort food for busy weeknights. You can enjoy by our food"}
                  {russian &&
                    "Быстрая и простая паста Mac Pronto — это вкусный 30-минутный ужин. Любимое семейное угощение для насыщенных будних вечеров. Вы можете наслаждаться нашей едой"}
                  {uzbek &&
                    "Tez va oson Mac Pronto makaron 30 daqiqalik mazali kechki ovqatdir. Haftaning gavjum kechalari uchun oilaviy sevimli taom. Siz bizning taomlarimizdan bahramand bo'lishingiz mumkin"}
                </p>
              </div>
              <div className="col-12 video">
                {data.video_link && (
                  <iframe
                    width="560"
                    height="315"
                    src={data.video_link}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default OneRetsep;
