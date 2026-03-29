"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import TextBuilder from "../shared/TextBuilder";
import Image from "next/image";
import Head from "next/head";

const HeroSection = () => {
  const heading = "We Build Cabins";
  const letters = heading.split("");
  const words = ["Cabins", "Luxury Cottages", "Villas", "Offices", "Resorts"];

  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      // typing
      if (text.length < currentWord.length) {
        timeout = setTimeout(() => {
          setText(currentWord.slice(0, text.length + 1));
        }, 80);
      } else {
        // pause before deleting
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      // deleting
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(currentWord.slice(0, text.length - 1));
        }, 40);
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        delay: 0.5,
        staggerChildren: 0.05,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
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
      bgImage: "/assets/built/cottages.png",
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

  // Auto advance every 30s
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

  return (
    <>
      <Head>
        <link rel="preload" as="image" href="/assets/newhero/hero_bg_1.webp" />
      </Head>
      <div className="w-full h-screen bg-cover bg-center relative flex flex-col justify-center items-center md:hidden">
        <motion.div
          className="min-h-full bg-[#000000]/20 w-full absolute z-10"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        />

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
          className="flex flex-col items-center gap-4 text-center px-4 z-20"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          transition={{ delay: 0.8 }}
        >
          <motion.div className="flex flex-wrap justify-center items-center gap-2">
            {/* Static text */}
            <TextBuilder fontSize="40px" weight="extrabold" color="light">
              We Build
            </TextBuilder>

            {/* Typing word */}
            <motion.span
              key={wordIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <TextBuilder fontSize="40px" weight="extrabold" color="light">
                {text}
              </TextBuilder>
            </motion.span>

            {/* Blinking cursor */}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              <TextBuilder fontSize="40px" weight="extrabold" color="light">
                |
              </TextBuilder>
            </motion.span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: letters.length * 0.05 + 0.2 + 0.5,
              duration: 0.6,
            }}
            className="px-6 "
          >
            <TextBuilder fontSize="16px" weight="medium" color="section">
              Modern Design. Uncompromising Interiors. An Extraordinary Living
              Experience.
            </TextBuilder>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default HeroSection;
