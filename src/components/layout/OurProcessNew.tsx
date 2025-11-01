"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import MultiColorText from "../shared/MultiColorText";
import TextBuilder from "../shared/TextBuilder";
import OurProcessCardNew from "../ui/OurProcessCardNew";
import { NoteIcon, HomeIcon, Cube, Repair } from "@/utils/svgUtils";

const OurProcessNew: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const processItems = [
    {
      title: (
        <>
          Requirements &<br /> Assessments
        </>
      ),
      description:
        "Understanding your requirements, budget, and project scope led to the initial discussion of design possibilities and technical specifications.",
      icon: NoteIcon,
    },
    {
      title: (
        <>
          Designs &<br /> Quotations
        </>
      ),
      description:
        "After developing conceptual designs and layouts, a detailed quotation outlining costs and timelines was provided.",
      icon: HomeIcon,
    },
    {
      title: (
        <>
          Manufacturing &<br /> Quality Control
        </>
      ),
      description:
        "Ensuring top-notch quality during the manufacturing process with thorough checks and adherence to standards.",
      icon: Cube,
    },
    {
      title: (
        <>
          Delivery &<br /> Installation
        </>
      ),
      description:
        "Careful delivery and professional installation to ensure the project is completed efficiently and safely.",
      icon: Repair,
    },
  ];

  // Width of each card (approx or fixed in CSS)
  const CARD_WIDTH = 540 + 40; // card width + gap ≈ total per slide

  // Horizontal motion transformation
  const totalShift = (processItems.length - 1) * CARD_WIDTH;
  const x = useTransform(scrollYProgress, [0, 1], ["0px", `-${totalShift}px`]);

  // Update active index based on current scroll progress and offset
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const progress = latest;
    const currentShift = progress * totalShift; // current x offset (px)
    const newIndex = Math.min(
      processItems.length - 1,
      Math.round(currentShift / CARD_WIDTH)
    );
    setActiveIndex(newIndex);
  });

  return (
    <section
      ref={targetRef}
      className="relative h-[350vh] bg-[var(--text-dark)] pl-[7%] py-[7%]"
    >
      <div className="sticky top-0 flex  flex-col gap-[193px] overflow-hidden">
        {/* Header */}
        <div className="flex flex-row justify-between">
          <MultiColorText
            fontSize="56px"
            className="leading-[1.2] text-start"
            items={[
              { text: "The ", weight: "medium", color: "light" },
              {
                text: "Saharsh",
                weight: "bold",
                color: "primary",
                breakAfter: true,
              },
              { text: "Quality Process", weight: "medium", color: "light" },
            ]}
          />
          <div className="max-w-[544px] mr-[7%]">
            <TextBuilder
              fontSize="24px"
              color="light"
              className="leading-[1.25]"
            >
              From sleek architecture to luxurious interiors & scenic landscapes
              come together to create living spaces that inspire and rejuvenate.
            </TextBuilder>
          </div>
        </div>

        {/* Cards Motion Section */}
        <motion.div style={{ x }} className="flex gap-10">
          {processItems.map((item, index) => (
            <OurProcessCardNew
              key={index}
              number={String(index + 1).padStart(2, "0")}
              title={item.title}
              description={item.description}
              icon={item.icon}
              isActive={index === activeIndex}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurProcessNew;
