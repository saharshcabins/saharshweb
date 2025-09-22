"use client";

import React, { forwardRef } from "react";
import { motion, useTransform, MotionValue } from "framer-motion";
import TextBuilder from "../shared/TextBuilder";
import { HomeIcon } from "@/utils/svgUtils"; // Assuming this is the correct import

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

    // Width logic: if it's the last card, set to 100%
 // All hooks at the top
const cardWidth = useTransform(progress, [0.3, 0.5], isLastCard ? [100, 100] : [500, 200]);

const steppedProgress = useTransform(progress, [0.5, 0.51], [0, 1]);
const rowOpacity = useTransform(steppedProgress, [0, 1], [1, 0]);
const rowDisplay = useTransform(steppedProgress, [0, 1], ["flex", "none"]);
const columnOpacity = useTransform(steppedProgress, [0, 1], [0, 1]);
const columnDisplay = useTransform(steppedProgress, [0, 1], ["none", "flex"]);
// Always create a transform, even if it won't do anything
const cardProgressTransform = useTransform(progress, [0, 1], [0, 0]);

// Use the right value for cardProgress
const cardProgress = isLastCard ? cardProgressTransform : progress;

const iconWidth = useTransform(progress, [0, 1], [50, 30]);
const iconHeight = useTransform(progress, [0, 1], [55, 33]);
const textAlign = useTransform(cardProgress, [0.5, 1], ["end", "center"]);
const descOpacity = useTransform(progress, [0, 0.5], [1, 0]); // moved from JSX

    if (isLastCard) {
      // Return a completely different, non-animated div for the last card
      return (
        <div
          ref={ref}
          style={{width: `${cardWidth}px`,}}
          className="flex flex-col justify-between py-[30px] h-[423px]
            border-t border-b border-l border-r border-[rgba(0,0,0,0.3)]
            w-full transition-colors duration-300"
        >
          {/* Icon and Title */}
          <div className="flex flex-col items-center justify-center p-5 text-center">
            <div className="flex items-center justify-between gap-[117px] w-full">
              <div className="text-[var(--color-primary)] mb-4 w-[50px] h-[55px]">
                {icon}
              </div>
              <TextBuilder
                fontSize="36px"
                weight="bold"
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
            </div>
          </div>
          {/* Description */}
          <div className="overflow-hidden p-5">
            <TextBuilder
              fontSize="18px"
              color="dark-light"
              className="leading-[1.5] text-center"
            >
              {description}
            </TextBuilder>
          </div>
        </div>
      );
    }
   

    return (
      <motion.div
        ref={ref}
        layout
        className={`relative flex flex-col justify-between py-[30px] h-[423px]
          border-t border-b border-l border-[rgba(0,0,0,0.3)]
          transition-colors duration-300
        `}
        style={{
          width: cardWidth,
        }}
      >
        {/* Container for icon and title */}
        <motion.div
          layout
          className="flex flex-col items-center justify-center p-5 "
          style={{
            textAlign: textAlign,
          }}
        >
          {/* Icon */}
          <div className="flex gap-[117px]">
            <motion.div
              className="text-[var(--color-primary)] mb-4"
              style={{
                width: iconWidth,
                height: iconHeight,
              }}
            >
              {icon}
            </motion.div>

            {/* Title - Row Layout (initial state) */}
            <motion.div
              className="flex  "
              style={{
                opacity: rowOpacity,
                display: rowDisplay,
              }}
            >
              <TextBuilder
                fontSize="36px"
                weight="bold"
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
          </div>

          {/* Title - Column Layout (shrunk state) */}
          <motion.div
            className="flex flex-col items-center gap-5"
            style={{
              opacity: columnOpacity,
              display: columnDisplay,
            }}
          >
            <TextBuilder
              fontSize="20px"
              weight="medium"
              color="dark"
              className="leading-[1.2]"
            >
              {title}
            </TextBuilder>
          </motion.div>
        </motion.div>

        {/* Description */}
        <motion.div
          className="overflow-hidden p-5"
          style={{
            opacity: descOpacity,
          }}
        >
          <TextBuilder
            fontSize="18px"
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
