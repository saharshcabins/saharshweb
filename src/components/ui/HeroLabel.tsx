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
      className="flex items-center gap-[6px] cursor-pointer"
      whileHover={{ scale: 1.15 }} // scale up on hover
      whileTap={{ scale: 0.95 }} // press effect
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {swipe ? (
        <>
          {/* Label Text First */}
 <TextBuilder
  fontSize="24px"
  weight="bold"
  color="light"
  className="transition-colors duration-300 ease-in-out group-hover:text-[var(--color-primary)]"
>
  {text}
</TextBuilder>


          {/* Circle Last */}
          <motion.div
            className="relative w-[28px] h-[28px] flex items-center justify-center"
            whileHover={{ scale: 1.2, backgroundColor: "rgba(255,255,255,0.2)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="w-[28px] h-[28px] rounded-full border-2 border-white/50 flex items-center justify-center">
              <div className="w-[14px] h-[14px] rounded-full bg-white/60"></div>
            </div>
          </motion.div>
        </>
      ) : (
        <>
          {/* Circle First */}
          <motion.div
            className="relative w-[28px] h-[28px] flex items-center justify-center"
            whileHover={{ scale: 1.2, backgroundColor: "rgba(255,255,255,0.2)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="w-[28px] h-[28px] rounded-full border-2 border-white/50 flex items-center justify-center">
              <div className="w-[14px] h-[14px] rounded-full bg-white/60"></div>
            </div>
          </motion.div>

          {/* Label Text */}
          <TextBuilder fontSize="24px" weight="bold" color="light">
            {text}
          </TextBuilder>
        </>
      )}
    </motion.div>
  );
};

export default Label;
