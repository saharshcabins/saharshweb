import React from "react";
import MultiColorText from "../shared/MultiColorText";
import Button from "../shared/Button";
import Image from "next/image";

const CabinSection = () => {
  return (
    <div className="text-center leading-[1.2] flex flex-col gap-8 items-center">
      <MultiColorText
        fontSize="24px"
        weight="medium"
        items={[
          { text: "Saharsh Cabins", color: "primary" },
          {
            text: " began with a simple yet powerful vision: to create innovative, sustainable, and customizable",
            color: "link",
          },
          {
            text: " portable cabins that redefine living and working spaces.",
            color: "dark",
          },
        ]}
      />
      <div className="flex flex-row justify-center gap-8">
        <Button text="About Us" />
        <Button text="Book a Demo" />
      </div>

      {/* Image Container */}
      <div className="w-full max-w-[1040px] aspect-[1040/500] relative">
        <Image
          src="/assets/cabin/cabin_1.png"
          alt="cabin-section"
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 1040px) 100vw, 1040px"
        />
      </div>
    </div>
  );
};

export default CabinSection;
