"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import TextBuilder from "../shared/TextBuilder";
import Image from "next/image";
import Button from "../shared/Button";

const slides = [
  {
    id: 1,
    word: "Cottages",
    bgImage: "/assets/built/cottages.webp",
  },
  {
    id: 2,
    word: "Villas",
    bgImage: "/assets/built/villa.webp",
  },
  {
    id: 3,
    word: "Offices",
    bgImage: "/assets/built/center.webp",
  },
];

const NewHeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting" | "switching">("typing");
  const [isPageReady, setIsPageReady] = useState(false);

  const scrollToSection = (id: string) => {
    // Wait until page is fully loaded before scrolling
    if (!isPageReady) {
      // Queue scroll for when page is ready
      const checkReady = setInterval(() => {
        if (isPageReady) {
          clearInterval(checkReady);
          performScroll(id);
        }
      }, 50);
      return;
    }
    performScroll(id);
  };

  const performScroll = (id: string) => {
    const targets = Array.from(document.querySelectorAll(id)) as HTMLElement[];
    const target = targets.find((el) => el.offsetParent !== null) ?? targets[0];
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const currentWord = slides[currentSlide].word;
    let timeout: NodeJS.Timeout;

    if (phase === "typing") {
      if (displayText.length < currentWord.length) {
        // Still typing
        timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        }, 80);
      } else {
        // Fully typed → move to pause phase
        setPhase("pausing");
      }
    }

    if (phase === "pausing") {
      // Wait 2s then start deleting
      timeout = setTimeout(() => {
        setPhase("deleting");
      }, 2000);
    }

    if (phase === "deleting") {
      if (displayText.length > 0) {
        // Still deleting
        timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length - 1));
        }, 40);
      } else {
        // Fully deleted → switch slide
        setPhase("switching");
      }
    }

    if (phase === "switching") {
      // Brief pause then advance slide and restart typing
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
        className="w-full min-h-[80svh] md:h-screen md:h-screen relative flex flex-col justify-between overflow-hidden"
      >

        {/* Background slides — mode="sync" crossfades simultaneously, no blank frame */}
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
                    quality={75}
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
                </motion.div>
              )
          )}
        </AnimatePresence>

        {/* Initial fade-in overlay */}
        <motion.div
className="min-h-full bg-black/20 w-full absolute z-10"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        />

        {/* Heading */}
        <div className="my-auto flex flex-col items-center gap-5 text-center z-20 px-4 md:px-8">
          <div className="flex flex-col items-center w-full">
            <TextBuilder fontSize="clamp(36px, 5vw + 1rem, 75px)" weight="extrabold" color="light">
              We Build Luxury
            </TextBuilder>

            <div className="flex flex-row items-center justify-center">
              <TextBuilder fontSize="clamp(36px, 5vw + 1rem, 75px)" weight="extrabold" color="light">
                {displayText}
              </TextBuilder>
            

            {/* Blinking cursor */}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              <TextBuilder fontSize="clamp(36px, 5vw + 1rem, 75px)" weight="extrabold" color="light">
                |
              </TextBuilder>
            </motion.span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <span style={{
              color: "#ffffff",
              fontSize: "20px",
              fontWeight: 300,
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontStyle: "italic",
              textShadow: "0px 1px 18px rgba(0,0,0,0.85), 0px 0px 40px rgba(0,0,0,0.6)",
              letterSpacing: "0.12em",
            }}>
              Built for the extraordinary.<br />Delivered in weeks.
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="pt-6 md:pt-8"
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <a href="#consultation-form" onClick={(e) => { e.preventDefault(); scrollToSection("#consultation-form"); }}><Button text="Discuss Your Project" /></a>
          </motion.div>
        </div>

      </section>
    </>
  );
};

export default NewHeroSection;
