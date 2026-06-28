"use client";
// src/components/Product/ProductCard.tsx

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import TextBuilder from "@/components/shared/TextBuilder";
import TextBuilderMobile from "@/components/shared/TextBuilderMobile";
import type { Product } from "@/data/productData";
import Button from "../shared/Button";
import ButtonMobile from "../shared/ButtonMobile";

// ✅ FIX FOR DISAPPEARING CARDS ON SCROLL:
// A tiny 1x1 pixel base64 blur placeholder. This makes next/image render a
// visible placeholder div IMMEDIATELY — the browser never collapses the card
// to zero height, so the layout is stable before the real image loads.
// Cards that have already loaded stay in the DOM painted — no re-fetch on scroll.
// ✅ Warm sand/beige — matches the cabin card background and fallback color
const BLUR_PLACEHOLDER =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAADElEQVR4nGN4cOcqAAUxApI4fGwOAAAAAElFTkSuQmCC";


interface ProductCardProps {
  item: Product;
  priority?: boolean;
}

export default function ProductCard({ item, priority = false }: ProductCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/ourprojects/${item.slug}`}
      onClick={() => sessionStorage.setItem("scrollY_ourprojects", String(window.scrollY))}
      // ✅ will-change: transform tells the GPU to composite this layer separately.
      // Prevents the entire page repainting when this card animates.
      className="block rounded-[24px] overflow-hidden flex flex-col h-full"
      style={{
        background: "#fff",
        border: "1px solid var(--light-border)",
        boxShadow: hovered
          ? "0 12px 40px rgba(0,0,0,0.10)"
          : "0 2px 12px rgba(0,0,0,0.04)",
        transition: "box-shadow 300ms ease",
        // ✅ Promotes each card to its own GPU layer — scroll is compositor-driven,
        // never triggers JS or layout recalculation
        willChange: "transform",
        transform: "translateZ(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── Image panel ─────────────────────────────────────────────────────── */}
      {/*
        ✅ FIX: explicit height via paddingTop trick instead of aspect-[4/3] class.
        Tailwind's aspect-ratio uses the CSS aspect-ratio property which some mobile
        browsers handle inconsistently inside flex/grid containers, causing the
        image to collapse and re-expand on scroll.
        paddingTop: 75% = 4:3 ratio, always stable.
      */}
      <div
        className="relative overflow-hidden"
        style={{ paddingTop: "75%", flexShrink: 0 }}
      >
        {item.coverImage ? (
          <Image
            src={item.coverImage}
            alt={item.name}
            fill
            // ✅ sizes: tells the browser exactly how wide the image will be
            // so it downloads the right resolution — no oversized images on mobile
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={priority}
            // ✅ placeholder + blurDataURL:
            // The card shows a coloured blur instantly — no blank white flash.
            // Once the real image loads it cross-fades in. The card never collapses.
            placeholder="blur"
            blurDataURL={BLUR_PLACEHOLDER}
            className="object-cover"
            // ✅ Only the image scales on hover — not the whole card.
            // CSS transition on transform is GPU-accelerated (no layout thrash).
            style={{
              transition: "transform 700ms ease",
              transform: hovered ? "scale(1.04)" : "scale(1.0)",
            }}
          />
        ) : (
          <div className="absolute inset-0" style={{ background: "#e0dcd5" }} />
        )}

        {/* Gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(15,27,38,0.72) 0%, rgba(15,27,38,0.10) 55%, transparent 100%)",
          }}
        />

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span
            className="px-3 py-1 rounded-full text-xs font-medium"
            style={{
              background: "rgba(245,242,235,0.92)",
              color: "var(--text-dark)",
            }}
          >
            {item.category}
          </span>
        </div>

        {/* Featured badge */}
        {item.featured && (
          <div className="absolute top-4 right-4">
            <span
              className="px-3 py-1 rounded-full text-xs font-semibold"
              style={{ background: "var(--color-primary)", color: "#fff" }}
            >
              Featured
            </span>
          </div>
        )}

        {/* Name + location overlay */}
        <div className="absolute bottom-0 left-0 right-0 px-5 pb-4">
          <div className="flex flex-wrap gap-1.5 mb-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-full text-[11px]"
                style={{
                  background: "rgba(255,255,255,0.13)",
                  border: "1px solid rgba(255,255,255,0.22)",
                  color: "rgba(255,255,255,0.88)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="hidden lg:block">
            <TextBuilder fontSize="22px" weight="bold" color="light">
              {item.name}
            </TextBuilder>
          </div>
          <div className="lg:hidden">
            <TextBuilderMobile fontSize="18px" weight="bold" color="light">
              {item.name}
            </TextBuilderMobile>
          </div>
          <div className="hidden lg:block">
            <TextBuilder fontSize="13px" color="light60">
              {item.location}
            </TextBuilder>
          </div>
          <div className="lg:hidden">
            <TextBuilderMobile fontSize="12px" color="light60">
              {item.location}
            </TextBuilderMobile>
          </div>
        </div>
      </div>

      {/* ── Info panel ──────────────────────────────────────────────────────── */}
      <div className="px-5 pt-4 pb-5 flex flex-col gap-3 flex-1">
        <div className="hidden lg:block">
          <TextBuilder fontSize="14px" color="dark-light" className="leading-[1.65]">
            {item.shortDescription}
          </TextBuilder>
        </div>
        <div className="lg:hidden">
          <TextBuilderMobile fontSize="13px" color="dark-light" className="leading-[1.6]">
            {item.shortDescription}
          </TextBuilderMobile>
        </div>

        <div className="mt-auto">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
            {[
              { label: "Area", value: item.areaLabel },
              { label: "Ready in", value: item.buildTimeLabel },
              { label: item.amenityLabel, value: "" },
            ].map((spec, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <span
                  className="w-[6px] h-[6px] rounded-full"
                  style={{ background: "var(--color-primary)" }}
                />
                <TextBuilder fontSize="12px" color="dark">
                  {spec.label}{spec.value ? ":" : ""}
                </TextBuilder>
                {spec.value && (
                  <TextBuilder fontSize="12px" weight="semibold" color="dark">
                    {spec.value}
                  </TextBuilder>
                )}
              </div>
            ))}
          </div>

          <div
            className="w-full h-px my-4"
            style={{ background: "var(--light-border)" }}
          />

          <div className="flex justify-end">
            <div className="hidden md:flex">
              <Button text="Explore Project" className="!py-2 !px-4" fontSize="16px" />
            </div>
            <div className="md:hidden flex">
              <ButtonMobile text="Explore Project" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}