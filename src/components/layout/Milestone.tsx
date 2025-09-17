"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import MultiColorText from "../shared/MultiColorText";
import TextBuilder from "../shared/TextBuilder";
import MilestoneCard from "../ui/MilestoneCard";
import { ArrowNew } from "@/utils/svgUtils";
import Label from "../ui/HeroLabel";

const milestoneData = [
  {
    year: "2013",
    title: "Company Inception",
    description:
      "Laying the foundation for Saharsh Cabins with the first manufacturing plant in Mumbai.",
  },
  {
    year: "2015",
    title: "Expanded Product Line",
    description:
      "Introduced a new range of modular cabins, including custom office and studio designs.",
  },
  {
    year: "2018",
    title: "Eco-Friendly Certification",
    description:
      "Received certification for our sustainable manufacturing processes and use of recycled materials.",
  },
  {
    year: "2020",
    title: "International Partnerships",
    description:
      "Began a new chapter by exporting our cabins to clients in Europe and North America.",
  },
];

const imageData = [
  {
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=420&q=80",
    label: "Mumbai Plant Inception",
  },
  {
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=420&q=80",
    label: "Product Line Expansion",
  },
  {
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=420&q=80",
    label: "Eco-Friendly Milestone",
  },
  {
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=420&q=80",
    label: "International Growth",
  },
];

const Milestone = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeImageIndex, setImageActiveIndex] = useState(0);

  const [cursorPos, setCursorPos] = useState<{ x: number; y: number } | null>(
    null
  );
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isLeft, setIsLeft] = useState(true);

  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollLock = useRef(false);

  // lock scroll into card-by-card navigation
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!sectionRef.current || scrollLock.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
      if (!isVisible) return;

      scrollLock.current = true;
      setTimeout(() => (scrollLock.current = false), 600);

      if (e.deltaY > 0 && activeIndex < milestoneData.length - 1) {
        setActiveIndex((prev) => prev + 1);
        e.preventDefault();
      } else if (e.deltaY < 0 && activeIndex > 0) {
        setActiveIndex((prev) => prev - 1);
        e.preventDefault();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [activeIndex]);

  // handle click (tap navigation) - linear (not looping)
  const handleClick = () => {
    if (isLeft && activeImageIndex > 0) {
      setImageActiveIndex((prev) => prev - 1);
    } else if (!isLeft && activeImageIndex < imageData.length - 1) {
      setImageActiveIndex((prev) => prev + 1);
    }
  };

  return (
    <div
      ref={sectionRef}
      className="relative bg-[var(--text-dark)] h-[990px] overflow-hidden"
    >
      {/* Left: Heading + Cards */}
      <div className="absolute left-0 top-0 pl-[7%] pt-[7%] w-full h-full flex flex-col z-10">
        <div className="flex flex-col items-start gap-3 pb-[6%]">
          <MultiColorText
            fontSize="56px"
            className="leading-[1.2] text-start"
            items={[
              { text: "Visionary ", weight: "medium", color: "light" },
              { text: "Milestones", weight: "bold", color: "primary" },
            ]}
          />
          <TextBuilder
            fontSize="20px"
            color="lighter"
            className="leading-[1.25]"
          >
            Transforming modern living spaces for 12 years..
          </TextBuilder>
        </div>

        <div className="flex flex-row gap-10 justify-between w-full h-full relative">
          {/* Cards Section */}
          <div className="flex flex-col gap-10 w-[40%]">
            {milestoneData.map((milestone, index) => (
              <MilestoneCard
                key={index}
                isStacked={index < activeIndex}
                year={milestone.year}
                title={milestone.title}
                description={milestone.description}
                isActive={index === activeIndex}
              />
            ))}
          </div>

          {/* Images Section */}
                    <div className="absolute right-[6%] top-[1%]">
            <TextBuilder fontSize="24px" weight="bold" color="light50">
              2013
            </TextBuilder>
          </div>
          <div className="absolute right-[12%] top-[5%]">
            <Label text="Mumbai"/>
          </div>
          <div className="absolute right-0 top-[20%] h-[300px] w-[53%] overflow-hidden">
            <div className="relative w-full h-full flex items-center">
              {imageData.map((item, i) => {
                const distance = i - activeImageIndex;
                const x = distance * 460;

                return (
                  <motion.div
                    key={i}
                    className="absolute flex flex-col gap-6 cursor-pointer"
                    animate={{
                      x,
                      opacity: distance === 0 ? 1 : 0.7,
                      zIndex: distance === 0 ? 20 : 10,
                    }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    onMouseMove={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const mid = rect.left + rect.width / 2;
                      setHoveredCard(i);
                      setCursorPos({
                        x: e.clientX - rect.left,
                        y: e.clientY - rect.top,
                      });
                      setIsLeft(e.clientX < mid);
                    }}
                    onMouseLeave={() => {
                      setHoveredCard(null);
                      setCursorPos(null);
                    }}
                    onClick={handleClick}
                  >
                    {/* Image Card */}
                    <div className="relative w-[420px] h-[240px] rounded-[24px] overflow-hidden">
                      <Image
                        unoptimized
                        src={item.url}
                        alt={`milestone-${i}`}
                        fill
                        className="object-cover rounded-[24px]"
                      />
                    </div>

                    {/* Label Text */}
                    <TextBuilder fontSize="20px" color="lighter">
                      {item.label}
                    </TextBuilder>

                    {/* Floating Arrow on Hover */}
                    {hoveredCard === i &&
                      cursorPos &&
                      imageData.length > 1 &&
                      !(
                        (i === 0 && isLeft) ||
                        (i === imageData.length - 1 && !isLeft)
                      ) && (
                        <div
                          className="absolute pointer-events-none z-20"
                          style={{
                            left: cursorPos.x,
                            top: cursorPos.y,
                            transform: "translate(-50%, -50%)",
                          }}
                        >
                          <div className="rounded-[40px] border border-[var(--color-primary)] w-[60px] h-[60px] flex items-center justify-center bg-[rgba(15,27,38,0.6)]">
                            <ArrowNew
                              className="text-[var(--text-light)] w-[24px] h-[24px]"
                              flipped={!isLeft}
                            />
                          </div>
                        </div>
                      )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Background Map */}
      <div
        className="absolute right-0 top-0 w-[60%] h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/milestone/map.webp')",
        }}
      />
    </div>
  );
};

export default Milestone;
