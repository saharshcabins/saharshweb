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
      “Pre-engineered sales offices installed at your site — ready to host buyers from day one.”,
  },
  {
    type: "image",
    src: "/assets/built/cottage_1.png",
    title: "Luxury Cottages",
    description:
      "Hotel-grade cottages built and installed at your resort, farmhouse, or private estate.",
  },
  {
    type: "image",
    src: "/assets/built/villa_1.png",
    title: "Luxury Villas",
    description:
      "A full-size villa built to your specifications and delivered move-in ready.",
  },
  {
    type: "image",
    src: "/assets/built/cafe_1.png",
    title: "Modular Cafes",
    description:
      "Built in our factory and installed anywhere â€” ready to serve customers on arrival.",
  },
];

const CARD_WIDTH = 284 + 16;

const CabinSlideShowMobile: React.FC = () => {
  const total = slides.length;

  // ðŸ” create real loop buffer
  const loopSlides = [...slides, ...slides, ...slides];

  // ðŸŽ¯ start from middle copy
  const [activeIndex, setActiveIndex] = useState(total);
  const [isAnimating, setIsAnimating] = useState(true);

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // â–¶ï¸ video control
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

  // ðŸ‘‰ next / prev
  const nextSlide = () => {
    setActiveIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => prev - 1);
  };

  // ðŸ§  invisible reset logic (core of infinite loop)
  useEffect(() => {
    if (activeIndex >= total * 2) {
      setTimeout(() => {
        setIsAnimating(false);
        setActiveIndex(total);
      }, 500);
    }

    if (activeIndex < total) {
      setTimeout(() => {
        setIsAnimating(false);
        setActiveIndex(total * 2 - 1);
      }, 500);
    }
  }, [activeIndex, total]);

  return (
    <>
    {/* ==========================================
       HOME SECTION: PRODUCT CATEGORIES
       Purpose:
       Showcase the full range of modular build types â€” offices, cottages, villas, cafes.
       Primary conversion objective:
       Match each visitor's intent to a product category and move them toward a consultation.
    ========================================== */}
    <section
      id="product-categories"
      data-section="product-categories"
      className="bg-[var(--text-dark)] py-10 w-full flex flex-col gap-10 px-[7%]"
    >
      {/* Header */}
      <div className="flex flex-col gap-4 items-center text-center">
        <p className="eyebrow-label">Solutions</p>
        <MultiColorTextMobile
          fontSize="30px"
          items={[
            { text: "Spaces For ", color: "light", weight: "bold" },
            { text: "Every Vision", color: "primary", weight: "bold" },
          ]}
        />
        <TextBuilderMobile fontSize="14px" color="light">
          Whether you are scaling a luxury resort, cultivating a private
          farmhouse, or designing a premium workspace, our modular builds
          provide the premium foundation your vision deserves.
        </TextBuilderMobile>
      </div>

      {/* Slider */}
      <div className="relative mt-4 w-full overflow-hidden">
        <motion.div
          className="flex gap-4"
          animate={{ x: -activeIndex * CARD_WIDTH }}
          transition={
            isAnimating
              ? { duration: 0.5, ease: "easeInOut" }
              : { duration: 0 }
          }
          onAnimationComplete={() => setIsAnimating(true)}
        >
          {loopSlides.map((slide, idx) => (
            <div
              key={idx}
              className="relative w-[284px] h-[382px] rounded-[6px] overflow-hidden shadow-lg flex-shrink-0"
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
                  fontSize="14px"
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
      <div className="flex flex-row justify-center items-center gap-24 mt-4 mx-auto">
        <button
          onClick={prevSlide}
          className="cursor-pointer bg-[var(--section-accent)] hover:bg-[var(--color-primary)] rounded-[40px] w-[80px] h-[40px] flex justify-center items-center text-[var(--color-primary)] hover:text-[var(--text-light)]"
        >
          <ArrowNew className="w-[20px] h-[21px]" />
        </button>

        <button
          onClick={nextSlide}
          className="cursor-pointer bg-[var(--section-accent)] hover:bg-[var(--color-primary)] rounded-[40px] w-[80px] h-[40px] flex justify-center items-center text-[var(--color-primary)] hover:text-[var(--text-light)]"
        >
          <ArrowNew className="w-[20px] h-[21px]" flipped />
        </button>
      </div>
    </section>
    </>
  );
};

export default CabinSlideShowMobile;
