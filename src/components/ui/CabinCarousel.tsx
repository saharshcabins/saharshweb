"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import MultiColorText from "../shared/MultiColorText";
import TextBuilder from "../shared/TextBuilder";
import { ArrowNew } from "../../utils/svgUtils";

const cabins = [
  {
    name: "Hutsie",
    description: "20×40 ft | Bathroom | 1 Bed | Pantry",
    image: "/assets/cabin/hutsie.webp",
  },
  {
    name: "Rustico",
    description: "20×40 ft | Bathroom | 2 Beds | Kitchen",
    image: "/assets/cabin/rustico.webp",
  },
  {
    name: "Barnie",
    description: "20×40 ft | Bathroom | 2 Beds | Kitchen",
    image: "/assets/cabin/barnie.webp",
  },
  {
    name: "Skylighter",
    description: "20×40 ft | Bathroom | 2 Beds | Kitchen",
    image: "/assets/cabin/skylighter.webp",
  },
  {
    name: "Triango",
    description: "20×40 ft | Bathroom | 2 Beds | Kitchen",
    image: "/assets/cabin/triango.webp",
  },
];

const CabinCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number } | null>(
    null
  );
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isLeft, setIsLeft] = useState(true);

  // Define a consistent slide width
  const slideWidth = 60; // 60vw for width + gap

  // Function to move the carousel
  const moveCarousel = (direction: "left" | "right") => {
    if (direction === "left") {
      setActiveIndex((prev) => (prev - 1 + cabins.length) % cabins.length);
    } else {
      setActiveIndex((prev) => (prev + 1) % cabins.length);
    }
  };

  const handleClick = (i: number) => {
    if (i === activeIndex) {
      if (isLeft) {
        moveCarousel("left");
      } else {
        moveCarousel("right");
      }
    } else {
      setActiveIndex(i);
    }
  };

  return (
    <div className="flex flex-col items-center text-center gap-8 min-h-screen overflow-hidden cursor-none">
      <MultiColorText
        fontSize="56px"
        items={[
          { text: "Our ", color: "dark", weight: "medium" },
          { text: " Bestsellers", color: "primary", weight: "semibold" },
        ]}
      />

      <div className="relative w-full flex justify-center items-center h-[65vh] px-8">
        {cabins.map((cabin, i) => {
          let distance = i - activeIndex;
          if (distance > cabins.length / 2) {
            distance -= cabins.length;
          } else if (distance < -cabins.length / 2) {
            distance += cabins.length;
          }

          const x = `${distance * slideWidth}vw`;
          const zIndex = 20 - Math.abs(distance);
          const opacity = Math.abs(distance) <= 1 ? 1 : 0;

          return (
            <motion.div
              key={i}
              className="absolute rounded-[40px] overflow-hidden shadow-lg flex items-end"
              style={{ width: "55vw", height: "100%" }}
              animate={{ x, opacity, zIndex }}
              transition={{ duration: 1.5, ease: [0.17, 0.67, 0.23, 1.1] }}
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
              onClick={() => handleClick(i)}
            >
              <Image
                
                src={cabin.image}
                alt={cabin.name}
                fill
                className="object-cover"
              />

              <div className="absolute bottom-0 left-0 right-0 h-[180px] bg-gradient-to-t from-[#0F1B26] to-transparent z-10" />

              <div className="relative z-10 p-10 text-left flex items-end justify-between w-full">
                <div className="flex flex-col">
                  <TextBuilder
                    fontSize="56px"
                    weight="bold"
                    color="light"
                    className="leading-[1.2]"
                  >
                    {cabin.name}
                  </TextBuilder>
                  <TextBuilder
                    fontSize="20px"
                    color="light"
                    className="leading-[1.25]"
                  >
                    {cabin.description}
                  </TextBuilder>
                </div>
              </div>

              {hoveredCard === i && cursorPos && (
                <>
                  {i === activeIndex && (
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
                  {i === (activeIndex - 1 + cabins.length) % cabins.length &&
                    i !== activeIndex &&
                    !isLeft && (
                      <div
                        className="absolute pointer-events-none z-20"
                        style={{
                          left: cursorPos.x,
                          top: cursorPos.y,
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        <div className="rounded-[40px] border border-[var(--color-primary)] w-[60px] h-[60px] flex items-center justify-center bg-[rgba(15,27,38,0.6)]">
                          <ArrowNew className="text-[var(--text-light)] w-[24px] h-[24px]" />
                        </div>
                      </div>
                    )}
                  {i === (activeIndex + 1) % cabins.length &&
                    i !== activeIndex &&
                    isLeft && (
                      <div
                        className="absolute pointer-events-none z-20"
                        style={{
                          left: cursorPos.x,
                          top: cursorPos.y,
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        <div className="rounded-[40px] border border-[var(--color-primary)] w-[60px] h-[60px] flex items-center justify-center bg-[rgba(15,27,38,0.6)]">
                          <ArrowNew className="text-[var(--text-light)] w-[24px] h-[24px]" />
                        </div>
                      </div>
                    )}
                </>
              )}
            </motion.div>
          );
        })}
      </div>

      <TextBuilder fontSize="24px" color="dark">
        Saharsh Cabins are utilizing high-quality materials and innovative
        construction <br /> techniques to ensure durability, efficiency, and
        aesthetic appeal.
      </TextBuilder>
    </div>
  );
};

export default CabinCarousel;
