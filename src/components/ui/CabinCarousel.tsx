import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

import MultiColorText from "../shared/MultiColorText";
import TextBuilder from "../shared/TextBuilder";
import { FaArrowRight } from "react-icons/fa";

const cabins = [
  {
    name: "Hutsie",
    description: "20×40 ft | Bathroom | 1 Bed | Pantry",
    image:
      "https://media.istockphoto.com/id/93463536/photo/log-cabin-in-the-forest.jpg?s=1024x1024&w=is&k=20&c=jA7o2eLU_IVEFot--f7YfIEHKAmCp_iwT8kaKfzz9eU=",
  },
  {
    name: "Hutsite",
    description: "20×40 ft | Bathroom | 2 Beds | Kitchen",
    image:
      "https://media.istockphoto.com/id/1148294777/photo/summer-holidays-in-finland.jpg?s=1024x1024&w=is&k=20&c=nifQ_8q6M3Y7e1d4G-86AT0RaBZkX9NzVQsUrXNzTmA=",
  },
  {
    name: "Cabana",
    description: "25×45 ft | Bathroom | 2 Beds | Living Space",
    image:
      "https://media.istockphoto.com/id/698641346/photo/little-fishing-cottage-att-the-lake-shore-surrounded-by-birch-trees.jpg?s=1024x1024&w=is&k=20&c=O35qmauLn7bGCEYyT5E-Fv0aOcECKgZCbzhXjrSGGyg=",
  },
];

const CabinCarousel = () => {
  return (
    <div className="flex flex-col items-center text-center gap-8 min-h-screen">
      <MultiColorText
        fontSize="56px"
        weight="medium"
        items={[
          { text: "Engineered with", color: "dark" },
          { text: " Precision", color: "primary" },
        ]}
      />

      {/* Carousel */}
      <div className="w-full">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          grabCursor={true}
          breakpoints={{
            640: {
              slidesPerView: 1.2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1.5,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
          }}
          className="swiper-cabin"
        >
          {cabins.map((cabin, index) => (
            <SwiperSlide key={`cabin-${index}`}>
              <div className="relative w-[60vw] h-[60vh] rounded-[40px] overflow-hidden shadow-lg flex items-end mx-auto">
                <Image
                  src={cabin.image}
                  alt={cabin.name}
                  fill
                  className="object-cover"
                />

                <div className="relative z-10 p-6 text-left flex items-end justify-between w-full">
                  <div className="flex flex-col">
                    <TextBuilder
                      fontSize="56px"
                      weight="bold"
                      color="light"
                      className="leading-[1.2]"
                    >
                      {cabin.name}
                    </TextBuilder>
                    <TextBuilder
                      fontSize="20px"
                      color="light"
                      className="leading-[1.25]"
                    >
                      {cabin.description}
                    </TextBuilder>
                  </div>

                  <button className="rounded-[40px] border border-[var(--color-primary)] w-[80px] h-[54px] flex items-center justify-center">
                    <FaArrowRight
                      className="text-[var(--text-light)]"
                      size={22}
                    />
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <TextBuilder fontSize="24px" color="dark">
        Saharsh Cabins are utilizing high-quality materials and innovative
        construction <br /> techniques to ensure durability, efficiency, and
        aesthetic appeal.
      </TextBuilder>
    </div>
  );
};

export default CabinCarousel;
