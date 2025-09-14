import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

import MultiColorText from "../shared/MultiColorText";
import TextBuilder from "../shared/TextBuilder";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Arrow } from "@/utils/svgUtils";

type Slide = {
  type: "image" | "video";
  src: string;
};

const slides: Slide[] = [
  {
    type: "image",
    src: "https://plus.unsplash.com/premium_photo-1686090449403-43c24a6a4f79?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    type: "video",
    src: "https://cdn.pixabay.com/video/2024/05/09/211275_large.mp4",
  },
  {
    type: "image",
    src: "https://plus.unsplash.com/premium_photo-1686090450479-370d5ddf4de1?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    type: "video",
    src: "https://cdn.pixabay.com/video/2025/06/13/285663_large.mp4",
  },
  {
    type: "image",
    src: "https://plus.unsplash.com/premium_photo-1686090449403-43c24a6a4f79?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    type: "image",
    src: "https://plus.unsplash.com/premium_photo-1733864822196-b964f2f77f3c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    <div className="bg-[var(--text-dark)] py-30 flex flex-col gap-10 min-h-screen">
      {/* Header */}
      <div className="flex justify-between px-10">
        <MultiColorText
          fontSize="56px"
          weight="bold"
          items={[
            { text: "Built for", color: "light" },
            { text: " Excellence", color: "primary" },
          ]}
        />
        <div className="w-1/2 leading-[1.25]">
          <TextBuilder fontSize="24px" color="light">
            From sleek architecture to luxurious interiors & scenic landscapes
            come together to create living spaces that inspire and rejuvenate.
          </TextBuilder>
        </div>
      </div>

      {/* Slider */}
      <div className="relative mt-10 ">
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
            <SwiperSlide key={`main-${idx}`} className="!w-[390px]">
              <div className="relative w-[390px] h-[460px] rounded-[30px] overflow-hidden shadow-lg mx-auto">
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
                    className="w-full h-full object-cover"
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => {
                      if (idx !== 0) e.currentTarget.pause();
                    }}
                  />
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation */}
        <button className="custom-prev absolute cursor-pointer left-5 bottom-[40%] -translate-y-1/2 bg-[var(--section-accent)] rounded-[40px] z-10  w-[80px] h-[54px] flex justify-center items-center">
          <Arrow />
        </button>
        <button className="custom-next absolute cursor-pointer  right-5 w-[80px] h-[54px] bottom-[40%] -translate-y-1/2 bg-[var(--section-accent)] rounded-[40px]  z-10 flex justify-center items-center">
          <Arrow flipped />{" "}
        </button>
      </div>
    </div>
  );
};

export default CabinSlideShow;
