"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MultiColorText from "../shared/MultiColorText";
import TextBuilder from "../shared/TextBuilder";

gsap.registerPlugin(ScrollTrigger);

const GsapMilestone = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const boxes = [1, 2, 3, 4];
useGSAP(() => {
  const section = containerRef.current;
  if (!section) return; // ✅ exit if section not mounted yet

  const cards = gsap.utils.toArray<HTMLElement>(".gsap-box");

  // increase scroll distance for smoother staggered animation
  const totalScroll = section.offsetHeight + cards.length * 600;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top top",
      end: totalScroll,
      scrub: true,
      pin: true,
      anticipatePin: 1,
    },
  });

  cards.forEach((card, i) => {
    // optional: first card already visible
    if (i === 0) {
      gsap.set(card, { yPercent: 0, opacity: 1, zIndex: cards.length - i });
      return;
    }

    tl.fromTo(
      card,
      {
        yPercent: 100,
        opacity: 0,
        zIndex: cards.length - i,
      },
      {
        yPercent: 0,
        opacity: 1,
        zIndex: cards.length - i,
        duration: 1,
        ease: "power2.out",
      },
      i * 0.5 // stagger in timeline
    );
  });
}, []);


  return (
    <section
      ref={containerRef}
      className="relative bg-[var(--text-dark)]  overflow-hidden flex flex-col items-start pl-[7%] pt-[7%] pb-[10%]"
    >
      {/* Header */}
      <div className="flex flex-col items-start gap-3 pb-[6%]">
        <MultiColorText
          fontSize="56px"
          className="leading-[1.2] text-start"
          items={[
            { text: "Visionary ", weight: "medium", color: "light" },
            { text: "Milestones", weight: "bold", color: "primary" },
          ]}
        />
        <TextBuilder
          fontSize="20px"
          color="lighter"
          className="leading-[1.25]"
        >
          Transforming modern living spaces for 12 years..
        </TextBuilder>
      </div>

      {/* Cards */}
      <div className="flex flex-col w-[40%] gap-20">
        {boxes.map((item) => (
          <div
            key={item}
            className="gsap-box h-[400px] text-white flex items-center justify-center rounded-lg border border-red-500 bg-[var(--text-dark)]"
          >
            Card {item}
          </div>
        ))}
      </div>
    </section>
  );
};

export default GsapMilestone;
