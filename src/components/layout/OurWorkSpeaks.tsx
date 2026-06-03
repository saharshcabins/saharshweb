"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import MultiColorText from "../shared/MultiColorText";
import MultiColorTextMobile from "../shared/MultiTextBuilderMobile";
import { ArrowNew } from "../../utils/svgUtils"; // ✅ Using your actual codebase arrow asset

/* ─── Project card data ──────────────────────────────────────────── */
interface ProjectCard {
  id: number;
  tag: string;
  headline: string; 
  body: string;
  location: string;
  galleryLink: string;
  partnerLink: string;
}

const projectCards: ProjectCard[] = [
  {
    id: 1,
    tag: "INTERNATIONAL",
    headline: "The Lodging Conference\nMarriott Bonvoy",
    body: "A unit we built was showcased in US at one of the world's largest hospitality conferences - TLC, Phoenix 2025. Marriott approved it! We are now one of their preferred manufacturing partners for Outdoors by Marriott Bonvoy.",
    location: "Phoenix, USA",
    galleryLink: "/ourprojects/lakeside-cabin/",
    partnerLink: "/partners/global-alliances",
  },
  {
    id: 2,
    tag: "RESIDENTIAL",
    headline: "Qbinn Tusker, Thalli\n3bhk Airbnb Villa",
    body: "An award-winning container home crafted from 7 refurbished containers — a true landmark in sustainable luxury living. Qbinn Tusker was honoured in the A+D Top Reflections 2025 December edition for its thoughtful architecture.",
    location: "Bangalore, India",
    galleryLink: "/ourprojects/qbinn-tusker/",
    partnerLink: "/partners/architects",
  },
  {
    id: 3,
    tag: "COMMERCIAL",
    headline: "Total Environment\nSales Office",
    body: "A premium marketing sales office built for one of the most premium developers in Bangalore. We combined high-end design with fast modular construction, proving that a sales space can be set up quickly without compromising quality.",
    location: "Bangalore, India",
    galleryLink: "/ourprojects/total-environment-marketing-office/",
    partnerLink: "/partners/developers",
  },
];

