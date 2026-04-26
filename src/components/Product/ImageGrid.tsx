"use client";

import React from "react";
import TextBuilder from "@/components/shared/TextBuilder";
import TextBuilderMobile from "@/components/shared/TextBuilderMobile";

interface ImageGridProps {
  /** Index 0 = hero/main, 1–4 fill the smaller panels */
  images: string[];
  onShowAll: () => void;
  onImageClick: (index: number) => void;
}

export default function ImageGrid({
  images,
  onShowAll,
  onImageClick,
}: ImageGridProps) {
  // Pad to 5 slots so the grid never breaks
  const slots = [...images, null, null, null, null, null].slice(0, 5) as (string | null)[];
  const [img0, img1, img2, img3, img4] = slots;

  const panelStyle = (img: string | null) => ({
    backgroundImage: img ? `url(${img})` : "none",
    backgroundColor: img ? "transparent" : "#e0dcd5",
  });

  return (
    <>
      {/* ── Mobile: full-width single image ── */}
      <div
        className="lg:hidden relative w-full overflow-hidden rounded-2xl"
        style={{ height: 280 }}
      >
        <div
          onClick={() => onImageClick(0)}
          className="w-full h-full bg-cover bg-center cursor-pointer"
          style={panelStyle(img0)}
        />
        {/* Show all pill */}
        <button
          onClick={onShowAll}
          className="absolute bottom-4 cursor-pointer right-4 flex items-center gap-2 px-4 py-2 rounded-xl shadow-lg active:scale-95 transition-all"
          style={{
            background: "#fff",
            border: "1px solid rgba(0,0,0,0.14)",
          }}
        >
          <span style={{ fontSize: 14 }}>⊞</span>
          <TextBuilderMobile fontSize="12px" color="dark" weight="medium">
            Show all photos
          </TextBuilderMobile>
        </button>
      </div>

      {/* ── Desktop: 5-panel Airbnb grid ── */}
      <div
        className="hidden lg:grid rounded-2xl overflow-hidden gap-2"
        style={{
          gridTemplateColumns: "2fr 1fr 1fr",
          gridTemplateRows: "1fr 1fr",
          height: 500,
        }}
      >
        {/* Large left — spans 2 rows */}
        <div
          onClick={() => onImageClick(0)}
          className="row-span-2 bg-cover bg-center cursor-pointer hover:opacity-95 transition-opacity"
          style={panelStyle(img0)}
        />

        {/* Top-middle */}
        <div
          onClick={() => onImageClick(1)}
          className="bg-cover bg-center cursor-pointer hover:opacity-95 transition-opacity"
          style={panelStyle(img1)}
        />

        {/* Top-right */}
        <div
          onClick={() => onImageClick(2)}
          className="bg-cover bg-center cursor-pointer hover:opacity-95 transition-opacity"
          style={panelStyle(img2)}
        />

        {/* Bottom-middle */}
        <div
          onClick={() => onImageClick(3)}
          className="bg-cover bg-center cursor-pointer hover:opacity-95 transition-opacity"
          style={panelStyle(img3)}
        />

        {/* Bottom-right — "Show all" overlaid */}
        <div
          onClick={() => onImageClick(4)}
          className="relative bg-cover bg-center cursor-pointer hover:opacity-95 transition-opacity"
          style={panelStyle(img4)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              onShowAll();
            }}
            className="absolute bottom-4 cursor-pointer right-4 flex items-center gap-2 px-4 py-2 rounded-xl shadow-md hover:shadow-lg active:scale-95 transition-all"
            style={{
              background: "#fff",
              border: "1px solid rgba(0,0,0,0.12)",
            }}
          >
            <span style={{ fontSize: 14 }}>⊞</span>
            <TextBuilder fontSize="13px" color="dark" weight="medium">
              Show all photos
            </TextBuilder>
          </button>
        </div>
      </div>
    </>
  );
}