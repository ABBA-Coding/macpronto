import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useTranslation } from "react-i18next";
import "./shoppingModal.scss"
import "../Contacts/Scss/Contacts.scss"

function ShoppingModal({ russian, changeModal }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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

    function sendMessage(e) {
        e.preventDefault()
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
            setNameValue("");
            setTextValue("");
            setNumberValue("");
        }
    }

    const { t } = useTranslation();


    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                {t("contact6")}
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <form className="body" onSubmit={sendMessage} >
                        <input
                            type="text"
                            value={nameValue}
                            className={`form-control ${invalidName && "red-line"} ${russian && "form1"
                                }`}
                            onChange={(e) => changeName(e)}
                            placeholder={`${t("contact4")}`}
                        />
                        <div className="inputs">
                            <input
                                type="text"
                                value={numberValue}
                                className={`form-control mt-3 number ${invalidNumber && "red-line"
                                    } ${russian && "form1"}`}
                                onChange={(e) => changeNumber(e)}
                                placeholder={`${t("contact5")}`}
                            />
                            {/* <input type="text" value={emailValue} className={`form-control number email ${invalidEmail && "red-line"} ${russian && "form1"}`} onChange={(e) => changeEmail(e)} placeholder={`${t("contact8")}`} /> */}
                        </div>
                        <button type='submit' onClick={handleClose} className="send form-control btn btn-primary mt-3">
                            {t("contact6")}
                        </button>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ShoppingModal