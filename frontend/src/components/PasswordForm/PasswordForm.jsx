import PropTypes from "prop-types";
import React, { useState } from "react";
import "./style.css";

export const PasswordForm = ({
                                 className,
                                 overlapGroupClassName,
                                 text = "Select item",
                                 iconClassName,
                                 text1 = "",
                                 text2 = "Field title",
                             }) => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className={`forms-primary-select ${className}`}>
            <div className="field-title">{text2}</div>
            <div className={`overlap-group ${overlapGroupClassName}`}>
                <input type={passwordVisible ? "text" : "password"} className="password-input" />
                <button onClick={togglePasswordVisibility} className="eye-button">{passwordVisible ? '🙈' : '👁️'}</button>
            </div>
        </div>
    );
};

PasswordForm.propTypes = {
    text: PropTypes.string,
    text1: PropTypes.string,
    text2: PropTypes.string,
};
