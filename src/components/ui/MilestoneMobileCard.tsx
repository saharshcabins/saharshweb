import React from "react";
import TextBuilder from "../shared/TextBuilder";

interface MilestoneCardMobileProps {
  year: string;
  title: string;
  description: string;
  isActive: boolean;
}

const MilestoneCardMobile: React.FC<MilestoneCardMobileProps> = ({
  year,
  title,
  description,
  isActive,
}) => {
  return (
    <div
      className={`flex flex-col rounded-[16px] px-[16px] py-[24px] w-[255px]
        border transition-all duration-300 ease-in-out flex-shrink-0
        ${
          isActive
            ? "border-[var(--color-primary)] bg-[var(--color-dark)]"
            : "border-[var(--text-light-25)] bg-[var(--color-dark)]"
        }
      `}
    >
      {/* Year */}
      <TextBuilder
        fontSize="24px"
        weight="bold"
        color={isActive ? "primary" : "section50"}
      >
        {year}
      </TextBuilder>

      {/* Content Section */}
      <div className="flex flex-col gap-[12px] mt-[20px]">
        <TextBuilder
          fontSize="16px"
          weight="semibold"
          color={isActive ? "light" : "section50"}
        >
          {title}
        </TextBuilder>
        <TextBuilder
          fontSize="10px"
          color={isActive ? "lighter" : "section50"}
        >
          {description}
        </TextBuilder>
      </div>
    </div>
  );
};

export default MilestoneCardMobile;
