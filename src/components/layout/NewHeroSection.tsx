"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, delay, motion } from "framer-motion";
import TextBuilder from "../shared/TextBuilder";
import { ArrowNew } from "@/utils/svgUtils";
import Label from "../ui/HeroLabel";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Head from "next/head";

const NewHeroSection = () => {
  const [product, setProducts] = useState(false);
  const heading = "We Build Cabins";
  const letters = heading.split("");
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        delay: 0.5, // start animation after 0.5s
        staggerChildren: 0.05, // animate letters one by one
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } }, // no delay here
  };

  const slides = [
    {
      id: 1,
      productName: "Rustico",
      productLabel: ["2BHK", "800 SQFT", "1 BEDROOM + PANTRY"],
      productPath: [
        "/assets/newhero/product_1.webp",
        "/assets/newhero/product_2.webp",
      ],
      specialLabel: "Interior",
      bgImage: "/assets/built/cottages.png", // Update with actual filename",
    },
    {
      id: 2,
      productName: "Lodge",
      productLabel: ["3BHK", "1200 SQFT", "2 BEDROOM + PANTRY"],
      productPath: [
        "/assets/newhero/product_1.webp",
        "/assets/newhero/product_2.webp",
      ],
      specialLabel: "Exterior",
      bgImage: "/assets/built/villa.png",
    },
    {
      id: 3,
      productName: "Cabana",
      productLabel: ["1BHK", "600 SQFT", "1 BEDROOM + PANTRY"],
      productPath: [
        "/assets/newhero/product_1.webp",
        "/assets/newhero/product_2.webp",
      ],
      specialLabel: "Interior",
      bgImage: "/assets/built/center.png",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto advance every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 30000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const current = slides[currentSlide];

  return (
    <>
      <Head>
        <link rel="preload" as="image" href="/assets/newhero/hero_bg_1.webp" />
      </Head>
      <div className="w-full h-screen bg-cover bg-center relative flex flex-col justify-between">
        <AnimatePresence mode="wait">
          {product && (
            <motion.div
              className="min-h-full bg-[#000000]/40 w-full absolute z-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          )}
        </AnimatePresence>

        <motion.div
          className="min-h-full bg-[#000000]/20 w-full absolute z-10"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        ></motion.div>
        {/* Background slides */}
        <AnimatePresence mode="wait">
          {slides.map(
            (slide, idx) =>
              idx === currentSlide && (
                <motion.div
                  key={slide.id}
                  className="absolute inset-0 w-full h-full z-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Image
                    src={slide.bgImage}
                    alt={`${slide.productName} background`}
                    fill
                    priority={idx === 0}
                    className="object-cover"
                    quality={100}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
                </motion.div>
              ),
          )}
        </AnimatePresence>

        {/* Heading */}
        <motion.div
          className="mt-[400px] flex flex-col items-center gap-3 text-center z-20"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          transition={{ delay: 0.8 }}
        >
          <motion.div className="flex flex-wrap justify-center">
            {letters.map((letter, idx) =>
              letter === " " ? (
                <span key={idx} className="mr-[10px]">
                  &nbsp;
                </span>
              ) : (
                <motion.span
                  key={idx}
                  variants={letterVariants}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  style={{ display: "inline-block" }}
                >
                  <TextBuilder
                    fontSize="75px"
                    weight="extrabold"
                    color="light"
                  >
                    {letter}
                  </TextBuilder>
                </motion.span>
              ),
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: letters.length * 0.05 + 0.2 + 0.5,
              duration: 0.6,
            }}
          >
            <TextBuilder fontSize="24px" weight="medium" color="section">
              Modern Design. Uncompromising Interiors.
              <br /> An Extraordinary Living Experience.
            </TextBuilder>
          </motion.div>
        </motion.div>

        {/* Product & Labels */}
      </div>
    </>
  );
};

export default NewHeroSection;
