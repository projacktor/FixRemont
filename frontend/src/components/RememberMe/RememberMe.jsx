import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const RememberMe = ({ className, text = "Title" }) => {
    return (
        <div className={`forms-general ${className}`}>
            <div className="rectangle" />
            <div className="title">{text}</div>
        </div>
    );
};

RememberMe.propTypes = {
    text: PropTypes.string,
};
