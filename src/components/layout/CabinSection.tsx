import React from "react";
import MultiColorText from "../shared/MultiColorText";
import Button from "../shared/Button";
import Image from "next/image";

const CabinSection = () => {
  return (
    <div className="text-center leading-[1.2] flex flex-col gap-8 items-center">
      <MultiColorText
        fontSize="32px"
        items={[
          {
            text: "From vision to reality in weeks—not years ",
            color: "primary",
            weight: "bold",
          },
          {
            text: " ",
            color: "link",
            breakAfter: true,
          },
          {
            text: " Be spoke modular luxury for resorts, farmhouses, ",
            color: "link",
            weight: "medium",
            breakAfter: true,
          },
          {
            text: "and workspaces.Built fast, finished to perfection.",
            color: "link",
            weight: "medium",
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
          src="/assets/cabin/cabin_11.jpg"
          alt="cabin-section"
          style={{ objectFit: "contain" }}
          sizes="(max-width: 1040px) 100vw, 1040px"
        />
      </div>
    </div>
  );
};

export default CabinSection;
