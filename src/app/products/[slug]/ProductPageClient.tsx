"use client";

import React, { useCallback, useEffect, useState } from "react";

import type { Product } from "@/data/productData";


import TextBuilder from "@/components/shared/TextBuilder";
import { Breadcrumb, Divider, FeatureTags, MetaBar, ProductTitle } from "@/components/Product/ProductMeta";
import ImageGrid from "@/components/Product/ImageGrid";
import { ProductDescription, ProductHighlights } from "@/components/Product/ProductDescription";
import { ProductAmenities, ProductSpecs } from "@/components/Product/ProductAmenities";
import PhotoTour from "@/components/Product/PhotoTour";
import { DesktopCTACard, MobileContactNudge, MobileStickyCTA } from "@/components/Product/CTACard";
import GalleryModal from "@/components/Product/GalleryModal";

// ─────────────────────────────────────────────────────────────────────────────

interface ProductPageClientProps {
  product: Product;
}

export default function ProductPageClient({ product }: ProductPageClientProps) {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryStart, setGalleryStart] = useState(0);

  const openGallery = useCallback((index: number = 0) => {
    setGalleryStart(index);
    setGalleryOpen(true);
  }, []);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      {/* ── Gallery modal (portal-level, above everything) ── */}
      {galleryOpen && (
        <GalleryModal
          images={product.images}
          startIndex={galleryStart}
          onClose={() => setGalleryOpen(false)}
        />
      )}

      {/* ── Page wrapper ── */}
      <div
        className="min-h-screen pb-28 lg:pb-0"
        style={{ background: "var(--background)" }}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 pt-6 lg:pt-10">

          {/* Breadcrumb */}
          <Breadcrumb name={product.name} />

          {/* Title + tagline */}
          <ProductTitle product={product} />

          {/* 5-panel image grid */}
          <ImageGrid
            images={product.images}
            onShowAll={() => openGallery(0)}
            onImageClick={openGallery}
          />

          {/* ── Two-column body ── */}
          <div className="mt-8 lg:mt-10 flex flex-col lg:flex-row gap-12">

            {/* ── LEFT: content column ── */}
            <div className="flex-1 min-w-0">

              {/* Meta header row */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <div className="mb-1">
                    <TextBuilder fontSize="20px" weight="bold" color="dark">
                      {product.bedrooms > 0 ? "Luxury Prefab Cabin" : "Commercial Prefab Unit"}
                    </TextBuilder>
                  </div>
                  <MetaBar product={product} />
                </div>
                <FeatureTags features={product.features} />
              </div>

              <Divider />

              {/* Long description */}
              {/* <ProductDescription product={product} /> */}

              {/* <Divider /> */}

              {/* Highlights */}
              {/* <ProductHighlights product={product} /> */}

              {/* <Divider /> */}

              {/* Amenities */}
              {/* <ProductAmenities product={product} /> */}

              {/* <Divider /> */}

              {/* Specs table */}
              <ProductSpecs product={product} />

              <Divider />

              {/* Photo tour strip */}
              <PhotoTour images={product.images} onImageClick={openGallery} />

              <Divider />

              {/* Mobile-only inline CTA nudge */}
              <MobileContactNudge product={product} />
            </div>

            {/* ── RIGHT: desktop sticky CTA card ── */}
            <div className="hidden lg:block w-[360px] shrink-0">
              <DesktopCTACard product={product} />
            </div>
          </div>

          {/* Bottom breathing room for mobile sticky bar */}
          <div className="h-8" />
        </div>
      </div>

      {/* Mobile sticky bottom CTA */}
      <MobileStickyCTA product={product} />
    </>
  );
}