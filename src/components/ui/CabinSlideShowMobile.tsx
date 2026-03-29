"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import MultiColorTextMobile from "../shared/MultiTextBuilderMobile";
import TextBuilderMobile from "../shared/TextBuilderMobile";
import { ArrowNew } from "@/utils/svgUtils";

type Slide = {
  type: "image" | "video";
  src: string;
  title: string;
  description: string;
};


const slides: Slide[] = [
  {
    type: "image",
    src: "/assets/built/office_1.png",
    title: "Marketing Sales Offices",
    description:
      "Showcase excellence anywhere.Mobile sales suites. Built to impress, designed to move.",
  },
  {
    type: "image",
    src: "/assets/built/cottages_1.png",
    title: "Modular Cottages",
    description:
      "The art of instant living.Architectural beauty, delivered to your doorstep.",
  },
  {
    type: "image",
    src: "/assets/built/villa_1.png",
    title: "Modular Farmhouses",
    description:
      "Land to living. Seamlessly.Precision-engineered homes for your private retreat.",
  },
  {
    type: "image",
    src: "/assets/built/cafe_1.png",
    title: "Modular Cafe",
    description:
      "Serve sooner. Scale faster.Turnkey cafe spaces for rapid expansion.",
  },
];

const CARD_WIDTH = 284 + 16; // card width + gap (px)

const CabinSlideShowMobile: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // autoplay / reset videos
  useEffect(() => {
    videoRefs.current.forEach((video, idx) => {
      if (!video) return;
      if (idx === activeIndex) {
        video.currentTime = 0;
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [activeIndex]);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div
      id="work"
      className="bg-[var(--text-dark)] py-10 w-full flex flex-col gap-10 px-4"
    >
      {/* Header */}
      <div className="flex flex-col gap-4 items-start">
        <MultiColorTextMobile
          fontSize="22px"
          items={[
            { text: "Built for ", color: "light", weight: "medium" },
            { text: "Excellence", color: "primary", weight: "bold" },
          ]}
        />
        <TextBuilderMobile fontSize="12px" color="light">
          A cabin is more than a structure, it’s where ambition takes shape,
          whether as a luxury retreat or a personal sanctuary.
        </TextBuilderMobile>
      </div>

      {/* Slider */}
      <div className="relative mt-4 w-full overflow-hidden">
        <motion.div
          className="flex gap-4"
          animate={{ x: -activeIndex * CARD_WIDTH }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className={`relative w-[284px] h-[382px] rounded-[6px] overflow-hidden shadow-lg flex-shrink-0 ${
                idx === activeIndex ? "scale-100" : "scale-95 opacity-80"
              }`}
            >
              {slide.type === "image" ? (
                <Image
                  src={slide.src}
                  alt={`slide-${idx}`}
                  fill
                  className="object-cover"
                />
              ) : (
                <video
                  ref={(el) => {
                    videoRefs.current[idx] = el;
                  }}
                  src={slide.src}
                  muted
                  playsInline
                  loop
                  className="w-full h-full object-cover"
                />
              )}

              {/* Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-[var(--text-light)] text-[var(--text-dark)] p-[20px] rounded-[6px] flex flex-col gap-[12px] items-start">
                <TextBuilderMobile
                  fontSize="16px"
                  weight="bold"
                  color="primary"
                  className="leading-tight text-left"
                >
                  {slide.title}
                </TextBuilderMobile>
                <TextBuilderMobile
                  fontSize="11px"
                  className="leading-[1.2] text-left"
                  color="dark"
                >
                  {slide.description}
                </TextBuilderMobile>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Navigation */}
      <div className="flex flex-row justify-center items-center gap-24 mt-4 mx-auto ">
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="cursor-pointer bg-[var(--section-accent)] hover:bg-[var(--color-primary)] rounded-[40px] w-[80px] h-[40px] flex justify-center items-center text-[var(--color-primary)] hover:text-[var(--text-light)]"
        >
          <ArrowNew className="w-[20px] h-[21px]" />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="cursor-pointer bg-[var(--section-accent)] hover:bg-[var(--color-primary)] rounded-[40px] w-[80px] h-[40px] flex justify-center items-center text-[var(--color-primary)] hover:text-[var(--text-light)]"
        >
          <ArrowNew className="w-[20px] h-[21px]" flipped />
        </button>
      </div>
    </div>
  );
};

export default CabinSlideShowMobile;
