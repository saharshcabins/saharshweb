"use client";

import React from "react";
import TextBuilder from "@/components/shared/TextBuilder";
import TextBuilderMobile from "@/components/shared/TextBuilderMobile";
import type { Product } from "@/data/productData";
import { SectionHeading } from "./ProductMeta";

// ─── Amenities grid ───────────────────────────────────────────────────────────

export function ProductAmenities({ product }: { product: Product }) {
  return (
    <div>
      <SectionHeading>What's included</SectionHeading>

      <div className="grid grid-cols-2 gap-x-8 gap-y-4">
        {product.amenities.map((a, i) => (
          <div key={i} className="flex items-center gap-3">
            <span style={{ fontSize: 20 }}>{a.icon}</span>

            <span className="hidden lg:block">
              <TextBuilder fontSize="15px" color="dark">{a.label}</TextBuilder>
            </span>
            <span className="block lg:hidden">
              <TextBuilderMobile fontSize="13px" color="dark">{a.label}</TextBuilderMobile>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Specs table ─────────────────────────────────────────────────────────────

export function ProductSpecs({ product }: { product: Product }) {
  return (
    <div>
      <SectionHeading>Specifications</SectionHeading>

      <div
        className="rounded-2xl overflow-hidden"
        style={{ border: "1px solid var(--light-border)" }}
      >
        {product.specs.map((spec, i) => (
          <div
            key={i}
            className="flex justify-between items-center px-5 py-4"
            style={{
              borderBottom:
                i !== product.specs.length - 1
                  ? "1px solid var(--light-border)"
                  : "none",
              background:
                i % 2 === 0 ? "#fff" : "var(--section-accent)",
            }}
          >
            <span className="hidden lg:block">
              <TextBuilder fontSize="14px" color="dark-light">{spec.label}</TextBuilder>
            </span>
            <span className="block lg:hidden">
              <TextBuilderMobile fontSize="13px" color="dark-light">{spec.label}</TextBuilderMobile>
            </span>

            <span className="hidden lg:block">
              <TextBuilder fontSize="14px" weight="semibold" color="dark">{spec.value}</TextBuilder>
            </span>
            <span className="block lg:hidden">
              <TextBuilderMobile fontSize="13px" weight="semibold" color="dark">{spec.value}</TextBuilderMobile>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
