import React from "react";
import {EmailForm} from "../../components/EmailForm/EmailForm.jsx";
import {PasswordForm} from "../../components/PasswordForm/PasswordForm.jsx";
import {RememberMe} from "../../components/RememberMe/RememberMe.jsx";
import {ButtonsLabel} from "../../components/ButtonLabel/ButtonsLabel.jsx";
import "./style.css";
import styles from "./login.module.css";
import mainIcon from "../../img/MainIcon.png";
import freeFlagsBigImg from "../../img/freeFlagsBigImg.png";

export const Login = () => {
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
                            className={styles.emailForm}
                            overlapGroupClassName={styles.overlapContainer}
                            iconClassName={styles.emailFormIcon}
                            errorMessagePos={styles.emailErrorMessagePos}
                            text="✉︎"
                            text1="example@email.ru"
                            text2="Электронная почта"
                        />
                        <PasswordForm
                            className={styles.passwordForm}
                            overlapGroupClassName={styles.overlapContainer}
                            errorMessagePos={styles.passwordErrorMessagePos}
                            text="Пароль"
                        />
                        <ButtonsLabel
                            buttonClassName={styles.loginButton}
                            instanceClassName={styles.loginButtonInstance}
                            text="Войти"
                        />
                        <RememberMe className="forms-general-checkbox-resting-onlight"
                                    text="Запомнить меня"
                                    titleClassName={styles.checkboxTitle}
                        />
                        <div className="recover-password"><a href="!#">Забыли пароль?</a></div>
                    </div>
                    <div className="sign-in">Авторизация</div>
                    <p className="enter-your-account-d">Войдите в аккаунт используя электронную почту</p>
                </div>
                <div className="link">
                    <div className="you-don-t-have-an-ac">Еще нет аккаунта?</div>
                    <div className="create-an-account"><a href="!#">Регистрация</a></div>
                </div>
            </div>
        </div>
    );
};

export default Login;
