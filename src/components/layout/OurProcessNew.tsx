"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import MultiColorText from "../shared/MultiColorText";
import TextBuilder from "../shared/TextBuilder";
import OurProcessCardNew from "../ui/OurProcessCardNew";
import { NoteIcon, HomeIcon, Cube, Repair } from "@/utils/svgUtils";

const OurProcessNew: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalShift, setTotalShift] = useState(0);
  const [cardWidth, setCardWidth] = useState(580);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

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

  // ✅ Dynamically measure actual card + gap width on mount and resize
  useEffect(() => {
    const measure = () => {
      if (!cardsRef.current) return;
      const firstCard = cardsRef.current.children[0] as HTMLElement;
      const secondCard = cardsRef.current.children[1] as HTMLElement;
      if (!firstCard || !secondCard) return;

      const gap =
        secondCard.getBoundingClientRect().left -
        firstCard.getBoundingClientRect().right;
      const measured = firstCard.getBoundingClientRect().width + gap;

      setCardWidth(measured);
      setTotalShift(measured * (processItems.length - 1));
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // ✅ Smooth spring-based x transform
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0px", `-${totalShift}px`]
  );

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const currentShift = latest * totalShift;
    const newIndex = Math.min(
      processItems.length - 1,
      Math.round(currentShift / cardWidth)
    );
    setActiveIndex(newIndex);
  });

  // ✅ Scroll height scales with number of cards (no hardcoded 350vh)
  const scrollHeight = `${(processItems.length + 1) * 100}vh`;

  return (
    <section
      ref={targetRef}
      style={{ height: scrollHeight }}
      className="relative bg-[var(--text-dark)] pl-[7%] py-[7%]"
    >
      <div className="sticky top-0 flex flex-col gap-[193px] overflow-hidden ">
        {/* Header */}
        <div className="flex flex-row justify-between">
          <MultiColorText
            fontSize="56px"
            className="leading-[1.2] text-start"
            items={[
              { text: "The ", weight: "medium", color: "light" },
              { text: "Saharsh", weight: "bold", color: "primary", breakAfter: true },
              { text: "Quality Process", weight: "medium", color: "light" },
            ]}
          />
          <div className="max-w-[544px] mr-[7%]">
            <TextBuilder fontSize="24px" color="light" className="leading-[1.25]">
              From sleek architecture to luxurious interiors & scenic landscapes
              come together to create living spaces that inspire and rejuvenate.
            </TextBuilder>
          </div>
        </div>

        {/* ✅ Cards with spring smoothing */}
        <motion.div
          ref={cardsRef}
          style={{
            x,
            transition: "none", // let framer handle it
          }}
          className="flex gap-10 will-change-transform"
        >
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