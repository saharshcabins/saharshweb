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
      "Showcase excellence anywhere. Mobile sales suites. Built to impress, designed to move.",
  },
  {
    type: "image",
    src: "/assets/built/cottage_1.png",
    title: "Luxury Cottages",
    description:
      "The art of instant living.  Architectural beauty, delivered to your doorstep.",
  },
  {
    type: "image",
    src: "/assets/built/villa_1.png",
    title: "Luxury Villas",
    description:
      "Land to living. Seamlessly. Precision-engineered homes for your private retreat.",
  },
  {
    type: "image",
    src: "/assets/built/cafe_1.png",
    title: "Modular Cafes",
    description:
      "Serve sooner. Scale faster. Turnkey cafe spaces for rapid expansion.",
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
      <div className="flex justify-between px-10 flex-col gap-2 text-center">
        <MultiColorText
          fontSize="75px"
          className="text-center"
          items={[
            { text: "Our ", color: "light", weight: "bold" },
            { text: "Categories", color: "primary", weight: "bold" },
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
          <motion.div className="flex" animate={controls} initial={{ x: 0 }}>
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

                  {/* Description */}
                  <div className="absolute inset-0 flex items-center justify-center">

                  <motion.div
                    className="absolute bottom-0  text-center  w-[80%] bg-[var(--text-light)] text-[var(--text-dark)] py-6 px-4 rounded-[10px] flex flex-col gap-1 z-30"
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
                      fontSize="20px" weight="light"
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
      </div>
    </div>
  );
};

export default CabinSlideShow;
