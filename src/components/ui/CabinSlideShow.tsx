import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import MultiColorText from "../shared/MultiColorText";
import TextBuilder from "../shared/TextBuilder";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type Slide = {
  type: "image" | "video";
  src: string;
};

const slides: Slide[] = [
  {
    type: "image",
    src: "https://imgs.search.brave.com/NX3jqBIAqsLItDExjDAv-rNya1wiMqcL50C7CvvvW20/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE2/MzgzNTI2Ny9waG90/by9vbGQtY2FiaW4t/aW4taGF1bnRlZC1m/b3Jlc3QuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPUFHY3JQ/eEE5MkJabHM2V1Nm/ZndXY1l4aEw0aGNC/QnROUzZMS0FYblVG/dEU9",
  },
  {
    type: "video",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    type: "image",
    src: "https://imgs.search.brave.com/3MHsUJbs8F46TDVuD2I7woMfHmMatdgs5J9jeEgW_UA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1Lzg5LzE5LzE3/LzM2MF9GXzU4OTE5/MTc3N19UaUdOWERP/VHpKMlJaQVB2S0Q0/elRBbURhN3NobmFC/Sy5qcGc",
  },
  {
    type: "image",
    src: "https://imgs.search.brave.com/3MHsUJbs8F46TDVuD2I7woMfHmMatdgs5J9jeEgW_UA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1Lzg5LzE5LzE3/LzM2MF9GXzU4OTE5/MTc3N19UaUdOWERP/VHpKMlJaQVB2S0Q0/elRBbURhN3NobmFC/Sy5qcGc",
  },
  {
    type: "image",
    src: "https://imgs.search.brave.com/3MHsUJbs8F46TDVuD2I7woMfHmMatdgs5J9jeEgW_UA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1Lzg5LzE5LzE3/LzM2MF9GXzU4OTE5/MTc3N19UaUdOWERP/VHpKMlJaQVB2S0Q0/elRBbURhN3NobmFC/Sy5qcGc",
  },
  {
    type: "image",
    src: "https://imgs.search.brave.com/3MHsUJbs8F46TDVuD2I7woMfHmMatdgs5J9jeEgW_UA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1Lzg5LzE5LzE3/LzM2MF9GXzU4OTE5/MTc3N19UaUdOWERP/VHpKMlJaQVB2S0Q0/elRBbURhN3NobmFC/Sy5qcGc",
  },
];

const CabinSlideShow: React.FC = () => {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handleSlideChange = (swiper: SwiperType) => {
    videoRefs.current.forEach((video, idx) => {
      if (!video) return;

      // Find the actual slide element that is active (centered)
      const activeSlide = swiper.slides[swiper.activeIndex];
      const isActive = activeSlide?.dataset?.swiperSlideIndex === String(idx);

      if (isActive) {
        video.play().catch(() => {
          // prevent autoplay blocking errors
        });
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  };

  return (
    <div className="bg-[var(--text-dark)] py-10">
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
          <TextBuilder size="2xl" color="light">
            From sleek architecture to luxurious interiors & scenic landscapes
            come together to create living spaces that inspire and rejuvenate.
          </TextBuilder>
        </div>
      </div>

      {/* Slider */}
      <div className="relative mt-10 px-10">
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          slidesPerView="auto"
          spaceBetween={50}
          loop={true}
          centeredSlides={true}
          onSlideChangeTransitionEnd={handleSlideChange}
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx} className="!w-[390px]">
              <div className="relative rounded-[30px] overflow-hidden shadow-lg aspect-[390/460] w-[390px] h-[460px] mx-auto">
                {slide.type === "image" ? (
                  <img
                    src={slide.src}
                    alt={`slide-${idx}`}
                    className="w-full h-full object-cover"
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
        <button className="custom-prev absolute cursor-pointer left-20 bottom-0 -translate-y-1/2 bg-[var(--section-accent)] rounded-[40px] z-10  w-[80px] h-[54px] flex justify-center items-center">
          <FaArrowLeft size={25} className="text-[var(--color-primary)]" />
        </button>
        <button className="custom-next absolute cursor-pointer  right-20 w-[80px] h-[54px] bottom-0 -translate-y-1/2 bg-[var(--section-accent)] rounded-[40px]  z-10 flex justify-center items-center">
          <FaArrowRight size={25} className="text-[var(--color-primary)]" />
        </button>
      </div>
    </div>
  );
};

export default CabinSlideShow;
