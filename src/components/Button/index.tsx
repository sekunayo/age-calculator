import React from "react";
import './button.scss';
import { ReactComponent as ArrowDown } from "../../assets/icons/arrow_down.svg";

interface ButtonProps {
    type: "button" | "submit" | "reset";
    handleClick?: () => void;
}

export const Button = ({ handleClick, type }: ButtonProps) => {
    return (
        <button type={type} onClick={handleClick} className={'button'}>
            <ArrowDown />
        </button>
    )
}