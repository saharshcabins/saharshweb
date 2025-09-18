"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import TextBuilderMobile from "../shared/TextBuilderMobile";
import { ArrowNew } from "@/utils/svgUtils";
import MultiColorTextMobile from "../shared/MultiTextBuilderMobile";

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
    src: "https://plus.unsplash.com/premium_photo-1733864822196-b964f2f77f3c?q=80&w=387&auto=format&fit=crop",
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

const CabinSlideShowMobile: React.FC = () => {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

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
    <div className=" bg-[var(--text-dark)] py-10 flex flex-col  gap-10 px-4">
      {/* Header */}
      <div className="flex flex-col gap-4 ">
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
      <div className="relative mt-4">
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          slidesPerView="auto"
          spaceBetween={20}
          loop={true}
          centeredSlides={true}
          onSlideChangeTransitionEnd={handleSlideChange}
          initialSlide={0}
        >
          {slides.map((slide, idx) => (
            <SwiperSlide
              key={`main-${idx}`}
              className="!w-[284px] flex justify-center"
            >
              <div className="relative w-[284px] h-[382px] rounded-[6px] overflow-hidden shadow-lg">
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
                    src={slide.src}
                    muted
                    playsInline
                    loop
                    className="w-full h-full object-cover"
                  />
                )}

                {/* Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-[var(--text-light)] text-[var(--text-dark)] py-6 px-4 rounded-b-[10px] flex flex-col gap-1 items-start">
                  <TextBuilderMobile
                    fontSize="20px"
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Custom Navigation */}
      <div className="flex flex-row justify-center items-center gap-12 mt-4">
        <button
          aria-label="Previous Slide"
          className="custom-prev bg-[var(--section-accent)] hover:bg-[var(--color-primary)] rounded-[40px] z-10 w-[80px] h-[40px] flex justify-center items-center text-[var(--color-primary)] hover:text-[var(--text-light)]"
        >
          <ArrowNew className="w-[20px] h-[21px]" />
        </button>
        <button
          aria-label="Next Slide"
          className="custom-next bg-[var(--section-accent)] hover:bg-[var(--color-primary)] rounded-[40px] z-10 w-[80px] h-[40px] flex justify-center items-center text-[var(--color-primary)] hover:text-[var(--text-light)]"
        >
          <ArrowNew className="w-[20px] h-[21px]" flipped />
        </button>
      </div>
    </div>
  );
};

export default CabinSlideShowMobile;
