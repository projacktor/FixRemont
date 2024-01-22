import PropTypes from "prop-types";
import React from "react";

export const BubbleChartFill = ({ color = "black", className }) => {
    return (
        <svg
            className={`remix-icons-fill-business-bubble-chart-fill-1 ${className}`}
            fill="none"
            height="16"
            viewBox="0 0 16 16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g className="g" clipPath="url(#clip0_131_2029)">
                <path
                    className="path"
                    d="M10.6666 10.6666C11.7713 10.6666 12.6666 11.5619 12.6666 12.6666C12.6666 13.7713 11.7713 14.6666 10.6666 14.6666C9.56192 14.6666 8.66659 13.7713 8.66659 12.6666C8.66659 11.5619 9.56192 10.6666 10.6666 10.6666ZM3.99992 7.99992C5.47325 7.99992 6.66659 9.19325 6.66659 10.6666C6.66659 12.1399 5.47325 13.3333 3.99992 13.3333C2.52659 13.3333 1.33325 12.1399 1.33325 10.6666C1.33325 9.19325 2.52659 7.99992 3.99992 7.99992ZM9.66659 1.33325C11.6919 1.33325 13.3333 2.97459 13.3333 4.99992C13.3333 7.02525 11.6919 8.66658 9.66659 8.66658C7.64125 8.66658 5.99992 7.02525 5.99992 4.99992C5.99992 2.97459 7.64125 1.33325 9.66659 1.33325Z"
                    fill={color}
                />
            </g>
            <defs className="defs">
                <clipPath className="clip-path" id="clip0_131_2029">
                    <rect className="rect" fill="white" height="16" width="16" />
                </clipPath>
            </defs>
        </svg>
    );
};

BubbleChartFill.propTypes = {
    color: PropTypes.string,
};
