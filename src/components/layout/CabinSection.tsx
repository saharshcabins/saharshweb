"use client";

import React, { useState, useEffect, useRef } from "react";
import MultiColorText from "../shared/MultiColorText";
import Image from "next/image";

const features = [
  {
    id: 1,
    title: "Custom Interiors",
    points: [
      "Luxury walls and finishes",
      "Durable, easy-clean materials",
      "Adjustable mood lighting",
    ],
    svgX: 360,
    svgY: 290,
  },
  {
    id: 2,
    title: "Premium Windows & Doors",
    points: [
      "Aluminum or UPVC frames",
      "White, Black, or Walnut finishes",
      "Long-lasting with optional DGU glass",
    ],
    svgX: 635,
    svgY: 384,
  },
  {
    id: 3,
    title: "Luxury Bathrooms",
    points: [
      "High-quality fixtures and fittings",
      "Smart, space-saving layouts",
      "Customizable design choices",
    ],
    svgX: 415,
    svgY: 505,
  },
  {
    id: 4,
    title: "Built for Lifetimes",
    points: [
      "Rust-proof galvanized steel core",
      "Outlasts standard cabins by decades",
      "Premium PU foam insulation",
    ],
    svgX: 560,
    svgY: 195,
  },
  {
    id: 5,
    title: "Premium Decking & Floors",
    points: [
      "Customizable indoor tiles",
      "Weatherproof outdoor WPC decking",
      "Seamless indoor-to-outdoor flow",
    ],
    svgX: 523,
    svgY: 675,
  },
  {
    id: 6,
    title: "Move-In Ready",
    points: [
      "Optional premium furniture packages",
      "100% factory-fitted layout",
      "Designed for immediate use",
    ],
    svgX: 680,
    svgY: 550,
  },
];

const VB_W = 1000;
const VB_H = 929;

