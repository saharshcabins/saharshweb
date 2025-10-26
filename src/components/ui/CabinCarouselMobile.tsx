"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import TextBuilderMobile from "../shared/TextBuilderMobile";
import { ArrowNew } from "../../utils/svgUtils";
import MultiColorTextMobile from "../shared/MultiTextBuilderMobile";

const cabins = [
  { name: "Hutsie", description: "20×40 ft | Bathroom | 1 Bed | Pantry", image: "/assets/cabin/hutsie.webp" },
  { name: "Rustico", description: "20×40 ft | Bathroom | 2 Beds | Kitchen", image: "/assets/cabin/rustico.webp" },
  { name: "Barnie", description: "20×40 ft | Bathroom | 2 Beds | Kitchen", image: "/assets/cabin/barnie.webp" },
  { name: "Skylighter", description: "20×40 ft | Bathroom | 2 Beds | Kitchen", image: "/assets/cabin/skylighter.webp" },
  { name: "Triango", description: "20×40 ft | Bathroom | 2 Beds | Kitchen", image: "/assets/cabin/triango.webp" },
];

const CabinCarouselMobile = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Define a consistent slide width in pixels
  const slideWidth = 265 + 20; // card width (265px) + gap (20px)

  // Function to move the carousel
  const moveCarousel = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setActiveIndex((prev) => (prev - 1 + cabins.length) % cabins.length);
    } else {
      setActiveIndex((prev) => (prev + 1) % cabins.length);
    }
  };

  return (
    <div className="flex flex-col items-center text-center gap-8  overflow-hidden">
      <MultiColorTextMobile
        fontSize="40px" // Adjusted font size for mobile
        items={[
          { text: "Our ", color: "dark", weight: "medium" },
          { text: " Bestsellers", color: "primary", weight: "semibold" },
        ]}
      />

      {/* Cards Container */}
      <div className="relative w-full flex justify-center items-center h-[230px]">
        {cabins.map((cabin, i) => {
          // Corrected distance and looping logic
          let distance = i - activeIndex;
          if (distance > cabins.length / 2) {
            distance -= cabins.length;
          } else if (distance < -cabins.length / 2) {
            distance += cabins.length;
          }

          const x = distance * slideWidth;
          const zIndex = 20 - Math.abs(distance);
          const opacity = Math.abs(distance) <= 1 ? 1 : 0;

          return (
            <motion.div
              key={i}
              className="absolute rounded-[24px] overflow-hidden shadow-lg flex items-end w-[265px] h-[211px]" // Fixed sizes
              animate={{ x, opacity, zIndex }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <Image  src={cabin.image} alt={cabin.name} fill className="object-cover" />

              {/* Gradient overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-t from-[#0F1B26] to-transparent z-10" />

              {/* Content */}
              <div className="relative z-10 p-5 text-left flex flex-col items-start w-full">
                <TextBuilderMobile fontSize="18px" weight="bold" color="light" className="leading-[1.2]">
                  {cabin.name}
                </TextBuilderMobile>
                <TextBuilderMobile fontSize="10px" color="light" className="leading-[1.25]">
                  {cabin.description}
                </TextBuilderMobile>
              </div>

              {/* Navigation Arrows */}
              {i === activeIndex && (
                <div className="absolute inset-0 flex items-center justify-between z-20 px-1">
                  <button
                    onClick={() => moveCarousel('left')}
                    className="p-2 bg-[rgba(15,27,38,0.5)] rounded-full border border-[var(--color-primary)]"
                  >
                    <ArrowNew  className="text-[var(--text-light)] w-5 h-5" />
                  </button>
                  <button
                    onClick={() => moveCarousel('right')}
                    className="p-2 bg-[rgba(15,27,38,0.5)] rounded-full border border-[var(--color-primary)]"
                  >
                    <ArrowNew flipped className="text-[var(--text-light)] w-5 h-5" />
                  </button>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      <TextBuilderMobile fontSize="12px" color="dark" className="text-center px-6">
        Saharsh Cabins are utilizing high-quality materials and innovative construction techniques to ensure
        durability, efficiency, and aesthetic appeal.
      </TextBuilderMobile>
    </div>
  );
};

export default CabinCarouselMobile;