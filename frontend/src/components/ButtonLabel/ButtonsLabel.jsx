import PropTypes from "prop-types";
import React from "react";
import "../../../oldFiles/ButtonLabel/style.css";

export const ButtonsLabel = ({className, overlapGroupClassName, divClassName, text = "Lable"}) => {
    return (
        <button className={`buttons-label ${className}`}>
            <p className={`lable ${divClassName}`}>{text}</p>
        </button>
    );
};

ButtonsLabel.propTypes = {
    text: PropTypes.string,
};
