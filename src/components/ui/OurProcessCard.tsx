"use client";

import React, { forwardRef } from "react";
import {
  motion,
  useTransform,
  MotionValue,
  useMotionValueEvent,
} from "framer-motion";
import TextBuilder from "../shared/TextBuilder";

interface OurProcessCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  progress: MotionValue<number>;
  index: number;
  totalCards: number;
}

const OurProcessCard = forwardRef<HTMLDivElement, OurProcessCardProps>(
  ({ title, description, icon, progress, index, totalCards }, ref) => {
    const isLastCard = index === totalCards - 1;
    const isFirstCard = index === 0;

    // Scroll segment per card
    const shrinkStart = index / totalCards;
    const shrinkEnd = (index + 0.5) / totalCards;

    const cardWidth =  useTransform(
      progress,
      [shrinkStart, shrinkEnd],
      isFirstCard ? [540, 100] : isLastCard ? [500, 500] : [500, 100]
    );

    const titlePadding = useTransform(cardWidth, [300, 250], [0, 40]);
    const titleFontSizePx = useTransform(cardWidth, [300, 250], ["36px", "24px"]);

    // Animate title/description opacity smoothly
    const contentOpacity = useTransform(cardWidth, [220, 300], [0, 1]);
    const contentMaxHeight = useTransform(cardWidth, [220, 300], [0, 200]);

    return (
      <motion.div
        ref={ref}
        className="flex flex-col gap-[117px] justify-between py-6 border border-[rgba(0,0,0,0.3)] bg-white shadow-md flex-shrink-0 transition-all duration-300"
        style={{ width:  cardWidth }}
      >
        {/* Icon + Title */}
        <div className="flex flex-row items-start p-5 justify-between">
          <div className="w-[50px] h-[55px] flex-shrink-0 text-[var(--color-primary)]">
            {icon}
          </div>

          <motion.span
            style={{
              fontSize: titleFontSizePx,
              paddingTop: titlePadding,
              paddingBottom: titlePadding,
              opacity: contentOpacity,
            }}
            className="font-bold text-dark leading-tight"
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
          </motion.span>
        </div>

        {/* Description */}
        <motion.div
          className="p-5 overflow-hidden"
          style={{
            opacity: contentOpacity,
            maxHeight: contentMaxHeight,
          }}
        >
          <TextBuilder
            fontSize="20px"
            color="dark-light"
            className="leading-[1.5] text-center"
          >
            {description}
          </TextBuilder>
        </motion.div>
      </motion.div>
    );
  }
);

OurProcessCard.displayName = "OurProcessCard";

export default OurProcessCard;
