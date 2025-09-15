import React, { FC } from "react";
import TextBuilder from "./TextBuilder";
import { Arrow, ArrowNew } from "../../utils/svgUtils";

type ButtonProps = {
  text: string;
  onClick?: () => void;
  className?: string;
};

const Button: FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`
    group
    border 
    border-[var(--color-primary)] 
    rounded-full 
    py-[16px] 
    px-[36px] 
    flex 
    items-center 
    justify-center
    transition-all
    duration-300
    hover:bg-[var(--color-primary)]
    ${className || ""}
  `}
    >
      <TextBuilder
        fontSize="24px"
        weight="bold"
        color="primary"
        className="transition-colors duration-300 group-hover:text-white"
      >
        {text}
      </TextBuilder>

      <span
        className="
      w-0
      opacity-0
      overflow-hidden
      transition-all
      duration-300
      ease-in-out
      group-hover:w-6
      group-hover:opacity-100
      flex
      items-center
      ml-0
      group-hover:ml-3
    "
      >
        <ArrowNew className="w-6 h-6 text-white" flipped />
      </span>
    </button>
  );
};

export default Button;
