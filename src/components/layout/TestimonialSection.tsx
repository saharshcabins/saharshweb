import React from "react";
import MultiColorText from "../shared/MultiColorText";
import TextBuilder from "../shared/TextBuilder";
import TestimonialSlider from "../ui/TestimonialSlider";

const TestimonialSection = () => {
  return (
    <div className="flex flex-col  items-center justify-center text-center gap-4 min-h-screen">
      <MultiColorText
        fontSize="56px"
        weight="semibold"
        className="leading-[1.2]"
        items={[
          { text: "Trusted by", color: "dark" },
          { text: " Clients", color: "primary" },
        ]}
      />
      <TextBuilder fontSize="24px" color="dark" className="leading-[1.25]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat lobortis<br /> purus, et malesuada quam congue at. In hac habitasse platea dictumst.
      </TextBuilder>
      <TestimonialSlider />
    </div>
  );
};

export default TestimonialSection;
