"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRouter } from "next/navigation";
import Button from "@/components/shared/Button";
import ButtonMobile from "@/components/shared/ButtonMobile";
import TextBuilder from "@/components/shared/TextBuilder";
import TextBuilderMobile from "@/components/shared/TextBuilderMobile";
import MultiColorTextMobile from "@/components/shared/MultiTextBuilderMobile";
import MultiColorText from "@/components/shared/MultiColorText";

// ─── Milestone Data ────────────────────────────────────────────────────────────
const milestoneData = [
  {
    year: "2013",
    title: "Company Inception  ",
    description:
      "Laying the foundation for Saharsh Cabins with the first manufacturing plant in Mumbai.",
    image: [
      {
        url: "/assets/milestone/banglore.webp",
        label:
          "Laying the foundation for Saharsh Cabins with the first manufacturing plant in Mumbai",
        location: "Mumbai",
      },
    ],
  },
  {
    year: "2014",
    title: "Expanded Product Line  ",
    description:
      "Introduced a new range of modular cabins, including custom office and studio designs.",
    image: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=420&q=80",
        label:
          "First Major Project - Housing colony of 100+ prefab cabins set up in Shimla",
        location: "Shimla",
      },
    ],
  },
  {
    year: "2024",
    title: "International Partnerships  ",
    description:
      "Began a new chapter by exporting our cabins to clients in Europe and North America.",
    image: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=420&q=80",
        label:
          "Launched 'Qbinn Tusker' premium cottages & resorts in Bangalore.",
        location: "Bangalore",
      },
    ],
  },
  {
    year: "2025",
    title: "Global Expansion  ",
    description:
      "Began a new chapter by exporting our cabins to clients in Europe and North America.",
    image: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=420&q=80",
        label: "International Market Entry - Our first export venture to USA",
        location: "USA",
      },
    ],
  },
];

// ─── Stats ─────────────────────────────────────────────────────────────────────
const stats = [
  { value: "12+", label: "Years of Excellence" },
  { value: "500+", label: "Cabins Delivered" },
  { value: "15+", label: "States Across India" },
  { value: "3", label: "International Markets" },
];

// ─── Values ────────────────────────────────────────────────────────────────────
const values = [
  {
    icon: "◈",
    title: "Precision Craft",
    description:
      "Every cabin is engineered to exacting standards. From steel framework to interior finishes, we reject shortcuts and celebrate meticulous detail.",
  },
  {
    icon: "◉",
    title: "Sustainable Build",
    description:
      "Our manufacturing processes minimise waste. Prefabrication means less site disruption, lower carbon footprints, and smarter use of materials.",
  },
  {
    icon: "◎",
    title: "Total Customisation",
    description:
      "No two visions are alike. We design around your brief — size, layout, finish, and function — so the final structure is unmistakably yours.",
  },
  {
    icon: "◐",
    title: "Swift Delivery",
    description:
      "Factory-built means faster on-site. We cut months off traditional construction timelines without cutting corners on quality.",
  },
];

// ─── FadeUp (layout containers only, not text) ────────────────────────────────
function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

