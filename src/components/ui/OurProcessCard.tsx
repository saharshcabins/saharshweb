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
const shrinkStart = index / totalCards;        // start earlier
const shrinkEnd = (index + 0.5) / totalCards; // end sooner -> faster shrink

const cardWidth = useTransform(
  progress,
  [shrinkStart, shrinkEnd],
  isFirstCard ? [540, 200] : isLastCard ? [500, 500] : [500, 200]
);
    const titlePadding = useTransform(cardWidth, [300, 250], [0, 40]); // 40px ≈ py-10

    const titleFontSizePx = useTransform(
      cardWidth,
      [300, 250],
      ["36px", "24px"]
    );
    const paddingLeft = useTransform(cardWidth, [200, 540], [0, 40]);

    // Animate description opacity (hide when ≤ 300px)
    const descriptionOpacity = useTransform(cardWidth, [300, 250], [1, 0]);
    const descriptionDisplay = useTransform(
      cardWidth,
      [400, 350],
      ["block", "none"]
    );

    // Animate gap & font size
    const gap = useTransform(cardWidth, [300, 250], [0, 12]);
    const titleFontSize = useTransform(cardWidth, [300, 250], [36, 24]);

    // Local state to switch flex direction
    const [isNarrow, setIsNarrow] = React.useState(false);
    useMotionValueEvent(cardWidth, "change", (v) => {
      setIsNarrow(v <= 300);
    });

    return (
      <motion.div
        ref={ref}
        className="flex flex-col justify-between py-6 border gap-[187px] border-[rgba(0,0,0,0.3)] bg-white shadow-md flex-shrink-0 transition-all duration-300"
        style={{ width: cardWidth, paddingLeft }}
      >
        {/* Icon + Title */}
        <motion.div
          className={`flex items-center w-full p-5 text-center transition-all duration-300 ${
            isNarrow ? "flex-col" : "flex-row justify-between"
          }`}
          style={{ gap }}
        >
          <div className="w-[50px] h-[55px] text-[var(--color-primary)]">
            {icon}
          </div>

          <motion.span
            style={{
              fontSize: titleFontSizePx,
              paddingTop: titlePadding,
              paddingBottom: titlePadding,
            }}
            className="font-bold text-dark leading-tight text-center"
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
        </motion.div>

        {/* Description */}
        <motion.div
          className="p-5"
          style={{
            opacity: descriptionOpacity,
            display: descriptionDisplay,
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
