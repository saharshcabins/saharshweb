import React from "react";
import TextBuilder from "../shared/TextBuilder";

interface OurProcessCardNewProps {
  number: string;
  title: React.ReactNode;
  icon: React.ElementType;
  description: string;
  isActive?: boolean;
  onClick?: () => void;
}

const OurProcessCardNew: React.FC<OurProcessCardNewProps> = ({
  number,
  title,
  icon: Icon,
  description,
  isActive = false,
  onClick,
}) => {
  return (
    <div
      className="group flex flex-col gap-4 md:gap-8 py-6 md:py-10 px-6 md:px-12 rounded-2xl md:rounded-3xl transition-all duration-300 border w-full cursor-pointer"
      style={{
        borderColor: isActive ? "var(--color-primary)" : "rgba(255,255,255,0.15)",
      }}
      onClick={onClick}
    >
      {/* Number + Title */}
      <div className="flex flex-col gap-2 md:gap-3 text-center">
        <TextBuilder
          fontSize="clamp(36px, 8vw, 56px)"
          weight="extrabold"
          color="light"
          className="transition-colors duration-300"
          style={{ color: isActive ? "var(--color-primary)" : undefined }}
        >
          {number}
        </TextBuilder>
        <TextBuilder
          fontSize="clamp(16px, 4vw, 22px)"
          weight="bold"
          color="light"
          className="break-words md:whitespace-nowrap transition-colors duration-300"
          style={{ color: isActive ? "var(--color-primary)" : undefined }}
        >
          {title}
        </TextBuilder>
      </div>

      {/* Divider */}
      <div
        className="w-full h-px transition-colors duration-300"
        style={{ backgroundColor: isActive ? "var(--color-primary)" : "rgba(255,255,255,0.15)" }}
      />

      {/* Icon */}
      <div className="flex flex-col items-center gap-4">
        <div
          className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] transition-colors duration-300 flex items-center justify-center"
          style={{ color: isActive ? "var(--color-primary)" : "white" }}
        >
          <Icon />
        </div>
      </div>
    </div>
  );
};

export default OurProcessCardNew;
