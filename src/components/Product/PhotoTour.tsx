"use client";

import React from "react";
import TextBuilder from "@/components/shared/TextBuilder";
import TextBuilderMobile from "@/components/shared/TextBuilderMobile";
import { SectionHeading } from "./ProductMeta";

interface PhotoTourProps {
  images: string[];
  onImageClick: (index: number) => void;
}

export default function PhotoTour({ images, onImageClick }: PhotoTourProps) {
  if (images.length <= 1) return null;

  return (
    <div>
      <SectionHeading>Photo tour</SectionHeading>

      <div className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1 no-scrollbar">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => onImageClick(i)}
            className="shrink-0 rounded-xl overflow-hidden transition-all hover:opacity-90 active:scale-95"
            style={{ width: 140, height: 100, border: "2px solid transparent" }}
          >
            {img ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={img}
                alt={`Photo ${i + 1}`}
                className="w-full h-full object-cover"
              />
            ) : (
              <div
                className="w-full h-full flex items-center justify-center"
                style={{ background: "var(--section-accent)" }}
              >
                <span className="hidden lg:block">
                  <TextBuilder fontSize="11px" color="dark-50">No image</TextBuilder>
                </span>
                <span className="block lg:hidden">
                  <TextBuilderMobile fontSize="10px" color="dark-50">No image</TextBuilderMobile>
                </span>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
