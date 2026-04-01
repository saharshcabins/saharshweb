import React from "react";
import { notFound } from "next/navigation";
import { products } from "@/data/productData";
import ProductPageClient from "./ProductPageClient";

type ProductPageProps = {
  params: {
    slug: string;
  };
};

export default async function ProductPage(props: any) {

  const resolvedParams = await props.params; 
  const slug = resolvedParams.slug;


  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return notFound();
  }

  return <ProductPageClient product={product} />;
}

// ✅ Static generation
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}
