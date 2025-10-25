"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";
import { ArrowDown } from "@/utils/svgUtils";
import TextBuilder from "../shared/TextBuilder";
import MultiColorText from "../shared/MultiColorText";
import Label from "../ui/HeroLabel";

const milestoneData = [
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
    title: "Global Expansion",
    description:
      "Started exporting to clients in Europe and North America, marking our first major international milestone.",
    image: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=420&q=80",
        label: "International Market Entry - Our first export venture to USA",
        location: "USA",
      },
    ],
  },
];

type CardProps = {
  i: number;
  year: string;
  title: string;
  description: string;
  image: { url: string; label: string; location: string }[];
  progress: any;
  range: [number, number];
  targetScale: number;
  onActive: (index: number) => void;
};
const Card: React.FC<CardProps & { isActive: boolean }> = ({
  i,
  year,
  title,
  description,
  image,
  progress,
  range,
  targetScale,
  onActive,
  isActive,
}) => {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 40%", "start 0%"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      if (v >= 0 && v < 1) {
        onActive(i);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, i, onActive]);

  // Scroll down by one viewport height
  // Scroll down by the container height (card height)
  const handleArrowClick = () => {
    if (!container.current) return;

    const currentScroll = window.scrollY;
    const nextScroll =
      i === 0
        ? currentScroll + container.current.offsetHeight + 400
        : currentScroll + container.current.offsetHeight;

    window.scrollTo({
      top: nextScroll,
      behavior: "smooth",
    });
  };

  return (
    <div
      ref={container}
      className="gap-[56px] min-w-full flex items-center justify-center sticky top-[20%]"
    >
      <motion.div
        style={{ top: `calc(-5vh + ${i * 25}px)` }}
        className={`relative flex flex-col gap-[57px] w-full rounded-[24px] px-[40px] py-[50px] border transition-all duration-300 ease-in-out shadow-lg
          ${
            isActive
              ? "bg-[#0F1B26] border-[var(--color-primary)]"
              : "bg-[#0F1B26] border-[var(--text-light-25)]"
          }
          hover:border-[var(--color-primary)]`}
      >
        <div className="flex flex-row items-center justify-between">
          <TextBuilder
            fontSize="72px"
            weight="bold"
            color={`${isActive ? "primary" : "section50"}`}
            className="leading-none"
          >
            {year}
          </TextBuilder>
      <div
  onClick={handleArrowClick}
  aria-label="Scroll to next milestone"
  className={`px-[16px] py-[25px] rounded-[40px] flex items-center justify-center border transition-all duration-300 cursor-pointer
    ${isActive ? "border-[var(--color-primary)] text-[var(--color-primary)]" : "border-[var(--text-light-25)] text-[var(--section-dark)]"}
    hover:border-[var(--color-primary)] hover:text-[var(--text-light)]`}
>
  <div className="w-[25px] h-[25px] pointer-events-none">
    <ArrowDown />
  </div>
</div>

        </div>

        <div className="flex flex-col gap-[29px]">
          <TextBuilder fontSize="30px" weight="bold" color="light">
            {title}
          </TextBuilder>
          <TextBuilder fontSize="20px" color="lighter">
            {description}
          </TextBuilder>
        </div>
      </motion.div>
    </div>
  );
};

// 🔹 Parent
export default function NewMilestones() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const activeMilestone = milestoneData[activeIndex];

  return (
    <main
      ref={container}
      className="relative bg-[var(--text-dark)] pl-[135px] pt-[103px]"
    >
      <div className="flex flex-col items-start gap-3 pb-[66px]">
        <MultiColorText
          fontSize="56px"
          className="leading-[1.2] text-start"
          items={[
            { text: "Visionary ", weight: "medium", color: "light" },
            { text: "Milestones", weight: "bold", color: "primary" },
          ]}
        />
        <TextBuilder fontSize="20px" color="lighter" className="leading-[1.25]">
          Transforming modern living spaces for 12 years..
        </TextBuilder>
      </div>

      <div className="flex flex-row w-full">
        {/* LEFT SIDE */}
        <div className="py-[86px] w-[40%] mb-[10%]">
          {milestoneData.map((milestone, i) => {
            const targetScale = 1 - (milestoneData.length - i) * 0.05;
            return (
              <Card
                isActive={i === activeIndex}
                key={`m_${i}`}
                i={i}
                {...milestone}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
                onActive={setActiveIndex}
              />
            );
          })}
        </div>

        {/* RIGHT SIDE — ACTIVE IMAGES */}
        <div className="w-[60%] flex flex-col gap-[30px] items-center justify-start relative">
          <div className="sticky top-[25%] w-full ">
            {" "}
            <div className="absolute right-1/5 top-[-3%]">
              {" "}
              <TextBuilder fontSize="24px" weight="bold" color="light50">
                {" "}
                {activeMilestone.year}
              </TextBuilder>{" "}
            </div>{" "}
            <div className="absolute right-1/4 mt-6">
              {" "}
              <Label text={activeMilestone.image[0].location} />
            </div>{" "}
            <div className="mt-[10%] mb-[20%] flex flex-col items-center">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activeIndex} // this tells React/Framer Motion to treat each milestone as new
                  className="flex flex-row gap-[28px] mt-[20px] justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  {activeMilestone.image.map((img, idx) => (
                    <motion.div
                      key={`${activeIndex}-${img.url}`} // unique per image
                      className="flex flex-col gap-4 items-center text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                      <div className="relative w-[416px] h-[240px] rounded-[24px]  overflow-hidden">
                        <Image
                          unoptimized
                          src={img.url}
                          alt={img.label}
                          fill
                          className="object-cover rounded-[24px]"
                        />
                      </div>
                      <TextBuilder
                        fontSize="20px"
                        color="lighter"
                        className="w-[416px] text-start"
                      >
                        {img.label}
                      </TextBuilder>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          {/* Year */}

          {/* Location Label */}

          {/* Active Images */}
        </div>
      </div>

      {/* Map background */}
      <div
        className="absolute right-0 top-0 w-[60%] h-full bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('/assets/milestone/map.webp')" }}
      />
    </main>
  );
}
