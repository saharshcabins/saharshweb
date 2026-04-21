import React from "react";
import Image from "next/image";
import MultiColorTextMobile from "../shared/MultiTextBuilderMobile";
import ButtonMobile from "../shared/ButtonMobile";
import TextBuilderMobile from "../shared/TextBuilderMobile";
import TextBuilder from "../shared/TextBuilder";

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
  // {
  //   title: "Flooring and Decking",
  //   points: [
  //     "Vitrified Glazed Tiled Flooring",
  //     "Personalized Tile Selections",
  //     "WPC Weather-proof Decking",
  //   ],
  // },
  // {
  //   title: "Premium Furnishings (Optional)",
  //   points: [
  //     "Curated Furniture Selections",
  //     "Customizable, Modular, Durable",
  //     "Built in factory for perfect assembly",
  //   ],
  // },
];

const CabinSectionMobile = () => {
  return (
    <div className="text-center leading-[1.2] flex flex-col gap-[32px] items-center">
      <div className="w-[90%] flex flex-col gap-[28px]">
        <div className="flex flex-col gap-2 pb-4">
          <TextBuilderMobile fontSize="30px" weight="bold" color="primary">
            Luxury You Can Feel
          </TextBuilderMobile>{" "}
          <MultiColorTextMobile
            className="leading-[1.2]"
            fontSize="14px"
            items={[
              {
                text: " From soundproof walls to premium finishes, our builds are engineered for perfection. ",
                color: "link",
                weight: "medium",
              },
              {
                text: " We don’t just build modular; we build to a higher standard. Quality isn’t a goal—it’s our foundation.",
                color: "link",
                weight: "medium",
              },
            ]}
          />
        </div>

        <div className="flex flex-row w-full gap-4 justify-center">
          {/* <ButtonMobile text="About Us" /> */}
          <ButtonMobile text="Schedule a Visit" />
        </div>
      </div>

      {/* Image Container */}
      <div className="w-full aspect-[1040/500] relative">
        <Image
          fill
          src="/assets/cabin/cabin_1.png"
          alt="cabin-section"
          style={{ objectFit: "contain" }}
          sizes="(max-width: 768px) 100vw"
        />
      </div>

      {/* Features extracted from diagram */}
      <div className="w-full px-5 flex flex-col gap-4 text-left">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="rounded-[14px] border border-[var(--light-border)] bg-white px-4 py-4 flex flex-col gap-2"
          >
            {/* Title */}
            <TextBuilderMobile fontSize="13px" weight="bold" color="dark">
              {feature.title}
            </TextBuilderMobile>

            {/* Bullet points */}
            <div className="flex flex-col gap-[6px]">
              {feature.points.map((point, pIdx) => (
                <div key={pIdx} className="flex flex-row items-start gap-2">
                  {/* Dash icon */}
                  <TextBuilderMobile
                    fontSize="14px"
                    color="primary"
                    weight="bold"
                  >
                    —
                  </TextBuilderMobile>
                  <TextBuilderMobile
                    fontSize="14px"
                    color="dark-light"
                    weight="normal"
                  >
                    {point}
                  </TextBuilderMobile>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CabinSectionMobile;
