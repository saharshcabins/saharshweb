"use client";

import Image from "next/image";
import React from "react";

const logos = [
  "/assets/company_logo/logo1.webp",
  "/assets/company_logo/logo2.webp",
  "/assets/company_logo/logo3.webp",
  "/assets/company_logo/log04.webp",
  "/assets/company_logo/logo5.png",
  "/assets/company_logo/logo6.png",
  "/assets/company_logo/logo7.webp",
  "/assets/company_logo/logo8.webp",
];

const ITEM_WIDTH = 300; // matches w-[300px]

const TestimonialSlider = () => {
  const trackWidth = logos.length * ITEM_WIDTH;

  return (
    <div className="relative w-full overflow-hidden py-10">
      {/* Edge gradient overlay */}
      <div className="absolute inset-0 pointer-events-none z-20 flex">
        <div className="w-32 h-full bg-gradient-to-r from-white/100 to-white/0" />
        <div className="flex-1" />
        <div className="w-32 h-full bg-gradient-to-l from-white/100 to-white/0" />
      </div>

      {/* Slider track — two copies for seamless loop */}
      <div
        className="flex w-max"
        style={
          {
            "--track-width": `${trackWidth}px`,
            animation: `marquee-desktop ${logos.length * 2}s linear infinite`,
          } as React.CSSProperties & { [key: string]: string }
        }
      >
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[300px] h-[300px] flex items-center justify-center relative"
          >
            <Image
              src="/assets/cabin/grid.webp"
              alt="Background Grid"
              fill
              className="object-cover absolute top-0 left-0 z-0"
            />
            <Image
              src={logo}
              alt={`Logo ${index % logos.length}`}
              width={120}
              height={120}
              className="object-contain relative z-10"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee-desktop {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-1 * var(--track-width)));
          }
        }
      `}</style>
    </div>
  );
};

export default TestimonialSlider;