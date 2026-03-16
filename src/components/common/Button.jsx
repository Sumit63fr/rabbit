import React from "react";

const Button = ({ text, bgColor, type, svg, textColor, font, border, padding, rounded, textSize, hover, onClick }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`cursor-pointer flex items-center gap-[6px] ${bgColor} ${textColor} ${font} ${border} ${padding} ${rounded} ${textSize} ${hover}`}
        >
            {text}z
            {svg}
        </button>
    );
};

export default Button;