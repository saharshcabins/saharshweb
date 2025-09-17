import React, { FC } from "react";
import TextBuilder from "./TextBuilder";
import { ArrowNew } from "../../utils/svgUtils";

type ButtonProps = {
  text: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean; // Add the disabled prop here
};

const Button: FC<ButtonProps> = ({ text, onClick, className, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled} // Apply the disabled prop
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
          disabled
            ? "border-[var(--text-dark-25)] cursor-not-allowed" // Disabled styles
            : "border-[var(--color-primary)] hover:bg-[var(--color-primary)]" // Normal styles
        }
        ${className || ""}
      `}
    >
      <TextBuilder
        fontSize="24px"
        weight="bold"
        color={disabled ? "dark50" : "primary"} // Change text color when disabled
        className="transition-colors duration-300 group-hover:text-white"
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
            !disabled
              ? "group-hover:w-6 group-hover:opacity-100 group-hover:ml-3"
              : ""
          }
        `}
      >
        <div
          className={`w-6 h-6 ${
            disabled ? "text-[var(--text-light)]" : "text-[var(--text-light)]"
          }`}
        >
          <ArrowNew flipped />
        </div>
      </span>
    </button>
  );
};

export default Button;
