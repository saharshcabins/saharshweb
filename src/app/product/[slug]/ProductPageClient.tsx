"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";

import ProductHeroSection from "@/components/Product/ProductHeroSection";
import CabinSection from "@/components/Product/CabinSection";
import ProductGrid from "@/components/Product/ProductGrid";
import { ViewProduct } from "@/components/Product/ViewProduct";

type Product = {
  slug: string;
  hero: any;
  cabin: any;
  grid: any;
  viewProduct: any;
  images?: string[];
};

export default function ProductPageClient({ product }: { product: Product }) {
  // ✅ Smooth scroll
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2 });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const id = requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
      cancelAnimationFrame(id);
    };
  }, []);

  return (
    <div>
      <ProductHeroSection data={product.hero} />
      <CabinSection data={product.cabin} />

      {product.images?.map((img, i) => (
        <div
          key={i}
          className="w-full h-[688px] bg-cover bg-center"
          style={{
            backgroundImage: img ? `url(${img})` : "none",
            backgroundColor: img ? "transparent" : "#e5e5e5",
          }}
        ></div>
      ))}

      <ProductGrid data={product.grid} />
      <ViewProduct data={product.viewProduct} />
    </div>
  );
}
