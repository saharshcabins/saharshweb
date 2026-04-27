"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import TextBuilder from "@/components/shared/TextBuilder";
import TextBuilderMobile from "@/components/shared/TextBuilderMobile";
import Button from "@/components/shared/Button";
import ButtonMobile from "@/components/shared/ButtonMobile";

import type { Product } from "@/data/productData";
import ImageGrid from "./ImageGrid";
import GalleryModal from "./GalleryModal";
import {
  BackButton,
  Breadcrumb,
  FeatureTags,
  MetaBar,
  ProductTitle,
} from "./ProductMeta";
import { useRouter } from "next/navigation";

// ─── Divider ─────────────────────────────────────────────────────────────────

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

// ─── Spec row item ────────────────────────────────────────────────────────────

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center gap-3">
      <span
        className="w-[6px] h-[6px] rounded-full shrink-0"
        style={{ background: "var(--color-primary)" }}
      />
      {/* Desktop */}
      <span className="hidden lg:flex items-center gap-1">
        <TextBuilder fontSize="15px" color="dark-light">
          {label}:
        </TextBuilder>
        <TextBuilder fontSize="15px" weight="semibold" color="dark">
          &nbsp;{value}
        </TextBuilder>
      </span>
      {/* Mobile */}
      <span className="flex lg:hidden items-center gap-1">
        <TextBuilderMobile fontSize="13px" color="dark-light">
          {label}:
        </TextBuilderMobile>
        <TextBuilderMobile fontSize="13px" weight="semibold" color="dark">
          &nbsp;{value}
        </TextBuilderMobile>
      </span>
    </div>
  );
}

// ─── Highlight row ────────────────────────────────────────────────────────────

function HighlightRow({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <span
        style={{
          color: "var(--color-primary)",
          fontSize: 16,
          lineHeight: 1.5,
          flexShrink: 0,
        }}
      >
        ✓
      </span>
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

// ─── CTA nudge box ────────────────────────────────────────────────────────────

function CTABox({ product }: { product: Product }) {
  const router = useRouter();
  const CTA_BULLETS = [
    "PAN-India installation",
    "7-year structural warranty",
    "Site visit and design consultation available as a paid service",
  ];
  return (
    <div
      className="rounded-2xl p-6 flex flex-col gap-6"
      style={{
        border: "1px solid var(--light-border)",
        boxShadow: "0 8px 40px rgba(0,0,0,0.06)",
        background: "#fff",
      }}
    >
      {/* Title */}
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
      {/* Body */}
      {/* NEW: Benefits list */}
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
      {/* CTA */}
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
      </div>{" "}
      <div className="block lg:hidden">
        <TextBuilderMobile
          fontSize="13px"
          color="dark-light"
          className="leading-[1.6]"
        >
          Our team will walk you through customisation options, design,
          timelines and transparent pricing.
        </TextBuilderMobile>
      </div>{" "}
      <div className="hidden lg:block">
        <TextBuilder
          fontSize="15px"
          color="dark-light"
          className="leading-[1.65] block"
        >
          Our team will walk you through customisation options, design,
          timelines and transparent pricing.
        </TextBuilder>
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function ProductDetailClient({ product }: { product: Product }) {
  // All images for the gallery: mainImage first, then the rest
  const allImages = [product.mainImage, ...product.images].filter(Boolean);

  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryStart, setGalleryStart] = useState(0);

  const openGallery = useCallback((index: number = 0) => {
    setGalleryStart(index);
    setGalleryOpen(true);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      {/* Gallery modal */}
      {galleryOpen && (
        <GalleryModal
          images={allImages}
          startIndex={galleryStart}
          onClose={() => setGalleryOpen(false)}
        />
      )}

      {/* ── Page ── */}
      <div
        className="min-h-screen pb-10 mt-20"
        style={{ background: "var(--background)" }}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 pt-6 lg:pt-10">
          {/* ── Breadcrumb ── */}
          <BackButton />

          <ProductTitle product={product} />

          {/* ── Tags (above image, as in PDF) ── */}

          {/* ── Image grid ── */}
          <ImageGrid
            images={allImages}
            onShowAll={() => openGallery(0)}
            onImageClick={openGallery}
          />

          {/* ── Name + location ── */}

          {/* ── Two column layout on desktop ── */}
          <div className="mt-8 lg:mt-10 flex flex-col lg:flex-row gap-12">
            {/* ── LEFT: main content ── */}
            <div className="flex-1 min-w-0">
              {/* <div className="hidden lg:block">
                <TextBuilder
                  fontSize="16px"
                  color="dark"
                  className="leading-[1.7] block max-w-[620px]"
                >
                  {product.shortDescription}
                </TextBuilder>
              </div>
              <div className="block lg:hidden">
                <TextBuilderMobile
                  fontSize="14px"
                  color="dark"
                  className="leading-[1.65]"
                >
                  {product.shortDescription}
                </TextBuilderMobile>
              </div> */}
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

              {/* <FeatureTags features={product.tags} /> */}

              <Divider />

              {/* Specs — Area, Ready in, Amenity, Bathrooms */}
              {/* <div className="flex flex-col gap-3">
                <SpecRow label="Area" value={product.areaLabel} />
                <SpecRow label="Ready in" value={product.buildTimeLabel} />
                <SpecRow label={product.amenityLabel} value="" />
                <SpecRow label="Bathrooms" value={String(product.bathrooms)} />
              </div> */}

              {/* <Divider /> */}

              {/* Detail subtitle (e.g. "3BHK Pool Villa") */}
              {/* <div className="mb-4">
                <span className="hidden lg:block">
                  <TextBuilder fontSize="22px" weight="bold" color="dark">
                    {product.detailSubtitle}
                  </TextBuilder>
                </span>
                <span className="block lg:hidden">
                  <TextBuilderMobile fontSize="18px" weight="bold" color="dark">
                    {product.detailSubtitle}
                  </TextBuilderMobile>
                </span>
              </div> */}

              {/* Specifications block */}
              <div className="mb-2">
                <span className="hidden lg:block">
                  <TextBuilder fontSize="17px" weight="bold" color="dark">
                    Specifications:
                  </TextBuilder>
                </span>
                <span className="block lg:hidden">
                  <TextBuilderMobile fontSize="15px" weight="bold" color="dark">
                    Specifications:
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
                      background:
                        i % 2 === 0 ? "#fff" : "var(--section-accent)",
                    }}
                  >
                    {/* bullet */}

                    {/* text */}
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
                    Highlights:
                  </TextBuilder>
                </span>
                <span className="block lg:hidden">
                  <TextBuilderMobile fontSize="15px" weight="bold" color="dark">
                    Highlights:
                  </TextBuilderMobile>
                </span>
              </div>
              <div className="flex flex-col gap-2">
                {product.highlights.map((h, i) => (
                  <HighlightRow key={i} text={h} />
                ))}
              </div>

              <Divider />

              {/* CTA nudge — visible on mobile below content, hidden on desktop (shown in sidebar) */}
              <div className="lg:hidden">
                <CTABox product={product} />
              </div>
            </div>

            {/* ── RIGHT: sticky CTA sidebar (desktop only) ── */}
            <div className="hidden lg:block w-[340px] shrink-0">
              <div className="sticky top-24">
                <CTABox product={product} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
