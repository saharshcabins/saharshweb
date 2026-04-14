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
    description: " 20'x8' | Bathroom | 2 Pax | Kitchenet",
    image: "/assets/cabin/hutsie.png",
  },
  {
    name: "Rustico",
    description: " 24'x12' | Bathroom | 2 – 3 Pax | Kitchenet",
    image: "/assets/cabin/rustico.png",
  },
  {
    name: "Barnie",
    description: " 24'x10' | Bathroom | 3 - 4 Pax | Kitchenet",
    image: "/assets/cabin/barnie.png",
  },
  {
    name: "Skylighter",
    description: " 20'x10' | Bathroom | 2 – 3 Pax | Kitchenet",
    image: "/assets/cabin/skylighter.png",
  },
  {
    name: "Triango",
    description: " 20'x12' | Bathroom | 2 – 3 Pax | Kitchenet",
    image: "/assets/cabin/triango.png",
  },
];

const CabinCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slideWidth = 60;

  const moveCarousel = (direction: "left" | "right") => {
    if (direction === "left") {
      setActiveIndex((prev) => (prev - 1 + cabins.length) % cabins.length);
    } else {
      setActiveIndex((prev) => (prev + 1) % cabins.length);
    }
  };

  return (
    <div className="flex flex-col items-center text-center gap-8 min-h-screen overflow-hidden">
      <MultiColorText
        fontSize="75px"
        items={[
          { text: "Our ", color: "dark", weight: "bold" },
          { text: " Bestsellers", color: "primary", weight: "bold" },
        ]}
      />

      {/* Carousel wrapper with arrows outside */}
      <div className="relative w-full flex justify-center items-center h-[65vh]">
        {/* Left Arrow */}
        <button
          onClick={() => moveCarousel("left")}
          className=" cursor-pointer absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-[var(--section-accent)] hover:bg-[var(--color-primary)] rounded-[40px] z-20 w-[80px] h-[54px] flex justify-center items-center text-[var(--color-primary)] hover:text-[var(--text-light)] transition-colors"
        >
          <ArrowNew className="w-[26px] h-[26px]" flipped={false} />
        </button>

        {/* Right Arrow */}

        <button
          onClick={() => moveCarousel("right")}
          className=" cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 z-30 z-30 bg-[var(--section-accent)] hover:bg-[var(--color-primary)] rounded-[40px] z-20 w-[80px] h-[54px] flex justify-center items-center text-[var(--color-primary)] hover:text-[var(--text-light)] transition-colors"
        >
          <ArrowNew className="w-[26px] h-[26px]" flipped={true} />
        </button>
        {/* Cards */}
        {cabins.map((cabin, i) => {
          let distance = i - activeIndex;
          if (distance > cabins.length / 2) distance -= cabins.length;
          else if (distance < -cabins.length / 2) distance += cabins.length;

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
            >
              <Image
                src={cabin.image}
                alt={cabin.name}
                fill
                className="object-cover"
              />

              <div className="absolute bottom-0 left-0 right-0 h-[180px] bg-gradient-to-t from-[#0F1B26] to-transparent z-10" />
              <div className="relative z-10 p-10 text-center flex justify-center w-full">
                <div className="flex flex-col">
                  <TextBuilder
                    fontSize="30px"
                    weight="bold"
                    color="light"
                    className="leading-[1.2]"
                  >
                    {cabin.name}
                  </TextBuilder>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default CabinCarousel;
