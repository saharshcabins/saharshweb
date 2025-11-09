import React from "react";
import MultiColorText from "../shared/MultiColorText";
import TextBuilder from "../shared/TextBuilder";
import Button from "../shared/Button";

// 🧩 Define props interface
interface ViewProductProps {
  data: {
    titleDark: string;
    titleHighlight: string;
    description: string;
    buttonText: string;
    cards: (string | null)[]; // image URLs (or null for placeholder)
  };
}

export const ViewProduct: React.FC<ViewProductProps> = ({ data }) => {
  return (
    <div className="p-[100px] pr-[0px]">
      <div className="flex flex-col gap-[20px] items-start pr-[100px]">
        {/* Title */}
        <MultiColorText
          fontSize="56px"
          items={[
            { text: `${data.titleDark} `, color: "dark", weight: "medium" },
            { text: data.titleHighlight, color: "primary", weight: "bold" },
          ]}
        />

        {/* Description + Button Row */}
        <div className="flex flex-row w-full justify-between">
          <TextBuilder>{data.description}</TextBuilder>
          <Button text={data.buttonText} />
        </div>

        {/* Cards Section */}
        <div className="py-2 flex flex-row overflow-hidden gap-[32px]">
          {data.cards.map((image, index) => (
            <div
              key={index}
              className="h-[480px] w-[375px] rounded-[40px] bg-cover bg-center"
              style={{
                backgroundColor: image ? "transparent" : "#F5F2EB",
                backgroundImage: image ? `url(${image})` : "none",
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
