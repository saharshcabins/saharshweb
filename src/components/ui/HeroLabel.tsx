"use client";
import React from "react";
import TextBuilder from "../shared/TextBuilder";
import { motion } from "framer-motion";

interface LabelProps {
  text: string;
  swipe?: boolean; // optional boolean prop
}

const Label: React.FC<LabelProps> = ({ text, swipe = false }) => {
  return (
    <motion.div
      className="group flex items-center gap-[6px] cursor-pointer"
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {swipe ? (
        <>
          {/* Label Text First */}
          <TextBuilder
            className="hidden md:block"
            fontSize="24px"
            weight="bold"
            color="light"
          >
            {text}
          </TextBuilder>
          <TextBuilder
            className="block md:hidden"
            fontSize="14px"
            weight="bold"
            color="light"
          >
            {text}
          </TextBuilder>

          {/* Circle Last */}
          <div className="relative w-[12px] h-[12px] md:w-[28px] md:h-[28px] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <div className="w-full h-full rounded-full border-2 border-white/50 group-hover:border-white flex items-center justify-center transition-colors duration-300">
              <div className="w-[6px] h-[6px] md:w-[14px] md:h-[14px] rounded-full bg-white/60 group-hover:bg-white transition-colors duration-300"></div>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Circle First */}
          <div className="relative w-[12px] h-[12px] md:w-[28px] md:h-[28px] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <div className="w-full h-full rounded-full border-2 border-white/50 group-hover:border-white flex items-center justify-center transition-colors duration-300">
              <div className="w-[6px] h-[6px] md:w-[14px] md:h-[14px] rounded-full bg-white/60 group-hover:bg-white transition-colors duration-300"></div>
            </div>
          </div>

          {/* Label Text */}
          <TextBuilder
            className="hidden md:block"
            fontSize="24px"
            weight="bold"
            color="light"
          >
            {text}
          </TextBuilder>
          <TextBuilder
            className="block md:hidden"
            fontSize="14px"
            weight="bold"
            color="light"
          >
            {text}
          </TextBuilder>
        </>
      )}
    </motion.div>
  );
};

export default Label;
