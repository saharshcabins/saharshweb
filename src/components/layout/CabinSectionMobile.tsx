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
          { text: "Saharsh Cabins", color: "primary", weight: "bold" },
          {
            text: " began with a simple yet",
            color: "link",
            weight: "medium",
          },
          {
            text: "powerful vision: to create innovative,",
            color: "link",
            weight: "medium",
          },
          {
            text: "sustainable, and customizable portable cabins",
            color: "link",
            weight: "medium",
          },
                  {
            text: " portable cabins",
            color: "dark",
            weight: "bold",
          },
          {
            text: " that redefine living and working spaces.",
            color: "dark",
            weight: "bold",
          },
        ]}
      />

     <div className="flex flex-row w-full justify-between">
        <ButtonMobile text="About Us"/>
        <ButtonMobile  text="Schedule a Visit"/>
     </div>
        </div>
    

      {/* Image Container */}
      <div className="w-full aspect-[1040/500] relative ">
        <Image
          unoptimized
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