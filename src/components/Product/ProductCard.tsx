"use client";

import React, { useState } from "react";
import Link from "next/link";
import TextBuilder from "@/components/shared/TextBuilder";
import TextBuilderMobile from "@/components/shared/TextBuilderMobile";
import type { Product } from "@/data/productData";
import Button from "../shared/Button";
import ButtonMobile from "../shared/ButtonMobile";

export default function ProductCard({ item }: { item: Product }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/products/${item.slug}`}
      className=" block rounded-[24px] overflow-hidden transition-all duration-300"
      style={{
        background: "#fff",
        border: "1px solid var(--light-border)",
        boxShadow: hovered
          ? "0 12px 40px rgba(0,0,0,0.10)"
          : "0 2px 12px rgba(0,0,0,0.04)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── Image panel ───────────────────────────────────────────────────── */}
      <div className="relative overflow-hidden" style={{ height: 280 }}>
        {/* Cover image with subtle zoom on hover */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
          style={{
            backgroundImage: item.coverImage
              ? `url(${item.coverImage})`
              : "none",
            backgroundColor: item.coverImage ? "transparent" : "#e0dcd5",
            transform: hovered ? "scale(1.04)" : "scale(1.0)",
          }}
        />

        {/* Bottom gradient so text is legible */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(15,27,38,0.72) 0%, rgba(15,27,38,0.10) 55%, transparent 100%)",
          }}
        />

        {/* Top-left: category pill */}
        <div className="absolute top-4 left-4">
          <span
            className="px-3 py-1 rounded-full text-xs font-medium"
            style={{
              background: "rgba(245,242,235,0.92)",
              color: "var(--text-dark)",
              backdropFilter: "blur(4px)",
              fontFamily: "var(--font-eudoxus), sans-serif",
            }}
          >
            {item.category}
          </span>
        </div>

        {/* Top-right: Featured badge */}
        {item.featured && (
          <div className="absolute top-4 right-4">
            <span
              className="px-3 py-1 rounded-full text-xs font-semibold"
              style={{
                background: "var(--color-primary)",
                color: "#fff",
                fontFamily: "var(--font-eudoxus), sans-serif",
              }}
            >
              Featured
            </span>
          </div>
        )}

        {/* Bottom overlay: tags → name → location */}
        <div className="absolute bottom-0 left-0 right-0 px-5 pb-4">
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.13)",
                  border: "1px solid rgba(255,255,255,0.22)",
                  color: "rgba(255,255,255,0.88)",
                  fontSize: 11,
                  fontFamily: "var(--font-eudoxus), sans-serif",
                  backdropFilter: "blur(4px)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Name — desktop */}
          <div className="hidden lg:block leading-tight">
            <TextBuilder fontSize="22px" weight="bold" color="light">
              {item.name}
            </TextBuilder>
          </div>
          {/* Name — mobile */}
          <div className="block lg:hidden leading-tight">
            <TextBuilderMobile fontSize="18px" weight="bold" color="light">
              {item.name}
            </TextBuilderMobile>
          </div>

          {/* Location — desktop */}
          <div className="hidden lg:block mt-0.5">
            <TextBuilder fontSize="13px" color="light60">
              {item.location}
            </TextBuilder>
          </div>
          {/* Location — mobile */}
          <div className="block lg:hidden mt-0.5">
            <TextBuilderMobile fontSize="12px" color="light60">
              {item.location}
            </TextBuilderMobile>
          </div>
        </div>
      </div>

      {/* ── Info panel ────────────────────────────────────────────────────── */}
      <div className="px-5 pt-4 pb-5 flex flex-col gap-3">
        {/* Short description — desktop */}
        <div className="hidden lg:block">
          <TextBuilder
            fontSize="14px"
            color="dark-light"
            className="leading-[1.65] line-clamp-2 block"
          >
            {item.shortDescription}
          </TextBuilder>
        </div>
        {/* Short description — mobile */}
        <div className="block lg:hidden">
          <TextBuilderMobile
            fontSize="13px"
            color="dark-light"
            className="leading-[1.6] line-clamp-2"
          >
            {item.shortDescription}
          </TextBuilderMobile>
        </div>

        {/* Spec dots row */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
          {[
            { label: "Area", value: item.areaLabel },
            { label: "Ready in", value: item.buildTimeLabel },
            { label: item.amenityLabel, value: "" },
          ].map((spec, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <span
                className="w-[6px] h-[6px] rounded-full shrink-0"
                style={{ background: "var(--color-primary)" }}
              />
              <span className="hidden lg:block">
                <TextBuilder fontSize="12px" color="dark">
                  {spec.label}
                  {spec.value ? ":" : ""}
                </TextBuilder>
              </span>
              <span className="block lg:hidden">
                <TextBuilderMobile fontSize="11px" color="dark">
                  {spec.label}
                  {spec.value ? ":" : ""}
                </TextBuilderMobile>
              </span>
              {spec.value && (
                <>
                  <span className="hidden lg:block">
                    <TextBuilder fontSize="12px" weight="semibold" color="dark">
                      {spec.value}
                    </TextBuilder>
                  </span>
                  <span className="block lg:hidden">
                    <TextBuilderMobile
                      fontSize="11px"
                      weight="semibold"
                      color="dark"
                    >
                      {spec.value}
                    </TextBuilderMobile>
                  </span>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          className="w-full h-px my-4"
          style={{ background: "var(--light-border)" }}
        />

        {/* Price row (no price in PDF, just View Details CTA) */}
        <div className="flex  justify-end ">
          <div className="flex items-center justify-end max-md:hidden">
            <Button text="View Details" className=" !py-2 !px-4 " />
          </div>
          <div className="flex items-center justify-end md:hidden">
            <ButtonMobile text="View Details" className="  " />
          </div>{" "}
        </div>
      </div>
    </Link>
  );
}
