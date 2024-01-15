import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ButtonsLabel = ({className, overlapGroupClassName, divClassName, text = "Lable"}) => {
    return (
        <button>
            <a href="!#">
            <div className={`buttons-label ${className}`}>
                <div className={`overlap-group ${overlapGroupClassName}`}>
                    <div className={`lable ${divClassName}`}>{text}</div>
                </div>
            </div>
            </a>
        </button>
    );
};

ButtonsLabel.propTypes = {
    text: PropTypes.string,
};
