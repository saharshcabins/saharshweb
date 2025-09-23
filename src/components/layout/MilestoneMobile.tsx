"use client";
import React, { useState, useRef } from "react";
import MultiColorTextMobile from "../shared/MultiTextBuilderMobile";
import TextBuilderMobile from "../shared/TextBuilderMobile";
import MilestoneCardMobile from "../ui/MilestoneMobileCard";
import Label from "../ui/HeroLabel";
import Image from "next/image";
import { ArrowNew } from "@/utils/svgUtils";
import { useSwipeable, SwipeableHandlers } from "react-swipeable";

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
        url: "/assets/milestone/banglore.png",
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
  const cardsRef = useRef<HTMLDivElement>(null);

  const smoothScrollTo = (
    element: HTMLElement,
    target: number,
    duration: number
  ) => {
    const start = element.scrollLeft;
    const change = target - start;
    const startTime = performance.now();

    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1); // 0 → 1
      const ease =
        progress < 0.5
          ? 2 * progress * progress
          : -1 + (4 - 2 * progress) * progress; // easeInOut

      element.scrollLeft = start + change * ease;

      if (progress < 1) requestAnimationFrame(animateScroll);
    };

    requestAnimationFrame(animateScroll);
  };

  const handleNext = () => {
    const nextIndex = (activeIndex + 1) % milestoneData.length;
    setActiveIndex(nextIndex);

    if (cardsRef.current) {
      const container = cardsRef.current;
      const card = container.children[nextIndex] as HTMLDivElement;

      if (card) {
        let newScroll =
          card.offsetLeft - (container.clientWidth - card.offsetWidth) / 2;

        // Optional extra offset for last card
        if (nextIndex === milestoneData.length - 1) newScroll += 40;

        smoothScrollTo(container, newScroll, 600); // 600ms animation
      }
    }
  };

  const handlePrev = () => {
    const prevIndex =
      activeIndex === 0 ? milestoneData.length - 1 : activeIndex - 1;
    setActiveIndex(prevIndex);

    if (cardsRef.current) {
      const container = cardsRef.current;
      const card = container.children[prevIndex] as HTMLDivElement;

      if (card) {
        let newScroll =
          card.offsetLeft - (container.clientWidth - card.offsetWidth) / 2;

        if (prevIndex === 0) newScroll -= 20; // optional start offset

        smoothScrollTo(container, newScroll, 600); // 600ms animation
      }
    }
  };

  const handlers: SwipeableHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    trackMouse: true,
  });

  const activeMilestone = milestoneData[activeIndex];

  return (
    <div
      className="relative h-[720px] w-full p-8 pl-8 pr-0 bg-[var(--text-dark)] bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/milestone/mobile_map.png')" }}
    >
      {/* Heading */}
      <div className="flex flex-col gap-2 mb-6">
        <MultiColorTextMobile
          className="text-start"
          fontSize="22px"
          items={[
            {
              text: "Visionary",
              color: "light",
              weight: "medium",
              breakAfter: true,
            },
            { text: "Milestones", color: "primary", weight: "semibold" },
          ]}
        />
        <TextBuilderMobile fontSize="12px" color="light70">
          Transforming modern living <br /> spaces for 12 years..
        </TextBuilderMobile>
      </div>

      {/* Milestone Cards */}
      <div
        {...handlers}
        ref={cardsRef}
        className="flex flex-row gap-4 overflow-x-auto no-scrollbar py-4"
        style={{
          paddingRight: "80px", // extra space for last card
        }}
      >
        {milestoneData.map((milestone, index) => (
          <MilestoneCardMobile
            key={index}
            year={milestone.year}
            title={milestone.title}
            description={milestone.description}
            isActive={index === activeIndex}
          />
        ))}
      </div>

      {/* Active Milestone Labels */}
      <div className="relative h-[60px]">
        <TextBuilderMobile
          className="absolute top-[30%] right-[14%]"
          fontSize="10px"
          color="light50"
        >
          {activeMilestone.year}
        </TextBuilderMobile>
        <div className="absolute top-[30%] right-[20%] py-2">
          <Label text={activeMilestone.image[0].location} />
        </div>
      </div>

      {/* Active Milestone Image & Description */}
      <div className="flex flex-col gap-4 mt-4">
        <Image
          unoptimized
          src={activeMilestone.image[0].url}
          alt="milestone"
          height={136}
          width={236}
          className="object-cover rounded-[12px]"
        />
        <div
          className="w-[65%]"
          style={{ lineHeight: 1 }} // <-- apply directly
        >
          <TextBuilderMobile fontSize="10px" color="light70">
            {activeMilestone.image[0].label}
          </TextBuilderMobile>
        </div>
      </div>

      {/* Arrow Button */}
      <div
        onClick={handleNext}
        className="absolute bottom-0 right-[10%] transform -translate-y-1/2 border border-[var(--color-primary)] p-1 w-[62px] h-[42px] flex items-center justify-center rounded-[40px] cursor-pointer"
      >
        <ArrowNew
          className="w-[21px] h-[22px] text-[var(--text-light)]"
          flipped
        />
      </div>
    </div>
  );
};

export default MilestoneMobile;
