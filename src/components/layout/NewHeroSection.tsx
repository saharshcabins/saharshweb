"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import TextBuilder from "../shared/TextBuilder";
import Label from "../ui/HeroLabel";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Head from "next/head";

const NewHeroSection = () => {
  const [product, setProducts] = useState(false);
  const heading = "We Build Cabins";
  const letters = heading.split("");
const words = [
  "Cabins",
  "Luxury Cottages",
  "Villas",
  "Offices",
  "Resorts",
];

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
        <link rel="preload" as="image" href="/assets/built/cottages.png" />
      </Head>

      {/*
        Key fix:
        - Mobile: aspect-[4/3] so the container height is always proportional
          to width — no more arbitrary h-screen cropping on small screens.
        - Desktop (md+): h-screen restores the full-viewport feel.
        - All images share object-cover + object-center so every slide
          crops from the same anchor point.
      */}
      <div className="w-full aspect-[4/3] md:aspect-auto md:h-screen bg-cover bg-center relative flex flex-col justify-between overflow-hidden">

        {/* Dark overlay when product panel open */}
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

        {/* Initial fade-in overlay */}
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
                    /*
                      object-cover + object-center ensures every image
                      scales to fill the container from the same center
                      anchor — no per-slide shifting.
                    */
                    className="object-cover object-center"
                    quality={100}
                    sizes="100vw"
                  />

                  {/* Consistent gradient on all slides */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
                </motion.div>
              )
          )}
        </AnimatePresence>

        {/* Heading */}
        <motion.div
          className="my-auto flex flex-col items-center gap-3 text-center z-20 px-4"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          transition={{ delay: 0.8 }}
        >
       <motion.div className="flex flex-wrap justify-center items-center gap-2">
  {/* Static Part */}
  <TextBuilder fontSize="75px" weight="extrabold" color="light">
    We Build
  </TextBuilder>

  {/* Animated Part */}
  <motion.span
    key={wordIndex}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <TextBuilder fontSize="75px" weight="extrabold" color="light">
      {text}
    </TextBuilder>
  </motion.span>

  {/* Cursor */}
  <motion.span
    animate={{ opacity: [0, 1, 0] }}
    transition={{ repeat: Infinity, duration: 1 }}
  >
    <TextBuilder fontSize="75px" weight="extrabold" color="light">
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
          >
            <TextBuilder fontSize="24px" weight="medium" color="section">
              Modern Design. Uncompromising Interiors.
              <br /> An Extraordinary Living Experience.
            </TextBuilder>
          </motion.div>
        </motion.div>

      </div>
    </>
  );
};

export default NewHeroSection;