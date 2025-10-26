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
          { text: "Saharsh Cabins", color: "primary", weight: "bold" },
          {
            text: " began with a simple yet powerful vision: to create",
            color: "link",
            breakAfter: true, // ✅ will insert <br />
          },
          {
            text: " innovative, sustainable, and customizable",
            color: "link",
            weight: "medium",
          },
          {
            text: " portable cabins ",
            color: "dark",
            weight: "semibold",
            breakAfter: true,
          },
          {
            text: "that redefine living and working spaces.",
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
      <div className="w-full max-w-[1040px] aspect-[1040/500] relative">
        <Image
        
          fill
          src="/assets/cabin/cabin_1.webp"
          alt="cabin-section"
          style={{ objectFit: "cover" }}
          sizes="(max-width: 1040px) 100vw, 1040px"
          
        />
      </div>
    </div>
  );
};

export default CabinSection;
