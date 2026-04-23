"use client";

import React from "react";
import Link from "next/link";
import TextBuilder from "@/components/shared/TextBuilder";
import TextBuilderMobile from "@/components/shared/TextBuilderMobile";
import type { Product } from "@/data/productData";

// ─── Breadcrumb ───────────────────────────────────────────────────────────────

export function Breadcrumb({ name }: { name: string }) {
  return (
    <nav className="flex items-center gap-2 mb-5">
      {/* Desktop */}
      <div className="hidden lg:flex items-center gap-2">
        <Link href="/" className="hover:underline">
          <TextBuilder fontSize="13px" color="dark-50">Home</TextBuilder>
        </Link>
        <TextBuilder fontSize="13px" color="dark-50">›</TextBuilder>
        <Link href="/products" className="hover:underline">
          <TextBuilder fontSize="13px" color="dark-50">Products</TextBuilder>
        </Link>
        <TextBuilder fontSize="13px" color="dark-50">›</TextBuilder>
        <TextBuilder fontSize="13px" color="dark">{name}</TextBuilder>
      </div>

      {/* Mobile */}
      <div className="flex lg:hidden items-center gap-2">
        <Link href="/" className="hover:underline">
          <TextBuilderMobile fontSize="12px" color="dark-50">Home</TextBuilderMobile>
        </Link>
        <TextBuilderMobile fontSize="12px" color="dark-50">›</TextBuilderMobile>
        <Link href="/products" className="hover:underline">
          <TextBuilderMobile fontSize="12px" color="dark-50">Products</TextBuilderMobile>
        </Link>
        <TextBuilderMobile fontSize="12px" color="dark-50">›</TextBuilderMobile>
        <TextBuilderMobile fontSize="12px" color="dark">{name}</TextBuilderMobile>
      </div>
    </nav>
  );
}

// ─── Title block ──────────────────────────────────────────────────────────────

export function ProductTitle({ product }: { product: Product }) {
  return (
    <div className="mb-5">
      {/* Desktop */}
      <div className="hidden lg:block mb-1">
        <TextBuilder fontSize="40px" weight="bold" color="dark" className="leading-tight">
          {product.name}
        </TextBuilder>
      </div>
      {/* Mobile */}
      <div className="block lg:hidden mb-1">
        <TextBuilderMobile fontSize="26px" weight="bold" color="dark" className="leading-tight">
          {product.name}
        </TextBuilderMobile>
      </div>

      {/* Tagline */}
      <div className="hidden lg:block">
        <TextBuilder fontSize="15px" color="dark-50">{product.tagline}</TextBuilder>
      </div>
      <div className="block lg:hidden">
        <TextBuilderMobile fontSize="13px" color="dark-50">{product.tagline}</TextBuilderMobile>
      </div>
    </div>
  );
}

// ─── Meta bar (guests · bedrooms · beds · bathrooms) ─────────────────────────

export function MetaBar({ product }: { product: Product }) {
  const items = [
    product.guests > 0 && `${product.guests} guests`,
    product.bedrooms > 0 && `${product.bedrooms} bedroom${product.bedrooms !== 1 ? "s" : ""}`,
    product.beds > 0 && `${product.beds} bed${product.beds !== 1 ? "s" : ""}`,
    product.bathrooms > 0 && `${product.bathrooms} bathroom${product.bathrooms !== 1 ? "s" : ""}`,
  ].filter(Boolean) as string[];

  return (
    <div className="flex flex-wrap items-center gap-1">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1">
          {i > 0 && (
            <span style={{ color: "#ccc", margin: "0 2px" }}>·</span>
          )}
          <span className="hidden lg:block">
            <TextBuilder fontSize="15px" color="dark">{item}</TextBuilder>
          </span>
          <span className="block lg:hidden">
            <TextBuilderMobile fontSize="13px" color="dark">{item}</TextBuilderMobile>
          </span>
        </span>
      ))}
    </div>
  );
}

// ─── Feature pill tags ────────────────────────────────────────────────────────

export function FeatureTags({ features }: { features: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {features.map((f) => (
        <span
          key={f}
          className="px-3 py-1 rounded-full"
          style={{
            background: "var(--section-accent)",
            border: "1px solid rgba(201,122,65,0.2)",
          }}
        >
          <span className="hidden lg:block">
            <TextBuilder fontSize="12px" color="dark" weight="medium">{f}</TextBuilder>
          </span>
          <span className="block lg:hidden">
            <TextBuilderMobile fontSize="11px" color="dark" weight="medium">{f}</TextBuilderMobile>
          </span>
        </span>
      ))}
    </div>
  );
}

// ─── Section heading ──────────────────────────────────────────────────────────

export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5">
      <span className="hidden lg:block">
        <TextBuilder fontSize="20px" weight="bold" color="dark">{children}</TextBuilder>
      </span>
      <span className="block lg:hidden">
        <TextBuilderMobile fontSize="17px" weight="bold" color="dark">{children}</TextBuilderMobile>
      </span>
    </div>
  );
}

// ─── Divider ─────────────────────────────────────────────────────────────────

export function Divider() {
  return <hr style={{ borderColor: "var(--light-border)", margin: "32px 0" }} />;
}
