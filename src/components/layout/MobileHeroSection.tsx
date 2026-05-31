"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";
import ButtonMobile from "../shared/ButtonMobile";
import TextBuilderMobile from "../shared/TextBuilderMobile";

// --- Slide data ---------------------------------------------------------------
const slides = [
  { id: 1, word: "Cottages", bgImage: "/assets/built/cottage_mobile.png" },
  { id: 2, word: "Villas",   bgImage: "/assets/built/villa_mobile.png"   },
  { id: 3, word: "Offices",  bgImage: "/assets/built/Office_mobile.png"  },
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

  const scrollToSection = (href: string) => {
    const targets = Array.from(
      document.querySelectorAll(href),
    ) as HTMLElement[];
    const target =
      targets.find((el) => el.offsetParent !== null) ?? targets[0];
    if (!target) return;
    const top = target.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top, behavior: "smooth" });
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

  return (
    <>
      <Head>
        <link rel="preload" as="image" href="/assets/built/cottage_mobile.png" />
      </Head>

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

        {/* Background image slideshow */}
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
                  />
                  {/* Heavier bottom gradient for badge legibility */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/70" />
                </motion.div>
              ),
          )}
        </AnimatePresence>

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
        <div className="relative z-20 flex flex-col items-center gap-y-6 text-center py-8 px-4 my-auto">

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

        {/*
          FIX #5 - Marriott badge safe-zone:
          In-flow flex child with pb-14 clears device home bar + WhatsApp
          widget. max-w-[calc(100vw-32px)] prevents overflow at 360px.
        */}
        <div className="relative z-20 flex justify-center pb-14 px-4">
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1.5px solid #c8a96e",
              background: "rgba(0,0,0,0.22)",
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
              padding: "8px 18px",
              borderRadius: "6px",
              width: "max-content",
              maxWidth: "calc(100vw - 32px)",
              boxSizing: "border-box",
              color: "#c8a96e",
              fontSize: "clamp(7px, 2.2vw, 10px)",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              textAlign: "center",
              lineHeight: 1.4,
              fontFamily: "var(--font-eudoxus), sans-serif",
            }}
          >
            PREFERRED PARTNER — OUTDOORS BY MARRIOTT BONVOY
          </span>
        </div>

      </section>
    </>
  );
};

export default HeroSection;
