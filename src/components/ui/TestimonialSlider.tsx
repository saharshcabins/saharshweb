"use client";

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
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-40 h-20 flex items-center justify-center"
          >
            <img
              src={logo}
              alt={`Logo ${index}`}
              className="object-contain w-full h-full w-[300px] h-[30px]"
            />
          </div>
        ))}
        {/* Repeat logos for seamless loop */}
        {logos.map((logo, index) => (
          <div
            key={`dup-${index}`}
            className="flex-shrink-0 w-40 h-20 flex items-center justify-center"
          >
            <img
              src={logo}
              alt={`Logo ${index}`}
              className="object-contain w-full h-full w-[300px] h-[30px]"
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
          display: flex;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default TestimonialSlider;
