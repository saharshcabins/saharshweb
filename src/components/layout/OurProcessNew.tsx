"use client";
import React from "react";
import MultiColorText from "../shared/MultiColorText";
import TextBuilder from "../shared/TextBuilder";
import OurProcessCardNew from "../ui/OurProcessCardNew";
import { NoteIcon, HomeIcon, Cube, Repair, MagnifyingGlass } from "@/utils/svgUtils";

const OurProcessNew: React.FC = () => {
  const processItems = [
    {
      title: (<>Requirements &<br /> Assessments</>),
      description:
        "Understanding your requirements, budget, and project scope led to the initial discussion of design possibilities and technical specifications.",
      icon: MagnifyingGlass,
    },
    {
      title: (<>Designs &<br /> Quotations</>),
      description:
        "After developing conceptual designs and layouts, a detailed quotation outlining costs and timelines was provided.",
      icon: NoteIcon,
    },
    {
      title: (<>Manufacturing &<br /> Quality Control</>),
      description:
        "Ensuring top-notch quality during the manufacturing process with thorough checks and adherence to standards.",
      icon: Repair,
    },
    {
      title: (<>Delivery &<br /> Installation</>),
      description:
        "Careful delivery and professional installation to ensure the project is completed efficiently and safely.",
      icon: HomeIcon,
    },
  ];

  return (
    <section className="bg-[var(--text-dark)] px-[7%] py-[7%]">
      {/* Header */}
      <div className="flex flex-col justify-center mb-16 gap-4 w-full">
        <MultiColorText
          fontSize="75px"
          className="leading-[1.2] text-center"
          items={[
            { text: "Our ", weight: "bold", color: "light" },
            { text: " Process", weight: "bold", color: "primary" },
          ]}
        />
        <div className=" text-center">
          <TextBuilder fontSize="20px" color="light" className="leading-[1.25]">
           We guide you through a curated journey where architecture, interior design, and landscape artistry converge, <br />transforming your vision into a sanctuary of rejuvenation through our precision-led workflow.
          </TextBuilder>
        </div>
      </div>

      {/* 2-Column Grid */}
      <div className="grid grid-cols-4 gap-6">
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