import React, {useState} from "react";
import {ButtonsLabel} from "../../components/ButtonLabel/ButtonsLabel.jsx";
import {EmailForm} from "../../components/EmailForm/EmailForm.jsx";
import {PasswordForm} from "../../components/PasswordForm/PasswordForm.jsx";
import "./style.css";
import styles from "./register.module.css";
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
                    <div className="mask"/>
                    <img className="free-feather-flag" alt="Free feather flag" src={freeFlagsBigImg}/>
                </div>
                <div className="link">
                    <div className="you-don-t-have-an-ac">Уже есть аккаунт?</div>
                    <div className="create-an-account"><a href="!#">Войти</a></div>
                </div>
                <div className="group">
                    <div className="group-2">
                        <EmailForm
                            className={styles.emailForm}
                            iconClassName={styles.emailFormIcon}
                            overlapGroupClassName={styles.overlapContainer}
                            errorMessagePos={styles.emailErrorMessagePos}
                            text="✉︎"
                            text1="example@email.ru"
                            text2="Электронная почта"
                        />
                        <PasswordForm
                            className={styles.newPasswordForm}
                            overlapGroupClassName={styles.overlapContainer}
                            errorMessagePos={styles.passwordErrorMessagePos}
                            text="Пароль"
                        />
                        <PasswordForm
                            className={styles.newPasswordFormRepeat}
                            overlapGroupClassName={styles.overlapContainer}
                            errorMessagePos={styles.passwordErrorMessagePos}
                            text="Повторите пароль"
                        />
                        <div className="group-3">
                            <ButtonsLabel
                                buttonClassName={styles.loginButton}
                                instanceClassName={styles.loginButtonsInstance}
                                text="Регистрация"
                            />

                            <div className="forms-general">
                                <div className={`checkbox ${isChecked ? 'checked' : ''}`}
                                     onClick={handleCheckboxChange}>
                                    <img className="orange-tick" alt="Shape" src={activeTick}/>
                                </div>
                                <p className="title">
                                    <span className="privacy-policy-1">Я прочитал и согласен с </span>
                                    <span className="privacy-policy-2">политикой обработки персональных данных</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="sign-in">Регистрация</div>
                    <p className="enter-your-account-d">Пройдите регистрацию используя электронную почту</p>
                </div>
                <img className="element" alt="Element" src={mainIcon}/>
            </div>
        </div>
    );
};
export default Register;