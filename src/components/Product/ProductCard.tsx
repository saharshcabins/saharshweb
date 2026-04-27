"use client";

import React, { useState } from "react";
import Link from "next/link";
import TextBuilder from "@/components/shared/TextBuilder";
import TextBuilderMobile from "@/components/shared/TextBuilderMobile";
import { ProductListItem } from "@/data/Productlistdata";
import Button from "../shared/Button";
import ButtonMobile from "../shared/ButtonMobile";

interface ProductCardProps {
  item: ProductListItem;
  /** large = featured hero card, normal = standard grid card */
  variant?: "large" | "normal";
}

export default function ProductCard({
  item,
  variant = "normal",
}: ProductCardProps) {
  const [hovered, setHovered] = useState(false);

  const isLarge = variant === "large";

  return (
    <Link
      href={`/products/${item.slug}`}
      className=" block h-full rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl"
      style={{
        background: "#fff",
        border: "1px solid var(--light-border)",
        boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── Image panel ── */}
      <div
        className={`relative overflow-hidden ${
          isLarge ? "aspect-[4/3]" : "aspect-[4/3]"
        }`}
      >
        {/* Cover image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{
            backgroundImage: item.coverImage
              ? `url(${item.coverImage})`
              : "none",
            backgroundColor: item.coverImage ? "transparent" : "#e0dcd5",
            transform: hovered ? "scale(1.04)" : "scale(1)",
          }}
        />

        {/* Hover image (cross-fades in) */}
        {item.hoverImage && (
          <div
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
            style={{
              backgroundImage: `url(${item.hoverImage})`,
              opacity: hovered ? 1 : 0,
            }}
          />
        )}

        {/* Dark gradient overlay at bottom */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(15,27,38,0.65) 0%, transparent 55%)",
          }}
        />

        {/* Top badges row */}
        <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
          {/* Category pill */}
          <span
            className="px-3 py-1 rounded-full text-xs font-medium"
            style={{
              background: "rgba(255,255,255,0.92)",
              color: "var(--text-dark)",
              backdropFilter: "blur(4px)",
            }}
          >
            {item.category}
          </span>

          {/* Featured badge */}
          {item.featured && (
            <span
              className="px-3 py-1 rounded-full text-xs font-semibold"
              style={{
                background: "var(--color-primary)",
                color: "#fff",
              }}
            >
              Featured
            </span>
          )}
        </div>

        {/* Bottom overlay: name + tagline */}
        <div className="absolute bottom-0 left-0 right-0 px-5 pb-5">
          {/* Tags */}
          <div className="flex gap-2 mb-2 flex-wrap">
            {item.tags.map((tag: any) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-full text-[11px]"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  color: "rgba(255,255,255,0.9)",
                  border: "1px solid rgba(255,255,255,0.25)",
                  backdropFilter: "blur(4px)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Name */}
          <div className="hidden lg:block mb-0.5">
            <TextBuilder
              fontSize={isLarge ? "28px" : "20px"}
              weight="bold"
              color="light"
              className="leading-tight"
            >
              {item.name}
            </TextBuilder>
          </div>
          <div className="block lg:hidden mb-0.5">
            <TextBuilderMobile
              fontSize="18px"
              weight="bold"
              color="light"
              className="leading-tight"
            >
              {item.name}
            </TextBuilderMobile>
          </div>

          {/* Tagline */}
          <div className="hidden lg:block">
            <TextBuilder fontSize="13px" color="light">
              {item.tagline}
            </TextBuilder>
          </div>
          <div className="block lg:hidden">
            <TextBuilderMobile fontSize="12px" color="light70">
              {item.tagline}
            </TextBuilderMobile>
          </div>
        </div>
      </div>

      {/* ── Info panel ── */}
      <div className="px-5 pt-4 pb-5 flex flex-col gap-4">
        {/* Description */}
        <div className="hidden lg:block">
          <TextBuilder
            fontSize="14px"
            color="dark-light"
            className="leading-[1.65] line-clamp-2 block"
          >
            {item.shortDescription}
          </TextBuilder>
        </div>
        <div className="block lg:hidden">
          <TextBuilderMobile
            fontSize="13px"
            color="dark-light"
            className="leading-[1.6] line-clamp-2"
          >
            {item.shortDescription}
          </TextBuilderMobile>
        </div>

        {/* Spec chips row */}
        <div className="flex flex-wrap gap-x-4 gap-y-1">
          {[
            { label: "Area", value: item.areaLabel },
            { label: "Ready in", value: item.buildTimeLabel },
            item.bedrooms > 0
              ? { label: "Bedrooms", value: String(item.bedrooms) }
              : { label: "Capacity", value: `${item.guests} guests` },
          ].map((spec) => (
            <div key={spec.label} className="flex items-center gap-1.5">
              <span
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{ background: "var(--color-primary)" }}
              />
              <span className="hidden lg:block">
                <TextBuilder fontSize="12px" color="dark">
                  {spec.label}:
                </TextBuilder>
              </span>
              <span className="block lg:hidden">
                <TextBuilderMobile fontSize="11px" color="dark">
                  {spec.label}:
                </TextBuilderMobile>
              </span>
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
            </div>
          ))}
        </div>

        {/* Price + CTA row */}
        <div
          className="flex items-center justify-between pt-1 border-t"
          style={{ borderColor: "var(--light-border)" }}
        >
          <div>
            <div className="hidden lg:block">
              <TextBuilder fontSize="18px" weight="bold" color="primary">
                {item.priceLabel}
              </TextBuilder>
            </div>
            <div className="block lg:hidden">
              <TextBuilderMobile fontSize="16px" weight="bold" color="primary">
                {item.priceLabel}
              </TextBuilderMobile>
            </div>
            <div className="hidden lg:block">
              <TextBuilder fontSize="11px" color="dark">
                All-inclusive
              </TextBuilder>
            </div>
            <div className="block lg:hidden">
              <TextBuilderMobile fontSize="10px" color="dark">
                All-inclusive
              </TextBuilderMobile>
            </div>
          </div>

          {/* Arrow CTA */}
          <div className="flex items-center justify-end max-md:hidden">
            <Button text="View Details" className=" !py-2 !px-4 " />
          </div>
              <div className="flex items-center justify-end md:hidden">
            <ButtonMobile text="View Details" className="  " />
          </div>
        </div>
      </div>
    </Link>
  );
}
