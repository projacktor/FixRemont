import PropTypes from "prop-types";
import React from "react";
import "./style.css";
// Модуль не действует на кнопку из-за двойного названия
export const ButtonsLabel = ({buttonClassName, instanceClassName, text = "Lable"}) => {
    return (
        <button className={`buttons-label ${buttonClassName}`}>
            <p className={`button-label-instance ${instanceClassName}`}>{text}</p>
        </button>
    );
};

ButtonsLabel.propTypes = {
    text: PropTypes.string,
};
