import React, { FC } from "react";
import TextBuilder from "./TextBuilder";
import { ArrowNew } from "../../utils/svgUtils";

type ButtonProps = {
  text: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  isGrayout?: boolean; // NEW prop
};

const Button: FC<ButtonProps> = ({ text, onClick, className, disabled, isGrayout }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled || isGrayout} // Disable interaction if grayout
      className={`
        group
        cursor-pointer
        border 
        rounded-full 
        py-[16px] 
        px-[36px] 
        flex 
        items-center 
        justify-center
        transition-all
        duration-300
        ${
          isGrayout
            ? "border-white/25 cursor-default" // Grayout styles
            : disabled
            ? "border-[var(--text-dark-25)] cursor-not-allowed"
            : "border-[var(--color-primary)] hover:bg-[var(--color-primary)]"
        }
        ${className || ""}
      `}
    >
      <TextBuilder
        fontSize="24px"
        weight="bold"
        color={
          isGrayout
            ? "light25"
            : disabled
            ? "dark50"
            : "primary"
        }
        className={`leading-[1.2] transition-colors duration-300 ${
          !isGrayout && !disabled ? "group-hover:text-white" : ""
        }`}
      >
        {text}
      </TextBuilder>

      <span
        className={`
          w-0
          opacity-0
          overflow-hidden
          transition-all
          duration-300
          ease-in-out
          flex
          items-center
          ml-0
          ${
            !disabled && !isGrayout
              ? "group-hover:w-6 group-hover:opacity-100 group-hover:ml-3"
              : ""
          }
        `}
      >
        <div className="w-6 h-6 text-[var(--text-light)]">
          <ArrowNew flipped />
        </div>
      </span>
    </button>
  );
};

export default Button;
