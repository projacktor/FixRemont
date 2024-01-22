import React from "react";
import {EmailForm} from "../../components/EmailForm/EmailForm.jsx";
import {ButtonsLabel} from "../../components/ButtonLabel/ButtonsLabel.jsx";
import "./style.css";
import styles from "./forgotPassword.module.css";
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
                            className={styles.emailForm}
                            iconClassName={styles.emailFormIcon}
                            overlapGroupClassName={styles.overlapContainer}
                            errorMessagePos={styles.errorMessage}
                            text="✉︎"
                            text1="example@email.ru"
                            text2="Электронная почта"
                        />
                        <ButtonsLabel
                            buttonClassName={styles.loginButton}
                            instanceClassName={styles.loginButtonInstance}
                            text="Отправить письмо"
                        />
                    </div>
                    <div className="sign-in">Забыли пароль?</div>
                    <div className="description">
                        <p>Введите свой e-mail ниже, и вы получите письмо</p>
                        <p>с инструкцией как сбросить пароль.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
