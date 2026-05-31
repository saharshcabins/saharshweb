"use client";

import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import MultiColorText from "../shared/MultiColorText";
import TextBuilder from "../shared/TextBuilder";
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
      “Pre-engineered sales offices installed at your site - ready to host buyers from day one.”,
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

// Duplicate slides for infinite illusion
const duplicatedSlides = [...slides, ...slides];

const CARD_WIDTH = 390;
const GAP = 40;

const CabinSlideShow: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const controls = useAnimation();

  const totalWidth = (CARD_WIDTH + GAP) * slides.length;

  const handleNext = async () => {
    const newIndex = index + 1;
    setIndex(newIndex);

    await controls.start({
      x: -newIndex * (CARD_WIDTH + GAP),
      transition: { duration: 0.6, ease: "easeInOut" },
    });

    // reset seamlessly
    if (newIndex >= slides.length) {
      setIndex(0);
      controls.set({ x: 0 });
    }
  };

  const handlePrev = async () => {
    if (index === 0) {
      // jump to end instantly
      controls.set({
        x: -totalWidth,
      });

      const newIndex = slides.length - 1;
      setIndex(newIndex);

      await controls.start({
        x: -newIndex * (CARD_WIDTH + GAP),
        transition: { duration: 0.6, ease: "easeInOut" },
      });
    } else {
      const newIndex = index - 1;
      setIndex(newIndex);

      await controls.start({
        x: -newIndex * (CARD_WIDTH + GAP),
        transition: { duration: 0.6, ease: "easeInOut" },
      });
    }
  };

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
      className="bg-[var(--text-dark)] py-30 flex flex-col gap-10 min-h-screen px-[7%]"
    >
      {/* Header */}
      <div className="flex justify-between px-10 flex-col gap-2 text-center">
        <p className="eyebrow-label">Solutions</p>
        <MultiColorText
          fontSize="75px"
          className="text-center"
          items={[
            { text: "Spaces For ", color: "light", weight: "bold" },
            { text: "Every Vision", color: "primary", weight: "bold" },
          ]}
        />
        <div className="leading-[1.25]">
          <TextBuilder fontSize="20px" color="light">
            Whether you are scaling a luxury resort, cultivating a private
            farmhouse, or designing a premium <br />
            workspace, our modular builds provide the premium foundation your
            vision deserves.
          </TextBuilder>
        </div>
      </div>

      {/* Carousel */}
      <div className="mt-10">
        {/* Slides â€” no arrows overlapping imagery */}
        <div className="overflow-hidden">
          <motion.div className="flex" animate={controls} initial={{ x: 0 }}>
            {duplicatedSlides.map((slide, idx) => (
              <motion.div
                key={idx}
                className="min-w-[390px] mr-[40px]"
                initial="rest"
                animate={activeIdx === idx ? "hover" : "rest"}
                onHoverStart={() => setActiveIdx(idx)}
                onHoverEnd={() => setActiveIdx(null)}
                onTap={() => setActiveIdx((prev) => (prev === idx ? null : idx))}
              >
                <div className="relative w-[390px] h-[460px] rounded-[30px] overflow-hidden cursor-pointer">
                  <Image
                    src={slide.src}
                    alt={slide.title}
                    fill
                    className="object-cover"
                  />

                  <div className="absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-t from-[#0F1B26] to-transparent opacity-70" />

                  {/* Title */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="absolute bottom-4 text-center z-20"
                      variants={{
                        rest: { opacity: 1, scale: 1 },
                        hover: { opacity: 0, scale: 0.9 },
                      }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <TextBuilder fontSize="20px" weight="bold" color="light">
                        {slide.title}
                      </TextBuilder>
                    </motion.div>
                  </div>

                  {/* Description on hover */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="absolute bottom-0 text-center w-[80%] bg-[var(--text-light)] text-[var(--text-dark)] py-6 px-4 rounded-[10px] flex flex-col gap-1 z-30"
                      variants={{
                        rest: { opacity: 0, y: 50 },
                        hover: { opacity: 1, y: -10 },
                      }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                      <TextBuilder fontSize="20px" weight="bold" color="primary">
                        {slide.title}
                      </TextBuilder>
                      <TextBuilder
                        className="w-[100%] leading-[1.2]"
                        fontSize="20px"
                        weight="light"
                      >
                        {slide.description}
                      </TextBuilder>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Editorial navigation â€” below imagery, unobstructed */}
        <div className="flex items-center justify-between mt-8 px-1">
          {/* Progress bars */}
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <div
                key={i}
                style={{
                  width: i === index ? 32 : 16,
                  height: 2,
                  borderRadius: 1,
                  background:
                    i === index
                      ? "var(--color-primary)"
                      : "rgba(255,255,255,0.25)",
                  transition: "width 0.35s ease, background 0.35s ease",
                }}
              />
            ))}
          </div>

          {/* Prev / Next â€” minimal circle buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              aria-label="Previous"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
              style={{
                border: "1px solid rgba(255,255,255,0.25)",
                color: "rgba(255,255,255,0.7)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor =
                  "var(--color-primary)";
                (e.currentTarget as HTMLButtonElement).style.color =
                  "var(--color-primary)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor =
                  "rgba(255,255,255,0.25)";
                (e.currentTarget as HTMLButtonElement).style.color =
                  "rgba(255,255,255,0.7)";
              }}
            >
              <ArrowNew className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
              style={{
                border: "1px solid rgba(255,255,255,0.25)",
                color: "rgba(255,255,255,0.7)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor =
                  "var(--color-primary)";
                (e.currentTarget as HTMLButtonElement).style.color =
                  "var(--color-primary)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor =
                  "rgba(255,255,255,0.25)";
                (e.currentTarget as HTMLButtonElement).style.color =
                  "rgba(255,255,255,0.7)";
              }}
            >
              <ArrowNew className="w-4 h-4" flipped />
            </button>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default CabinSlideShow;
