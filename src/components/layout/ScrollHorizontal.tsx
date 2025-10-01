"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { HomeIcon, NoteIcon, Cube, Repair } from "@/utils/svgUtils";
import OurProcessCard from "../ui/OurProcessCard";
import MultiColorText from "../shared/MultiColorText";
import TextBuilder from "../shared/TextBuilder";
import Image from "next/image";

const processItems = [
  {
    title: "Requirements & Assessments",
    description:
      "Understanding your requirements, budget, and project scope led to the initial discussion of design possibilities and technical specifications.",
    icon: <NoteIcon />,
  },
  {
    title: "Designs & Quotations",
    description:
      "After developing conceptual designs and layouts, a detailed quotation outlining costs and timelines was provided.",
    icon: <HomeIcon />,
  },
  {
    title: "Manufacturing & Quality Control",
    description:
      "Ensuring top-notch quality during the manufacturing process with thorough checks and adherence to standards.",
    icon: <Cube />,
  },
  {
    title: "Delivery & Installation",
    description:
      "Careful delivery and professional installation to ensure the project is completed efficiently and safely.",
    icon: <Repair />,
  },
];

const ScrollHorizontal = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Scale progress to make shrink faster
  const scaledProgress = useTransform(scrollYProgress, [0, 1], [0, 1.5]);

  return (
    <section
      ref={targetRef}
      style={{ height: `${processItems.length-1 * 100}vh` }}
      className="relative"
    >
      {/* Section heading */}
      <div className="flex flex-row justify-between items-center p-[5%] pb-[2%] gap-8 w-[90%]">
        <div className="flex flex-col items-start justify-between gap-8">
          <MultiColorText
            fontSize="56px"
            items={[
              { text: "Our Proven", color: "dark", weight: "medium" },
              { text: " Process", color: "primary", weight: "bold" },
            ]}
          />
          <TextBuilder className="" fontSize="24px" color="dark">
            From sleek architecture to luxurious interiors &{" "}
            <br className="hidden lg:block" />
            scenic landscapes come together to create{" "}
            <br className="hidden lg:block" /> living spaces that inspire and
            rejuvenate.
          </TextBuilder>
        </div>
        <Image
          unoptimized
          src="/assets/logo/logo_icon.svg"
          alt="logo-saharsh"
          width={200}
          height={200}
          className="object-contain"
        />
      </div>

      {/* Sticky scrolling cards */}
      <div className="sticky top-0 flex h-[20%] items-center overflow-hidden">
        <div className="flex flex-row ">
          {processItems.map((item, idx) => (
            <OurProcessCard
              key={idx}
              title={item.title}
              description={item.description}
              icon={item.icon}
              progress={scaledProgress} // <-- faster shrink
              index={idx}
              totalCards={processItems.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollHorizontal;
