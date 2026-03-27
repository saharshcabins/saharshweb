"use client";
import React from "react";
import MultiColorText from "../shared/MultiColorText";
import TextBuilder from "../shared/TextBuilder";
import OurProcessCardNew from "../ui/OurProcessCardNew";
import { NoteIcon, HomeIcon, Cube, Repair } from "@/utils/svgUtils";

const OurProcessNew: React.FC = () => {
  const processItems = [
    {
      title: (<>Requirements &<br /> Assessments</>),
      description:
        "Understanding your requirements, budget, and project scope led to the initial discussion of design possibilities and technical specifications.",
      icon: NoteIcon,
    },
    {
      title: (<>Designs &<br /> Quotations</>),
      description:
        "After developing conceptual designs and layouts, a detailed quotation outlining costs and timelines was provided.",
      icon: HomeIcon,
    },
    {
      title: (<>Manufacturing &<br /> Quality Control</>),
      description:
        "Ensuring top-notch quality during the manufacturing process with thorough checks and adherence to standards.",
      icon: Cube,
    },
    {
      title: (<>Delivery &<br /> Installation</>),
      description:
        "Careful delivery and professional installation to ensure the project is completed efficiently and safely.",
      icon: Repair,
    },
  ];

  return (
    <section className="bg-[var(--text-dark)] px-[7%] py-[7%]">
      {/* Header */}
      <div className="flex flex-row justify-between mb-16">
        <MultiColorText
          fontSize="56px"
          className="leading-[1.2] text-start"
          items={[
            { text: "The ", weight: "medium", color: "light" },
            { text: "Saharsh", weight: "bold", color: "primary", breakAfter: true },
            { text: "Quality Process", weight: "medium", color: "light" },
          ]}
        />
        <div className="max-w-[544px]">
          <TextBuilder fontSize="24px" color="light" className="leading-[1.25]">
            From sleek architecture to luxurious interiors & scenic landscapes
            come together to create living spaces that inspire and rejuvenate.
          </TextBuilder>
        </div>
      </div>

      {/* 2-Column Grid */}
      <div className="grid grid-cols-2 gap-6">
        {processItems.map((item, index) => (
          <OurProcessCardNew
            key={index}
            number={String(index + 1).padStart(2, "0")}
            title={item.title}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default OurProcessNew;