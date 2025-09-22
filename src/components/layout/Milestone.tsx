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
    image: [
      {
        url: "/assets/milestone/banglore.png",
        label:
          "Laying the foundation for Saharsh Cabins with the first manufacturing plant in Mumbai",
        location: "Mumbai",
      },
    ],
  },
  {
    year: "2014",
    title: "Expanded Product Line",
    description:
      "Introduced a new range of modular cabins, including custom office and studio designs.",
    image: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=420&q=80",
        label:
          "First Major Project - Housing colony of 100+ prefab cabins set up in Shimla",
        location: "Shimla",
      },
    ],
  },

  {
    year: "2024",
    title: "International Partnerships",
    description:
      "Began a new chapter by exporting our cabins to clients in Europe and North America.",
    image: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=420&q=80",
        label:
          "Launched ‘Qbinn Tusker’ premium cottages & resorts in Bangalore.",
        location: "Bangalore",
      },
    ],
  },
  {
    year: "2025",
    title: "International Partnerships",
    description:
      "Began a new chapter by exporting our cabins to clients in Europe and North America.",
    image: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=420&q=80",
        label: "International Market Entry - Our first export venture to USA",
        location: "USA",
      },
    ],
  },
];

const Milestone = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeImageIndex, setImageActiveIndex] = useState(0);
  const [movedCards, setMovedCards] = useState<number[]>([]);

  const [cursorPos, setCursorPos] = useState<{ x: number; y: number } | null>(
    null
  );
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isLeft, setIsLeft] = useState(true);

  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const scrollDelta = useRef(0);
  const scrollLock = useRef(false);
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    const updateWidth = () => setWindowWidth(window.innerWidth);
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);
  // ✅ Handle scroll for card navigation
  // 👇 Reset milestone animation whenever section re-enters viewport
  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // ✅ reset state when entering
            setActiveIndex(0);
            setMovedCards([0]);
            setImageActiveIndex(0);
          }
        });
      },
      { threshold: 0.6 } // trigger when 60% of section is visible
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let jumped = false; // 🚀 lock so we don't jump multiple times

    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;
      const scrollY = window.scrollY;

      const start = sectionTop - viewportHeight / 2;
      const end = sectionTop + sectionHeight - viewportHeight / 2;

      let progress = (scrollY - start) / (end - start);
      progress = Math.min(Math.max(0, progress), 1);

      const milestonesCount = milestoneData.length;
      const newIndex = Math.floor(progress * milestonesCount);
      const clampedIndex = Math.min(newIndex, milestonesCount - 1);

      if (clampedIndex !== activeIndex) {
        setActiveIndex(clampedIndex);
        setMovedCards((prev) => [...new Set([...prev, clampedIndex])]);
      }

      // 🚀 Jump once when last milestone is reached and user scrolls further
      if (
        clampedIndex === milestonesCount - 1 &&
        !jumped &&
        scrollY > sectionTop + sectionHeight - viewportHeight * 0.8
      ) {
        jumped = true;
        const next = section.nextElementSibling as HTMLElement | null;
        if (next) {
          next.scrollIntoView({ behavior: "smooth" });
        }
      }

      // 🔒 Reset lock only when user scrolls back above the section
      if (scrollY < sectionTop - viewportHeight / 2) {
        jumped = false;
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [activeIndex]);

  const handleHoverClick = (index: number) => {
    if (index <= activeIndex) {
      setActiveIndex(index);
      setMovedCards(Array.from({ length: index + 1 }, (_, i) => i));
    }
  };

  const handleClick = () => {
    if (isLeft && activeImageIndex > 0) {
      setImageActiveIndex((prev) => prev - 1);
    } else if (!isLeft && activeImageIndex < activeImageData.length - 1) {
      setImageActiveIndex((prev) => prev + 1);
    }
  };
  const activeMilestone = milestoneData[activeIndex] ?? milestoneData[0];
  const activeImageData = activeMilestone.image;

  const handleArrowClick = (index: number) => {
    const targetIndex = index + 1;
    if (targetIndex < milestoneData.length) {
      setActiveIndex(targetIndex);
      setMovedCards((prev) => [...new Set([...prev, targetIndex])]);
    }
  };

  return (
    <div ref={sectionRef} className="relative h-[400vh] bg-[var(--text-dark)]">
      {/* Sticky inner container */}
      <div className="sticky top-0 h-[990px] w-full overflow-hidden flex flex-col">
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
            <div
              className="flex flex-col gap-10 w-[40%] relative "
              ref={cardRef}
            >
              {milestoneData.map((milestone, index) => {
                const isAffected = index <= activeIndex && index !== 0; // all ≤ activeIndex except 0

                return (
                  <div
                    key={index}
                    className={`transition-all duration-500 ${
                      isAffected
                        ? `${
                            windowWidth >= 1020 && windowWidth <= 1265
                              ? "-mt-[90%]" // 👈 extra negative margin for this range
                              : " lg:-mt-[75%] xl:-mt-[75%] 2xl:-mt-[45%]"
                          }`
                        : ""
                    }`}
                    style={{ zIndex: index === activeIndex ? 20 : 10 }}
                  >
                    <MilestoneCard
                      index={index}
                      year={milestone.year}
                      title={milestone.title}
                      description={milestone.description}
                      isActive={index === activeIndex}
                      isStacked={index < activeIndex}
                      activeIndex={activeIndex}
                      onArrowClick={() => handleArrowClick(index)}
                      onHoverClick={handleHoverClick}
                    />
                  </div>
                );
              })}
            </div>

            {/* Images Section */}
            <div className="absolute right-[6%] top-[-3%]">
              <TextBuilder fontSize="24px" weight="bold" color="light50">
                {milestoneData[activeIndex].year}
              </TextBuilder>
            </div>
            <div className="absolute right-[12%] top-[2%]">
              <Label text={activeImageData[activeImageIndex].location} />
            </div>
            <div className="absolute right-0 top-[10%] h-[310px] w-[53%] overflow-hidden">
              <div className="relative w-full h-full flex items-center">
                {activeImageData.map((item, i) => {
                  const distance = i - activeImageIndex;
                  const x = distance * 460;

                  return (
                    <motion.div
                      key={i}
                      className="absolute flex flex-col gap-4 cursor-pointer"
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
                      {/* Image */}
                      <div className="relative w-[420px] h-[240px] rounded-[24px] ">
                        <Image
                          unoptimized
                          src={item.url}
                          alt={`milestone-${i}`}
                          fill
                          className="object-cover rounded-[24px]"
                        />
                      </div>

                      {/* Label - constrained to image width */}
                      <div className="w-[420px]">
                        <TextBuilder
                          fontSize="20px"
                          color="lighter"
                          className="break-words text-center"
                        >
                          {item.label}
                        </TextBuilder>
                      </div>

                      {/* Hover Arrow */}
                      {hoveredCard === i &&
                        cursorPos &&
                        activeImageData.length > 1 &&
                        !(
                          (i === 0 && isLeft) ||
                          (i === activeImageData.length - 1 && !isLeft)
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
          style={{ backgroundImage: "url('/assets/milestone/map.webp')" }}
        />
      </div>
    </div>
  );
};

export default Milestone;
