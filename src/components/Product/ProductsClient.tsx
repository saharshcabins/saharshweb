"use client";

import React, { useState, useMemo } from "react";
import TextBuilder from "@/components/shared/TextBuilder";
import TextBuilderMobile from "@/components/shared/TextBuilderMobile";
import MultiColorText from "@/components/shared/MultiColorText";
import MultiColorTextMobile from "@/components/shared/MultiTextBuilderMobile";

import { products, productCategories } from "@/data/productData";
import type { ProductCategory } from "@/data/productData";
import ProductCard from "./ProductCard";
import FilterBar from "./Filterbar";

export default function ProductsClient() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | "All">(
    "All"
  );

  const filtered = useMemo(() => {
    if (activeCategory === "All") return products;
    return products.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div
      className="min-h-screen mt-20"
      style={{ background: "var(--background)" }}
    >
      {/* ── Hero header ───────────────────────────────────────────────────── */}
     

      {/* ── Filter + Grid ─────────────────────────────────────────────────── */}
      <div className="w-full md:w-[90%] mx-auto px-4   py-10 flex flex-col gap-8 mt-20">
        {/* Filter bar */}
        <div className="mb-1 mt-4 lg:mb-4">
          <FilterBar
            categories={productCategories}
            active={activeCategory}
            onChange={setActiveCategory}
            count={filtered.length}
          />
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filtered.map((item) => (
              <ProductCard key={item.slug} item={item} />
            ))}
          </div>
        ) : (
          /* Empty state */
          <div
            className="flex flex-col items-center justify-center py-24 rounded-[24px]"
            style={{
              border: "1px dashed var(--light-border)",
              background: "var(--section-accent)",
            }}
          >
            <span style={{ fontSize: 40, marginBottom: 12 }}>🏕️</span>
            <div className="hidden lg:block text-center">
              <TextBuilder fontSize="18px" weight="semibold" color="dark">
                No products in this category yet
              </TextBuilder>
            </div>
            <div className="block lg:hidden text-center">
              <TextBuilderMobile fontSize="15px" weight="semibold" color="dark">
                No products in this category yet
              </TextBuilderMobile>
            </div>
            <div className="mt-2 hidden lg:block">
              <TextBuilder fontSize="14px" color="dark">
                Try selecting "All" or a different category
              </TextBuilder>
            </div>
            <div className="mt-2 block lg:hidden">
              <TextBuilderMobile fontSize="12px" color="dark">
                Try selecting "All" or a different category
              </TextBuilderMobile>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}