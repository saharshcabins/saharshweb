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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          placerat lobortis purus, et malesuada quam congue at. In hac habitasse
          platea dictumst.
        </TextBuilder>
      </div>

      <TestimonialSliderMobile />
    </div>
  );
};

export default TestimonialSectionMobile;
