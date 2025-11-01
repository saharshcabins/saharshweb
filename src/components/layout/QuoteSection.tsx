"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import MultiColorText from "../shared/MultiColorText";
import TextBuilder from "../shared/TextBuilder";
import Button from "../shared/Button";
import Image from "next/image";

const QuoteSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.6, once: true });

  return (
    <div ref={ref} className="w-full  overflow-hidden -my-20">
      {/* Background + main content */}
      <motion.div
        className="px-[7%] bg-cover py-[7%] bg-center bg-no-repeat flex flex-row items-center justify-between relative"
        style={{ backgroundImage: "url('/assets/quote/quote_bg.png')" }}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* Text and Button Section */}
        <div className="flex flex-col w-full gap-[88px]">
          {/* MultiColorText Animation */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              ease: "easeInOut",
              duration: 1.6,
              delay: 1,
            }}
          >
            <MultiColorText
              fontSize="56px"
              className="leading-[1.2] whitespace-nowrap text-start"
              items={[
                {
                  text: "Engineered Here.",
                  weight: "bold",
                  color: "dark",
                  breakAfter: true,
                },
                {
                  text: "Delivered to Your Site,",
                  weight: "bold",
                  color: "primary",
                  breakAfter: true,
                },
                { text: "Anywhere.", weight: "bold", color: "primary" },
              ]}
            />
          </motion.div>

          {/* Paragraph + Button container */}
          <div className="flex flex-col gap-[50px]">
            {/* TextBuilder Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                type: "tween",
                duration: 1,
                ease: "easeOut",
                delay: 0.7,
              }}
            >
              <TextBuilder
                fontSize="24px"
                color="dark"
                className="leading-[1.25]"
              >
                Saharsh Cabins is trying established a robust global logistics
                network, ensuring that our extraordinary - modern cabins can be
                delivered and installed anywhere in the world.
              </TextBuilder>
            </motion.div>

            {/* Button Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{
                type: "tween",
                duration: 0.8,
                ease: "easeOut",
                delay: 2,
              }}
            >
              <Button
                text="Get a Quote"
                className="w-fit"
                onClick={() => {
                  const section = document.getElementById("contact-us");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              />
            </motion.div>
          </div>
        </div>

        {/* Hanging Container Image Animation */}
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          className="w-full flex items-center justify-center"
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 9,
            mass: 0.9,
            bounce: 0.55,
            duration: 1.6,
            delay: 0.4,
          }}
        >
          <Image
            src={"/assets/quote/hanging_container.png"}
            height={700}
            width={660}
            alt="hanging_container"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default QuoteSection;
