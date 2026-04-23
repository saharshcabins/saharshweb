"use client";

import ProductCard from "@/components/Product/ProductCard";
import ProductFilterBar from "@/components/Product/ProductFilterBar";
import {
  productCategories,
  ProductCategory,
  productList,
} from "@/data/Productlistdata";
import React, { useMemo, useState } from "react";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | "All">(
    "All",
  );
  const [searchQuery, setSearchQuery] = useState("");

  // 🔍 Filter logic
  const filteredProducts = useMemo(() => {
    return productList.filter((item) => {
      const matchesCategory =
        activeCategory === "All" || item.category === activeCategory;

      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tagline.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="w-full md:w-[90%] mx-auto px-4   py-10 flex flex-col gap-8 mt-30">
      {/* 🔹 Filter Bar */}
      {/* <ProductFilterBar
        categories={productCategories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        totalCount={filteredProducts.length}
      /> */}

      {/* 🔹 Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {" "}
        {filteredProducts.map((item, index) => (
          <ProductCard
            key={item.slug}
            item={item}
            variant={index === 0 ? "large" : "normal"} // first card featured
          />
        ))}
      </div>

      {/* 🔹 Empty state */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-20">
          <p className="text-[14px] text-gray-500">
            No products found. Try a different search or category.
          </p>
        </div>
      )}
    </div>
  );
}
