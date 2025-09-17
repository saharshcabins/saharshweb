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
        "px-[24px] py-[16px] rounded-full transition-all duration-300 cursor-pointer",
        {
          "border border-[var(--color-primary)] bg-[var(--color-primary)]": isActive,
          "bg-[var(--text-light)]": !isActive,
        }
      )}
    >
      <TextBuilder
        fontSize="20px"
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