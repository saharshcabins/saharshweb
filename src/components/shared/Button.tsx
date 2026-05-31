import React, { FC } from "react";
import TextBuilder from "./TextBuilder";
import { ArrowNew } from "../../utils/svgUtils";

type ButtonProps = {
  text: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  isGrayout?: boolean;
  fontSize?: string;
  isBack?: boolean; // ✅ NEW
};
const Button: FC<ButtonProps> = ({
  text,
  onClick,
  className,
  disabled,
  isGrayout,
  fontSize,
  isBack
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled || isGrayout}
      className={`
        group cursor-pointer border rounded-full py-[16px] px-[36px]
        flex items-center justify-center transition-all duration-300
        ${isBack ? "flex-row-reverse" : ""}
        ${
          isGrayout
            ? "border-white/25 cursor-default"
            : disabled
            ? "border-[var(--text-dark-25)] cursor-not-allowed"
            : "border-[var(--color-primary)] bg-[var(--text-light)] hover:bg-[var(--color-primary)]"
        }
        ${className || ""}
      `}
    >
      <TextBuilder
        fontSize={fontSize || "20px"}
        weight="normal"
        color={
          isGrayout ? "light25" : disabled ? "dark50" : "primary"
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
          ${isBack ? "mr-0" : "ml-0"}
          ${
            !disabled && !isGrayout
              ? isBack
                ? "group-hover:w-6 group-hover:opacity-100 group-hover:mr-3"
                : "group-hover:w-6 group-hover:opacity-100 group-hover:ml-3"
              : ""
          }
        `}
      >
        <div className="w-6 h-6 text-[var(--text-light)]">
          <ArrowNew flipped={!isBack} /> {/* ✅ flip only for back */}
        </div>
      </span>
    </button>
  );
};

export default Button;
