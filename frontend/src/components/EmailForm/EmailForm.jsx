import PropTypes from "prop-types";
import React, {useState} from "react";
import "./style.css";

export const EmailForm = ({
                              className,
                              overlapGroupClassName,
                              iconClassName,
                              errorMessagePos,
                              text = "",
                              text1 = "Select item",
                              text2 = "Field title",
                          }) => {
    const [email, setEmail] = useState("");
    const [emailDirty, setEmailDirty] = useState(false);
    const [emailError, setEmailError] = useState('Email не может быть пустым');
    const handleChange = (event) => {
        setEmail(event.target.value);
        const re =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(String(event.target.value).toLowerCase())) {
            setEmailError('Некорректный email');
        } else {
            setEmailError("");
        }
    };

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true);
                break
            case 'password':
                break
        }
    }

    return (
        <div className={`forms-primary-select ${className}`}>
            {(emailDirty && emailError) && <div className={`error-message ${errorMessagePos}`}>{emailError}</div>}
            <div className="field-title">{text2}</div>
            <div className={`overlap-group ${overlapGroupClassName}`}>
                <div className={`icon ${iconClassName}`}>{text}</div>
                <input onBlur={e => blurHandler(e)} type="text" value={email} onChange={event => handleChange(event)}
                       placeholder={text1} name="email" className="email-input"/>
            </div>
        </div>
    );
};

EmailForm.propTypes = {
    text: PropTypes.string,
    text1: PropTypes.string,
    text2: PropTypes.string,
};
