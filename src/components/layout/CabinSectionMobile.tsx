import React from "react";
import Image from "next/image";
import MultiColorTextMobile from "../shared/MultiTextBuilderMobile";
import ButtonMobile from "../shared/ButtonMobile";

const CabinSectionMobile = () => {
  return (
    <div className="text-center leading-[1.2] flex flex-col gap-[32px] items-center">
      <div className="w-[80%] flex flex-col gap-[28px]">
        <MultiColorTextMobile
          className="leading-[1.2]"
          fontSize="14px" // Adjusted font size for mobile
         items={[
  { text: "Your Vision", color: "primary", weight: "bold" },
  {
    text: " delivered in weeks, not years, built with speed and certainty",
    color: "link",
    breakAfter: true,
  },
  {
    text: " premium, custom-designed modular",
    color: "link",
    weight: "medium",
  },
  {
    text: " cabins, luxury cottages, and luxury villas ",
    color: "dark",
    weight: "semibold",
    breakAfter: true,
  },
  {
    text: "for resorts, farmhouses, and modern site offices.",
    color: "dark",
    weight: "semibold",
  },
]}
        />

        <div className="flex flex-row w-full justify-between">
          <ButtonMobile text="About Us" />
          <ButtonMobile text="Schedule a Visit" />
        </div>
      </div>

      {/* Image Container */}
      <div className="w-full aspect-[1040/500] relative ">
        <Image
          fill
          src="/assets/cabin/cabin_1.webp"
          alt="cabin-section"
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw"
        />
      </div>
    </div>
  );
};

export default CabinSectionMobile;
