import React, { useState } from 'react';
import './Scss/Product.scss';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import ShoppingModal from '../shoppingModal/ShoppingModal';

const Product = ({ english, russian, uzbek, dataProducts, changeModal }) => {
  const [nameValue, setNameValue] = useState("");
  const [textValue, setTextValue] = useState("");
  const [numberValue, setNumberValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [invalidName, setInvalidName] = useState(false);
  const [invalidNumber, setInvalidNumber] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);

  function changeName(e) {
    setNameValue(e.target.value);
    setInvalidName(false);
  }

  function changeNumber(e) {
    setNumberValue(e.target.value);
    setInvalidNumber(false);
  }

  function changeEmail(e) {
    setEmailValue(e.target.value);
    setInvalidEmail(false);
  }

  function changeText(e) {
    setTextValue(e.target.value);
  }

  let bot = {
    TOKEN: "5408599236:AAG97RQyhx_CHgJc_wLhU2GY_mIKYl1cSO0",
    chatID: "-1001614254188",
    message: `Ismi: ${nameValue}; %0ATelefon raqami yoki emaili: ${numberValue}; %0AXabar: ${textValue}`,
  };

  function sendMessage() {
    if (nameValue === "") {
      setInvalidName(true);
    } else if (numberValue === "") {
      setInvalidNumber(true);
    } else {
      fetch(
        `https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${bot.message}`,
        {
          method: "GET",
        }
      ).then(
        (success) => {
          console.log("send message");
        },
        (error) => {
          console.log(error);
        }
      );

      changeModal();
      setNameValue("");
      setTextValue("");
      setNumberValue("");
    }
  }

  const { id } = useParams();

  const { t } = useTranslation();

  return (
    <div className='Product' id='product'>
      {dataProducts.filter((c) => c.id == id).map((data) => (
        <div className="wrapper">
          
          <div className="one-product">
            <div className="col-6 texts">
              <div className="body">
                <h1 className="name" onChange={(e) => changeName(e)}>{english && data.name_en}{russian && data.name_ru}{uzbek && data.name_uz}</h1>
                <p className="desc" onChange={(e) => changeEmail(e)}>{english && data.description_en}{russian && data.description_ru}{uzbek && data.description_uz}</p>
                <ShoppingModal />
              </div>
            </div>
            <div className="col-6 image">
              <div className="body">
                <img src={data.image} alt="img" />
              </div>
            </div>
          </div>
          <h1 className="title">{t("products1")}</h1>
          <div className="cards">
            {dataProducts.filter((k) => k.category == data.category && k.id != data.id).map((item) => (
              <div className="col-4 product">
                <Link to={`/product/${item.id}`} className="body">
                  <img src={item.image} alt="prod" />
                  <div className="stamp">Mac Pronto</div>
                  <h4 className="name">{english && item.name_en}{russian && item.name_ru}{uzbek && item.name_uz}</h4>
                  <p className="desc">{english && data.description_en.slice(0, 70)}{russian && data.description_ru.slice(0, 70)}{uzbek && data.description_uz.slice(0, 70)}...</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;