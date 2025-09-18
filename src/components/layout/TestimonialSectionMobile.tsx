import React from "react";
import MultiColorText from "../shared/MultiColorText";
import TextBuilder from "../shared/TextBuilder";
import TestimonialSlider from "../ui/TestimonialSlider";

const TestimonialSectionMobile = () => {
  return (
    <div className="flex flex-col  items-center justify-center text-center gap-10 w-[90%] ">
      <div className="flex flex-col gap-[16px]">
          <MultiColorText
        fontSize="22px"
        className="leading-[1.2]"
        items={[
          { text: "Trusted by ", color: "dark",        weight:"medium" },
          { text: "Clients", color: "primary" ,weight:"bold"},
        ]}
      />
      <TextBuilder fontSize="12px" color="dark" className="leading-[1.25]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat lobortis purus, et malesuada quam congue at. In hac habitasse platea dictumst.
      </TextBuilder>
      </div>
    
      <TestimonialSlider />
    </div>
  );
};

export default TestimonialSectionMobile;
