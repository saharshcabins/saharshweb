"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import TextBuilder from "../shared/TextBuilder";
import Image from "next/image";
import Head from "next/head";
import Button from "../shared/Button";
import ButtonMobile from "../shared/ButtonMobile";
import TextBuilderMobile from "../shared/TextBuilderMobile";

const slides = [
  {
    id: 1,
    word: "Cottages",
    bgImage: "/assets/built/cottage_mobile.png",
  },
  {
    id: 2,
    word: "Villas",
    bgImage: "/assets/built/villa_mobile.png",
  },
  {
    id: 3,
    word: "Offices",
    bgImage: "/assets/built/Office_mobile.png",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting" | "switching">("typing");

  const scrollToSection = (id: string) => {
    const target = document.querySelector(id);
    if (!target) return;
    const elementPosition = target.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: elementPosition + 80, behavior: "smooth" });
  };

  useEffect(() => {
    const currentWord = slides[currentSlide].word;
    let timeout: NodeJS.Timeout;

    if (phase === "typing") {
      if (displayText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        }, 80);
      } else {
        setPhase("pausing");
      }
    }

    if (phase === "pausing") {
      timeout = setTimeout(() => {
        setPhase("deleting");
      }, 2000);
    }

    if (phase === "deleting") {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length - 1));
        }, 40);
      } else {
        setPhase("switching");
      }
    }

    if (phase === "switching") {
      timeout = setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setDisplayText("");
        setPhase("typing");
      }, 300);
    }

    return () => clearTimeout(timeout);
  }, [displayText, phase, currentSlide]);

  return (
    <>
      <Head>
        <link rel="preload" as="image" href="/assets/built/cottages.png" />
      </Head>

<div className="w-full h-[90vh] md:h-[90vh] relative flex flex-col justify-between overflow-hidden">
        {/* Background slides */}
        <AnimatePresence mode="sync">
          {slides.map(
            (slide, idx) =>
              idx === currentSlide && (
                <motion.div
                  key={slide.id}
                  className="absolute inset-0 w-full h-full z-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  <Image
                    src={slide.bgImage}
                    alt={`${slide.word} background`}
                    fill
                    priority={idx === 0}
                    className="object-cover object-center"
                    quality={100}
                    // sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
                </motion.div>
              )
          )}
        </AnimatePresence>

        {/* Initial fade-in overlay — pointer-events in style so Framer can't override */}
        <motion.div
          className="min-h-full bg-black/20 w-full absolute z-10"
          style={{ pointerEvents: "none" }}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        />

        {/* Heading */}
        <div className="my-auto flex flex-col items-center gap-3 text-center z-20 px-4">
          <div className="flex flex-wrap justify-center items-center gap-2">
            <TextBuilder fontSize="40px" weight="extrabold" color="light">
              We Build Luxury
            </TextBuilder>

            <span>
              <TextBuilder fontSize="40px" weight="extrabold" color="light">
                {displayText}
              </TextBuilder>
            </span>

            {/* Blinking cursor */}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              <TextBuilder fontSize="40px" weight="extrabold" color="light">
                |
              </TextBuilder>
            </motion.span>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="px-6"
          >
            <TextBuilderMobile fontSize="14px" weight="medium" color="section">
              Modern Design. Uncompromising Interiors.{" "}
              An Extraordinary Living Experience.
            </TextBuilderMobile>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="pt-5"
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <ButtonMobile text="Know More" onClick={() => scrollToSection("#work")} />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;