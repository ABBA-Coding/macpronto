import React from "react";
import "./Scss/Contacts.scss";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Contacts = ({ russian, changeModal, english, uzbek }) => {
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

  const { t } = useTranslation();

  return (
    <div className="Contacts" id="contacts">
      <div className="title-contact">{t("contact1")}</div>
      <div className="wrapper">
        <div className="col-5 texts">
          <p className={`desc ${russian && "desc1"}`}>
            {english &&
              "Are you a product distributor or retail chain owner looking for a reliable pasta brand? Fill the form to discover how we can prepare your order 3 times faster. Additionally, you can get $500 Off the delivery cost of your first container. Plus, we help your business through professional consulting (worth $1,000) that is free for our partners. When you talk with our specialist, you will find solutions to your overstock and out-of-stock problems as well as right usage of space in your retail shop."}
            {russian &&
              "Вы дистрибьютор продукции или владелец розничной сети и ищете надежную марку макаронных изделий? Заполните форму, чтобы узнать, как мы можем подготовить ваш заказ в 3 раза быстрее. Кроме того, вы можете получить скидку 500 долларов США на стоимость доставки вашего первого контейнера. Далее, мы помогаем вашему бизнесу с помощью профессионального консалтинга (стоимостью 1000 долларов США), который является бесплатным для наших партнеров. Поговорив с нашим специалистом, вы найдете решение проблем с избытком и отсутствием товара на складе, а также правильное использование пространства в вашем розничном магазине."}{" "}
            {uzbek &&
              "Siz ishonchli makaron brendini qidirayotgan distributor yoki supermarket rahbarimisiz? U holda pastdagi formani to’ldiring va qanday qilib biz sizga buyurtmangizni 3 karra tezroq tayyorlab berishimizni bilib oling. Shu bilan birga, siz birinchi konteyneringiz uchun $500 lik chegirmaga erishishingiz mumkin. Bundan tashqari, biz sizga o’z partnyorlarimiz uchun mo’ljallangan (qiymati $1,000lik) professional konsultatsiya orqali ham yordam beramiz. Bizning mutahasisimiz bilan gaplashish orqali, siz overstock, out-of-stock, va supermarketdagi rastalarning to’g’ri taqsimoti bo’yicha muammolarga yechim topasiz."}
          </p>
          <h1 className="title">{t("contact3")}</h1>
        </div>
        <div className="col-7 form">
          <div className="body">
            <input
              type="text"
              value={nameValue}
              className={`form-control ${invalidName && "red-line"} ${
                russian && "form1"
              }`}
              onChange={(e) => changeName(e)}
              placeholder={`${t("contact4")}`}
            />
            <div className="inputs">
              <input
                type="text"
                value={numberValue}
                className={`form-control number ${
                  invalidNumber && "red-line"
                } ${russian && "form1"}`}
                onChange={(e) => changeNumber(e)}
                placeholder={`${t("contact5")}`}
              />
              {/* <input type="text" value={emailValue} className={`form-control number email ${invalidEmail && "red-line"} ${russian && "form1"}`} onChange={(e) => changeEmail(e)} placeholder={`${t("contact8")}`} /> */}
            </div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="6"
              className={`form-text ${russian && "form1"}`}
              value={textValue}
              onChange={(e) => changeText(e)}
              placeholder={`${t("contact7")}`}
            ></textarea>
            <button onClick={() => sendMessage()} className="send">
              {t("contact6")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
