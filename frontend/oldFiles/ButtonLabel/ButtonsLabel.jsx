import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ButtonsLabel = ({className, overlapGroupClassName, divClassName, text = "Lable"}) => {
    return (
        <div className={`buttons-label ${className}`}>
            <div className={`overlap-group ${overlapGroupClassName}`}>
                <div className={`lable ${divClassName}`}>{text}</div>
            </div>
        </div>
    );
};

ButtonsLabel.propTypes = {
    text: PropTypes.string,
};
