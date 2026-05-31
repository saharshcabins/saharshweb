import React, { FC } from "react";
import TextBuilderMobile from "./TextBuilderMobile";
import { ArrowNew } from "../../utils/svgUtils";

type ButtonProps = {
  text: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  isBack?: boolean; // ✅ NEW
};

const ButtonMobile: FC<ButtonProps> = ({
  text,
  onClick,
  className,
  disabled,
  isBack
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        group
        cursor-pointer
        border 
        rounded-full
        py-[12px]
        px-[20px]
        md:py-[16px]
        md:px-[28px]
        flex 
        items-center 
        justify-center
        transition-all
        duration-300
        ${isBack ? "flex-row-reverse" : ""}  // ✅ reverse layout
        ${
          disabled
            ? "border-[var(--text-dark-25)] cursor-not-allowed"
            : "border-[var(--color-primary)] bg-[var(--text-light)] hover:bg-[var(--color-primary)]"
        }
        ${className || ""}
      `}
    >
      <TextBuilderMobile
        fontSize="14px"
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
          ${isBack ? "mr-0" : "ml-0"}
          ${
            !disabled
              ? isBack
                ? "group-hover:w-6 group-hover:opacity-100 group-hover:mr-3"
                : "group-hover:w-6 group-hover:opacity-100 group-hover:ml-3"
              : ""
          }
        `}
      >
        <div className="w-6 h-6 text-[var(--text-light)]">
          <ArrowNew flipped={!isBack} /> {/* ✅ flip only when back */}
        </div>
      </span>
    </button>
  );
};

export default ButtonMobile;