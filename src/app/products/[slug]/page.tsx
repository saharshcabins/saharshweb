// src/app/product/[slug]/page.tsx
import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { products } from "@/data/productData";
import ProductDetailClient from "@/components/Product/Productdetailclient";

// ── Dynamic metadata per product ─────────────────────────────────────────────

export async function generateMetadata(props: any): Promise<Metadata> {
  const { slug } = await props.params;
  const product = products.find((p) => p.slug === slug);

  if (!product) return { title: "Product Not Found" };

  return {
    title: `${product.name} | Saharsh Cabins`,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} — Saharsh Cabins`,
      description: product.shortDescription,
      images: product.mainImage ? [{ url: product.mainImage }] : [],
    },
  };
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default async function ProductPage(props: any) {
  const { slug } = await props.params;
  const product = products.find((p) => p.slug === slug);

  if (!product) return notFound();

  return <ProductDetailClient product={product} />;
}

// ── Static generation for all product slugs ───────────────────────────────────

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}