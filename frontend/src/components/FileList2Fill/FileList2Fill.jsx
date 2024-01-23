import PropTypes from "prop-types";
import React from "react";

export const FileList2Fill = ({ color = "black", className }) => {
    return (
        <svg
            className={`remix-icons-fill-document-file-list-2-fill-1 ${className}`}
            fill="none"
            height="16"
            viewBox="0 0 16 16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g className="g" clipPath="url(#clip0_131_2035)">
                <path
                    className="path"
                    d="M13.3333 14.6666H2.66667C2.48986 14.6666 2.32029 14.5963 2.19526 14.4713C2.07024 14.3463 2 14.1767 2 13.9999V1.99992C2 1.82311 2.07024 1.65354 2.19526 1.52851C2.32029 1.40349 2.48986 1.33325 2.66667 1.33325H13.3333C13.5101 1.33325 13.6797 1.40349 13.8047 1.52851C13.9298 1.65354 14 1.82311 14 1.99992V13.9999C14 14.1767 13.9298 14.3463 13.8047 14.4713C13.6797 14.5963 13.5101 14.6666 13.3333 14.6666ZM5.33333 4.66658V5.99992H10.6667V4.66658H5.33333ZM5.33333 7.33325V8.66658H10.6667V7.33325H5.33333ZM5.33333 9.99992V11.3333H8.66667V9.99992H5.33333Z"
                    fill={color}
                />
            </g>
            <defs className="defs">
                <clipPath className="clip-path" id="clip0_131_2035">
                    <rect className="rect" fill="white" height="16" width="16" />
                </clipPath>
            </defs>
        </svg>
    );
};

FileList2Fill.propTypes = {
    color: PropTypes.string,
};
