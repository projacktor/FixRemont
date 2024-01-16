import React, {useState} from "react";
import { ButtonsLabel } from "../../components/ButtonLabel/ButtonsLabel.jsx";
import { EmailForm } from "../../components/EmailForm/EmailForm.jsx";
import {PasswordForm} from "../../components/PasswordForm/PasswordForm.jsx";
import "./style.css";
import mainIcon from "../../img/MainIcon.png";
import freeFlagsBigImg from "../../img/freeFlagsBigImg.png";
import activeTick from "../../img/activeTick.svg"
export const Register = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    return (
        <div className="screen">
            <div className="div-2">
                <div className="overlap">
                    <div className="mask" />
                    <img className="free-feather-flag" alt="Free feather flag" src={freeFlagsBigImg} />
                </div>
                <div className="link">
                    <div className="you-don-t-have-an-ac">Уже есть аккаунт?</div>
                    <div className="create-an-account"><a href="!#">Войти</a></div>
                </div>
                <div className="group">
                    <div className="group-2">
                        <EmailForm
                            className="forms-primary-select-active-onlight"
                            iconClassName="design-component-instance-node"
                            overlapGroupClassName="forms-primary-select-instance"
                            text=""
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
                        <PasswordForm
                            className="forms-primary-select-resting-onlight-instance"
                            iconClassName="design-component-instance-node"
                            overlapGroupClassName="forms-primary-select-instance"
                            text="Введите пароль"
                            text1=""
                            text2="Повторите пароль"
                        />
                        <div className="group-3">
                            <ButtonsLabel
                                className="buttons-px-label"
                                divClassName="buttons-label-instance"
                                overlapGroupClassName="buttons-14px-label-filled-active-onlight"
                                text="Регистрация"
                            />

                            <div className="forms-general">
                                <div className={`shape-wrapper ${isChecked ? 'checked' : ''}`} onClick={handleCheckboxChange}>
                                    <img className="shape" alt="Shape" src={activeTick} />
                                </div>
                                <p className="title">
                                    <span className="span">Я прочитал и согласен с </span>
                                    <span className="text-wrapper-2">политикой обработки персональных данных</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="sign-in">Регистрация</div>
                    <p className="enter-your-account-d">Пройдите регистрацию используя электронную почту</p>
                </div>
                <img className="element" alt="Element" src={mainIcon} />
            </div>
        </div>
    );
};
