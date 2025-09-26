import React from "react";
import MultiColorText from "../shared/MultiColorText";
import TextBuilder from "../shared/TextBuilder";
import Button from "../shared/Button";

export const ViewProduct = () => {
  return (
    <div className="p-[100px] pr-[0px]">
      <div className="flex flex-col gap-[20px] items-start pr-[100px]">
        <MultiColorText
          fontSize="56px"
          items={[
            { text: "View More ", color: "dark", weight: "medium" },
            { text: "Cabins", color: "primary", weight: "bold" },
          ]}
        />
        <div className="flex flex-row w-full justify-between ">
          <TextBuilder>
            Saharsh Cabins are utilizing high-quality materials and innovative
            <br />
            construction techniques to ensure durability, efficiency..
          </TextBuilder>
          <Button text="View All" />
        </div>
        <div className="py-2 flex flex-row overflow-hidden gap-[32px]">
          <div className="h-[480px] w-[375px] bg-[#F5F2EB] rounded-[40px]"></div>
          <div className="h-[480px] w-[375px] bg-[#F5F2EB] rounded-[40px]"></div>

          <div className="h-[480px] w-[375px] bg-[#F5F2EB] rounded-[40px]"></div>

          <div className="h-[480px] w-[375px] bg-[#F5F2EB] rounded-[40px]"></div>

          <div className="h-[480px] w-[375px] bg-[#F5F2EB] rounded-[40px]"></div>

          <div className="h-[480px] w-[375px] bg-[#F5F2EB] rounded-[40px]"></div>
        </div>
      </div>
    </div>
  );
};
