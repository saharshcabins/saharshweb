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
      className="group flex flex-col gap-4 md:gap-8 py-6 md:py-10 px-6 md:px-12 rounded-2xl md:rounded-3xl transition-all duration-300 border border-white/15 hover:border-[var(--color-primary)] w-full"
    >
      {/* Number + Title */}
      <div className="flex flex-col gap-2 md:gap-3 text-center">
        <TextBuilder
          fontSize="clamp(36px, 8vw, 56px)"
          weight="extrabold"
          color="light"
          className="group-hover:text-[var(--color-primary)] transition-colors duration-300"
        >
          {number}
        </TextBuilder>
        <TextBuilder
          fontSize="clamp(16px, 4vw, 22px)"
          weight="bold"
          color="light"
          className="break-words md:whitespace-nowrap group-hover:text-[var(--color-primary)] transition-colors duration-300"
        >
          {title}
        </TextBuilder>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-white/15 group-hover:bg-[var(--color-primary)] transition-colors duration-300" />

      {/* Icon */}
      <div className="flex flex-col items-center gap-4">
        <div className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] text-white group-hover:text-[var(--color-primary)] transition-colors duration-300 flex items-center justify-center">
          <Icon />
        </div>
      </div>
    </div>
  );
};

export default OurProcessCardNew;
