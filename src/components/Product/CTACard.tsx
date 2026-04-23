"use client";

import React from "react";
import Link from "next/link";
import TextBuilder from "@/components/shared/TextBuilder";
import TextBuilderMobile from "@/components/shared/TextBuilderMobile";
import Button from "@/components/shared/Button";
import ButtonMobile from "@/components/shared/ButtonMobile";
import type { Product } from "@/data/productData";

const CTA_BULLETS = [
  "Site visit & consultation included",
  "Design customisation available",
  "Pan-India installation",
  "10-year structural warranty",
];

// ─── Desktop sticky sidebar card ─────────────────────────────────────────────

export function DesktopCTACard({ product }: { product: Product }) {
  return (
    <div
      className="sticky top-24 rounded-2xl p-8 flex flex-col gap-6"
      style={{
        border: "1px solid var(--light-border)",
        boxShadow: "0 8px 40px rgba(0,0,0,0.06)",
        background: "#fff",
      }}
    >
      {/* Price */}
      {product.priceLabel && (
        <div>
          <TextBuilder fontSize="26px" weight="bold" color="dark">
            {product.priceLabel}
          </TextBuilder>
          <div className="mt-1">
            <TextBuilder fontSize="13px" color="dark-50">
              All-inclusive · No hidden fees
            </TextBuilder>
          </div>
        </div>
      )}

      {/* CTA button — reuses the project's existing Button component */}
      <Button text={product.ctaLabel} />

      {/* Bullets */}
      <div className="flex flex-col gap-3">
        {CTA_BULLETS.map((item, i) => (
          <div key={i} className="flex items-start gap-3">
            <TextBuilder fontSize="16px" color="primary">✓</TextBuilder>
            <TextBuilder fontSize="14px" color="dark-light">{item}</TextBuilder>
          </div>
        ))}
      </div>

      <div className="text-center">
        <TextBuilder fontSize="12px" color="dark-50">
          No commitment. We'll reach out within 24 hours.
        </TextBuilder>
      </div>
    </div>
  );
}

// ─── Mobile sticky bottom bar ─────────────────────────────────────────────────

export function MobileStickyCTA({ product }: { product: Product }) {
  return (
    <div
      className="lg:hidden fixed bottom-0 left-0 right-0 z-50 px-5 py-4 flex items-center justify-between"
      style={{
        background: "#fff",
        borderTop: "1px solid var(--light-border)",
        boxShadow: "0 -4px 24px rgba(0,0,0,0.08)",
      }}
    >
      {/* Price block */}
      <div>
        {product.priceLabel && (
          <TextBuilderMobile fontSize="18px" weight="bold" color="dark">
            {product.priceLabel}
          </TextBuilderMobile>
        )}
        <div className="mt-0.5">
          <TextBuilderMobile fontSize="11px" color="dark-50">
            All-inclusive pricing
          </TextBuilderMobile>
        </div>
      </div>

      {/* Button */}
      <ButtonMobile text={product.ctaLabel} />
    </div>
  );
}

// ─── Mobile inline contact nudge (above footer on mobile) ────────────────────

export function MobileContactNudge({ product }: { product: Product }) {
  return (
    <div
      className="lg:hidden rounded-2xl p-6 flex flex-col gap-4"
      style={{
        background: "var(--section-accent)",
        border: "1px solid rgba(201,122,65,0.2)",
      }}
    >
      <TextBuilderMobile fontSize="16px" weight="semibold" color="dark">
        Interested in this product?
      </TextBuilderMobile>

      <TextBuilderMobile fontSize="13px" color="dark-light" className="leading-[1.6]">
        Our team will walk you through customisation options, timelines, and
        transparent pricing — no pressure, no commitment.
      </TextBuilderMobile>

      <ButtonMobile text={product.ctaLabel} />
    </div>
  );
}
