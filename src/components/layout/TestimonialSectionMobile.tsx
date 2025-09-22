import React from "react";
import MultiColorText from "../shared/MultiColorText";
import TextBuilder from "../shared/TextBuilder";
import TestimonialSliderMobile from "../ui/TestimonialSliderMobile";

const TestimonialSectionMobile = () => {
  return (
    <div className="flex flex-col  items-center justify-center text-center  w-full">
      <div className="flex flex-col gap-[16px] w-[90%]">
        <MultiColorText
          fontSize="22px"
          className="leading-[1.2]"
          items={[
            { text: "Trusted by ", color: "dark", weight: "medium" },
            { text: "Clients", color: "primary", weight: "bold" },
          ]}
        />
        <TextBuilder fontSize="12px" color="dark" className="leading-[1.25]">
          Trusted by industry leaders, Saharsh Cabins delivers innovative,
          reliable, and customized solutions that earn the confidence of clients
          across sectors.
        </TextBuilder>
      </div>

      <TestimonialSliderMobile />
    </div>
  );
};

export default TestimonialSectionMobile;
