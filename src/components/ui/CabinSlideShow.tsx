"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import MultiColorText from "../shared/MultiColorText";
import TextBuilder from "../shared/TextBuilder";
import { ArrowNew } from "@/utils/svgUtils";
import { motion } from "framer-motion";

type Slide = {
  type: "image" | "video";
  src: string;
  title: string;
  description: string;
};

const slides: Slide[] = [
  {
    type: "image",
    src: "/assets/built/center.png", // Update with actual filename
    title: "Marketing Sales Offices",
    description: "Showcase excellence anywhere.Mobile sales suites. Built to impress, designed to move.",
  },
  {
    type: "image",
    src: "/assets/built/cottages.png", // Update with actual filename
    title: "Modular Cottages",
    description: "The art of instant living.Architectural beauty, delivered to your doorstep.",
  },
  {
    type: "image",
    src: "/assets/built/villa.png", // Update with actual filename
    title: "Modular Farmhouses",
    description: "Land to living. Seamlessly.Precision-engineered homes for your private retreat.",
  },
  {
    type: "image",
    src: "/assets/built/cafe.png", // Update with actual filename
    title: "Modular Cafe",
    description: "Serve sooner. Scale faster.Turnkey cafe spaces for rapid expansion.",
  },
  {
    type: "image",
    src: "/assets/built/site_office.png", // Update with actual filename
    title: "Site Office",
    description: "Built for the grind.Rugged portable site offices for rapid deployment.",
  },
];


const CabinSlideShow: React.FC = () => {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const swiperRef = useRef<SwiperType | null>(null);

  // Video autoplay logic
  const handleSlideChange = (swiper: SwiperType) => {
    videoRefs.current.forEach((video, idx) => {
      if (!video) return;
      const activeSlideIndex = swiper.realIndex;
      const isActive = idx === activeSlideIndex;

      if (isActive) {
        video.currentTime = 0;
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  };

  return (
    <div id="work" className="bg-[var(--text-dark)] py-30 flex flex-col gap-10 min-h-screen px-[6%] pr-[0%]">
      {/* Header */}
      <div className="flex justify-between px-10 ">
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
            <br className="hidden xl:block" /> a luxury retreat or a personal sanctuary.
          </TextBuilder>
        </div>
      </div>
      
      {/* Slider */}
      <div className="relative mt-10 overflow-visible mr-[-2%]">
        <Swiper
          modules={[Navigation]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView="auto"
          spaceBetween={40}
          loop={true}
          loopAdditionalSlides={3}
          centeredSlides={false}
          slidesOffsetBefore={0}
          slidesOffsetAfter={0}
          speed={1200}
          onSlideChange={handleSlideChange}
          onSlideChangeTransitionEnd={handleSlideChange}
          initialSlide={0}
          watchSlidesProgress={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 1.5,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={`main-${idx}`} className="!w-[390px]">
              <motion.div
                className="relative w-[390px] h-[460px] rounded-[30px] overflow-hidden shadow-lg cursor-pointer"
                initial="rest"
                whileHover="hover"
                variants={{
                  rest: {},
                  hover: {},
                }}
              >
                {/* Media */}
                {slide.type === "image" ? (
                  <Image
                    src={slide.src}
                    alt={slide.title}
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

                {/* Overlay gradient */}
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
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Custom Navigation */}
        <button
          aria-label="Previous Slide"
          onClick={() => swiperRef.current?.slidePrev()}
          className="custom-prev absolute cursor-pointer -left-[30px] bottom-[40%] -translate-y-1/2 bg-[var(--section-accent)] hover:bg-[var(--color-primary)] rounded-[40px] z-10 w-[80px] h-[54px] flex justify-center items-center text-[var(--color-primary)] hover:text-[var(--text-light)] transition-colors"
        >
          <ArrowNew className="w-[26px] h-[26px]" />
        </button>

        <button
          aria-label="Next Slide"
          onClick={() => swiperRef.current?.slideNext()}
          className="custom-next absolute cursor-pointer right-10 bottom-[40%] -translate-y-1/2 bg-[var(--section-accent)] hover:bg-[var(--color-primary)] rounded-[40px] z-10 w-[80px] h-[54px] flex justify-center items-center text-[var(--color-primary)] hover:text-[var(--text-light)] transition-colors"
        >
          <ArrowNew className="w-[26px] h-[26px]" flipped />
        </button>
      </div>
    </div>
  );
};

export default CabinSlideShow;