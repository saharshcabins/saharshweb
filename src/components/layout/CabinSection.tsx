import React from "react";
import MultiColorText from "../shared/MultiColorText";
import Button from "../shared/Button";
import TextBuilder from "../shared/TextBuilder";
import Image from "next/image";

const features = [
  {
    title: "Customizable Interiors",
    points: [
      "Diverse Textures and Finishes",
      "Low Maintenance, High Quality",
      "Multiple light options (3k, 4k, 6k)",
    ],
  },
  {
    title: "Large, View-framing Windows",
    points: [
      "UPVC / System Aluminium",
      "Multiple colour options",
      "Tough, tempered glass",
    ],
  },
  {
    title: "Integrated En Suite Washroom",
    points: [
      "Premium Washroom Fixtures",
      "Smart, Space Saving Layout",
      "Anti-slip Surface for Safety",
    ],
  },
  {
    title: "Engineered Structural Frame",
    points: [
      "Galvanized Steel Core",
      "Fabricated with precision",
      "All weather-proof siding",
    ],
  },
  {
    title: "Flooring and Decking",
    points: [
      "Vitrified Glazed Tiled Flooring",
      "Personalized Tile Selections",
      "WPC Weather-proof Decking",
    ],
  },
  {
    title: "Premium Furnishings (Optional)",
    points: [
      "Curated Furniture Selections",
      "Customizable, Modular, Durable",
      "Built in factory for perfect assembly",
    ],
  },
];

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
              text: " We don't just build modular; we build to a higher standard. Quality isn't a goal—it's our foundation.",
              color: "link",
              weight: "medium",
              breakAfter: true,
            },
          ]}
        />
      </div>

      {/* Features Grid */}
      <div className="w-full max-w-[900px] aspect-[1040/500] relative">
        <Image
          fill
          src="/assets/cabin/cabin_1.png"
          alt="cabin-section"
          style={{ objectFit: "contain" }}
          sizes="(max-width: 768px) 100vw"
        />
      </div>
      <div className="w-full max-w-[1040px] grid grid-cols-3 gap-4 mt-[51px]">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="rounded-[14px] border border-[var(--light-border)] bg-white px-5 py-5 flex flex-col gap-3 text-left"
          >
            {/* Title */}
            <TextBuilder fontSize="18px" weight="bold" color="dark">
              {feature.title}
            </TextBuilder>

            {/* Bullet points */}
            <div className="flex flex-col gap-[6px]">
              {feature.points.map((point, pIdx) => (
                <div key={pIdx} className="flex flex-row items-start gap-2">
                  <TextBuilder fontSize="16px" color="primary" weight="bold">
                    —
                  </TextBuilder>
                  <TextBuilder
                    fontSize="16px"
                    color="dark-light"
                    weight="normal"
                  >
                    {point}
                  </TextBuilder>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-row justify-center gap-12">
        {/* <Button text="About Us" /> */}
        {/* <Button text="Schedule a Visit" className="my-10" /> */}
      </div>
    </div>
  );
};

export default CabinSection;
