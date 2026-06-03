"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import MultiColorTextMobile from "../shared/MultiTextBuilderMobile";
import TextBuilderMobile from "../shared/TextBuilderMobile";

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

const CabinSectionMobile = () => {
  const [activeId, setActiveId] = useState<number | null>(null);
  const activeFeature = features.find((f) => f.id === activeId) ?? null;

  const handleHotspotClick = (id: number) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".luxury-popup-card-mob") && !target.closest(".mob-node")) {
        setActiveId(null);
      }
    };
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveId(null);
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchend", handleOutsideClick);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchend", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
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
      className="text-center leading-[1.2] flex flex-col gap-[24px] items-center w-full px-4 py-12 overflow-hidden"
      style={{ background: "var(--section-dark)" }}
    >
      {/* Header section */}
      <div className="w-full flex flex-col gap-[16px]">
        <div className="flex flex-col gap-2">
          <p className="eyebrow-label">Craftsmanship</p>
          <TextBuilderMobile fontSize="30px" weight="bold" color="primary">
            Luxury You Can Feel
          </TextBuilderMobile>
          <MultiColorTextMobile
            className="leading-[1.4]"
            fontSize="14px"
            items={[
              {
                text: " From soundproof walls to premium finishes, our builds are engineered for perfection. ",
                color: "light",
                weight: "medium",
              },
              {
                text: " We don’t just build modular; we build to a higher standard. Quality isn’t a goal—it’s our foundation.",
                color: "light",
                weight: "medium",
              },
            ]}
          />
        </div>
      </div>

      {/* Main Container Layer */}
      <div 
        className="w-full relative aspect-[1270/1180] overflow-hidden rounded-xl bg-transparent"
        style={{ marginTop: "16px" }}
      >
        {/* IMAGE SCALED BY 125% INDEPENDENTLY */}
        <Image
          fill
          src="/assets/cabin/cabin_1.png"
          alt="Saharsh Cabin Showcase"
          priority
          style={{ 
            objectFit: "contain", 
            transform: "scale(1.25)", 
            transformOrigin: "center" 
          }}
        />
        
        {/* SVG COORDINATE GRID SYSTEM (Unchanged & Locked at 100%) */}
        <svg
          viewBox={`0 0 ${VB_W} ${VB_H}`}
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", overflow: "visible", zIndex: 10 }}
        >
          <style>{`
            @keyframes mobNodeBreath {
              0%, 100% { r: 18; opacity: 0.65; }
              50% { r: 23; opacity: 1; }
            }
            .mob-node .node-outer { animation: mobNodeBreath 2.5s ease-in-out infinite; }
            .mob-node:nth-child(1) .node-outer { animation-delay: 0s; }
            .mob-node:nth-child(2) .node-outer { animation-delay: 0.4s; }
            .mob-node:nth-child(3) .node-outer { animation-delay: 0.8s; }
            .mob-node:nth-child(4) .node-outer { animation-delay: 1.2s; }
            .mob-node:nth-child(5) .node-outer { animation-delay: 0.3s; }
            .mob-node:nth-child(6) .node-outer { animation-delay: 0.6s; }
          `}</style>
          
          {features.map((f) => (
            <g 
              key={f.id} 
              className="mob-node" 
              transform={`translate(${f.svgX}, ${f.svgY})`} 
              style={{ cursor: "pointer" }} 
              onClick={() => handleHotspotClick(f.id)}
            >
              {/* Tap target padding */}
              <circle cx="0" cy="0" r="36" fill="transparent" />
              <circle className="node-outer" cx="0" cy="0" r="22" fill="rgba(255,255,255,0.25)" stroke="rgba(255,255,255,0.85)" strokeWidth="1.5" />
              <circle className="node-inner" cx="0" cy="0" r="11" fill="rgba(255,255,255,0.95)" />
              <g opacity="0.9">
                <rect x="-5" y="-1" width="10" height="2" rx="0.5" fill="#1a1106" />
                <rect x="-1" y="-5" width="2" height="10" rx="0.5" fill="#1a1106" />
              </g>
            </g>
          ))}
        </svg>

        {/* Feature Detail Info Box popover */}
        {activeFeature && (
          <div
            className="luxury-popup-card-mob"
            style={{
              position: "absolute",
              bottom: "16px",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 30,
              background: "rgba(255,252,248,0.98)",
              backdropFilter: "blur(16px) saturate(120%)",
              border: "1.5px solid #C4824A",
              borderRadius: "14px",
              padding: "16px 20px",
              maxWidth: "calc(100% - 24px)",
              width: "310px",
              boxShadow: "0 12px 36px rgba(0,0,0,0.25)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px", gap: "12px" }}>
              <span style={{ fontWeight: 700, fontSize: "14px", color: "#1a1106", textAlign: "left" }}>
                {activeFeature.title}
              </span>
              <button
                onClick={() => setActiveId(null)}
                style={{ background: "none", border: "none", cursor: "pointer", fontSize: "22px", color: "#8B5E3C", padding: 0, lineHeight: 0.7, flexShrink: 0 }}
              >
                &times;
              </button>
            </div>
            
            <div style={{ width: "24px", height: "2px", backgroundColor: "#C4824A", marginBottom: "10px", borderRadius: "1px" }} />
            
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "8px", textAlign: "left" }}>
              {activeFeature.points.map((pt, i) => (
                <li key={i} style={{ fontSize: "12px", color: "#4a3a2a", lineHeight: 1.45, display: "flex", alignItems: "flex-start" }}>
                  <span style={{ color: "#C4824A", fontWeight: 700, marginRight: "8px", flexShrink: 0 }}>&#8211;</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
    </>
  );
};

export default CabinSectionMobile;
