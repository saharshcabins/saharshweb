import CabinSection from "@/components/Product/CabinSection";
import ProductGrid from "@/components/Product/ProductGrid";
import ProductHeroSection from "@/components/Product/ProductHeroSection";
import { ViewProduct } from "@/components/Product/ViewProduct";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <ProductHeroSection />
      <CabinSection />
      <div
        className="w-full h-[688px] bg-cover bg-center "
        style={{
          backgroundImage: "url('/assets/product/display_product.png')",
        }}
      ></div>
      <ProductGrid />

      <div
        className="w-full h-[688px] bg-cover bg-center "
        style={{
          backgroundImage: "url('/assets/product/display_product_2.png')",
        }}
      ></div>
      <ViewProduct />
    </div>
  );
};

export default page;
