    import PropTypes from "prop-types";
    import React, { useState } from "react";
    import "./style.css";

    export const EmailForm = ({
                                  className,
                                  overlapGroupClassName,
                                  iconClassName,
                                  text = "",
                                  text1 = "Select item",
                                  text2 = "Field title",
                              }) => {
        const [email, setEmail] = useState("");

        const handleChange = (event) => {
            setEmail(event.target.value);
        };

        return (
            <div className={`forms-primary-select ${className}`}>
                <div className={`overlap-group ${overlapGroupClassName}`}>
                    <div className={`icon ${iconClassName}`}>{text}</div>
                    <input type="email" value={email} onChange={handleChange} placeholder={text1} />
                </div>
                <div className="field-title">{text2}</div>
            </div>
        );
    };

    EmailForm.propTypes = {
        text: PropTypes.string,
        text1: PropTypes.string,
        text2: PropTypes.string,
    };