// ─── Animated Stat ─────────────────────────────────────────────────────────────
function AnimatedStat({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      className="flex flex-col gap-1"
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <span className="hidden lg:block">
        <TextBuilder
          fontSize="clamp(40px, 5vw, 72px)"
          weight="bold"
          color="primary"
          className="leading-none"
        >
          {value}
        </TextBuilder>
      </span>
      <span className="block lg:hidden">
        <TextBuilderMobile
          fontSize="40px"
          weight="bold"
          color="primary"
          className="leading-none"
        >
          {value}
        </TextBuilderMobile>
      </span>
      <span className="hidden lg:block">
        <TextBuilder
          fontSize="clamp(14px, 1.5vw, 18px)"
          weight="medium"
          color="lighter"
          className="tracking-[0.04em]"
        >
          {label}
        </TextBuilder>
      </span>
      <span className="block lg:hidden">
        <TextBuilderMobile
          fontSize="14px"
          weight="medium"
          color="lighter"
          className="tracking-[0.04em]"
        >
          {label}
        </TextBuilderMobile>
      </span>
    </motion.div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function AboutPage() {
  const router = useRouter();

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  // Only the background image parallaxes — text is static
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <main
      style={{
        background: "var(--section-light)",
        fontFamily: "var(--font-eudoxus), sans-serif",
      }}
    >
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative overflow-hidden flex flex-col justify-end"
        style={{ minHeight: "100svh", background: "var(--section-dark)" }}
      >
        {/* Parallax BG only — no motion on text */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{ y: heroY }}
        >
          <Image
            src="/assets/built/cottage_mobile.png"
            alt="Saharsh Cabins hero"
            fill
            className="object-cover opacity-30 md:hidden"
            priority
          />
          <Image
            src="/assets/built/cottages.png"
            alt="Saharsh Cabins hero"
            fill
            className="object-cover opacity-30 max-md:hidden"
            priority
          />

          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, var(--section-dark) 35%, transparent 80%)",
            }}
          />
        </motion.div>

        {/* EST. pill — static */}
        <div className="absolute top-[140px] left-8 lg:left-[135px]">
          <span
            className="inline-flex items-center gap-2 rounded-full px-5 py-2 border"
            style={{
              borderColor: "var(--color-primary)",
              background: "rgba(201,122,65,0.08)",
              letterSpacing: "0.08em",
            }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: "var(--color-primary)" }}
            />
            <span className="hidden lg:inline">
              <TextBuilder fontSize="14px" weight="medium" color="primary">
                EST. 2013 — INDIA
              </TextBuilder>
            </span>
            <span className="inline lg:hidden">
              <TextBuilderMobile
                fontSize="12px"
                weight="medium"
                color="primary"
              >
                EST. 2013 — INDIA
              </TextBuilderMobile>
            </span>
          </span>
        </div>

        {/* Hero text — fully static, no scroll-driven animation */}
        <div className="relative z-10 px-8 lg:px-[135px] pb-16 lg:pb-24">
          {/* Eyebrow */}
          <div className="mb-4 hidden lg:block">
            <TextBuilder
              fontSize="clamp(11px, 1.2vw, 14px)"
              weight="medium"
              color="primary"
              className="uppercase tracking-widest"
            >
              About Saharsh Cabins
            </TextBuilder>
          </div>
          <div className="mb-4 block lg:hidden">
            <TextBuilderMobile
              fontSize="11px"
              weight="medium"
              color="primary"
              className="uppercase tracking-widest"
            >
              About Saharsh Cabins
            </TextBuilderMobile>
          </div>

          {/* H1 — desktop */}
          <h1 className="font-bold leading-[1.05] hidden lg:block">
            <TextBuilder
              fontSize="clamp(40px, 6vw, 90px)"
              weight="bold"
              color="light"
            >
              Spaces Built to{" "}
              <span style={{ color: "var(--color-primary)" }}>Inspire.</span>
              <br />
              Crafted to{" "}
              <span style={{ color: "var(--color-primary)" }}>Last.</span>
            </TextBuilder>
          </h1>
          {/* H1 — mobile */}
          <h1 className="font-bold leading-[1.05] block lg:hidden">
            <TextBuilderMobile fontSize="36px" weight="bold" color="light">
              Spaces Built to{" "}
              <span style={{ color: "var(--color-primary)" }}>Inspire.</span>
              <br />
              Crafted to{" "}
              <span style={{ color: "var(--color-primary)" }}>Last.</span>
            </TextBuilderMobile>
          </h1>

          {/* Subtext — desktop */}
          <div className="mt-6 max-w-2xl hidden lg:block">
            <TextBuilder
              fontSize="clamp(15px, 1.6vw, 20px)"
              color="lighter"
              className="leading-relaxed"
            >
              Since 2013, Saharsh Cabins has been reimagining prefabricated
              architecture — delivering luxury modular cabins, resort cottages,
              portable cafes, and studio retreats across India and beyond.
            </TextBuilder>
          </div>
          {/* Subtext — mobile */}
          <div className="mt-4 block lg:hidden">
            <TextBuilderMobile
              fontSize="15px"
              color="lighter"
              className="leading-relaxed"
            >
              Since 2013, Saharsh Cabins has been reimagining prefabricated
              architecture — delivering luxury modular cabins, resort cottages,
              portable cafes, and studio retreats across India and beyond.
            </TextBuilderMobile>
          </div>

          {/* Scroll cue */}
          {/* <div className="mt-12 flex items-center gap-3">
            <div
              className="w-6 h-10 rounded-full border flex items-start justify-center p-1"
              style={{ borderColor: "var(--text-light-25)" }}
            >
              <motion.div
                className="w-1.5 h-2.5 rounded-full"
                style={{ background: "var(--color-primary)" }}
                animate={{ y: [0, 10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
              />
            </div>
            <TextBuilder
              fontSize="12px"
              color="light50"
              className="uppercase tracking-[0.1em]"
            >
              SCROLL
            </TextBuilder>
          </div> */}
        </div>
      </section>

      {/* ── STATS BAND ────────────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--section-dark)",
          borderTop: "1px solid var(--text-light-25)",
        }}
        className="px-8 lg:px-[135px] py-16 lg:py-20"
      >
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0 lg:divide-x"
          style={{ "--tw-divide-opacity": "1" } as React.CSSProperties}
        >
          {stats.map((s, i) => (
            <div key={i} className="lg:px-10 first:pl-0 last:pr-0">
              <AnimatedStat value={s.value} label={s.label} />
            </div>
          ))}
        </div>
      </section>

      {/* ── WHO WE ARE ────────────────────────────────────────────────────── */}
      <section
        className="px-8 lg:px-[135px] py-20 lg:py-32"
        style={{ background: "var(--section-accent)" }}
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Text column */}
          <div>
            {/* Eyebrow */}
            <div className="mb-4 hidden lg:block">
              <TextBuilder
                fontSize="12px"
                weight="medium"
                color="primary"
                className="uppercase tracking-widest"
              >
                Who We Are
              </TextBuilder>
            </div>
            <div className="mb-4 block lg:hidden">
              <TextBuilderMobile
                fontSize="11px"
                weight="medium"
                color="primary"
                className="uppercase tracking-widest"
              >
                Who We Are
              </TextBuilderMobile>
            </div>

            {/* Heading */}
           <MultiColorTextMobile
              fontSize="30px"
              className="text-start sm:block md:block lg:hidden"
              items={[
                {
                  text: "Prefab Luxury,",
                  color: "dark",
                  weight: "medium",
                  breakAfter: true,
                },
                { text: "Perfected.", color: "primary", weight: "bold" },
              ]}
            />
            <MultiColorText
              fontSize="75px"
              className="text-start max-lg:hidden lg:block"
              items={[
                {
                  text: "Prefab Luxury,",
                  color: "dark",
                  weight: "medium",
                  breakAfter: true,
                },
                { text: "Perfected.", color: "primary", weight: "bold" },
              ]}
            />

            {/* Body — desktop */}
            <div className="mt-6 flex flex-col gap-4 hidden lg:flex">
              <TextBuilder
                fontSize="clamp(15px, 1.5vw, 18px)"
                color="dark-light"
                className="leading-relaxed"
              >
                Saharsh Cabins was born from a belief that modern construction
                needn't be slow, wasteful, or compromise on beauty. Founded in
                Mumbai in 2013, we set out to manufacture premium prefabricated
                structures that combine architectural flair with engineering
                integrity.
              </TextBuilder>
              <TextBuilder
                fontSize="clamp(15px, 1.5vw, 18px)"
                color="dark-light"
                className="leading-relaxed"
              >
                From mountain retreats in Shimla to resort cottages in Bangalore
                and our first international export shipments in 2025, every
                structure we deliver carries the same promise: exceptional
                quality, delivered on time.
              </TextBuilder>
            </div>
            {/* Body — mobile */}
            <div className="mt-4 flex flex-col gap-3 lg:hidden">
              <TextBuilderMobile
                fontSize="15px"
                color="dark-light"
                className="leading-relaxed"
              >
                Saharsh Cabins was born from a belief that modern construction
                needn't be slow, wasteful, or compromise on beauty. Founded in
                Mumbai in 2013, we set out to manufacture premium prefabricated
                structures that combine architectural flair with engineering
                integrity.
              </TextBuilderMobile>
              <TextBuilderMobile
                fontSize="15px"
                color="dark-light"
                className="leading-relaxed"
              >
                From mountain retreats in Shimla to resort cottages in Bangalore
                and our first international export shipments in 2025, every
                structure we deliver carries the same promise: exceptional
                quality, delivered on time.
              </TextBuilderMobile>
            </div>

            {/* CTA */}
            <div className="mt-8 flex items-center gap-4">
              <Button
                text="Explore Our Projects"
                className="max-md:hidden"
                onClick={() => router.push("/products")}
              />
              <ButtonMobile
                text="Explore Our Projects"
                className="md:hidden"
                onClick={() => router.push("/products")}
              />
            </div>
          </div>

          {/* Image mosaic */}
          <FadeUp delay={0.15} className="relative">
            <div className="grid grid-cols-2 gap-3">
              <div className="relative rounded-[20px] overflow-hidden aspect-[3/4]">
                <Image
                  src="/assets/milestone/banglore.webp"
                  alt="Saharsh cabin exterior"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-3 ">
                <div className="relative rounded-[20px] overflow-hidden aspect-square">
                  <Image
                    src="/assets/built/villa.png"
                    alt="Cabin interior"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative rounded-[20px] overflow-hidden aspect-[4/3]">
                  <Image
                    src="/assets/built/center.png"
                    alt="Mountain cabin"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            {/* Floating badge */}

          </FadeUp>
        </div>
      </section>

      {/* ── OUR VALUES ────────────────────────────────────────────────────── */}
      {/* <section
        className="px-8 lg:px-[135px] py-20 lg:py-32"
        style={{ background: "var(--section-light)" }}
      >
        <div className="mb-12">
          <div className="mb-3 hidden lg:block">
            <TextBuilder
              fontSize="12px"
              weight="medium"
              color="primary"
              className="uppercase tracking-widest"
            >
              What Drives Us
            </TextBuilder>
          </div>
          <div className="mb-3 block lg:hidden">
            <TextBuilderMobile
              fontSize="11px"
              weight="medium"
              color="primary"
              className="uppercase tracking-widest"
            >
              What Drives Us
            </TextBuilderMobile>
          </div>
          <h2 className="font-bold leading-[1.1] max-w-xl hidden lg:block">
            <TextBuilder
              fontSize="clamp(28px, 3.5vw, 48px)"
              weight="bold"
              color="dark"
            >
              Our Core Values
            </TextBuilder>
          </h2>
          <h2 className="font-bold leading-[1.1] block lg:hidden">
            <TextBuilderMobile fontSize="26px" weight="bold" color="dark">
              Our Core Values
            </TextBuilderMobile>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <FadeUp key={i} delay={i * 0.08}>
              <div
                className="group rounded-[24px] p-7 h-full flex flex-col gap-4 border transition-all duration-300 hover:border-[var(--color-primary)] hover:shadow-lg"
                style={{
                  borderColor: "var(--light-border)",
                  background: "var(--section-accent)",
                }}
              >
                <span
                  className="text-3xl"
                  style={{ color: "var(--color-primary)" }}
                >
                  {v.icon}
                </span>
                <div className="hidden lg:block">
                  <TextBuilder
                    fontSize="clamp(16px, 1.4vw, 20px)"
                    weight="bold"
                    color="dark"
                  >
                    {v.title}
                  </TextBuilder>
                </div>
                <div className="block lg:hidden">
                  <TextBuilderMobile fontSize="16px" weight="bold" color="dark">
                    {v.title}
                  </TextBuilderMobile>
                </div>
                <div className="hidden lg:block">
                  <TextBuilder
                    fontSize="clamp(13px, 1.2vw, 15px)"
                    color="dark-light"
                    className="leading-relaxed"
                  >
                    {v.description}
                  </TextBuilder>
                </div>
                <div className="block lg:hidden">
                  <TextBuilderMobile
                    fontSize="13px"
                    color="dark-light"
                    className="leading-relaxed"
                  >
                    {v.description}
                  </TextBuilderMobile>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section> */}

      {/* ── MILESTONES — compact timeline ─────────────────────────────────── */}
      <section
        className="px-8 lg:px-[135px] py-16 lg:py-20 relative overflow-hidden"
        style={{ background: "var(--text-dark)" }}
      >
        {/* Section heading */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-12">
          <div>
       
           
              <MultiColorTextMobile
              fontSize="30px"
              className="text-start sm:block md:block lg:hidden"
              items={[
                {
                  text: "Visionary",
                  color: "light",
                  weight: "medium",
                  breakAfter: true,
                },
                { text: "Milestones", color: "primary", weight: "bold" },
              ]}
            />
            <MultiColorText
              fontSize="75px"
              className="text-start max-lg:hidden lg:block"
              items={[
                {
                  text: "Visionary",
                  color: "light",
                  weight: "medium",
                  breakAfter: true,
                },
                { text: "Milestones", color: "primary", weight: "bold" },
              ]}
            />
          </div>
          <div className="hidden lg:block mt-7">
            <TextBuilder fontSize="20px" color="lighter">
              12 years of building extraordinary spaces.
            </TextBuilder>
          </div>
        </div>

        {/* ── Timeline ── */}
        <div className="relative">
          {/* Horizontal line — desktop */}
          <div
            className="hidden lg:block absolute top-[28px] left-0 right-0 h-px"
            style={{ background: "var(--text-light-25)" }}
          />
          {/* Vertical line — mobile */}
          <div
            className="block lg:hidden absolute top-0 bottom-0 left-[18px] w-px"
            style={{ background: "var(--text-light-25)" }}
          />

          {/* Desktop: horizontal row */}
          <div
            className="hidden lg:grid"
            style={{
              gridTemplateColumns: `repeat(${milestoneData.length}, 1fr)`,
            }}
          >
            {milestoneData.map((m, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="flex flex-col items-start pr-6">
                  {/* Dot on the line */}
                  <div className="relative mb-6">
                    <div
                      className="w-[14px] h-[14px] rounded-full border-2 relative z-10"
                      style={{
                        borderColor: "var(--color-primary)",
                        background: "var(--text-dark)",
                      }}
                    >
                      <div
                        className="absolute inset-[3px] rounded-full"
                        style={{ background: "var(--color-primary)" }}
                      />
                    </div>
                  </div>

                  {/* Year */}
                  <TextBuilder
                    fontSize="28px"
                    weight="bold"
                    color="primary"
                    className="leading-none mb-1"
                  >
                    {m.year}
                  </TextBuilder>

                  {/* Title */}
                  <TextBuilder
                    fontSize="15px"
                    weight="bold"
                    color="light"
                    className="mb-2 leading-snug"
                  >
                    {m.title}
                  </TextBuilder>

                  {/* Description */}
                  <TextBuilder
                    fontSize="13px"
                    color="lighter"
                    className="leading-relaxed pr-4"
                  >
                    {m.description}
                  </TextBuilder>

                  {/* Location tag */}
                  <div className="mt-3 flex items-center gap-1.5">
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: "var(--color-primary)" }}
                    />
                    <TextBuilder fontSize="12px" color="light50">
                      {m.image[0].location}
                    </TextBuilder>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Mobile: vertical list */}
          <div className="flex flex-col gap-0 lg:hidden pl-10">
            {milestoneData.map((m, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div className="relative pb-8 last:pb-0">
                  {/* Dot */}
                  <div
                    className="absolute left-[-28px] top-1 w-[14px] h-[14px] rounded-full border-2 z-10 flex items-center justify-center"
                    style={{
                      borderColor: "var(--color-primary)",
                      background: "var(--text-dark)",
                    }}
                  >
                    <div
                      className="w-[6px] h-[6px] rounded-full"
                      style={{ background: "var(--color-primary)" }}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex items-center gap-2 mb-1">
                    <TextBuilderMobile
                      fontSize="22px"
                      weight="bold"
                      color="primary"
                      className="leading-none"
                    >
                      {m.year}
                    </TextBuilderMobile>
                    <span className="flex items-center gap-1">
                      <span
                        className="w-1 h-1 rounded-full"
                        style={{ background: "var(--color-primary)" }}
                      />
                      <TextBuilderMobile fontSize="11px" color="light50">
                        {m.image[0].location}
                      </TextBuilderMobile>
                    </span>
                  </div>
                  <TextBuilderMobile
                    fontSize="15px"
                    weight="bold"
                    color="light"
                    className="mb-1 leading-snug"
                  >
                    {m.title}
                  </TextBuilderMobile>

                  <TextBuilderMobile
                    fontSize="13px"
                    color="lighter"
                    className="leading-relaxed"
                  >
                    {m.description}
                  </TextBuilderMobile>
                  <div className="h-8"></div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden px-8 lg:px-[135px] py-24 lg:py-32 text-center"
        style={{ background: "var(--section-accent)" }}
      >
        {/* Decorative rings */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border pointer-events-none"
          style={{
            width: "600px",
            height: "600px",
            borderColor: "var(--color-primary)",
            opacity: 0.08,
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border pointer-events-none"
          style={{
            width: "900px",
            height: "900px",
            borderColor: "var(--color-primary)",
            opacity: 0.04,
          }}
        />

        <FadeUp>
          {/* Eyebrow */}
          {/* <div className="mb-4 hidden lg:block">
            <TextBuilder
              fontSize="12px"
              weight="medium"
              color="primary"
              className="uppercase tracking-widest"
            >
              Let's Build Together
            </TextBuilder>
          </div> */}
          {/* <div className="mb-4 block lg:hidden">
            <TextBuilderMobile
              fontSize="11px"
              weight="medium"
              color="primary"
              className="uppercase tracking-widest"
            >
              Let's Build Together
            </TextBuilderMobile>
          </div> */}

          {/* Heading */}
          <div className="flex flex-col md:flex-col justify-between  items-center gap-4">
            <MultiColorTextMobile
              fontSize="30px"
              className="text-center sm:block md:block lg:hidden"
              items={[
                {
                  text: "Ready to design your",
                  color: "dark",
                  weight: "medium",
                  breakAfter: true,
                },
                { text: "perfect space?", color: "primary", weight: "bold" },
              ]}
            />
            <MultiColorText
              fontSize="75px"
              className="text-center max-lg:hidden lg:block"
              items={[
                {
                  text: "Ready to design your",
                  color: "dark",
                  weight: "medium",
                  breakAfter: true,
                },
                { text: "perfect space?", color: "primary", weight: "bold" },
              ]}
            />
            <TextBuilderMobile
              fontSize="14px"
              color="dark-light"
              className="w-full md:hidden pt-[5px] md:pt-[15px] text-center"
            >
              From a single studio cabin to a full resort development, our team
              is ready to bring your vision to life — on time, on budget, and
              beyond expectations.
            </TextBuilderMobile>
            <TextBuilder
              fontSize="20px"
              color="dark-light"
              className="w-full  pt-[5px] md:pt-[15px] text-center max-md:hidden"
            >
              From a single studio cabin to a full resort development, our team
              is ready to bring your vision to life — on time, on budget, and
              beyond expectations.
            </TextBuilder>
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              onClick={() => router.push("/contact")}
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-bold transition-all duration-300 hover:opacity-90 cursor-pointer"
              style={{
                background: "var(--color-primary)",
                color: "var(--text-light)",
                fontSize: "clamp(14px, 1.3vw, 17px)",
              }}
            >
              Get In Touch
            </a>
            <Button
              text="View Our Work"
              className="max-md:hidden"
              onClick={() => router.push("/products")}
            />
            <ButtonMobile
              text="View Our Work"
              className="md:hidden"
              onClick={() => router.push("/products")}
            />
          </div>
        </FadeUp>
      </section>
    </main>
  );
}
