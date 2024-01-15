import React from "react";
import {EmailForm} from "../../components/EmailForm/EmailForm.jsx";
import {PasswordForm} from "../../components/PasswordForm/PasswordForm.jsx";
import {RememberMe} from "../../components/RememberMe/RememberMe.jsx";
import {ButtonsLabel} from "../../components/ButtonLabel/ButtonsLabel.jsx";
import "./style.css";
import mainIcon from "../../img/MainIcon.png";
import freeFlagsBigImg from "../../img/freeFlagsBigImg.png";

export const Login = () => {
    return (
        <div className="screen">
            <div className="div-2">
                <div className="overlap">
                    <div className="mask" />
                    <img className="free-feather-flag" alt="Free feather flag" src={freeFlagsBigImg} />
                </div>
                <div className="link">
                    <div className="you-don-t-have-an-ac">Еще нет аккаунта?</div>
                    <div className="create-an-account"><a href="!#">Регистрация</a></div>
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
                        <PasswordForm
                            className="forms-primary-select-resting-onlight"
                            iconClassName="design-component-instance-node"
                            overlapGroupClassName="forms-primary-select-instance"
                            text="Введите пароль"
                            text1=""
                            text2="Пароль"
                        />
                        <ButtonsLabel
                            className="buttons-px-label"
                            divClassName="buttons-label-instance"
                            overlapGroupClassName="buttons-14px-label-filled-active-onlight"
                            text="Войти"
                        />
                        <RememberMe className="forms-general-checkbox-resting-onlight" text="Запомнить меня" />
                        <div className="recover-password"><a href="!#">Забыли пароль?</a></div>
                    </div>
                    <div className="sign-in">Авторизация</div>
                    <p className="enter-your-account-d">Войдите в аккаунт используя электронную почту</p>
                </div>
                <img className="element" alt="Element" src={mainIcon} />
            </div>
        </div>
    );
};

export default Login;
