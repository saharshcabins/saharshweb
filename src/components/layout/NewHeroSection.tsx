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
      bgImage: "/assets/newhero/hero_bg_1.webp",
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
      bgImage: "/assets/newhero/hero_bg_1.webp",
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
      bgImage: "/assets/newhero/hero_bg_1.webp",
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
    <div
      className="w-full h-screen bg-cover bg-center relative flex flex-col justify-between"
  
    >
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
                transition={{ duration: 0.4 }}
              >
                <Image
                  src={slide.bgImage}
                  alt={`${slide.productName} background`}
                  fill
                  priority={idx === 0} // only first one with priority
                  className="object-cover"
                  quality={100}
                />
              </motion.div>
            )
        )}
      </AnimatePresence>

      {/* Heading */}
      <motion.div
        className="mt-[180px] flex flex-col items-center gap-3 text-center z-20"
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
                <TextBuilder fontSize="65px" weight="extrabold" color="light">
                  {letter}
                </TextBuilder>
              </motion.span>
            )
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
          <TextBuilder fontSize="18px" weight="medium" color="section">
            Modern Design. Uncompromising Interiors.
            <br /> An Extraordinary Living Experience.
          </TextBuilder>
        </motion.div>
      </motion.div>

      {/* Product & Labels */}
      <AnimatePresence mode="sync">
        <motion.div
          className="flex flex-col items-center z-20 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            delay: letters.length * 0.05 + 0.2 + 0.5,
            duration: 0.6,
          }}
        >
          <div className="flex flex-col mb-8 gap-[30px] w-[90%] relative">
            {/* Special Label */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 flex flex-row  gap-[19px] items-center z-30">
              <div onClick={() => setProducts(true)}>
                <Label text={current.specialLabel} />
              </div>
              {product && (
                <div
                  onClick={() => setProducts(false)}
                  className="w-[30px] mt-1 h-[30px] cursor-pointer flex items-center justify-center rounded-full border border-[var(--section-accent)]"
                >
                  <X size={15} strokeWidth={4} color="var(--section-accent)" />
                </div>
              )}
            </div>

            {/* Product Images */}
            <AnimatePresence mode="wait">
              {product && (
                <motion.div
                  key={`products-${current.id}`}
                  className="absolute top-0 right-0 -translate-y-1/2 flex flex-col gap-[14px] z-20"
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 100, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {current.productPath.map((path, idx) => (
                    <div key={idx} className="relative w-[323px] h-[218px]">
                      <Image
                        alt={`product-${idx}`}
                        src={path}
                        fill
                        className="object-cover rounded-[16px]"
                      />
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
            {/* Arrow */}
            <div
              className="text-[var(--section-accent)] hover:bg-[var(--color-primary)] transition duration-300 cursor-pointer px-[26px] py-[14px] rounded-[40px] border border-[var(--section-accent)] w-fit"
              onClick={nextSlide}
            >
              <ArrowNew className="w-[25px] h-[25px]" flipped />
            </div>

            {/* Product Name */}
            <TextBuilder fontSize="56px" weight="bold" color="light">
              {current.productName}
            </TextBuilder>

            {/* Arrow */}
            <div
              className="text-[var(--section-accent)] hover:bg-[var(--color-primary)] transition duration-300 cursor-pointer px-[26px] py-[14px] rounded-[40px] border border-[var(--section-accent)] w-fit"
              onClick={prevSlide}
            >
              <ArrowNew className="w-[25px] h-[25px]" />
            </div>
          </div>

          {/* Labels Row */}
          <AnimatePresence mode="wait">
            {current.productLabel && (
              <motion.div
                key={`labels-${current.id}`} // key per slide
                className="flex flex-row justify-center gap-5 mb-[45px] w-[90%]"
                initial={{ opacity: 0, y: 200 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 200 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
              >
                {current.productLabel.map((label, idx) => (
                  <div
                    key={idx}
                    className="py-3 px-6 rounded-full w-fit"
                    style={{
                      background:
                        "linear-gradient(100.81deg, rgba(31, 31, 31, 0.2) 7.82%, rgba(133, 133, 133, 0.2) 94.48%)",
                      borderRadius: "100px",
                      boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                      backdropFilter: "blur(1.5px)",
                      WebkitBackdropFilter: "blur(1.5px)",
                      border: "1px solid rgba(255, 255, 255, 0.19)",
                    }}
                  >
                    <TextBuilder fontSize="18px" weight="bold" color="light">
                      {label}
                    </TextBuilder>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Progress Bar */}
          <div className="relative w-full h-[8px] z-20 overflow-hidden rounded-full">
            <motion.div
              key={currentSlide}
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 30, ease: "linear" }}
              className="absolute top-0 left-0 h-full"
              style={{
                background:
                  "linear-gradient(90deg, #C97A41 50%, rgba(255,255,255,0.8) 100%)",
              }}
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
    </>
  );
};

export default NewHeroSection;
