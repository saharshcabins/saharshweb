"use client";

import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";

const logos = [
  "/assets/company_logo/logo1.png",
  "/assets/company_logo/logo2.png",
  "/assets/company_logo/logo3.png",
  "/assets/company_logo/log04.png",
  "/assets/company_logo/logo1.png",
  "/assets/company_logo/logo2.png",
  "/assets/company_logo/logo3.png",
  "/assets/company_logo/log04.png",
];

const TestimonialSlider = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [trackWidth, setTrackWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      // Calculate the width of the first set of logos
      const firstSet = Array.from(containerRef.current.children).slice(0, logos.length);
      let width = 0;
      firstSet.forEach((el) => {
        // Use getBoundingClientRect().width for a more precise measurement
        width += (el as HTMLElement).getBoundingClientRect().width;
      });
      setTrackWidth(width);
    }
  }, []);

  return (
    <div className="relative w-full overflow-hidden py-10">
      {/* Edge gradient overlay */}
      <div className="absolute inset-0 pointer-events-none z-20 flex">
        <div className="w-32 h-full bg-gradient-to-r from-white/100 to-white/0" />
        <div className="flex-1" />
        <div className="w-32 h-full bg-gradient-to-l from-white/100 to-white/0" />
      </div>

      {/* Slider track */}
   <div
  ref={containerRef}
  className="flex w-max"
  style={
    {
      "--track-width": `${trackWidth}px`,
      animation: `marquee ${logos.length * 2}s linear infinite`,
    } as React.CSSProperties & { [key: string]: string }
  }
>
        {logos.concat(logos).map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[300px] h-[300px] flex items-center justify-center relative"
          >
            {/* Background grid image */}
            <Image
              src="/assets/cabin/grid.png"
              alt="Background Grid"
              fill
              className="object-cover absolute top-0 left-0 z-0"
              
            />
            {/* Logo */}
            <Image
              src={logo}
              alt={`Logo ${index}`}
              width={120}
              height={120}
              className="object-contain relative z-10"
              
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
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