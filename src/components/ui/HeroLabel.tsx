"use client";
import React from "react";
import TextBuilder from "../shared/TextBuilder";

interface LabelProps {
  text: string;
  swipe?: boolean; // optional boolean prop
}

const Label: React.FC<LabelProps> = ({ text, swipe = false }) => {
  return (
    <div className="flex items-center gap-[6px]">
      {swipe ? (
        <>
          {/* Label Text First */}
          <TextBuilder fontSize="24px" weight="bold" color="light">
            {text}
          </TextBuilder>

          {/* Circle Last */}
          <div className="relative w-[28px] h-[28px] flex items-center justify-center">
            <div className="w-[28px] h-[28px] rounded-full border-2 border-white/50 flex items-center justify-center">
              <div className="w-[14px] h-[14px] rounded-full bg-white/60"></div>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Circle First */}
          <div className="relative w-[28px] h-[28px] flex items-center justify-center">
            <div className="w-[28px] h-[28px] rounded-full border-2 border-white/50 flex items-center justify-center">
              <div className="w-[14px] h-[14px] rounded-full bg-white/60"></div>
            </div>
          </div>

          {/* Label Text */}
          <TextBuilder fontSize="24px" weight="bold" color="light">
            {text}
          </TextBuilder>
        </>
      )}
    </div>
  );
};

export default Label;
