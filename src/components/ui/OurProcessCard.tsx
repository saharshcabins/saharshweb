import React from "react";
import TextBuilder from "../shared/TextBuilder";
import Image from "next/image";

// Define the props interface
interface OurProcessCardProps {
  title: string;
  description: string;
  imageSrc: string;
  icon: React.ReactNode; // Pass any React node for the icon
}

const OurProcessCard: React.FC<OurProcessCardProps> = ({
  title,
  description,
  imageSrc,
  icon,
}) => {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-col gap-[28px] w-1/2 justify-center">
        <div className="flex flex-row items-center gap-[23px]">
          <div className="w-fit rounded-full p-[24px] bg-[var(--color-primary)]">
            {icon}
          </div>
          <TextBuilder
            fontSize="36px"
            weight="bold"
            color="dark"
            className="leading-[1.2]"
          >
            {title}
          </TextBuilder>
        </div>
        <TextBuilder fontSize="24px" color="dark" className="leading-[1.25]">
          {description}
        </TextBuilder>
      </div>
      <Image src={imageSrc} height={400} width={580} alt={title} unoptimized/>
    </div>
  );
};

export default OurProcessCard;
