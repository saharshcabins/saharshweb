import React, { FC } from "react";
import TextBuilder from "./TextBuilder";

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
        border 
        border-[var(--color-primary)] 
        rounded-full 
        py-[16px] 
        px-[36px] 
        inline-flex 
        items-center 
        justify-center
        ${className || ""}
      `}
    >
      <TextBuilder fontSize="24px" weight="bold" color="primary">
        {text}
      </TextBuilder>
    </button>
  );
};

export default Button;