/* ─── Component ──────────────────────────────────────────────────── */
const OurWorkSpeaks: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.08, once: true });

  return (
    <>
    {/* ==========================================
       HOME SECTION: OUR WORK SPEAKS
       Purpose:
       Showcase completed projects and social proof.
       Primary conversion objective:
       Build credibility through executed, real-world work.
    ========================================== */}
    <section
      id="our-work-speaks"
      data-section="our-work-speaks"
      ref={sectionRef}
      className="our-work-speaks-section px-[7%] pt-[60px] pb-[60px] md:pt-[80px] md:pb-[72px] lg:pt-[96px] lg:pb-[80px]"
      style={{
        width: "100%",
        backgroundColor: "var(--text-dark, #0f1b26)",
        boxSizing: "border-box",
      }}
    >
      {/* ── Section header ── */}
      <motion.div
        className="our-work-header"
        initial={{ opacity: 0, y: 28 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, ease: "easeOut" }}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: 16,
          marginBottom: 64,
        }}
      >
        <p className="eyebrow-label">Our Work Speaks</p>
        <div className="block lg:hidden">
          <MultiColorTextMobile
            fontSize="30px"
            className="leading-[1.08] text-center"
            items={[
              { text: "The standard that ", weight: "bold", color: "light" },
              { text: "earns", weight: "bold", color: "primary" },
              { text: " trust", weight: "bold", color: "light" },
            ]}
          />
        </div>
        <div className="hidden lg:block">
          <MultiColorText
            fontSize="clamp(48px, 5.208vw, 75px)"
            className="leading-[1.08] text-center"
            items={[
              { text: "The standard that ", weight: "bold", color: "light" },
              { text: "earns", weight: "bold", color: "primary" },
              { text: " trust", weight: "bold", color: "light" },
            ]}
          />
        </div>

        <p
          style={{
            fontSize: 18,
            lineHeight: 1.6,
            color: "rgba(255,255,255,0.6)",
            maxWidth: 1100, 
            margin: "8px 0 0",
          }}
        >
          In October 2025, a unit manufactured in our Bangalore facility was showcased at{" "}
          <strong style={{ color: "rgba(255,255,255,0.9)" }}>
            The Lodging Conference in Phoenix, Arizona
          </strong>{" "}
          — one of the world&apos;s most significant hospitality events. It passed. We became one of their preferred manufacturing partners.
        </p>
      </motion.div>

      {/* ── Project cards ── */}
      <div className="ows-cards-grid">
        {projectCards.map((card, i) => {
          const featured = i === 0;
          return (
          <motion.div
            key={card.id}
            className={`ows-card${featured ? " ows-card--featured" : ""}`}
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.15 + i * 0.12 }}
            style={{
              display: "flex",
              flexDirection: "column",
              position: "relative",
            }}
          >
            {/* FLAGSHIP chip — card 1 only */}
            {featured && (
              <span style={{
                position: "absolute",
                top: 20,
                right: 20,
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase" as const,
                color: "#c8a96e",
                border: "1px solid rgba(200,169,110,0.5)",
                borderRadius: 4,
                padding: "3px 8px",
                background: "rgba(0,0,0,0.18)",
                backdropFilter: "blur(4px)",
                lineHeight: 1.5,
              }}>
                Flagship
              </span>
            )}

            <span
              style={{
                display: "inline-block",
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase" as const,
                padding: "4px 10px",
                borderRadius: 4,
                marginBottom: 16,
                color: featured ? "#c8a96e" : "var(--color-primary, #c97a41)",
                border: featured ? "1px solid rgba(200,169,110,0.55)" : "1px solid rgba(201,122,65,0.55)",
                alignSelf: "flex-start",
              }}
            >
              {card.tag}
            </span>

            <div
              style={{
                width: featured ? 40 : 28,
                height: 2,
                backgroundColor: featured ? "#c8a96e" : "rgba(201,122,65,0.7)",
                borderRadius: 1,
                marginBottom: 20,
                transition: "width 0.3s ease",
              }}
            />

            <h3
              style={{
                fontSize: "clamp(18px, 1.6vw, 22px)",
                fontWeight: 700,
                lineHeight: 1.3,
                color: "#ffffff",
                margin: "0 0 16px",
                minHeight: "2.6em",
                whiteSpace: "pre-line", 
              }}
            >
              {card.headline}
            </h3>

            <p
              style={{
                fontSize: 14,
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.62)",
                margin: "0 0 0",
                flexGrow: 1,
                minHeight: "9em",
                textAlign: "justify", 
              }}
            >
              {card.body}
            </p>

            <div
              style={{
                height: 1,
                backgroundColor: "rgba(255,255,255,0.1)",
                margin: "28px 0 20px",
              }}
            />

            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  backgroundColor: "var(--color-primary, #c97a41)",
                  flexShrink: 0,
                  display: "inline-block",
                }}
              />
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  color: "rgba(255,255,255,0.5)",
                  textTransform: "uppercase" as const,
                }}
              >
                {card.location}
              </span>
            </div>

            {/* ── CTA stack: primary button + secondary text link ── */}
            <div className="ows-cta-stack">

              {/* Primary: View Gallery */}
              <a href={card.galleryLink} className="ows-custom-btn group">
                <span className="ows-btn-text">View Gallery</span>
                <div className="ows-btn-arrow-wrapper">
                  <ArrowNew flipped={true} />
                </div>
              </a>

              {/* Secondary: Explore Partnership — text link, not a button */}
              <a href={card.partnerLink} className="ows-text-link">
                Explore Partnership →
              </a>

            </div>
          </motion.div>
          );
        })}
      </div>

      {/* ── Refined layout styling rules ── */}
      <style>{`
        .ows-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .ows-card {
          background-color: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 14px;
          padding: 44px 36px;
          display: flex;
          flex-direction: column;
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .ows-card:hover {
          transform: translateY(-4px);
          border-color: var(--color-primary, #c97a41);
          box-shadow: 0 16px 48px rgba(0,0,0,0.35);
        }

        /* ── Featured card (tile 1) ── */
        .ows-card--featured {
          background-color: rgba(200,169,110,0.07);
          border-color: rgba(200,169,110,0.55);
          box-shadow: 0 0 0 1px rgba(200,169,110,0.15), 0 8px 32px rgba(200,169,110,0.08);
        }
        .ows-card--featured:hover {
          border-color: #c8a96e;
          box-shadow: 0 0 0 1px rgba(200,169,110,0.35), 0 16px 48px rgba(200,169,110,0.15);
        }

        /* ── CTA stack: button above, text link below ── */
        .ows-cta-stack {
          margin-top: 24px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .ows-text-link {
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.04em;
          color: rgba(255,255,255,0.45);
          text-decoration: none;
          transition: color 0.2s ease;
          align-self: flex-start;
        }
        .ows-text-link:hover {
          color: var(--color-primary, #c97a41);
        }
        
        .ows-custom-btn {
          flex: 1; 
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-decoration: none;
          border-radius: 100px;
          padding: 10px 12px;
          box-sizing: border-box;
          height: 38px;
          white-space: nowrap;
          transition: all 0.3s ease-in-out;
          
          /* TRANSPARENT STATIC MODE: Clean fine-line ghost style */
          color: rgba(255, 255, 255, 0.85); 
          background-color: transparent;
          border: 1px solid rgba(255, 255, 255, 0.25); 
        }

        /* HOVER Fill: Smooth inversion to active brand primary token filled button */
        .ows-custom-btn:hover {
          border-color: var(--color-primary, #c97a41);
          background-color: var(--color-primary, #c97a41);
          color: #ffffff;
        }

        .ows-btn-text {
          transition: transform 0.3s ease-in-out;
          display: inline-block;
        }

        /* ── Native Arrow Wrapper & SVG Proportional Auto-Scaling ── */
        .ows-btn-arrow-wrapper {
          width: 0px; 
          opacity: 0;
          height: 18px; /* Compact height footprint matching shorter layout bounds */
          overflow: hidden;
          transition: width 0.3s ease-in-out, opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
          transform: translateX(-4px); 
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #ffffff; /* Forces paths within native ArrowNew component to fill pure white */
        }

        /* Force any internal SVG lines from utility components to auto-scale inside bounds */
        .ows-btn-arrow-wrapper svg {
          max-width: 100%;
          max-height: 100%;
          width: auto;
          height: auto;
        }

        /* Slide-in transition parameters revealing ArrowNew component */
        .ows-custom-btn:hover .ows-btn-arrow-wrapper {
          width: 18px; 
          opacity: 1;
          transform: translateX(4px); 
        }

        .ows-custom-btn:hover .ows-btn-text {
          transform: translateX(-2px);
        }

        /* ── Screen Scale Adaptive Modifiers ── */
        @media (max-width: 1340px) {
          .ows-custom-btn {
            font-size: 10px;
            padding: 10px 6px;
          }
        }

        @media (max-width: 1200px) {
          .ows-cards-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .ows-card {
            padding: 36px 28px;
          }
        }
      `}</style>
    </section>
    </>
  );
};

export default OurWorkSpeaks;
