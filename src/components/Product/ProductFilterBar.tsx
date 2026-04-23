"use client";

import React from "react";
import TextBuilder from "@/components/shared/TextBuilder";
import TextBuilderMobile from "@/components/shared/TextBuilderMobile";
import { ProductCategory } from "@/data/Productlistdata";

interface ProductFilterBarProps {
  categories: ProductCategory[];
  activeCategory: ProductCategory | "All";
  onCategoryChange: (cat: ProductCategory | "All") => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  totalCount: number;
}

export default function ProductFilterBar({
  categories,
  activeCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  totalCount,
}: ProductFilterBarProps) {
  const allOptions: (ProductCategory | "All")[] = ["All", ...categories];

  return (
    <div className="flex flex-col gap-4">
      {/* ── Top row: search + result count ── */}
      <div className="flex items-center gap-3">
        {/* Search input */}
        {/* <div className="relative flex-1 ">
          <span
            className="absolute left-3 top-1/2 -translate-y-1/2"
            style={{ color: "var(--text-dark-50)", fontSize: 15 }}
          >
            🔍
          </span>
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-xl outline-none transition-all"
            style={{
              background: "var(--section-accent)",
              border: "1px solid var(--light-border)",
              fontFamily: "var(--font-eudoxus), sans-serif",
              fontSize: 14,
              color: "var(--text-dark)",
            }}
          />
        </div> */}

        {/* Result count */}
        {/* <div className="hidden sm:block">
          <TextBuilder fontSize="13px" color="dark">
            {totalCount} product{totalCount !== 1 ? "s" : ""}
          </TextBuilder>
        </div> */}
      </div>

      {/* ── Category filter pills (horizontal scroll on mobile) ── */}
      <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
        {allOptions.map((cat) => {
          const active = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className="shrink-0 px-4 py-2 rounded-full transition-all duration-200 active:scale-95"
              style={{
                background: active ? "var(--color-primary)" : "var(--section-accent)",
                border: active
                  ? "1px solid var(--color-primary)"
                  : "1px solid var(--light-border)",
                color: active ? "#fff" : "var(--text-dark)",
              }}
            >
              <span className="hidden lg:block">
                <TextBuilder
                  fontSize="13px"
                  weight={active ? "semibold" : "medium"}
                  color={active ? "light" : "dark"}
                >
                  {cat}
                </TextBuilder>
              </span>
              <span className="block lg:hidden">
                <TextBuilderMobile
                  fontSize="12px"
                  weight={active ? "semibold" : "medium"}
                  color={active ? "light" : "dark"}
                >
                  {cat}
                </TextBuilderMobile>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}