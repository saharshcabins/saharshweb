"use client";
import React, { useRef } from "react";
import MultiColorText from "../shared/MultiColorText";
import TextBuilder from "../shared/TextBuilder";
import Image from "next/image";
import { Cube, HomeIcon, NoteIcon, Repair } from "@/utils/svgUtils";
import OurProcessCard from "../ui/OurProcessCard";
import { useScroll, useTransform } from "framer-motion";

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

const OurProcess = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const totalCards = processItems.length;
  const speedFactors = [1, 2, 2, 2]; // example: index 1 is faster

  const progress0 = useTransform(
    scrollYProgress,
    [0.3 / totalCards, 0.3 / totalCards + 0.5 / totalCards / speedFactors[0]],
    [0, 1]
  );
  const progress1 = useTransform(
    scrollYProgress,
    [1 / totalCards, 1 / totalCards + 0.5 / totalCards / speedFactors[1]],
    [0, 1]
  );
  const progress2 = useTransform(
    scrollYProgress,
    [2 / totalCards, 2 / totalCards + 0.5 / totalCards / speedFactors[2]],
    [0, 1]
  );
  const progress3 = useTransform(
    scrollYProgress,
    [3 / totalCards, 3 / totalCards + 0.5 / totalCards / speedFactors[3]],
    [0, 1]
  );

  const progresses = [progress0, progress1, progress2, progress3];

  return (
    <div ref={sectionRef} className="relative w-full pb-[10%]">
<div style={{ height: `${(totalCards - 1) * 70}vh` }}>
        <div className="sticky top-0  flex flex-col items-center bg-white">
          {/* Header */}
          <div className="flex flex-row justify-between items-center p-[5%] pb-[2%] gap-8 w-[100%]">
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
                <br className="hidden lg:block" /> living spaces that inspire
                and rejuvenate.
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

          {/* Cards */}
          <div className="flex flex-row mt-[60px] w-full card-container">
            {processItems.map((item, index) => (
              <OurProcessCard
                key={`process-${index}`}
                icon={item.icon}
                title={item.title}
                description={item.description}
                progress={progresses[index]}
                index={index}
                totalCards={totalCards}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
