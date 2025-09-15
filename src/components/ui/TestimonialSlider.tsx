"use client";

import Image from "next/image";
import React from "react";

const logos = [
  "/assets/company_logo/logo1.png",
  "/assets/company_logo/logo2.png",
  "/assets/company_logo/logo3.png",
  "/assets/company_logo/logo4.png",
];

const TestimonialSlider = () => {
  return (
    <div className="relative w-full overflow-hidden py-10">
      {/* Edge gradient overlay */}
      <div className="absolute inset-0 pointer-events-none z-20 flex">
        <div className="w-32 h-full bg-gradient-to-r from-white/100 to-white/0" />
        <div className="flex-1" />
        <div className="w-32 h-full bg-gradient-to-l from-white/100 to-white/0" />
      </div>

      {/* Slider track */}
      <div className="flex w-max animate-marquee gap-10">
        {logos.concat(logos).map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[300px] h-[300px] flex items-center justify-center"
          >
            <Image
              src={logo}
              alt={`Logo ${index}`}
              width={120}
              height={120}
              className="object-contain"
              unoptimized
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
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default TestimonialSlider;
