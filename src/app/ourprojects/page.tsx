// src/app/products/page.tsx
// ✅ SERVER COMPONENT — no "use client" here.
// All product data is resolved at build time (or per-request for ISR).
// Only the filter interaction is shipped as client JS.

import React from "react";
import type { Metadata } from "next";
import { products, productCategories } from "@/data/productData";
import ProductsClient from "@/components/Product/ProductsClient";

export const metadata: Metadata = {
  title: "Projects | Saharsh Cabins",
  description:
    "Browse our full range of luxury prefab cabins, villas, resorts, offices, and portable cafés. Designed in India, delivered anywhere.",
};

// ✅ Tell Next.js to statically generate this page at build time.
// Remove this line if you want server-side rendering on every request instead.
export const dynamic = "force-static";

export default function ProductsPage() {
  // Data is resolved here on the server — zero client-side fetch.
  return (
    <ProductsClient
      products={products}
      categories={productCategories}
    />
  );
}