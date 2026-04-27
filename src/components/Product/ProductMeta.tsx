"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import TextBuilder from "@/components/shared/TextBuilder";
import TextBuilderMobile from "@/components/shared/TextBuilderMobile";
import type { Product } from "@/data/productData";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

// ─── Breadcrumb ───────────────────────────────────────────────────────────────

export function BackButton() {
  const router = useRouter();
  const [canGoBackToProducts, setCanGoBackToProducts] = useState(false);

  useEffect(() => {
    if (typeof document !== "undefined") {
      const referrer = document.referrer;

      if (referrer.includes("/products")) {
        setCanGoBackToProducts(true);
      }
    }
  }, []);

  const handleBack = () => {
    if (canGoBackToProducts) {
      router.back();
    } else {
      router.push("/products");
    }
  };

  return (
    <div
      onClick={handleBack}
      className="flex items-center gap-2 mb-5 cursor-pointer w-fit hover:opacity-70 transition"
    >
      <ArrowLeft size={18} />

      <span className="hidden lg:block">
        <TextBuilder fontSize="13px" color="dark">
          Back
        </TextBuilder>
      </span>

      <span className="block lg:hidden">
        <TextBuilderMobile fontSize="12px" color="dark">
          Back
        </TextBuilderMobile>
      </span>
    </div>
  );
}
export function Breadcrumb({ name }: { name: string }) {
  return (
    <nav className="flex items-center gap-2 mb-5">
      {/* Desktop */}
      <div className="hidden lg:flex items-center gap-2">
        {/* <Link href="/" className="hover:underline">
          <TextBuilder fontSize="13px" color="dark">Home</TextBuilder>
        </Link> */}
        <TextBuilder fontSize="13px" color="dark">›</TextBuilder>
        {/* <Link href="/products" className="hover:underline">
          <TextBuilder fontSize="13px" color="dark">Products</TextBuilder>
        </Link>
        <TextBuilder fontSize="13px" color="dark">›</TextBuilder> */}
        <TextBuilder fontSize="13px" color="dark">{name}</TextBuilder>
      </div>

      {/* Mobile */}
      <div className="flex lg:hidden items-center gap-2">
        <Link href="/" className="hover:underline">
          <TextBuilderMobile fontSize="12px" color="dark">Home</TextBuilderMobile>
        </Link>
        <TextBuilderMobile fontSize="12px" color="dark">›</TextBuilderMobile>
        <Link href="/products" className="hover:underline">
          <TextBuilderMobile fontSize="12px" color="dark">Products</TextBuilderMobile>
        </Link>
        <TextBuilderMobile fontSize="12px" color="dark">›</TextBuilderMobile>
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
        <TextBuilder fontSize="15px" color="dark">{product.location}</TextBuilder>
      </div>
      <div className="block lg:hidden">
        <TextBuilderMobile fontSize="13px" color="dark">{product.location}</TextBuilderMobile>
      </div>
    </div>
  );
}

// ─── Meta bar (guests · bedrooms · beds · bathrooms) ─────────────────────────

// ─── Feature pill tags ────────────────────────────────────────────────────────

export function FeatureTags({ features }: { features: string[] }) {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
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
export function MetaBar({ product }: { product: Product }) {
  return (
    <div className="flex flex-wrap items-center gap-1">
      {product.metaBar.map((item, i) => (
        <span key={i} className="flex items-center gap-1">
          {i > 0 && <span style={{ color: "#ccc", margin: "0 2px" }}>·</span>}
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
