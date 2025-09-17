"use client";
import React from "react";
import { motion } from "framer-motion";
import TextBuilder from "../shared/TextBuilder";
import Image from "next/image";

interface OurProcessCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  totalCards: number;
  progress: number; // 0 (expanded) → 1 (collapsed)
}

const OurProcessCard: React.FC<OurProcessCardProps> = ({
  title,
  description,
  icon,
  index,
  totalCards,
  progress,
}) => {
  const isLastCard = index === totalCards - 1;
  const isFirstCard = index === 0;

  // Override progress for last card → always expanded
  const effectiveProgress = isLastCard ? 0 : progress;

  const collapsedWidth = 20;
  const collapsedPaddingLeft = 40;
  const collapsedFontSize = 24;
  const collapsedTitleGap = 20;

  const interpolatedWidth = 100 - effectiveProgress * (100 - collapsedWidth);
  const interpolatedPaddingLeft = isFirstCard
    ? 40 + effectiveProgress * (112 - 40)
    : 40;

  const interpolatedTitleGap = Math.max(
    117 - effectiveProgress * (117 - collapsedTitleGap),
    collapsedTitleGap
  );

  const titleFontSize = 36 - effectiveProgress * (36 - collapsedFontSize);

  return (
    <motion.div
      initial={false}
      animate={{ width: `${interpolatedWidth}%`, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`
        relative flex flex-col justify-between px-[40px] py-[30px] h-[423px]
        border-t border-b border-l border-[rgba(0,0,0,0.3)]
        ${isFirstCard ? "border-r-0" : ""}
        ${isLastCard ? "border-r border-[rgba(0,0,0,0.3)]" : ""}
        ${effectiveProgress > 0.5 ? "w-[200px]" : ""}
        ${(effectiveProgress > 0.5 && isFirstCard) ? "" : "pl-[5%]"}
      `}
    >
      {/* Title Row */}
      <motion.div
        animate={{
          flexDirection: effectiveProgress > 0.5 ? "column" : "row",
          gap: effectiveProgress > 0.5 ? 20 : 117,
          alignItems: effectiveProgress > 0.5 ? "flex-start" : "center",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`flex mb-[20px] ${
          effectiveProgress > 0.5 ? "gap-[20px]" : "gap-[117px]"
        }`}
      >
        <div className="text-[var(--color-primary)] w-[50px] h-[55px] flex-shrink-0">
          {icon}
        </div>
        <TextBuilder
          fontSize={`${titleFontSize}px`}
          weight={effectiveProgress > 0.5 ? "medium" : "bold"}
          color="dark"
          className="leading-[1.2] whitespace-nowrap"
        >
          {title.includes("&") ? (
            <>
              {title.split("&")[0]} &amp;
              <br />
              {title.split("&")[1].trim()}
            </>
          ) : (
            title
          )}
        </TextBuilder>
      </motion.div>

      <motion.div
        animate={{ opacity: isLastCard ? 1 : 1 - effectiveProgress }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <TextBuilder fontSize="20px" color="dark-light" className="leading-[1.5] w-full">
          {description}
        </TextBuilder>
      </motion.div>
    </motion.div>
  );
};

export default OurProcessCard;
