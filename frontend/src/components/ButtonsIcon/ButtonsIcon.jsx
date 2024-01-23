import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ButtonsIcon = ({ className, iconClassName, text = "" }) => {
    return (
        <div className={`buttons-icon ${className}`}>
            <div className={`icon ${iconClassName}`}>{text}</div>
        </div>
    );
};

ButtonsIcon.propTypes = {
    text: PropTypes.string,
};
