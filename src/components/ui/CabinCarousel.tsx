"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import MultiColorText from "../shared/MultiColorText";
import TextBuilder from "../shared/TextBuilder";
import { ArrowNew } from "../../utils/svgUtils";

const cabins = [
  { name: "Hutsie", description: "20×40 ft | Bathroom | 1 Bed | Pantry", image: "/assets/cabin/hutsie.jpg" },
  { name: "Rustico", description: "20×40 ft | Bathroom | 2 Beds | Kitchen", image: "/assets/cabin/rustico.jpg" },
  { name: "Barnie", description: "20×40 ft | Bathroom | 2 Beds | Kitchen", image: "/assets/cabin/barnie.jpg" },
  { name: "Skylighter", description: "20×40 ft | Bathroom | 2 Beds | Kitchen", image: "/assets/cabin/skylighter.jpg" },
  { name: "Triango", description: "20×40 ft | Bathroom | 2 Beds | Kitchen", image: "/assets/cabin/triango.jpg" },
];

const CabinCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number } | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isLeft, setIsLeft] = useState(true);

  const handleClick = (i: number) => {
    if (i === activeIndex) {
      // Center card → move left/right
      if (isLeft && activeIndex > 0) {
        setActiveIndex((prev) => prev - 1);
      } else if (!isLeft && activeIndex < cabins.length - 1) {
        setActiveIndex((prev) => prev + 1);
      }
    } else if (i === activeIndex - 1 && !isLeft) {
      // Left card → move right
      setActiveIndex((prev) => prev + 1);
    } else if (i === activeIndex + 1 && isLeft) {
      // Right card → move left
      setActiveIndex((prev) => prev - 1);
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

      {/* Cards */}
      <div className="relative w-full flex justify-center items-center h-[65vh] px-8">
        {cabins.map((cabin, i) => {
          const offset = i - activeIndex;

          let x = "100%";
          let zIndex = 0;
          let opacity = 0;

          if (offset === 0) {
            x = "0%";
            zIndex = 20;
            opacity = 1;
          } else if (offset === -1) {
            x = "-105%";
            zIndex = 10;
            opacity = 1;
          } else if (offset === 1) {
            x = "105%";
            zIndex = 10;
            opacity = 1;
          }

          return (
            <motion.div
              key={i}
              className="absolute rounded-[40px] overflow-hidden shadow-lg flex items-end"
              style={{ width: "55vw", height: "100%" }}
              animate={{ x, opacity, zIndex }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const mid = rect.left + rect.width / 2;
                setHoveredCard(i);
                setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
                setIsLeft(e.clientX < mid);
              }}
              onMouseLeave={() => {
                setHoveredCard(null);
                setCursorPos(null);
              }}
              onClick={() => handleClick(i)}
            >
              <Image unoptimized src={cabin.image} alt={cabin.name} fill className="object-cover" />

              {/* Gradient overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-[180px] bg-gradient-to-t from-[#0F1B26] to-transparent z-10" />

              {/* Content */}
              <div className="relative z-10 p-10 text-left flex items-end justify-between w-full">
                <div className="flex flex-col">
                  <TextBuilder fontSize="56px" weight="bold" color="light" className="leading-[1.2]">
                    {cabin.name}
                  </TextBuilder>
                  <TextBuilder fontSize="20px" color="light" className="leading-[1.25]">
                    {cabin.description}
                  </TextBuilder>
                </div>
              </div>

              {/* Floating Arrow that follows cursor */}
              {hoveredCard === i && cursorPos && (
                <>
                  {/* Center card arrows */}
                  {i === activeIndex && (
                    !(isLeft && activeIndex === 0) && // no left arrow if first
                    !(!isLeft && activeIndex === cabins.length - 1) && ( // no right arrow if last
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
                    )
                  )}

                  {/* Left card → only right arrow */}
                  {i === activeIndex - 1 && !isLeft && (
                    <div
                      className="absolute pointer-events-none z-20"
                      style={{
                        left: cursorPos.x,
                        top: cursorPos.y,
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <div className="rounded-[40px] border border-[var(--color-primary)] w-[60px] h-[60px] flex items-center justify-center bg-[rgba(15,27,38,0.6)]">
                        <ArrowNew className="text-[var(--text-light)] w-[24px] h-[24px]" flipped />
                      </div>
                    </div>
                  )}

                  {/* Right card → only left arrow */}
                  {i === activeIndex + 1 && isLeft && (
                    <div
                      className="absolute pointer-events-none z-20"
                      style={{
                        left: cursorPos.x,
                        top: cursorPos.y,
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <div className="rounded-[40px] border border-[var(--color-primary)] w-[60px] h-[60px] flex items-center justify-center bg-[rgba(15,27,38,0.6)]">
                        <ArrowNew className="text-[var(--text-light)] w-[24px] h-[24px]" flipped={false} />
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
        Saharsh Cabins are utilizing high-quality materials and innovative construction <br /> techniques to ensure
        durability, efficiency, and aesthetic appeal.
      </TextBuilder>
    </div>
  );
};

export default CabinCarousel;
