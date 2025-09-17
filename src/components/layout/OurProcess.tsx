// components/OurProcess.tsx
"use client";
import React, { useRef, useState, useEffect } from "react";
import MultiColorText from "../shared/MultiColorText";
import TextBuilder from "../shared/TextBuilder";
import Image from "next/image";
import { Cube, HomeIcon, NoteIcon, Repair } from "@/utils/svgUtils";
import OurProcessCard from "../ui/OurProcessCard";

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
  const [scrollProgress, setScrollProgress] = useState(0);

 useEffect(() => {
  const handleScroll = () => {
    if (!sectionRef.current) return;

    const cardContainer = sectionRef.current.querySelector(".card-container") as HTMLElement;
    if (!cardContainer) return;

    const sectionTop = sectionRef.current.offsetTop;
    const sectionHeight = sectionRef.current.offsetHeight;
    const viewportHeight = window.innerHeight;
    const scrollPosition = window.scrollY;

    // card container metrics
    const cardTop = cardContainer.offsetTop + sectionTop;
    const cardHeight = cardContainer.offsetHeight;
    const cardCenter = cardTop + cardHeight / 2;

    // viewport center
    const viewportCenter = scrollPosition + viewportHeight / 2;

    // Start when card container center aligns with viewport center
    const animationStartScroll = cardCenter +30 - viewportHeight / 2;
    // End when the section bottom aligns with viewport bottom
    const animationEndScroll = sectionTop + sectionHeight - viewportHeight / 2;

    const totalAnimationScroll = animationEndScroll - animationStartScroll;
    const relativeScroll = scrollPosition - animationStartScroll;

    let progress = relativeScroll / totalAnimationScroll;
    progress = Math.min(1, Math.max(0, progress));

    setScrollProgress(progress);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  return (
    <div ref={sectionRef} className="relative w-full pb-[10%]">
      <div style={{ height: `${processItems.length * 100}vh` }}>
        <div className="sticky top-0 h-screen flex flex-col items-center bg-white">
          {/* Header */}
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
                <br className="hidden lg:block" /> living spaces that inspire
                and rejuvenate.
              </TextBuilder>
            </div>
            <Image
              
              src="/assets/logo/logo_icon.svg"
              alt="logo-saharsh"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>

          {/* Cards */}
          <div className="flex flex-row mt-[60px] w-full card-container">
            {processItems.map((item, index) => {
              const totalCardsToAnimate = processItems.length;
              const cardStartProgress = index / totalCardsToAnimate;
              const cardEndProgress = (index + 1) / totalCardsToAnimate;

              const cardProgress = Math.min(
                1,
                Math.max(0, (scrollProgress - cardStartProgress) * totalCardsToAnimate)
              );

              return (
                <OurProcessCard
                  key={`process-${index}`}
                  totalCards={processItems.length}
                  index={index}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  progress={cardProgress}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProcess;