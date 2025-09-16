import React from "react";
import MultiColorText from "../shared/MultiColorText";
import TextBuilder from "../shared/TextBuilder";
import TestimonialSlider from "../ui/TestimonialSlider";

const TestimonialSection = () => {
  return (
    <div className="flex flex-col  items-center justify-center text-center gap-10 min-h-screen">
      <div className="flex flex-col gap-6">
          <MultiColorText
        fontSize="56px"
        className="leading-[1.2]"
        items={[
          { text: "Trusted by ", color: "dark",        weight:"medium" },
          { text: "Clients", color: "primary" ,weight:"bold"},
        ]}
      />
      <TextBuilder fontSize="24px" color="dark" className="leading-[1.25]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat lobortis<br /> purus, et malesuada quam congue at. In hac habitasse platea dictumst.
      </TextBuilder>
      </div>
    
      <TestimonialSlider />
    </div>
  );
};

export default TestimonialSection;
