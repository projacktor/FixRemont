import PropTypes from "prop-types";
import React, {useState} from "react";
import "./style.css";

export const PasswordForm = ({
                                 className,
                                 overlapGroupClassName,
                                 iconClassName,
                                 text = "Field title",
                             }) => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [passwordError, setPasswordError] = useState('Пароль не может быть пустым');
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                break
            case 'password':
                setPasswordDirty(true);
                break
        }
    }

    const handleChange = (event) => {
        setPassword(event.target.value);
        if (event.target.value.length < 8) {
            setPasswordError('Пароль должен быть длиннее 8 символов');
            if (!event.target.value) {
                setPasswordError('Пароль не может быть пустым');
            }
        } else {
            setPasswordError('');
        }
    }

    return (
        <div className={`forms-primary-select ${className}`}>
            <div className="field-title">{text}</div>
            {(passwordDirty && passwordError) && <div className="password-error-message">{passwordError}</div>}
            <div className={`overlap-group ${overlapGroupClassName}`}>
                <input onChange={event => handleChange(event)} onBlur={e => blurHandler(e)}
                       type={passwordVisible ? "text" : "password"} className="password-input" name="password"/>
                <button onClick={togglePasswordVisibility}
                        className="eye-button">{passwordVisible ? '🙈' : '👁️'}</button>
            </div>
        </div>
    );
};

PasswordForm.propTypes = {
    text: PropTypes.string,
    text1: PropTypes.string,
    text2: PropTypes.string,
};
