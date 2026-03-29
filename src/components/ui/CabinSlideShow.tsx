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

// Duplicate slides for infinite illusion
const duplicatedSlides = [...slides, ...slides];

const CARD_WIDTH = 390;
const GAP = 40;

const CabinSlideShow: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
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
    <div
      id="work"
      className="bg-[var(--text-dark)] py-30 flex flex-col gap-10 min-h-screen px-[6%]"
    >
      {/* Header */}
      <div className="flex justify-between px-10">
        <MultiColorText
          fontSize="56px"
          className="text-start"
          items={[
            { text: "Built for ", color: "light", weight: "medium" },
            { text: "Excellence", color: "primary", weight: "bold" },
          ]}
        />
        <div className="leading-[1.25]">
          <TextBuilder fontSize="24px" color="light">
            A cabin is more than a structure <br />
            it's where ambition takes shape, whether as
            <br className="hidden xl:block" /> a luxury retreat or a personal
            sanctuary.
          </TextBuilder>
        </div>
      </div>

      {/* Carousel */}
    {/* Carousel */}
<div className="relative mt-10">

  {/* ✅ Arrows live here (outside overflow hidden) */}
  <button
    onClick={handlePrev}
    className="custom-prev absolute cursor-pointer -left-[30px] top-1/2 -translate-y-1/2 bg-[var(--section-accent)] hover:bg-[var(--color-primary)] rounded-[40px] z-20 w-[80px] h-[54px] flex justify-center items-center text-[var(--color-primary)] hover:text-[var(--text-light)] transition-colors"
  >
    <ArrowNew className="w-[26px] h-[26px]" />
  </button>

  <button
    onClick={handleNext}
    className="custom-next absolute cursor-pointer -right-[30px] top-1/2 -translate-y-1/2 bg-[var(--section-accent)] hover:bg-[var(--color-primary)] rounded-[40px] z-20 w-[80px] h-[54px] flex justify-center items-center text-[var(--color-primary)] hover:text-[var(--text-light)] transition-colors"
  >
    <ArrowNew className="w-[26px] h-[26px]" flipped />
  </button>

  {/* ✅ THIS handles clipping */}
  <div className="overflow-hidden">
    <motion.div
      className="flex"
      animate={controls}
      initial={{ x: 0 }}
    >
      {duplicatedSlides.map((slide, idx) => (
        <motion.div
          key={idx}
          className="min-w-[390px] mr-[40px]"
          initial="rest"
          whileHover="hover"
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
            <motion.div
                  className="absolute bottom-0 left-[12%] p-4 px-6 text-left z-20"
              variants={{
                    rest: { opacity: 1, scale: 1 },
                    hover: { opacity: 0, scale: 0.9 },
              }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <TextBuilder fontSize="24px" weight="bold" color="light">
                {slide.title}
              </TextBuilder>
            </motion.div>

                {/* Description */}
            <motion.div
                  className="absolute bottom-0 left-[15%] w-[60%] bg-[var(--text-light)] text-[var(--text-dark)] py-6 px-4 rounded-[10px] flex flex-col gap-1 z-30"
              variants={{
                rest: { opacity: 0, y: 50 },
                hover: { opacity: 1, y: -10 },
              }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
            >
                  <TextBuilder fontSize="24px" weight="bold" color="primary">
                {slide.title}
              </TextBuilder>
                  <TextBuilder
                    className="w-[90%] leading-[1.2]"
                    fontSize="14px"
                  >
                {slide.description}
              </TextBuilder>
            </motion.div>

          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
</div>
    </div>
  );
};

export default CabinSlideShow;