// components/ui/ProjectLabel.tsx
import React, { FC } from "react";
import clsx from "clsx";
import TextBuilder from "../shared/TextBuilder";

interface ProjectLabelProps {
  text: string;
  isActive: boolean;
  onClick: () => void;
}

const ProjectLabel: FC<ProjectLabelProps> = ({ text, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "transition-all duration-300 cursor-pointer rounded-full",
        "px-4 py-2 md:px-6 md:py-4", // responsive padding
        {
          "border border-[var(--color-primary)] bg-[var(--color-primary)]": isActive,
          "bg-[var(--text-light)]": !isActive,
        }
      )}
    >
      <TextBuilder
        fontSize="12px md:20px" // smaller text on mobile
        className={clsx({
          "text-white": isActive,
          "text-[var(--text-dark-light)]": !isActive,
        })}
      >
        {text}
      </TextBuilder>
    </button>
  );
};

export default ProjectLabel;
