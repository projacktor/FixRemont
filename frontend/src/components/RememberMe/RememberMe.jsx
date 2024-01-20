import PropTypes from "prop-types";
import React, { useState } from "react";
import "./style.css";

export const RememberMe = ({ className, titleClassName, text = "Title" }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className={`forms-general ${className}`}>
            <div className={`rectangle ${isChecked ? 'checked' : ''}`} onClick={handleCheckboxChange} />
            <div className={`checkbox-title ${titleClassName}`}>{text}</div>
        </div>
    );
};

RememberMe.propTypes = {
    text: PropTypes.string,
};
