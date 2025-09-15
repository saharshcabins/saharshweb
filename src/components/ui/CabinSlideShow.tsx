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

  const handleSlideChange = (swiper: SwiperType) => {
    videoRefs.current.forEach((video, idx) => {
      if (!video) return;

      const activeSlide = swiper.slides[swiper.activeIndex];
      const isActive = activeSlide?.dataset?.swiperSlideIndex === String(idx);

      if (isActive) {
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  };

  return (
    <div className="bg-[var(--text-dark)] py-30 flex flex-col gap-10 min-h-screen pl-[10%]">
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
      <div className="relative mt-10 overflow-visible">
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          slidesPerView="auto"
          spaceBetween={40}
          loop={true}
          centeredSlides={true}
          onSlideChangeTransitionEnd={handleSlideChange}
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={`main-${idx}`} className="!w-[390px] group">
              <div className="relative w-[390px] h-[460px] rounded-[30px] overflow-hidden shadow-lg mx-auto">
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
                    ref={(el) => {
                      videoRefs.current[idx] = el;
                    }}
                    src={slide.src}
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => {
                      if (idx !== 0) e.currentTarget.pause();
                    }}
                  />
                )}

                {/* Overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-t from-[#0F1B26] to-transparent opacity-70 " />
                <div className="absolute bottom-0 p-4 px-6 transition-opacity duration-300 group-hover:opacity-0">
                  <TextBuilder fontSize="24px" weight="bold" color="light">
                    {slide.title}
                  </TextBuilder>
                </div>

                <div
                  className="absolute bottom-0 left-[15%] w-[60%] bg-[var(--text-light)] text-[var(--text-dark)] 
             py-6 px-4 rounded-[10px] transform translate-y-[200%] 
             group-hover:-translate-y-[20%] transition-transform duration-500 ease-out
             flex flex-col gap-1"
                >
                  <TextBuilder
                    fontSize="24px"
                    weight="bold"
                    color="primary"
                    className="w-[90%]"
                  >
                    {slide.title}
                  </TextBuilder>
                  <TextBuilder
                    className="w-[90%] leading-[1.2]"
                    fontSize="14px"
                  >
                    {slide.description}
                  </TextBuilder>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation */}
        <button className="custom-prev absolute cursor-pointer left-[-20px] bottom-[40%] -translate-y-1/2 bg-[var(--section-accent)] hover:bg-[var(--color-primary)] rounded-[40px] z-10 w-[80px] h-[54px] flex justify-center items-center text-[var(--color-primary)] hover:text-[var(--text-light)]">
          <ArrowNew className="w-[26px] h-[26px]" />
        </button>
        <button className="custom-next absolute cursor-pointer right-0 bottom-[40%] -translate-y-1/2 bg-[var(--section-accent)] hover:bg-[var(--color-primary)] rounded-[40px] z-10 w-[80px] h-[54px] flex justify-center items-center text-[var(--color-primary)] hover:text-[var(--text-light)]">
          <ArrowNew className="w-[26px] h-[26px]" flipped />
        </button>
      </div>
    </div>
  );
};

export default CabinSlideShow;
