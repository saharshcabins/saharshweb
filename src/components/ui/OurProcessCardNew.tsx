import React from "react";
import TextBuilder from "../shared/TextBuilder";

interface OurProcessCardNewProps {
  number: string;
  title: React.ReactNode;
  icon: React.ElementType;
  description: string;
}

const OurProcessCardNew: React.FC<OurProcessCardNewProps> = ({
  number,
  title,
  icon: Icon,
  description,
}) => {
  return (
    <div
      className="group flex flex-col gap-8 py-10 px-12 rounded-3xl transition-all duration-300 border border-[var(--light-border)] hover:border-[var(--color-primary)] w-full"
    >
      {/* Number + Title */}
      <div className="flex flex-col gap-3">
        <TextBuilder fontSize="56px" weight="extrabold" color="primary">
          {number}
        </TextBuilder>
        <TextBuilder fontSize="32px" weight="bold" color="light">
          {title}
        </TextBuilder>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-[var(--light-border)] group-hover:bg-[var(--color-primary)] transition-colors duration-300" />

      {/* Icon + Description */}
      <div className="flex flex-row gap-8 items-center">
        <div className="w-[80px] h-[80px] shrink-0 text-[var(--color-primary)]">
          <Icon />
        </div>
        <TextBuilder
          fontSize="16px"
          weight="bold"
          color="lighter"
          className="leading-[1.4]"
        >
          {description}
        </TextBuilder>
      </div>
    </div>
  );
};

export default OurProcessCardNew;