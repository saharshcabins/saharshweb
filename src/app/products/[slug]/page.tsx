// src/app/product/[slug]/page.tsx
import React from "react";
import { notFound } from "next/navigation";
import { products } from "@/data/productData";
import ProductPageClient from "./ProductPageClient";
import type { Metadata } from "next";

// ─── Dynamic metadata per product ────────────────────────────────────────────

export async function generateMetadata(props: any): Promise<Metadata> {
  const { slug } = await props.params;
  const product = products.find((p) => p.slug === slug);

  if (!product) return { title: "Product Not Found" };

  return {
    title: `${product.name} | Saharsh Cabins`,
    description: product.description,
    openGraph: {
      title: `${product.name} — Saharsh Cabins`,
      description: product.description,
      images: product.images[0] ? [{ url: product.images[0] }] : [],
    },
  };
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default async function ProductPage(props: any) {
  const { slug } = await props.params;
  const product = products.find((p) => p.slug === slug);

  if (!product) return notFound();

  return <div className="mt-30"><ProductPageClient product={product} /></div> ;
}

// ─── Static generation for all product slugs ─────────────────────────────────

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}