import React from "react";
import MultiColorText from "../shared/MultiColorText";
import Button from "../shared/Button";
import Image from "next/image";

const CabinSection = () => {
  return (
    <div className="text-center leading-[1.2] flex flex-col gap-8 items-center">
     <MultiColorText
  fontSize="36px"
  items={[
    { text: "Your Vision", color: "primary", weight: "bold" },
    {
      text: " delivered in weeks, not years,built with speed and certainty",
      color: "link",
      breakAfter: true,
    },
    {
      text: " premium, custom-designed modular",
      color: "link",
      weight: "medium",
    },
    {
      text: " cabins ",
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

      <div className="flex flex-row justify-center gap-12">
        <Button text="About Us" />
        <Button text="Schedule a Visit" />
      </div>

      {/* Image Container */}
      <div className="w-full mt-[51px] max-w-[1040px] aspect-[1040/500] relative">
        <Image
        
          fill
          src="/assets/cabin/cabin_1.png"
          alt="cabin-section"
          style={{ objectFit: "contain" }}
          sizes="(max-width: 1040px) 100vw, 1040px"
          
        />
      </div>
    </div>
  );
};

export default CabinSection;
