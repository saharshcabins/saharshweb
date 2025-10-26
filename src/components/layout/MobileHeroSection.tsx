"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import HeroText from "../ui/HeroText";
import Image from "next/image";
import MobileHeroText from "../ui/MobileHeroText";

const HeroSection = () => {
  const heroContainerRef = useRef(null);

  return (
    <section
      ref={heroContainerRef}
      className="relative flex flex-col justify-center w-full overflow-hidden py-16 md:py-32"
    >
      {/* Animated container */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col md:flex-row items-center justify-between w-[90%] mx-auto gap-8 md:gap-16"
      >
        {/* Hero Text */}
        <div className="md:w-1/2 w-full text-center md:text-left">
          <MobileHeroText />
        </div>

        {/* Container Image with floating and drag rotation */}
        <motion.div
          className="md:w-1/2 w-full flex justify-center md:justify-end cursor-grab"
          drag
          dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
          whileTap={{ cursor: "grabbing" }}
          animate={{
            rotate: [ -2, 2, -2 ], // Subtle floating rotation keyframes
            y: [0, -10, 0], // Slight up/down floating
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          <Image
            
            src="/assets/hero/container.webp"
            alt="container"
            width={550}
            height={450}
            className="w-full h-auto"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
