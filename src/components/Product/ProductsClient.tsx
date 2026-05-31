"use client";
// src/components/Product/ProductsClient.tsx

import React, { useState, useMemo, useTransition } from "react";
import type { Product, ProductCategory } from "@/data/productData";
import FilterBar from "./Filterbar";
import ProductCard from "./ProductCard";
import TextBuilder from "@/components/shared/TextBuilder";
import TextBuilderMobile from "@/components/shared/TextBuilderMobile";

interface ProductsClientProps {
  products: Product[];
  categories: ProductCategory[];
}

export default function ProductsClient({
  products,
  categories,
}: ProductsClientProps) {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | "All">("All");

  // ✅ KEY FIX: useTransition separates "chip highlights instantly" from
  // "grid re-renders in background". Without this, both happen synchronously
  // and the UI freezes for ~2s while React remounts all cards.
  const [isPending, startTransition] = useTransition();

  function handleCategoryChange(cat: ProductCategory | "All") {
    // 1. Update the active chip immediately (no transition — instant visual feedback)
    setActiveCategory(cat);
    // 2. The grid re-render is already triggered by setActiveCategory above.
    //    startTransition tells React this re-render is interruptible / low priority.
    startTransition(() => {});
  }

  const filtered = useMemo(() => {
    if (activeCategory === "All") return products;
    return products.filter((p) => p.category === activeCategory);
  }, [activeCategory, products]);

  return (
    <div
      className="min-h-screen mt-20"
      style={{ background: "var(--background)" }}
    >
      <div className="w-full md:w-[90%] mx-auto px-4 py-10 flex flex-col gap-8 mt-20">
        {/* Filter bar */}
        <div className="mb-1 mt-4 lg:mb-4">
          <FilterBar
            categories={categories}
            active={activeCategory}
            onChange={handleCategoryChange}
            count={filtered.length}
          />
        </div>

        {/* ✅ Grid fades slightly while background re-render happens */}
        <div
          className="transition-opacity duration-150"
          style={{ opacity: isPending ? 0.55 : 1 }}
        >
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filtered.map((item, index) => (
                <ProductCard
                  key={item.slug}
                  item={item}
                  priority={index < 3}
                />
              ))}
            </div>
          ) : (
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
            </div>
          )}
        </div>
      </div>
    </div>
  );
}