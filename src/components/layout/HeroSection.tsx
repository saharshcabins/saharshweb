"use client";

import React, { useEffect, useState } from "react";
import HeroText from "../ui/HeroText";
import Image from "next/image";
import TextBuilder from "../shared/TextBuilder";
import Label from "../ui/HeroLabel";
import { motion } from "framer-motion"; // Import motion

const words = ["Homes", "Offices", "Retreats", "Studios", "Cabins"]; // 🔄 words to cycle
const weatherImages = ["cabin_summer.png", "cabin_rain.png", "cabin_winter.png"]; // Weather images

const HeroSection = () => {
  const [scroll, setScroll] = useState(0);

  // ---- Typewriter states ----
  const [wordIndex, setWordIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  // ---- Weather states ----
  const [currentWeatherIndex, setCurrentWeatherIndex] = useState(0); // State for current weather image
  const [previousWeatherIndex, setPreviousWeatherIndex] = useState(0); // To track direction for slide animation

  // ---- Typewriter effect ----
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

  // ---- Cursor blink ----
  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink((prev) => !prev), 500);
    return () => clearInterval(blinkInterval);
  }, []);

  // ---- Scroll effect ----
  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ---- Weather cycling effect ----
  useEffect(() => {
    const weatherInterval = setInterval(() => {
      setPreviousWeatherIndex(currentWeatherIndex); // Store previous index
      setCurrentWeatherIndex((prevIndex) => (prevIndex + 1) % weatherImages.length);
    }, 5000); // Change weather every 5 seconds (adjust as needed)

    return () => clearInterval(weatherInterval);
  }, [currentWeatherIndex]); // Added currentWeatherIndex to dependencies to ensure previous index is correctly captured

  // 🚢 Container animation
  const translateY = scroll * 0.3;
  const rotate = scroll * 0.05;
  const scale = Math.max(1 - scroll * 0.001, 0.6);

  // ✅ use cloudOpacity for container too
  const containerOpacity = Math.max(1 - scroll / 400, 0);

  // ☁ Clouds drift + fade
  const cloudOffset = Math.min(scroll * 0.6, 1000);
  const cloudOpacity = Math.max(1 - scroll / 400, 0);

  // 🏠 Cabin reveal
  const cabinOpacity = Math.min(Math.max((scroll - 200) / 200, 0), 1);
  const cabinTranslateY = Math.max(50 - scroll * 0.1, 0);

  // Determine slide direction for animation
  const slideDirection = currentWeatherIndex > previousWeatherIndex || (currentWeatherIndex === 0 && previousWeatherIndex === weatherImages.length - 1) ? 1 : -1;

  return (
    <div
      className="relative flex flex-col justify-start w-full overflow-hidden mx-auto"
      style={{
        background:
          "linear-gradient(to bottom, #FFFFFF 0%, #C1D3E6 24%, #87ADD3 47%, #5197D1 63%, #4379C6 100%)",
      }}
    >
      {/* Top Row with Text + Container */}
      <div className="flex justify-between items-start w-[90%] relative z-30 mx-auto">
        {/* Hero Text - takes half width */}
        <div className="w-1/2">
          <HeroText />
        </div>

        {/* 🚢 Container Image - takes half width */}
        <div
          className="w-1/2"
          style={{
            transform: `translateY(${translateY}px) rotate(${rotate}deg) scale(${scale})`,
            opacity: containerOpacity,
            transition: "transform 0.1s linear, opacity 0.3s ease-out",
          }}
        >
          <Image
            src="/assets/hero/container.png"
            alt="container"
            width={550}
            height={450}
            className="w-full h-auto"
            
          />
        </div>
      </div>

      {/* ☁ Clouds + Cabin */}
      <div className="relative w-full mt-[-80px] flex justify-center">
        {/* Back Cloud Layer */}
        <div
          className="absolute inset-0 z-30 -top-[15%] left-20 flex justify-center items-start pointer-events-none"
          style={{
            transform: `translateX(${-cloudOffset}px)`,
            opacity: cloudOpacity,
            transition: "transform 0.3s ease-out, opacity 0.3s ease-out",
          }}
        >
          <Image
            src="/assets/hero/front_cloud.png"
            alt="Front Cloud"
            width={1440}
            height={780}
            style={{ width: "100%", height: "auto" }}
            
          />
        </div>
        <div
          className="absolute inset-0 z-0"
          style={{
            transform: `translateX(-${cloudOffset}px)`,
            opacity: cloudOpacity,
            transition: "transform 0.3s ease-out, opacity 0.3s ease-out",
          }}
        >
          <Image
            
            src="/assets/hero/back_cloud.png"
            alt="Back Cloud"
            width={1440}
            height={780}
            style={{ width: "100%", height: "auto" }}
          />
        </div>

        <div
          className="relative w-full flex justify-center z-10"
          style={{
            opacity: cabinOpacity,
            transform: `translateY(${cabinTranslateY}px)`,
            transition: "transform 0.4s ease-out, opacity 0.4s ease-out",
          }}
        >
          {/* Cabin Images with Framer Motion */}
<div className="relative w-full  overflow-hidden">
   <Image
        
        src={`/assets/hero/cabin.png`}
        alt={`cabin`}
        width={1440}
        height={980}
        className="object-cover w-full h-full"
      />
</div>




          {/* Typewriter Text Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-start pt-[15%] ">
            <TextBuilder
              fontSize="24px"
              weight="medium"
              color="light"
              className="leading-[1.2]"
            >
              We create innovative, sustainable, and customizable
            </TextBuilder>
            <TextBuilder
              fontSize="42px"
              weight="medium"
              color="light"
              className="leading-[1.15]"
            >
              Cabins that can be your
            </TextBuilder>
            <TextBuilder
              fontSize="42px"
              weight="bold"
              color="light"
              className="leading-[1.5]"
            >
              {words[wordIndex].substring(0, subIndex)}
              <span
                className={`inline-block w-[2px] h-[1em] bg-white/70 ml-[2px] transition-opacity duration-100 ease-in-out ${
                  blink ? "opacity-100" : "opacity-0"
                }`}
              />
            </TextBuilder>
          </div>

          {/* Labels Overlay */}
          <div className="absolute inset-0 ">
            {/* Homes Label */}
            <div className="absolute top-[45%] right-[33%] z-10">
              <Label text="Homes" />
            </div>
            {/* Offices Label */}
            <div className="absolute top-[80%] left-[70%] z-10">
              <Label text="Offices" />
            </div>
            {/* Cabins Label (swipe layout) */}
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