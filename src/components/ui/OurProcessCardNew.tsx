import React from "react";
import TextBuilder from "../shared/TextBuilder";

interface OurProcessCardNewProps {
  number: string;
  title: React.ReactNode; // can be string or JSX (like <br /> usage)
  icon: React.ElementType; // for passing icon components
  description: string;
  isActive: boolean;
}

const OurProcessCardNew: React.FC<OurProcessCardNewProps> = ({
  number,
  title,
  icon: Icon,
  description,
  isActive,
}) => {
  return (
    <div
      className={`flex flex-col gap-10 py-10 px-[60px] w-[547px] shrink-0 rounded-3xl transition-all duration-300 border 
        ${isActive ? "border-[var(--color-primary)] opacity-100" : "border-[var(--light-border)] opacity-50"}`}
    >
      <div className="flex flex-col gap-4">
        <TextBuilder fontSize="56px" weight="extrabold" color="primary">
          {number}
        </TextBuilder>
        <TextBuilder fontSize="36px" weight="bold" color="light">
          {title}
        </TextBuilder>
      </div>

      <div className="flex flex-row gap-10 items-center">
        <div className="w-[100px] h-[102px] text-[var(--color-primary)]">
          <Icon />
        </div>
        <TextBuilder
          fontSize="18px"
          weight="bold"
          color="lighter"
          className="leading-[1.25]"
        >
          {description}
        </TextBuilder>
      </div>
    </div>
  );
};

export default OurProcessCardNew;
