import React from "react";
import { notFound } from "next/navigation";
import { products } from "@/data/productData";
import ProductPageClient from "./ProductPageClient";

type ProductPageProps = {
  params: {
    slug: string;
  };
};

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    return notFound();
  }

  // Pass product data to the client-side component
  return <ProductPageClient product={product} />;
}

// ✅ Static generation
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}
