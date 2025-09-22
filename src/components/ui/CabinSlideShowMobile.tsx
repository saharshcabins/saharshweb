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
  { type: "image", src: "https://plus.unsplash.com/premium_photo-1686090449403-43c24a6a4f79?q=80&w=387&auto=format&fit=crop", title: "Luxury Cabin", description: "Experience modern comfort surrounded by nature." },
  { type: "video", src: "https://cdn.pixabay.com/video/2024/05/09/211275_large.mp4", title: "Mountain Escape", description: "Wake up to serene mountain views every morning." },
  { type: "image", src: "https://plus.unsplash.com/premium_photo-1686090450479-370d5ddf4de1?q=80&w=387&auto=format&fit=crop", title: "Cozy Interiors", description: "Warm tones and cozy designs for perfect evenings." },
  { type: "video", src: "https://cdn.pixabay.com/video/2025/06/13/285663_large.mp4", title: "Waterfront Living", description: "Luxury redefined by the calming sound of water." },
  { type: "image", src: "https://plus.unsplash.com/premium_photo-1733864822196-b964f2f77f3c?q=80&w=387&auto=format&fit=crop", title: "Family Friendly", description: "Spacious cabins designed for family getaways." },
  { type: "image", src: "https://plus.unsplash.com/premium_photo-1733864822196-b964f2f77f3c?q=80&w=387&auto=format&fit=crop", title: "Modern Style", description: "Architectural excellence meets natural beauty." },
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
    <div id="work" className="bg-[var(--text-dark)] py-10 w-full flex flex-col gap-10 px-4">
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
          From sleek architecture to luxurious interiors & scenic landscapes
          come together to create living spaces that inspire and rejuvenate.
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
                  unoptimized
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
