"use client";

import React, { useState, useEffect, useCallback } from "react";
import TextBuilder from "@/components/shared/TextBuilder";
import TextBuilderMobile from "@/components/shared/TextBuilderMobile";
import { ChevronLeft, ChevronLeftIcon, ChevronRight, X } from "lucide-react";

interface GalleryModalProps {
  images: string[];
  startIndex: number;
  onClose: () => void;
}

export default function GalleryModal({
  images,
  startIndex,
  onClose,
}: GalleryModalProps) {
  const [current, setCurrent] = useState(startIndex);

  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + images.length) % images.length),
    [images.length],
  );

  const next = useCallback(
    () => setCurrent((c) => (c + 1) % images.length),
    [images.length],
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [prev, next, onClose]);

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[200] flex flex-col"
      style={{ background: "rgba(0,0,0,0.97)" }}
    >
      {/* ── Top bar ── */}
      <div className="flex items-center justify-between px-5 lg:px-8 py-4 shrink-0">
        {/* Counter */}
        <div className="hidden lg:block">
          <TextBuilder fontSize="14px" color="light50">
            {current + 1} / {images.length}
          </TextBuilder>
        </div>
        <div className="block lg:hidden">
          <TextBuilderMobile fontSize="13px" color="light50">
            {current + 1} / {images.length}
          </TextBuilderMobile>
        </div>

        {/* Close */}
        <button
          onClick={onClose}
          className="flex items-center gap-2 px-2 py-2 cursor-pointer rounded-full transition-all hover:opacity-75 active:scale-95"
          style={{
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          <X className="text-white" size={20} />
        </button>
      </div>

      {/* ── Main image ── */}
      <div className="flex-1 flex items-center justify-center relative px-4 min-h-0">
        {/* Prev */}
        <button
          onClick={prev}
          className="absolute cursor-pointer left-3 lg:left-8 z-10 w-11 h-11 rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-95"
          style={{
            background: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.2)",
            color: "#fff",
            fontSize: 22,
          }}
        >
          <ChevronLeft size={20} />
        </button>

        {/* Image */}
        <div
          className="w-full max-w-5xl rounded-2xl overflow-hidden"
          style={{ maxHeight: "calc(100vh - 220px)" }}
        >
          {images[current] ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={images[current]}
              alt={`Photo ${current + 1}`}
              className="w-full object-cover"
              style={{ maxHeight: "calc(100vh - 220px)" }}
            />
          ) : (
            <div
              className="w-full flex items-center justify-center"
              style={{ height: "calc(100vh - 220px)", background: "#1a1a1a" }}
            >
              <TextBuilder fontSize="14px" color="light50">
                No image
              </TextBuilder>
            </div>
          )}
        </div>

        {/* Next */}
        <button
          onClick={next}
          className="absolute cursor-pointer right-3 lg:right-8 z-10 w-11 h-11 rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-95"
          style={{
            background: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.2)",
            color: "#fff",
            fontSize: 22,
          }}
        >
          <ChevronRight size={20}/>
        </button>
      </div>

      {/* ── Thumbnail strip ── */}
      <div className="shrink-0 px-5 py-4 overflow-x-auto no-scrollbar">
        <div className="flex gap-2 justify-center min-w-max mx-auto">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="shrink-0 rounded-xl overflow-hidden transition-all"
              style={{
                width: 68,
                height: 48,
                border:
                  i === current
                    ? "2px solid var(--color-primary)"
                    : "2px solid transparent",
                opacity: i === current ? 1 : 0.45,
              }}
            >
              {img ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={img}
                  alt={`thumb-${i}`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full" style={{ background: "#333" }} />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
