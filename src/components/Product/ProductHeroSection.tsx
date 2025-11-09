import React from "react";
import TextBuilder from "../shared/TextBuilder";
import Button from "../shared/Button";

// 🧩 Define interface for props
interface ProductHeroSectionProps {
  data: {
    title: string;
    subtitle: string;
    description: string;
    backgroundImage: string;
    buttons?: {
      text: string;
      isGrayout?: boolean;
    }[];
  };
}

const ProductHeroSection: React.FC<ProductHeroSectionProps> = ({ data }) => {
  return (
    <div
      className="w-full h-[872px] bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url('${data.backgroundImage}')` }}
    >
      <div className="flex px-[100px]">
        <div className="flex flex-col w-[45%] gap-[75px] pt-40">
          {/* Title + Subtitle */}
          <div className="flex flex-col gap-[8px] text-start">
            <TextBuilder
              fontSize="56px"
              weight="bold"
              color="light"
              className="leading-[1.2]"
            >
              {data.title}
            </TextBuilder>
            <TextBuilder fontSize="22px" color="light">
              {data.subtitle}
            </TextBuilder>
          </div>

          {/* Description + Buttons */}
          <div className="flex flex-col gap-[28px]">
            <TextBuilder fontSize="22px" color="light" className="leading-[1.25]">
              {data.description}
            </TextBuilder>
            <div className="flex flex-row gap-[16px]">
              {data.buttons?.map((btn, index) => (
                <Button
                  key={index}
                  text={btn.text}
                  isGrayout={btn.isGrayout}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHeroSection;
