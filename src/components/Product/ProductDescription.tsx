"use client";

import React from "react";
import TextBuilder from "@/components/shared/TextBuilder";
import TextBuilderMobile from "@/components/shared/TextBuilderMobile";
import type { Product } from "@/data/productData";
import { SectionHeading, Divider } from "./ProductMeta";

const HIGHLIGHT_ICONS = ["🏡", "🎨", "🚚"];

interface Props {
  product: Product;
}

// ─── Long description ─────────────────────────────────────────────────────────

export function ProductDescription({ product }: Props) {
  return (
    <div>
      <span className="hidden lg:block">
        <TextBuilder fontSize="16px" color="dark" className="leading-[1.75] max-w-[640px] block">
          {product.longDescription}
        </TextBuilder>
      </span>
      <span className="block lg:hidden">
        <TextBuilderMobile fontSize="14px" color="dark" className="leading-[1.7]">
          {product.longDescription}
        </TextBuilderMobile>
      </span>
    </div>
  );
}

// ─── Highlights ───────────────────────────────────────────────────────────────

export function ProductHighlights({ product }: Props) {
  return (
    <div>
      <SectionHeading>What makes this special</SectionHeading>

      <div className="flex flex-col gap-5">
        {product.highlights.map((h, i) => (
          <div key={i} className="flex gap-4">
            {/* Icon circle */}
            <div
              className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-lg"
              style={{ background: "var(--section-accent)" }}
            >
              {HIGHLIGHT_ICONS[i % HIGHLIGHT_ICONS.length]}
            </div>

            {/* Text */}
            <div>
              <div className="mb-1">
                <span className="hidden lg:block">
                  <TextBuilder fontSize="15px" weight="semibold" color="dark">
                    {h.title}
                  </TextBuilder>
                </span>
                <span className="block lg:hidden">
                  <TextBuilderMobile fontSize="14px" weight="semibold" color="dark">
                    {h.title}
                  </TextBuilderMobile>
                </span>
              </div>
              <span className="hidden lg:block">
                <TextBuilder fontSize="14px" color="dark-light" className="leading-[1.6] block">
                  {h.description}
                </TextBuilder>
              </span>
              <span className="block lg:hidden">
                <TextBuilderMobile fontSize="13px" color="dark-light" className="leading-[1.6]">
                  {h.description}
                </TextBuilderMobile>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
