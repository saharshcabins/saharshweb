import React from "react";
import TextBuilder from "../shared/TextBuilder";

interface OurProcessCardProps {
  title: string;
  description: string;
  imageSrc: string;
  icon: React.ReactNode;
  index: number; // add index to handle border logic
}

const OurProcessCard: React.FC<OurProcessCardProps> = ({
  title,
  description,
  icon,
  index,
}) => {
  return (
<div
  className={`flex flex-col justify-between px-[40px] py-[30px] w-[600px] h-[350px] aspect-[100/45] ${
    index === 0
      ? "border-y border-[rgba(0,0,0,0.3)] pl-[7%] " // top & bottom only
      : "border-y border-l border-[rgba(0,0,0,0.3)]" // top, bottom, left
  }`}
>

      <div className="flex flex-row items-center gap-[100px] mb-[20px]">
        <div className="text-[var(--color-primary)] w-[50px] h-[55px]">
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
      {title.split("&")[0]} &amp;<br />
      {title.split("&")[1].trim()}
    </>
  ) : (
    title
  )}
</TextBuilder>




      </div>
      <TextBuilder
        fontSize="20px"
        color="dark-light"
        className="leading-[1.5] w-full"
      >
        {description}
      </TextBuilder>
    </div>
  );
};

export default OurProcessCard;
