"use client";

import React from "react";
import TextBuilder from "@/components/shared/TextBuilder";
import TextBuilderMobile from "@/components/shared/TextBuilderMobile";

interface ImageGridProps {
  images: string[];
  onShowAll: () => void;
  onImageClick: (index: number) => void;
}

export default function ImageGrid({
  images,
  onShowAll,
  onImageClick,
}: ImageGridProps) {
  const [img0, img1, img2, img3, img4] = images;

  return (
    <>
      {/* ── Mobile: single hero image with pill ── */}
      <div
        className="lg:hidden relative w-full overflow-hidden rounded-2xl"
        style={{ height: 300 }}
      >
        <div
          onClick={() => onImageClick(0)}
          className="w-full h-full bg-cover bg-center cursor-pointer"
          style={{
            backgroundImage: img0 ? `url(${img0})` : "none",
            backgroundColor: img0 ? "transparent" : "#e0dcd5",
          }}
        />

        {/* "Show all" pill */}
        <button
          onClick={onShowAll}
          className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 rounded-xl shadow-lg transition-all active:scale-95"
          style={{
            background: "#fff",
            border: "1px solid rgba(0,0,0,0.15)",
          }}
        >
          <span style={{ fontSize: 16 }}>⊞</span>
          <TextBuilderMobile fontSize="13px" color="dark" weight="medium">
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
          height: 520,
        }}
      >
        {/* Large left — spans 2 rows */}
        <div
          onClick={() => onImageClick(0)}
          className="row-span-2 bg-cover bg-center cursor-pointer hover:opacity-95 transition-opacity"
          style={{
            backgroundImage: img0 ? `url(${img0})` : "none",
            backgroundColor: img0 ? "transparent" : "#ddd",
          }}
        />

        {/* Top-middle */}
        <div
          onClick={() => onImageClick(1)}
          className="bg-cover bg-center cursor-pointer hover:opacity-95 transition-opacity"
          style={{
            backgroundImage: img1 ? `url(${img1})` : "none",
            backgroundColor: img1 ? "transparent" : "#e0dcd5",
          }}
        />

        {/* Top-right */}
        <div
          onClick={() => onImageClick(2)}
          className="bg-cover bg-center cursor-pointer hover:opacity-95 transition-opacity"
          style={{
            backgroundImage: img2 ? `url(${img2})` : "none",
            backgroundColor: img2 ? "transparent" : "#e0dcd5",
          }}
        />

        {/* Bottom-middle */}
        <div
          onClick={() => onImageClick(3)}
          className="bg-cover bg-center cursor-pointer hover:opacity-95 transition-opacity"
          style={{
            backgroundImage: img3 ? `url(${img3})` : "none",
            backgroundColor: img3 ? "transparent" : "#e0dcd5",
          }}
        />

        {/* Bottom-right — "Show all" button overlaid */}
        <div
          onClick={() => onImageClick(4)}
          className="relative bg-cover bg-center cursor-pointer hover:opacity-95 transition-opacity"
          style={{
            backgroundImage: img4 ? `url(${img4})` : "none",
            backgroundColor: img4 ? "transparent" : "#e0dcd5",
          }}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              onShowAll();
            }}
            className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-95"
            style={{
              background: "#fff",
              border: "1px solid rgba(0,0,0,0.12)",
            }}
          >
            <span style={{ fontSize: 15 }}>⊞</span>
            <TextBuilder fontSize="13px" color="dark" weight="medium">
              Show all photos
            </TextBuilder>
          </button>
        </div>
      </div>
    </>
  );
}
