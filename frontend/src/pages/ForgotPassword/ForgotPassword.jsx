import React from "react";
import {EmailForm} from "../../components/EmailForm/EmailForm.jsx";
import {ButtonsLabel} from "../../components/ButtonLabel/ButtonsLabel.jsx";
// import {PasswordForm} from "../../components/PasswordForm/PasswordForm.jsx";
import "./style.css";
import mainIcon from "../../img/MainIcon.png";
import freeFlagsBigImg from "../../img/freeFlagsBigImg.png";

export const ForgotPassword = () => {
    return (
        <div className="screen">
            <div className="div-2">
                <img className="element" alt="Element" src={mainIcon} />
                <div className="overlap">
                    <div className="mask" />
                    <img className="free-feather-flag" alt="Free feather flag" src={freeFlagsBigImg} />
                </div>
                <div className="group">
                    <div className="group-2">
                        <EmailForm
                            className="forms-primary-select-active-onlight"
                            iconClassName="design-component-instance-node"
                            overlapGroupClassName="forms-primary-select-instance"
                            text="✉︎"
                            text1="design@xasick.ru"
                            text2="Электронная почта"
                        />
                        <ButtonsLabel
                            className="buttons-px-label"
                            divClassName="buttons-label-instance"
                            overlapGroupClassName="buttons-14px-label-filled-active-onlight"
                            text="Отправить письмо"
                        />
                    </div>
                    <div className="sign-in">Забыли пароль?</div>
                    <p className="enter-your-account-d1">Введите свой e-mail ниже, и вы получите письмо</p>
                    <p className="enter-your-account-d2">с инструкцией как сбросить пароль.</p>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
