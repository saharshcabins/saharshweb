"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, scale } from "framer-motion";
import Image from "next/image";
import MultiColorText from "../shared/MultiColorText";
import TextBuilder from "../shared/TextBuilder";
import { FaArrowRight } from "react-icons/fa";
import { Arrow, ArrowNew } from "../../utils/svgUtils";

const cabins = [
  {
    name: "Hutsie",
    description: "20×40 ft | Bathroom | 1 Bed | Pantry",
    image:
      "https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Hutsite",
    description: "20×40 ft | Bathroom | 2 Beds | Kitchen",
    image:
      "https://images.unsplash.com/photo-1588557132645-ff567110cafd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Cabana",
    description: "25×45 ft | Bathroom | 2 Beds | Living Space",
    image:
      "https://media.istockphoto.com/id/2170176939/photo/cozy-and-modern-living-room-in-the-tree-house.jpg?s=1024x1024&w=is&k=20&c=GhDKZbW3qlM9aSDy2D7O2_nsAMgZpRFHCp88PixXrNU=",
  },
];

const CabinCarousel = () => {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoRotate = () => {
    if (intervalRef.current) return; // prevent multiple intervals
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % cabins.length);
    }, 3000);
  };

  const stopAutoRotate = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // Start auto-rotate on mount
  useEffect(() => {
    startAutoRotate();
    return () => stopAutoRotate(); // cleanup on unmount
  }, []);

  return (
    <div className="flex flex-col items-center text-center gap-8 min-h-screen overflow-hidden">
      <MultiColorText
        fontSize="56px"
        items={[
          { text: "Our", color: "dark", weight: "medium" },
          { text: " Bestsellers", color: "primary", weight: "semibold" },
        ]}
      />

      {/* Carousel */}
      <div
        className="relative w-full flex justify-center items-center overflow-hidden h-[65vh] "
        onMouseEnter={stopAutoRotate}
        onMouseLeave={startAutoRotate}
      >
        {cabins.map((cabin, i) => {
          // Find relative position (-1, 0, 1)
          const offset = (i - index + cabins.length) % cabins.length;

          let x = "-110%";
          let zIndex = 0;
          let opacity = 1;

          if (offset === 0) {
            x = "0%";
            zIndex = 30;
            opacity = 1;
          } else if (offset === 1) {
            x = "105%";
            zIndex = 10;
            opacity = 1;
          } else if (offset === cabins.length - 1) {
            x = "-105%";
            zIndex = 10;
            opacity = 1;
          }

          return (
            <motion.div
              key={i}
              className="absolute rounded-[40px] overflow-hidden shadow-lg flex items-end"
              style={{ width: "55vw", height: "100%" }}
              animate={{ x, opacity, zIndex }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                unoptimized
                src={cabin.image}
                alt={cabin.name}
                fill
                className="object-cover"
              />

              {/* Gradient overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-[180px] bg-gradient-to-t from-black/50 to-transparent z-20" />

              {/* Content */}
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

                <button className="rounded-[40px] border border-[var(--color-primary)] w-[80px] h-[54px] flex items-center justify-center">
                  <ArrowNew className="text-[var(--text-light)]" size={22} />
                </button>
              </div>
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
