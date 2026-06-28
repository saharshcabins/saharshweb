"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ButtonMobile from "../shared/ButtonMobile";
import TextBuilderMobile from "../shared/TextBuilderMobile";

// --- Slide data ---------------------------------------------------------------
const slides = [
  { id: 1, word: "Cottages", bgImage: "/assets/built/cottage_mobile.webp" },
  { id: 2, word: "Villas",   bgImage: "/assets/built/villa_mobile.webp"   },
  { id: 3, word: "Offices",  bgImage: "/assets/built/Office_mobile.webp"  },
];

// --- Scroll helper ------------------------------------------------------------
const getAbsoluteTop = (el: HTMLElement): number => {
  let top = 0;
  let current: HTMLElement | null = el;
  while (current) {
    top += current.offsetTop;
    current = current.offsetParent as HTMLElement | null;
  }
  return top;
};

// --- Component ----------------------------------------------------------------
const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [phase, setPhase] = useState<
    "typing" | "pausing" | "deleting" | "switching"
  >("typing");
  const [isPageReady, setIsPageReady] = useState(false);

  const scrollToSection = (href: string) => {
    // Wait until page is fully loaded before scrolling
    if (!isPageReady) {
      // Queue scroll for when page is ready
      const checkReady = setInterval(() => {
        if (isPageReady) {
          clearInterval(checkReady);
          performScroll(href);
        }
      }, 50);
      return;
    }
    performScroll(href);
  };

  const performScroll = (href: string) => {
    const targets = Array.from(
      document.querySelectorAll(href),
    ) as HTMLElement[];
    const target =
      targets.find((el) => el.offsetParent !== null) ?? targets[0];
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const currentWord = slides[currentSlide].word;
    let timeout: NodeJS.Timeout;

    if (phase === "typing") {
      if (displayText.length < currentWord.length) {
        timeout = setTimeout(
          () => setDisplayText(currentWord.slice(0, displayText.length + 1)),
          80,
        );
      } else {
        setPhase("pausing");
      }
    }
    if (phase === "pausing") {
      timeout = setTimeout(() => setPhase("deleting"), 2000);
    }
    if (phase === "deleting") {
      if (displayText.length > 0) {
        timeout = setTimeout(
          () => setDisplayText(currentWord.slice(0, displayText.length - 1)),
          40,
        );
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

  // Track when page is fully loaded (images, fonts, etc.)
  useEffect(() => {
    const handleLoad = () => {
      setIsPageReady(true);
    };

    // If page is already loaded, set ready immediately
    if (document.readyState === "complete") {
      setIsPageReady(true);
    } else {
      // Otherwise wait for load event
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <>
      {/* ==========================================
         HOME SECTION: HERO
         Purpose:
         First impression, value proposition, and brand identity.
         Primary conversion objective:
         Compel visitors to scroll deeper and engage with the brand.
      ========================================== */}
      <section
        id="hero"
        data-section="hero"
        className="w-full min-h-[100svh] relative flex flex-col justify-between overflow-hidden"
      >

        {/* All slides always in DOM so images are preloaded — opacity drives transitions */}
        {slides.map((slide, idx) => (
          <motion.div
            key={slide.id}
            className="absolute inset-0 w-full h-full z-0"
            animate={{ opacity: idx === currentSlide ? 1 : 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <Image
              src={slide.bgImage}
              alt={`${slide.word} background`}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
              quality={75}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/70" />
          </motion.div>
        ))}

        {/* Initial fade-in overlay */}
        <motion.div
          className="min-h-full bg-black/20 w-full absolute z-10"
          style={{ pointerEvents: "none" }}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        />

        {/*
          FIX #3 - Content wrapper:
          gap-y-6 + py-8 px-4 gives consistent breathing room down to 360px.
          my-auto centres the block vertically within the flex shell.
        */}
        <div className="relative z-20 flex flex-col items-center gap-y-6 text-center py-8 px-4 mt-auto mb-0">

          {/* Heading block */}
          <div className="flex flex-col justify-center items-center gap-2">

            {/*
              FIX #1 - Typography scaling:
              clamp(28px, 7.5vw, 36px) prevents aggressive line breaks on
              narrow/short devices while staying bold and luxury-grade.
            */}
            <TextBuilderMobile
              fontSize="clamp(28px, 7.5vw, 36px)"
              weight="extrabold"
              color="light"
            >
              We Build Luxury
            </TextBuilderMobile>

            {/* Animated typewriter word */}
            <div className="flex flex-wrap justify-center items-center gap-2">
              <span>
                <TextBuilderMobile
                  fontSize="clamp(28px, 7.5vw, 36px)"
                  weight="extrabold"
                  color="light"
                >
                  {displayText}
                </TextBuilderMobile>
              </span>

              {/* Blinking cursor */}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
              >
                <TextBuilderMobile
                  fontSize="clamp(28px, 7.5vw, 36px)"
                  weight="extrabold"
                  color="light"
                >
                  |
                </TextBuilderMobile>
              </motion.span>
            </div>
          </div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="px-6"
          >
            <span
              style={{
                color: "#ffffff",
                fontSize: "15px",
                fontWeight: 300,
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontStyle: "italic",
                textShadow:
                  "0px 1px 18px rgba(0,0,0,0.85), 0px 0px 40px rgba(0,0,0,0.6)",
                letterSpacing: "0.12em",
                lineHeight: 1.6,
                display: "block",
              }}
            >
              Built for the extraordinary.
              <br />
              Delivered in weeks.
            </span>
          </motion.div>

          {/*
            FIX #4 - WhatsApp safe-zone:
            pb-[100px] clears the 86px widget footprint on short viewports.
          */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="pt-2 pb-[100px]"
          >
            <ButtonMobile
              text="Discuss Your Project"
              onClick={() => scrollToSection("#consultation-form")}
            />
          </motion.div>
        </div>


      </section>
    </>
  );
};

export default HeroSection;
