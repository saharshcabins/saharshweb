"use client";
import React, { useState } from "react";
import MultiColorText from "../shared/MultiColorText";
import TextBuilder from "../shared/TextBuilder";
import OurProcessCardNew from "../ui/OurProcessCardNew";
import { NoteIcon, HomeIcon, Cube, Repair, MagnifyingGlass } from "@/utils/svgUtils";

const OurProcessNew: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const processItems = [
    {
      title: (<>Requirements &<br /> Assessments</>),
      description:
        "Understanding your requirements, budget, and project scope leads to the initial discussion of design possibilities and technical specifications.",
      icon: MagnifyingGlass,
    },
    {
      title: (<>Designs &<br /> Quotations</>),
      description:
        "After developing conceptual designs and layouts, a detailed quotation outlining costs and timelines is provided.",
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
    <>
    {/* ==========================================
       HOME SECTION: DELIVERY PROCESS
       Purpose:
       Demystify the build journey from brief to commissioning in four structured steps.
       Primary conversion objective:
       Reduce friction by showing the buyer exactly what to expect from first enquiry to handover.
    ========================================== */}
    <section
      id="delivery-process"
      data-section="delivery-process"
      className="bg-[var(--text-dark)] px-4 py-[60px] md:px-[7%] md:py-[80px] lg:py-[96px]"
    >
      {/* Header */}
      <div className="flex flex-col justify-center gap-4 w-full mb-8 md:mb-16">
        <p className="eyebrow-label text-center">How It Comes Together</p>

        <MultiColorText
          fontSize="clamp(32px, 8vw, 75px)"
          className="leading-[1.2] text-center"
          items={[
            { text: "From Concept ", weight: "bold", color: "light" },
            { text: "To Installation", weight: "bold", color: "primary" },
          ]}
        />

        <div className="text-center px-4 md:px-0">
          <TextBuilder
            fontSize="clamp(14px, 4vw, 20px)"
            color="light"
            className="leading-[1.4] md:leading-[1.25]"
          >
            We guide you through a curated journey where architecture, interior design, and landscape artistry converge, transforming your vision into a sanctuary of rejuvenation through our precision-led workflow.
          </TextBuilder>
        </div>
      </div>

      {/* Responsive Grid: 1 column on mobile, 2 on tablet, 4 on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
        {processItems.map((item, index) => (
          <OurProcessCardNew
            key={index}
            number={String(index + 1).padStart(2, "0")}
            title={item.title}
            description={item.description}
            icon={item.icon}
            isActive={activeId === index}
            onClick={() => setActiveId(activeId === index ? null : index)}
          />
        ))}
      </div>
    </section>
    </>
  );
};

export default OurProcessNew;