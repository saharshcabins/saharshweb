"use client";
// src/components/Product/ProductDetailClient.tsx
//
// Gallery is now a real page at /product/[slug]/gallery?index=N
// — GalleryModal import and galleryOpen state are completely removed.

import { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import TextBuilder from "@/components/shared/TextBuilder";
import TextBuilderMobile from "@/components/shared/TextBuilderMobile";
import Button from "@/components/shared/Button";
import ButtonMobile from "@/components/shared/ButtonMobile";

import type { Product } from "@/data/productData";
import ImageGrid from "./ImageGrid";
import { BackButton, MetaBar } from "./ProductMeta";

// ─── Divider ──────────────────────────────────────────────────────────────────

function Divider() {
  return (
    <hr
      style={{
        borderColor: "var(--light-border)",
        margin: "28px 0",
      }}
    />
  );
}

// ─── Highlight row ────────────────────────────────────────────────────────────

function HighlightRow({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      {/* <span
        style={{
          color: "var(--color-primary)",
          fontSize: 16,
          lineHeight: 1.5,
          flexShrink: 0,
        }}
      >
        ✓
      </span> */}
      <span className="hidden lg:block">
        <TextBuilder
          fontSize="15px"
          color="dark"
          className="leading-[1.6] block"
        >
          {text}
        </TextBuilder>
      </span>
      <span className="block lg:hidden">
        <TextBuilderMobile
          fontSize="13px"
          color="dark"
          className="leading-[1.6]"
        >
          {text}
        </TextBuilderMobile>
      </span>
    </div>
  );
}

// ─── CTA box ──────────────────────────────────────────────────────────────────

function CTABox({ product }: { product: Product }) {
  const router = useRouter();
  const CTA_BULLETS = product.offerings;
  return (
    <div
      className="rounded-2xl p-6 flex flex-col gap-6"
      style={{
        border: "1px solid var(--light-border)",
        boxShadow: "0 8px 40px rgba(0,0,0,0.06)",
        background: "#fff",
      }}
    >
      <div className="hidden lg:block">
        <TextBuilder fontSize="20px" weight="bold" color="dark">
          Interested in this product?
        </TextBuilder>
      </div>
      <div className="block lg:hidden">
        <TextBuilderMobile fontSize="17px" weight="bold" color="dark">
          Interested in this product?
        </TextBuilderMobile>
      </div>
      <div className="hidden lg:block">
        <TextBuilder fontSize="16px" weight="medium" color="dark">
          We offer:
        </TextBuilder>
      </div>

      <div className="block lg:hidden">
        <TextBuilderMobile fontSize="14px" weight="medium" color="dark">
          We offer:
        </TextBuilderMobile>
      </div>
      <div className="flex flex-col gap-3">
        {CTA_BULLETS.map((item, i) => (
          <div key={i} className="flex items-start gap-3">
            <TextBuilder fontSize="16px" color="primary">
              ✓
            </TextBuilder>
            <TextBuilder fontSize="14px" color="dark-light">
              {item}
            </TextBuilder>
          </div>
        ))}
      </div>

      <div className="block lg:hidden">
        <TextBuilderMobile
          fontSize="13px"
          color="dark-light"
          className="leading-[1.6]"
        >
          Our team will walk you through the customisation options, delivery
          timelines, payment terms and logistic support.
        </TextBuilderMobile>
      </div>
      <div className="hidden lg:block">
        <TextBuilder
          fontSize="15px"
          color="dark-light"
          className="leading-[1.65] block"
        >
          Our team will walk you through the customisation options, delivery
          timelines, payment terms and logistic support.
        </TextBuilder>
      </div>
      <div className="hidden lg:block">
        <Button
          text={product.ctaLabel}
          className="w-full"
          onClick={() => router.push(product.ctaHref)}
        />
      </div>
      <div className="block lg:hidden">
        <ButtonMobile
          text={product.ctaLabel}
          className="w-full"
          onClick={() => router.push(product.ctaHref)}
        />
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function ProductDetailClient({ product }: { product: Product }) {
  const router = useRouter();
  const allImages = [product.mainImage, ...product.images].filter(Boolean);

  // ── Open gallery page at a specific index ─────────────────────────────────
  // router.push creates a history entry → browser back returns to product page
  const openGallery = useCallback(
    (index: number = 0) => {
      router.push(`/ourprojects/${product.slug}/gallery?index=${index}`);
    },
    [router, product.slug],
  );

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div
      className="min-h-screen pb-10 mt-20"
      style={{ background: "var(--background)" }}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 pt-10 lg:pt-10">
        <BackButton />

        {/* Image grid — clicking any image opens the gallery page */}
        <ImageGrid
          images={allImages}
          onShowAll={() => openGallery(0)}
          onImageClick={openGallery}
        />

        <div className="mt-8 lg:mt-10 flex flex-col lg:flex-row gap-12">
          {/* ── LEFT: content ── */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <div className="mb-1">
                  <TextBuilder fontSize="20px" weight="bold" color="dark">
                    {product.name}
                  </TextBuilder>
                </div>
                <MetaBar product={product} />
              </div>
            </div>

            <Divider />

            {/* Specifications */}
            <div className="mb-2">
              <span className="hidden lg:block">
                <TextBuilder fontSize="17px" weight="bold" color="dark">
                  Highlights:
                </TextBuilder>
              </span>
              <span className="block lg:hidden">
                <TextBuilderMobile fontSize="15px" weight="bold" color="dark">
                  Highlights:
                </TextBuilderMobile>
              </span>
            </div>

            <div
              className="mb-5 rounded-2xl overflow-hidden"
              style={{ border: "1px solid var(--light-border)" }}
            >
              {product.specifications.map((spec, i) => (
                <div
                  key={i}
                  className="px-5 py-4 flex items-start gap-2"
                  style={{
                    borderBottom:
                      i !== product.specifications.length - 1
                        ? "1px solid var(--light-border)"
                        : "none",
                    background: i % 2 === 0 ? "#fff" : "#fff",
                  }}
                >
                  <span className="hidden lg:block">
                    <TextBuilder
                      fontSize="15px"
                      color="dark-light"
                      className="leading-[1.65]"
                    >
                      {spec}
                    </TextBuilder>
                  </span>
                  <span className="block lg:hidden">
                    <TextBuilderMobile
                      fontSize="13px"
                      color="dark-light"
                      className="leading-[1.6]"
                    >
                      {spec}
                    </TextBuilderMobile>
                  </span>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div className="mb-2">
              <span className="hidden lg:block">
                <TextBuilder fontSize="17px" weight="bold" color="dark">
                  Project Brief:
                </TextBuilder>
              </span>
              <span className="block lg:hidden">
                <TextBuilderMobile fontSize="15px" weight="bold" color="dark">
                  Project Brief:
                </TextBuilderMobile>
              </span>
            </div>
            <div className="flex flex-col gap-2">
              {product.highlights.map((h, i) => (
                <HighlightRow key={i} text={h} />
              ))}
            </div>

            <Divider />

            {/* CTA — mobile only (desktop uses sidebar) */}
            <div className="lg:hidden">
              <CTABox product={product} />
            </div>
          </div>

          {/* ── RIGHT: sticky sidebar (desktop only) ── */}
          <div className="hidden lg:block w-[340px] shrink-0">
            <div className="sticky top-24">
              <CTABox product={product} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
