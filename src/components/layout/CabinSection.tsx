import React from "react";
import MultiColorText from "../shared/MultiColorText";
import Button from "../shared/Button";
import Image from "next/image";
import TextBuilder from "../shared/TextBuilder";

const CabinSection = () => {
  return (
    <div className="text-center leading-[1.2] flex flex-col gap-8 items-center">
      <div className="flex flex-col gap-2 pb-4">
        <TextBuilder fontSize="75px" weight="semibold" color="primary">
          Luxury You Can Feel
        </TextBuilder>
        <MultiColorText
          fontSize="20px"
          items={[
            {
              text: " From soundproof walls to premium finishes, our builds are engineered for perfection. ",
              color: "link",
              weight: "medium",
              breakAfter: true,
            },
            {
              text: " We don’t just build modular; we build to a higher standard. Quality isn’t a goal—it’s our foundation.",
              color: "link",
              breakAfter: true,
            },
          ]}
        />
      </div>

      {/* Image Container */}
      <div className="w-full mt-[51px] max-w-[1040px] aspect-[1040/500] relative">
        <Image
          fill
          src="/assets/cabin/cabin_11.jpg"
          alt="cabin-section"
          className="scale-[1.2]"
          style={{ objectFit: "contain" }}
          sizes="(max-width: 1040px) 100vw, 1040px"
        />
      </div>
      <div className="flex flex-row justify-center gap-12">
        {/* <Button text="About Us" /> */}
        {/* <Button text="Schedule a Visit"  className="my-10"/> */}
      </div>
    </div>
  );
};

export default CabinSection;