const CabinSection = () => {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [popupStyle, setPopupStyle] = useState<React.CSSProperties>({});
  const wrapperRef = useRef<HTMLDivElement>(null);

  const activeFeature = features.find((f) => f.id === activeId) ?? null;

  const handleHotspotClick = (id: number) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  const handleClose = () => setActiveId(null);

  useEffect(() => {
    if (!activeId || !wrapperRef.current) return;
    const feature = features.find((f) => f.id === activeId);
    if (!feature) return;

    const rect = wrapperRef.current.getBoundingClientRect();
    const scaleX = rect.width / VB_W;
    const scaleY = rect.height / VB_H;
    const nodeScreenX = rect.left + feature.svgX * scaleX;
    const nodeScreenY = rect.top + feature.svgY * scaleY;

    const cardW = 420;
    const cardH = 200;
    const margin = 16;
    const nodeR = 26 * Math.min(scaleX, scaleY);

    let left = nodeScreenX + nodeR + margin;
    let top = nodeScreenY - cardH / 2;

    const vpW = window.innerWidth;
    const vpH = window.innerHeight;

    if (left + cardW > vpW - margin) left = nodeScreenX - nodeR - margin - cardW;
    if (top < margin) top = margin;
    if (top + cardH > vpH - margin) top = vpH - margin - cardH;
    if (left < margin) left = margin;

    setPopupStyle({ left, top, maxWidth: cardW });
  }, [activeId]);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".luxury-popup-card") && !target.closest(".luxury-node")) {
        setActiveId(null);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveId(null);
    };
    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes nodeBreath {
          0%, 100% { r: 22; opacity: 0.7; }
          50% { r: 26; opacity: 1; }
        }
        .luxury-node .node-outer { animation: nodeBreath 3s ease-in-out infinite; }
        .luxury-node:nth-child(1) .node-outer { animation-delay: 0s; }
        .luxury-node:nth-child(2) .node-outer { animation-delay: 0.5s; }
        .luxury-node:nth-child(3) .node-outer { animation-delay: 1s; }
        .luxury-node:nth-child(4) .node-outer { animation-delay: 1.5s; }
        .luxury-node:nth-child(5) .node-outer { animation-delay: 0.25s; }
        .luxury-node:nth-child(6) .node-outer { animation-delay: 0.75s; }
        .luxury-node:hover .node-outer { fill: rgba(196,130,74,0.25); stroke: #C4824A; stroke-width: 2; animation: none; }
        .luxury-node:hover .node-inner { fill: #C4824A; }
        .luxury-node:hover .node-plus { fill: #ffffff; opacity: 1; }
        .luxury-node.active .node-outer { fill: rgba(196,130,74,0.3); stroke: #C4824A; stroke-width: 2; animation: none; }
        .luxury-node.active .node-inner { fill: #C4824A; }
        .luxury-node.active .node-plus { fill: #ffffff; opacity: 1; }
        .luxury-popup-card { animation: popupFadeIn 0.22s ease forwards; }
        @keyframes popupFadeIn {
          from { opacity: 0; transform: translateY(8px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>

      {/* ==========================================
         HOME SECTION: LUXURY YOU CAN FEEL
         Purpose:
         Demonstrate craftsmanship and premium interior quality through interactive hotspot exploration.
         Primary conversion objective:
         Create desire and justify the premium price point through tangible build detail.
      ========================================== */}
      <section
        id="luxury-you-can-feel"
        data-section="luxury-you-can-feel"
        className="text-center leading-[1.2] flex flex-col gap-8 items-center"
      >
        <div className="flex flex-col gap-2 pb-4">
          <p className="eyebrow-label">Craftsmanship</p>
          <MultiColorText
            fontSize="clamp(40px, 5.208vw, 75px)"
            className="leading-[1.08] text-center"
            items={[
              { text: "Luxury ", weight: "semibold", color: "dark" },
              { text: "You Can Feel", weight: "semibold", color: "primary" },
            ]}
          />
          <MultiColorText
            fontSize="20px"
            items={[
              {
                text: " From soundproof walls to premium finishes, our builds are engineered for perfection. ",
                color: "link",
                weight: "medium",
                breakAfter: true,
              },
              {
                text: " We don't just build modular; we build to a higher standard. Quality isn't a goal—it's our foundation.",
                color: "link",
                weight: "medium",
                breakAfter: true,
              },
            ]}
          />
        </div>

        {/* Interactive SVG hotspot diagram */}
        <div ref={wrapperRef} style={{ position: "relative", width: "88%", maxWidth: "1056px", margin: "0 auto", overflow: "hidden", display: "flex", justifyContent: "center" }}>
          <Image
            src="/assets/cabin/cabin_1.webp"
            alt="Saharsh Luxury Cabin — Interactive Showcase"
            width={1270}
            height={1180}
            style={{ width: "100%", height: "auto", display: "block", borderRadius: "16px" }}
          />
          <svg
            viewBox={`0 0 ${VB_W} ${VB_H}`}
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", overflow: "visible" }}
          >
            {features.map((f) => (
              <g
                key={f.id}
                className={`luxury-node${activeId === f.id ? " active" : ""}`}
                transform={`translate(${f.svgX}, ${f.svgY})`}
                onClick={() => handleHotspotClick(f.id)}
                style={{ cursor: "pointer" }}
              >
                <circle
                  className="node-outer"
                  cx="0" cy="0" r="22"
                  fill="rgba(255,255,255,0.18)"
                  stroke="rgba(255,255,255,0.7)"
                  strokeWidth="1.5"
                  style={{ transition: "all 0.3s ease" }}
                />
                <circle
                  className="node-inner"
                  cx="0" cy="0" r="10"
                  fill="rgba(255,255,255,0.92)"
                  style={{ transition: "all 0.3s ease" }}
                />
                <g className="node-plus" style={{ transition: "all 0.3s ease", opacity: 0.85 }}>
                  <rect x="-5.5" y="-1" width="11" height="2" rx="1" fill="#8B5E3C" />
                  <rect x="-1" y="-5.5" width="2" height="11" rx="1" fill="#8B5E3C" />
                </g>
              </g>
            ))}
          </svg>
        </div>

        {/* Glassmorphism popup card */}
        {activeFeature && (
          <div
            className="luxury-popup-card"
            style={{
              position: "fixed",
              zIndex: 10000,
              background: "rgba(255,252,248,0.97)",
              backdropFilter: "blur(20px) saturate(180%)",
              WebkitBackdropFilter: "blur(20px) saturate(180%)",
              border: "1px solid rgba(196,130,74,0.2)",
              borderRadius: "20px",
              padding: "24px 28px 22px",
              minWidth: "380px",
              maxWidth: "420px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.14), 0 2px 12px rgba(196,130,74,0.08)",
              ...popupStyle,
            }}
          >
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "16px", marginBottom: "6px" }}>
              <div style={{ fontSize: "16px", fontWeight: 700, color: "#1a1106", lineHeight: 1.3, letterSpacing: "-0.01em" }}>
                {activeFeature.title}
              </div>
              <button
                onClick={handleClose}
                style={{ background: "none", border: "none", cursor: "pointer", fontSize: "22px", color: "#8B5E3C", padding: 0, lineHeight: 0.8, flexShrink: 0 }}
              >
                &times;
              </button>
            </div>
            
            <div style={{ width: "32px", height: "2px", background: "linear-gradient(90deg, #C4824A, rgba(196,130,74,0.3))", marginBottom: "14px", borderRadius: "2px" }} />
            
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "9px" }}>
              {activeFeature.points.map((pt, i) => (
                <li key={i} style={{ fontSize: "13px", color: "#4a3a2a", lineHeight: 1.55, display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <span style={{ color: "#C4824A", fontSize: "16px", flexShrink: 0, lineHeight: 1.3, marginTop: "1px" }}>&#x2013;</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </>
  );
};

export default CabinSection;
