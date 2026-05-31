"use client";

import React, { useState } from "react";
import MultiColorTextMobile from "../shared/MultiTextBuilderMobile";
import TextBuilderMobile from "../shared/TextBuilderMobile";
import MilestoneCardMobile from "../ui/MilestoneMobileCard";
import Label from "../ui/HeroLabel";
import Image from "next/image";
import { ArrowNew } from "@/utils/svgUtils";
import type { Swiper as SwiperType } from "swiper";

// Swiper
// Correct Swiper imports for v10+
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { AnimatePresence, motion } from "framer-motion";



interface MilestoneImage {
  url: string;
  label: string;
  location: string;
}

interface Milestone {
  year: string;
  title: string;
  description: string;
  image: MilestoneImage[];
}

const milestoneData: Milestone[] = [
  {
    year: "2013",
    title: "Company Inception",
    description:
      "Laying the foundation for Saharsh Cabins with the first manufacturing plant in Mumbai.",
    image: [
      {
        url: "/assets/milestone/banglore.webp",
        label:
          "Laying the foundation for Saharsh Cabins with the first manufacturing plant in Mumbai",
        location: "Mumbai",
      },
    ],
  },
  {
    year: "2014",
    title: "Expanded Product Line",
    description:
      "Introduced a new range of modular cabins, including custom office and studio designs.",
    image: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=420&q=80",
        label:
          "First Major Project - Housing colony of 100+ prefab cabins set up in Shimla",
        location: "Shimla",
      },
    ],
  },
  {
    year: "2024",
    title: "International Partnerships",
    description:
      "Began a new chapter by exporting our cabins to clients in Europe and North America.",
    image: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=420&q=80",
        label:
          "Launched ‘Qbinn Tusker’ premium cottages & resorts in Bangalore.",
        location: "Bangalore",
      },
    ],
  },
  {
    year: "2025",
    title: "International Partnerships",
    description:
      "Began a new chapter by exporting our cabins to clients in Europe and North America.",
    image: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=420&q=80",
        label: "International Market Entry - Our first export venture to USA",
        location: "USA",
      },
    ],
  },
];

const MilestoneMobile: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

const handleSlideChange = (swiper: SwiperType) => {
  setActiveIndex(swiper.realIndex);
};
  const activeMilestone = milestoneData[activeIndex];

  return (
    <div
      className="relative h-[720px] w-full p-8 pl-8 pr-0 bg-[var(--text-dark)] bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/milestone/mobile_map.webp')" }}
    >
      {/* Heading */}
      <div className="flex flex-col gap-2 mb-6">
        <MultiColorTextMobile
          className="text-start"
          fontSize="22px"
          items={[
            { text: "Visionary", color: "light", weight: "medium", breakAfter: true },
            { text: "Milestones", color: "primary", weight: "semibold" },
          ]}
        />
        <TextBuilderMobile fontSize="12px" color="light70">
          Transforming modern living <br /> spaces for 12 years..
        </TextBuilderMobile>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        slidesPerView="auto"
        spaceBetween={10}
        loop={true}
        centeredSlides={false} // align active card to left
        speed={1200}
        onSlideChangeTransitionEnd={handleSlideChange}
        initialSlide={0}
      >
        {milestoneData.map((milestone, index) => (
          <SwiperSlide key={index} className="!w-[280px]">
            <MilestoneCardMobile
              year={milestone.year}
              title={milestone.title}
              description={milestone.description}
              isActive={index === activeIndex}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation */}
      <div
        className="custom-next absolute bottom-0 right-[10%] transform -translate-y-1/2 border border-[var(--color-primary)] p-1 w-[62px] h-[42px] flex items-center justify-center rounded-[40px] cursor-pointer z-10"
      >
        <ArrowNew className="w-[21px] h-[22px] text-[var(--text-light)]" flipped />
      </div>

      {/* Active Milestone Labels */}
      <div className="relative h-[60px] mt-4">
        <TextBuilderMobile className="absolute top-[30%] right-[14%]" fontSize="10px" color="light50">
          {activeMilestone.year}
        </TextBuilderMobile>
        <div className="absolute top-[30%] right-[20%] py-2">
          <Label text={activeMilestone.image[0].location} />
        </div>
      </div>

      {/* Active Milestone Image & Description */}
<div className="flex flex-col gap-4 mt-4">
  <AnimatePresence mode="wait">
    <motion.div
      key={activeMilestone.year} // key changes on slide change
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-4"
    >
      <Image
        
        src={activeMilestone.image[0].url}
        alt="milestone"
        height={136}
        width={252}
        className="object-cover rounded-[12px]"
      />
      <div className="w-[65%]" style={{ lineHeight: 1 }}>
        <TextBuilderMobile fontSize="10px" color="light70">
          {activeMilestone.image[0].label}
        </TextBuilderMobile>
      </div>
    </motion.div>
  </AnimatePresence>
</div>
    </div>
  );
};

export default MilestoneMobile;
