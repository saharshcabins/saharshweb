"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import HeroText from "../ui/HeroText";
import Image from "next/image";
import TextBuilder from "../shared/TextBuilder";
import Label from "../ui/HeroLabel";

const words = ["Homes", "Offices", "Retreats", "Studios", "Cabins"];

const HeroSection = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  const cabinRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  // --- Typewriter effect ---
  useEffect(() => {
    if (wordIndex >= words.length) return;

    if (subIndex === words[wordIndex].length + 1 && !isDeleting) {
      setTimeout(() => setIsDeleting(true), 1000);
      return;
    }

    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
      },
      isDeleting ? 100 : 150
    );

    return () => clearTimeout(timeout);
  }, [subIndex, wordIndex, isDeleting]);

  // --- Cursor blink ---
  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink((prev) => !prev), 500);
    return () => clearInterval(blinkInterval);
  }, []);

  // --- Scroll detection with direction ---
useEffect(() => {
  let lastY = window.scrollY;

  const handleScroll = () => {
    if (!cabinRef.current) return;
    const rect = cabinRef.current.getBoundingClientRect();

    if (window.scrollY > lastY && rect.top <= window.innerHeight * 0.5) {
      // Scrolling down past cabin
      setScrolled(true);
    } else if (window.scrollY < lastY && window.scrollY < window.innerHeight * 0.5) {
      // Scrolling back up toward hero
      setScrolled(false);
    }

    lastY = window.scrollY;
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  // --- Conditionally Jump to text when scrolled ---
  useEffect(() => {
    // Check if the URL has a hash. If it does, a navigation link was likely clicked.
    if (window.location.hash) {
      return; // Do nothing and let the browser's default scroll behavior take over.
    }

    // Only perform the "jump" logic if it's a regular scroll
    if (scrolled && textRef.current) {
      const top = textRef.current.getBoundingClientRect().top + window.scrollY + 150;
      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  }, [scrolled]);

  return (
    <div
      className="relative flex flex-col justify-start w-full overflow-hidden mx-auto"
      style={{
        background:
          "linear-gradient(to bottom, #FFFFFF 0%, #C1D3E6 24%, #87ADD3 47%, #5197D1 63%, #4379C6 100%)",
      }}
    >
      {/* Top Row with Text + Container */}
      <div className="flex justify-between items-start w-[90%] relative z-10 mx-auto">
        {/* Hero Text */}
        <motion.div
          className="w-1/2"
          initial={{ opacity: 0, y: 0 }}
          animate={
            scrolled ? { opacity: 0, y: 150, scale: 1 } : { opacity: 1, y: 0 }
          }
          transition={{ duration: scrolled ? 0.5 : 1, ease: "easeOut" }}
        >
          <HeroText />
        </motion.div>

        {/* Container Image */}
        <motion.div
          className="w-1/2"
          initial={{ opacity: 0, y: 0 }}
          animate={
            scrolled
              ? { opacity: 0, y: 150, scale: 1 }
              : { opacity: 1, y: 0, scale: 1 }
          }
          transition={{
            duration: scrolled ? 0.5 : 1,
            ease: "easeOut",
            delay: 0.2,
          }}
        >
          <Image
            unoptimized
            src="/assets/hero/container.png"
            alt="container"
            width={550}
            height={450}
            className="w-full h-auto"
          />
        </motion.div>
      </div>

      {/* ☁ Clouds + Cabin */}
      <div className="relative w-full mt-[-60px] flex justify-center">
        {/* Front Cloud */}
        <motion.div
          className="absolute inset-0 z-30 -top-[15%] left-20 flex justify-center items-start pointer-events-none"
          animate={{ x: scrolled ? -200 : 0, opacity: scrolled ? 0 : 1 }}
          transition={{ ease: "easeOut", duration: 0.6 }}
        >
          <Image
            unoptimized
            src="/assets/hero/front_cloud.webp"
            alt="Front Cloud"
            width={1440}
            height={780}
            style={{
              width: "100%",
              height: "auto",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 10%)",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskSize: "100% 100%",
              maskImage: "linear-gradient(to right, transparent, black 10%)",
              maskRepeat: "no-repeat",
              maskSize: "100% 100%",
            }}
          />
        </motion.div>

        {/* Back Cloud */}
        <motion.div
          className="absolute inset-0 z-0"
          animate={{ x: scrolled ? -150 : 0, opacity: scrolled ? 0 : 1 }}
          transition={{ ease: "easeOut", duration: 0.6 }}
        >
          <Image
            unoptimized
            src="/assets/hero/back_cloud.webp"
            alt="Back Cloud"
            width={1440}
            height={780}
            style={{ width: "100%", height: "auto" }}
          />
        </motion.div>

        {/* Cabin */}
        <div
          ref={cabinRef}
          className="relative w-full flex justify-center z-10"
        >
          <div className="relative w-full overflow-hidden">
            <Image
              unoptimized
              src={`/assets/hero/cabin.webp`}
              alt={`cabin`}
              width={1440}
              height={980}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Typewriter Text Overlay with ref */}
          <div
            ref={textRef}
            className="absolute inset-0 flex flex-col items-center justify-start pt-[15%]"
          >
            <TextBuilder fontSize="24px" weight="medium" color="light">
              We create innovative, sustainable, and customizable
            </TextBuilder>
            <TextBuilder fontSize="42px" weight="medium" color="light">
              Cabins that can be your
            </TextBuilder>
            <TextBuilder fontSize="42px" weight="bold" color="light">
              {words[wordIndex].substring(0, subIndex)}
              <span
                className={`inline-block w-[2px] h-[1em] bg-white/70 ml-[2px] transition-opacity duration-100 ease-in-out ${
                  blink ? "opacity-100" : "opacity-0"
                }`}
              />
            </TextBuilder>
          </div>

          {/* Labels */}
          <div className="absolute inset-0">
            <div className="absolute top-[45%] right-[33%] z-10">
              <Label text="Homes" />
            </div>
            <div className="absolute top-[80%] left-[70%] z-10">
              <Label text="Offices" />
            </div>
            <div className="absolute top-[85%] right-[85%]">
              <Label text="Cabins" swipe />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;