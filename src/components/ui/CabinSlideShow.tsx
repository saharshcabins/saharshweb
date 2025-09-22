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
    src: "https://plus.unsplash.com/premium_photo-1686090449403-43c24a6a4f79?q=80&w=387&auto=format&fit=crop",
    title: "Luxury Cabin",
    description: "Experience modern comfort surrounded by nature.",
  },
  {
    type: "video",
    src: "https://cdn.pixabay.com/video/2024/05/09/211275_large.mp4",
    title: "Mountain Escape",
    description: "Wake up to serene mountain views every morning.",
  },
  {
    type: "image",
    src: "https://plus.unsplash.com/premium_photo-1686090450479-370d5ddf4de1?q=80&w=387&auto=format&fit=crop",
    title: "Cozy Interiors",
    description: "Warm tones and cozy designs for perfect evenings.",
  },
  {
    type: "video",
    src: "https://cdn.pixabay.com/video/2025/06/13/285663_large.mp4",
    title: "Waterfront Living",
    description: "Luxury redefined by the calming sound of water.",
  },
  {
    type: "image",
    src: "https://plus.unsplash.com/premium_photo-1686090449403-43c24a6a4f79?q=80&w=387&auto=format&fit=crop",
    title: "Family Friendly",
    description: "Spacious cabins designed for family getaways.",
  },
  {
    type: "image",
    src: "https://plus.unsplash.com/premium_photo-1733864822196-b964f2f77f3c?q=80&w=387&auto=format&fit=crop",
    title: "Modern Style",
    description: "Architectural excellence meets natural beauty.",
  },
];

const CabinSlideShow: React.FC = () => {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Corrected video autoplay logic
  const handleSlideChange = (swiper: SwiperType) => {
    videoRefs.current.forEach((video, idx) => {
      if (!video) return;
      // Get the correct index of the currently active slide in a loop
      const activeSlideIndex = swiper.realIndex;
      const isActive = idx === activeSlideIndex;

      if (isActive) {
        // Play the video and make sure it starts from the beginning
        video.currentTime = 0;
        video.play().catch(() => {});
      } else {
        // Pause and reset all other videos
        video.pause();
        video.currentTime = 0;
      }
    });
  };

  return (
    <div id="work" className="bg-[var(--text-dark)] py-30 flex flex-col gap-10 min-h-screen px-[6%] pr-[0%]">
      {/* Header */}
      <div className="flex justify-between px-10">
        <MultiColorText
          fontSize="56px"
          items={[
            { text: "Built for ", color: "light", weight: "medium" },
            { text: "Excellence", color: "primary", weight: "bold" },
          ]}
        />
        <div className="leading-[1.25]">
          <TextBuilder fontSize="24px" color="light">
            From sleek architecture to luxurious interiors & <br />
            scenic landscapes come together to create
            <br /> living spaces that inspire and rejuvenate.
          </TextBuilder>
        </div>
      </div>
      {/* Slider */}
      <div className="relative mt-10 overflow-visible mr-[-2%]">
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          slidesPerView="auto"
          spaceBetween={40}
          loop={true}
          centeredSlides={true} // smooth centering of slides
          speed={1200} // duration of slide animation in ms
          onSlideChangeTransitionEnd={handleSlideChange}
          initialSlide={0}
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={`main-${idx}`} className="!w-[390px]">
              {/* Parent card: hover triggers child animations */}
              <motion.div
                className="relative w-[390px] h-[460px] rounded-[30px] overflow-hidden shadow-lg mx-auto cursor-pointer"
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
                    unoptimized
                    src={slide.src}
                    alt={`slide-${idx}`}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <video
                    autoPlay
                    src={slide.src}
                    muted
                    playsInline
                    loop
                    className="w-full h-full object-cover"
                  />
                )}

                {/* Overlay gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-t from-[#0F1B26] to-transparent opacity-70" />

                {/* Title (fades out on hover of the whole card) */}
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

                {/* Description container (appears on hover of the whole card) */}
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
          className="custom-prev absolute cursor-pointer -left-[30px] bottom-[40%] -translate-y-1/2 bg-[var(--section-accent)] hover:bg-[var(--color-primary)] rounded-[40px] z-10 w-[80px] h-[54px] flex justify-center items-center text-[var(--color-primary)] hover:text-[var(--text-light)]"
        >
          <ArrowNew className="w-[26px] h-[26px]" />
        </button>

        <button
          aria-label="Next Slide"
          className="custom-next absolute cursor-pointer right-10 bottom-[40%] -translate-y-1/2 bg-[var(--section-accent)] hover:bg-[var(--color-primary)] rounded-[40px] z-10 w-[80px] h-[54px] flex justify-center items-center text-[var(--color-primary)] hover:text-[var(--text-light)]"
        >
          <ArrowNew className="w-[26px] h-[26px]" flipped />
        </button>
      </div>
    </div>
  );
};

export default CabinSlideShow;
