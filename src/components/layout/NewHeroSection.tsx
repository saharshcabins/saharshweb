"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import TextBuilder from "../shared/TextBuilder";
import { ArrowNew } from "@/utils/svgUtils";
import Label from "../ui/HeroLabel";
import { X } from "lucide-react";
import Image from "next/image";

const NewHeroSection = () => {
  // Letter animation for heading
  const [product, setProducts] = useState(false);
  const heading = "We Build Cabins";
  const letters = heading.split("");

  const letterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05, // letters appear one by one
      },
    },
  };

  return (
    <div className="w-full h-screen bg-cover bg-center relative flex flex-col justify-between">
      {/* Black overlay */}
      <motion.div
        className="min-h-full bg-[#000000]/20 w-full absolute z-10"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      ></motion.div>
      <AnimatePresence mode="wait">
        {product && (
          <motion.div
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-full bg-[#000000]/40 w-full absolute z-10"
          ></motion.div>
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
          {letters.map((letter, idx) => {
            // If the letter is a space, render a small margin instead of a blank
            if (letter === " ") {
              return (
                <span key={idx} className="mr-[10px]">
                  &nbsp;
                </span>
              ); // adjust 8px to your liking
            }
            return (
              <motion.span
                key={idx}
                variants={letterVariants}
                transition={{ duration: 0.6 }}
                style={{ display: "inline-block" }}
              >
                <TextBuilder fontSize="65px" weight="extrabold" color="light">
                  {letter}
                </TextBuilder>
              </motion.span>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: letters.length * 0.05 + 0.2, duration: 0.6 }}
        >
          <TextBuilder fontSize="18px" weight="medium" color="section">
            Modern Design. Uncompromising Interiors.
            <br /> An Extraordinary Living Experience.
          </TextBuilder>
        </motion.div>
      </motion.div>

      {/* Rustico Block */}
      <motion.div
        className="flex flex-col items-center z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: letters.length * 0.05 + 0.2, duration: 0.6 }}
      >
        <div className="flex flex-col mb-8 gap-[30px] w-[90%]">
          <div className="relative">
            <div className="text-[var(--section-accent)] cursor-pointer px-[26px] py-[14px] rounded-[40px] border border-[var-(--section-accent)] w-fit">
              <ArrowNew className="w-[25px] h-[25px] " flipped />
            </div>
            <AnimatePresence mode="wait">
              {product && (
                <motion.div
                  key="products"
                  className="absolute top-0 right-0 -translate-y-1/2"
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 100, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex flex-col gap-[14px] z-20">
                    {[
                      "/assets/newhero/product_1.png",
                      "/assets/newhero/product_2.png",
                    ].map((path, idx) => (
                      <div key={idx} className="relative w-[323px] h-[218px]">
                        <Image
                          alt={`product-${idx}`}
                          src={path}
                          fill
                          className="object-cover rounded-[16px]"
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="absolute left-1/2 top-0 ">
              <div className="flex flex-row gap-[19px] items-center">
                {" "}
                <div onClick={() => setProducts(true)}>
                  <Label text={"Interior"} />
                </div>
                {product && (
                  <div
                    onClick={() => setProducts(false)}
                    className="w-[30px] h-[30px] cursor-pointer flex items-center justify-center rounded-full border border-[var(--section-accent)]"
                  >
                    <X
                      size={15}
                      strokeWidth={4}
                      color="var(--section-accent)"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          <TextBuilder fontSize="56px" weight="bold" color="light">
            Rustico
          </TextBuilder>
          <div className="text-[var(--section-accent)] cursor-pointer px-[26px] py-[14px] rounded-[40px] border border-[var-(--section-accent)] w-fit">
            <ArrowNew className="w-[25px] h-[25px]" />
          </div>
        </div>

        {/* Labels Row */}
        <motion.div
          className="flex flex-row justify-center gap-5 mb-[45px] w-[90%]"
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: letters.length * 0.05 + 0.2 + 0.6,
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          {["2BHK", "800 SQFT", "1 BEDROOM + PANTRY"].map((label, idx) => (
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
        <div
          className="w-full h-[8px] z-20"
          style={{
            background: "linear-gradient(90deg, #C97A41 47.96%, #FFFFFF 100%)",
          }}
        ></div>
      </motion.div>

      <div className="absolute top-[40%] right-0 w-[90%]  z-20"></div>
      <div
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: "url('/assets/newhero/hero_bg_1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
};

export default NewHeroSection;
