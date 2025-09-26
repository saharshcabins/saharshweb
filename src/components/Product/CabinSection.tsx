import Image from "next/image";
import React from "react";
import TextBuilder from "../shared/TextBuilder";

export default function CabinSection() {
  return (
    <div className="py-16 pt-30  gap-14 flex flex-col items-center">
      <div className="flex flex-row justify-between w-full px-[100px]">
        <div className="">
          <TextBuilder fontSize="24px" color="dark" className="leading-[1.25]">
            Saharsh Cabins are utilizing high-
            <br />
            quality materials and innovative
            <br />
            construction ..
          </TextBuilder>
        </div>
        <div className="flex flex-row gap-[50px]">
          {["20 x 40 ft", "1 Bathroom", "1 Pantry", "1 Bedroom"].map(
            (label, idx) => (
                <div key={idx} className="flex flex-col items-center gap-[7px]">
                  <div className="w-[60px] h-[60px] border border-[var(--color-primary)]  rounded-full"></div>
                  <TextBuilder fontSize="20px" color="dark" weight="medium">
                    {label}
                  </TextBuilder>
                </div>
            
            )
          )}
        </div>
      </div>
      <Image
        unoptimized
        src={"assets/cabin/cabin_1.webp"}
        alt="product"
        width={1097}
        height={557}
      />
    </div>
  );
}
