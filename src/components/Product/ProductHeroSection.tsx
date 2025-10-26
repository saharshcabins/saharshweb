import React from "react";
import TextBuilder from "../shared/TextBuilder";
import Button from "../shared/Button";

const ProductHeroSection = () => {
  return (
    <div
      className="w-full h-[872px] bg-cover bg-center flex items-center "
      style={{ backgroundImage: "url('/assets/product/hutsieHero.webp')" }}
    >
      <div className="flex px-[100px] ">
      <div className="flex flex-col w-[45%] gap-[75px] pt-40">
        <div className="flex flex-col gap-[8px] text-start">
          <TextBuilder
            fontSize="56px"
            weight="bold"
            color="light"
            className="leading-[1.2]"
          >
            Hutsie
          </TextBuilder>
          <TextBuilder fontSize="22px" color="light">
            20 x 40 ft | 1 Bathroom | 1 Bed | 1 Pantry
          </TextBuilder>
        </div>
        <div className="flex flex-col gap-[28px]">
          <TextBuilder fontSize="22px" color="light" className="leading-[1.25]">
            From sleek architecture to luxurious interiors & scenic landscapes
            come together to create living spaces that inspire and rejuvenate.
          </TextBuilder>
          <div className="flex flex-row gap-[16px]">
            <Button text="Schedule a Visit" />
            <Button text="Bestseller" isGrayout />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ProductHeroSection;
