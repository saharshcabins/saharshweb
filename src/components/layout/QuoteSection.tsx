"use client";
import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import MultiColorText from "../shared/MultiColorText";
import TextBuilder from "../shared/TextBuilder";
import Button from "../shared/Button";
import Image from "next/image";

const QuoteSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2, once: false });

  // Scroll progress through the section — 0 when entering, 1 when fully exited
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Cabin drops in as section enters, lifts out as section exits
  const cabinY = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [-280, 0, 0, 280]);

  return (
    <>
    {/* ==========================================
       HOME SECTION: BUILT IN INDIA
       Purpose:
       Establish manufacturing strength, Indian origin, and global capability.
       Primary conversion objective:
       Build trust through scale, precision, and proven export track record.
    ========================================== */}
    <section
      id="built-in-india"
      data-section="built-in-india"
      ref={ref}
      className="w-full overflow-hidden -my-20"
    >
      {/* Background + main content */}
      <motion.div
        className="px-[7%] bg-cover py-[7%] bg-center bg-no-repeat flex flex-row items-center justify-between relative"
        style={{ backgroundImage: "url('/assets/quote/quote_bg.png')" }}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Text and Button Section */}
        <div className="flex flex-col w-full gap-[88px]">
          {/* MultiColorText Animation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ ease: "easeOut", duration: 0.7, delay: 0.15 }}
          >
            <p className="eyebrow-label mb-4">Manufacturing Excellence</p>
            <MultiColorText
              fontSize="75px"
              className="leading-[1.2] whitespace-nowrap text-start"
              items={[
                { text: "Built in India,", weight: "bold", color: "dark", breakAfter: true },
                { text: "Engineered for", weight: "bold", color: "primary", breakAfter: true },
                { text: " the World.", weight: "bold", color: "primary", breakAfter: true },
              ]}
            />
          </motion.div>

          {/* Paragraph + Button container */}
          <div className="flex flex-col gap-[50px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            >
              <TextBuilder fontSize="20px" color="dark" className="leading-[1.25]">
                Shipping worldwide is easy; shipping export-grade quality that
                withstands diverse climates is the hard part. Whether it's the
                humidity of the tropics or the winds of the coast, Saharsh
                Cabins are built to thrive wherever they land.
              </TextBuilder>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
            >
              <Button
                text="Request a Private Consultation"
                className="w-fit"
                onClick={() => {
                  const section = document.getElementById("consultation-form");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              />
            </motion.div>
          </div>
        </div>

        {/* Cabin — scroll-driven drop/lift */}
        <motion.div
          className="w-full flex items-center justify-center"
          style={{ y: cabinY }}
        >
          <Image
            src={"/assets/quote/handing_container.png"}
            height={700}
            width={660}
            alt="hanging_container"
          />
        </motion.div>
      </motion.div>
    </section>
    </>
  );
};

export default QuoteSection;
