import React, { FC } from "react";
import TextBuilderMobile from "./TextBuilderMobile"; // Changed import to the mobile version
import { ArrowNew } from "../../utils/svgUtils";

type ButtonProps = {
  text: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
};

const ButtonMobile: FC<ButtonProps> = ({ text, onClick, className, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        group
        cursor-pointer
        border 
        rounded-full 
        py-[16px] 
        px-[28px] // Changed from 36px to 28px
        flex 
        items-center 
        justify-center
        transition-all
        duration-300
        ${
          disabled
            ? "border-[var(--text-dark-25)] cursor-not-allowed"
            : "border-[var(--color-primary)] hover:bg-[var(--color-primary)]"
        }
        ${className || ""}
      `}
    >
      <TextBuilderMobile // Changed component to the mobile version
        fontSize="14px" // Retained fixed font size as per previous changes
        weight="bold"
        color={disabled ? "dark50" : "primary"}
        className="transition-colors duration-300 group-hover:text-white"
      >
        {text}
      </TextBuilderMobile>

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

export default ButtonMobile;