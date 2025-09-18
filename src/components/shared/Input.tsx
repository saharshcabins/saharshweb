"use client";
import { Close } from "@/utils/svgUtils";
import React, { FC, useState } from "react";

interface InputBoxProps {
  placeholder: string;
  type?: string;
  className?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputBox: FC<InputBoxProps> = ({
  placeholder,
  type = "text",
  className,
  value,
  onChange,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleClear = () => {
    // Let parent handle reset
    onChange({ target: { value: "" } } as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <div className={`relative flex items-center group ${className}`}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={onChange}
        className="
          w-full
          h-[52px] md:h-[65px]          /* smaller height on mobile */
          border
          border-[var(--text-dark-25)]
          bg-white
          rounded-[12px] md:rounded-[16px] /* softer radius on small screens */
          px-[16px] md:px-[36px]       /* tighter padding on mobile */
          py-[14px] md:py-[24px]
          font-sans
          text-[16px] md:text-[20px]   /* smaller font on mobile */
          text-[var(--text-dark-50)]
          focus:outline-none
          focus:border-[var(--color-primary)]
          transition-all
          duration-300
          placeholder:text-[14px] md:placeholder:text-[18px] /* responsive placeholder */
        "
      />
      {value && isFocused && (
        <span
          onMouseDown={handleClear}
          className="
            absolute
            right-3 md:right-4
            cursor-pointer
            text-[var(--text-dark-light)]
            transition-colors
            duration-200
            hover:text-[var(--color-primary)]
          "
        >
          <Close width="24" height="24" color="var(--text-dark-25)"/>
        </span>
      )}
    </div>
  );
};

export default InputBox;
