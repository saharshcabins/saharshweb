import React from "react";
import TextBuilder from "../shared/TextBuilder";
import { ArrowDown } from "@/utils/svgUtils";

interface MilestoneCardProps {
  year: string;
  index: number;
  title: string;
  description: string;
  isActive: boolean;
  isStacked: boolean;
  activeIndex: number;
  onArrowClick?: () => void;
  onHoverClick?: (index: number) => void; // Callback on click
}

const MilestoneCard: React.FC<MilestoneCardProps> = ({
  year,
  title,
  description,
  index,
  isActive,
  onArrowClick,
  activeIndex,
  onHoverClick,
}) => {
  const isBeforeActive = index < activeIndex;

  return (
    <div
      className="relative flex flex-row"
      // Change from onMouseEnter to onClick
      onClick={() => {
        if (isBeforeActive && onHoverClick) onHoverClick(index);
      }}
    >
      <div
        className={`milestone-card group flex flex-col rounded-[24px] gap-[57px] px-[40px] py-[50px] w-full justify-between 
          border transition-transform duration-300 ease-in-out
          ${
            isActive
              ? "border-[var(--color-primary)] bg-[var(--color-dark)]"
              : "border-[var(--text-light-25)] bg-[var(--color-dark)]"
          }
          ${isBeforeActive ? "hover:transform hover:-translate-y-[10%]" : ""}
          ${isBeforeActive ? "border-b-0" : ""}
          ${
            isBeforeActive ? "cursor-pointer" : ""
          } // Add a pointer cursor for clickable cards
        `}
      >
        {/* Header Row */}
        <div
          className={`flex flex-row items-center justify-between   ${
            isBeforeActive
              ? "group-hover:gap-[20px] group-hover:flex-col group-hover:items-start"
              : ""
          } `}
        >
          {/* Year Text */}
          <TextBuilder
            fontSize={isBeforeActive ? "48px" : "72px"}
            weight="bold"
            color={isActive ? "primary" : "section50"}
            className={`
              transition-all duration-300 ease-in-out
              ${isBeforeActive ? "opacity-0 group-hover:opacity-100" : ""}
              ${
                isBeforeActive
                  ? "group-hover:text-[72px] group-hover:-translate-y-[50px]"
                  : ""
              }
            `}
          >
            {year}
          </TextBuilder>

          {/* Arrow Button */}
          <button
            onClick={onArrowClick}
            aria-label="Expand next milestone"
            className={`
              px-[16px] py-[25px] rounded-[40px] flex items-center justify-center border transition-all duration-300
              ${
                isActive
                  ? "border-[var(--color-primary)]"
                  : "border-[var(--text-light-25)]"
              }
              ${isBeforeActive ? "opacity-0 group-hover:opacity-100" : ""}
              ${
                isBeforeActive
                  ? "group-hover:absolute group-hover:top-[0px] group-hover:right-[20px] group-hover:scale-75"
                  : ""
              }
            `}
          >
            <div
              className={`
                w-[25px] h-[25px] flex items-center transform transition-transform duration-300
                ${
                  isActive
                    ? "text-[var(--text-light)] rotate-0"
                    : "text-[var(--section-dark)] opacity-50 rotate-180"
                }
              `}
            >
              <ArrowDown />
            </div>
          </button>
        </div>

        {/* Title + Description */}
        <div
          className={`flex flex-col gap-[29px] ${
            isBeforeActive ? "opacity-0" : ""
          }`}
        >
          <TextBuilder
            fontSize="30px"
            weight="bold"
            color={isActive ? "light" : "section50"}
          >
            {title}
          </TextBuilder>
          <TextBuilder
            fontSize="20px"
            color={isActive ? "lighter" : "section50"}
          >
            {description}
          </TextBuilder>
        </div>
      </div>
    </div>
  );
};

export default MilestoneCard;
