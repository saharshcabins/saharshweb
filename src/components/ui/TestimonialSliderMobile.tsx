"use client";

import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";

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

// Single set — we duplicate in JSX for the seamless loop
const ITEM_WIDTH = 122; // matches w-[122px]

const TestimonialSliderMobile = () => {
  const trackWidth = logos.length * ITEM_WIDTH;

  return (
    <div className="relative w-full overflow-hidden py-10">
      {/* Edge gradient overlay */}
      <div className="absolute inset-0 pointer-events-none z-20 flex">
        <div className="w-20 h-full bg-gradient-to-r from-white to-transparent" />
        <div className="flex-1" />
        <div className="w-20 h-full bg-gradient-to-l from-white to-transparent" />
      </div>

      {/* Slider track — two copies for seamless loop */}
      <div
        className="flex w-max"
        style={
          {
            "--track-width": `${trackWidth}px`,
            animation: `marquee-mobile ${logos.length * 2}s linear infinite`,
          } as React.CSSProperties & { [key: string]: string }
        }
      >
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[122px] h-[112px] flex items-center justify-center relative"
          >
            <Image
              src="/assets/cabin/grid_mobile.webp"
              alt="Background Grid"
              fill
              className="object-cover absolute top-0 left-0 z-0"
            />
            <Image
              src={logo}
              alt={`Logo ${index % logos.length}`}
              width={60}
              height={36}
              className="object-contain relative z-10"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee-mobile {
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

export default TestimonialSliderMobile;