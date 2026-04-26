// src/app/products/page.tsx
import React from "react";
import type { Metadata } from "next";
import ProductsClient from "@/components/Product/ProductsClient";

export const metadata: Metadata = {
  title: "Products | Saharsh Cabins",
  description:
    "Browse our full range of luxury prefab cabins, villas, resorts, offices, and portable cafés. Designed in India, delivered anywhere.",
};

export default function ProductsPage() {
  return <ProductsClient />;
}