"use client";

import React from "react";
import TextBuilder from "@/components/shared/TextBuilder";
import TextBuilderMobile from "@/components/shared/TextBuilderMobile";
import type { ProductCategory } from "@/data/productData";

interface FilterBarProps {
  categories: ProductCategory[];
  active: ProductCategory | "All";
  onChange: (cat: ProductCategory | "All") => void;
  count: number;
}

export default function FilterBar({
  categories,
  active,
  onChange,
  count,
}: FilterBarProps) {
  const options: (ProductCategory | "All")[] = ["All", ...categories];

  return (
    <div className="flex flex-col gap-4">
      {/* Scrollable pill row */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
        {options.map((cat) => {
          const isActive = active === cat;
          return (
            <button
              key={cat}
              onClick={() => onChange(cat)}
              className="shrink-0 px-4 py-2 rounded-full transition-all duration-200 active:scale-95"
              style={{
                background: isActive
                  ? "var(--color-primary)"
                  : "var(--section-accent)",
                border: isActive
                  ? "1px solid var(--color-primary)"
                  : "1px solid var(--light-border)",
              }}
            >
              {/* Desktop */}
              <span className="hidden lg:block">
                <TextBuilder
                  fontSize="13px"
                  weight={isActive ? "semibold" : "medium"}
                  color={isActive ? "light" : "dark"}
                >
                  {cat}
                </TextBuilder>
              </span>
              {/* Mobile */}
              <span className="block lg:hidden">
                <TextBuilderMobile
                  fontSize="12px"
                  weight={isActive ? "semibold" : "medium"}
                  color={isActive ? "light" : "dark"}
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