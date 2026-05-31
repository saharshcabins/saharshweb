"use client";

export const dynamic = "force-dynamic";

import { notFound, useRouter } from "next/navigation";
import { useSearchParams, useParams } from "next/navigation";
import { useState } from "react";

import { products } from "@/data/productData";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function GalleryPage() {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();

  const slug = params?.slug as string;
  const index = parseInt(searchParams?.get("index") || "0", 10);

  const product = products.find((p) => p.slug === slug);
  if (!product) return notFound();

  const images = [product.mainImage, ...product.images].filter(Boolean);
  const startIndex = Math.min(Math.max(index, 0), images.length - 1);

  const [activeIndex, setActiveIndex] = useState(startIndex);
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <div
      className="fixed inset-0 z-[200] flex flex-col"
      style={{ background: "rgba(0,0,0,0.97)" }}
    >

      {/* ── Top bar ── */}
      <div className="flex items-center justify-between px-5 lg:px-8 py-4 shrink-0">
        <span className="text-white text-sm">
          {activeIndex + 1} / {images.length}
        </span>

        <button
          onClick={() => router.push(`/ourprojects/${slug}`)}
          className="flex items-center justify-center w-10 h-10 rounded-full"
          style={{
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          <X className="text-white" size={20} />
        </button>
      </div>

      {/* ── Main Swiper ── */}
      <div className="flex-1 flex items-center justify-center relative px-4 min-h-0">
        
        {/* Prev */}
        <button
          className="prev-btn absolute left-3 lg:left-8 z-10 w-11 h-11 rounded-full flex items-center justify-center"
          style={{
            background: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          <ChevronLeft className="text-white" size={20} />
        </button>

        {/* Swiper */}
        <div
          className="w-full max-w-5xl rounded-2xl overflow-hidden"
          style={{ height: "calc(100vh - 220px)" }}
        >
          <Swiper
            modules={[Navigation, Thumbs, Keyboard]}
            initialSlide={startIndex}
            loop={true}
            keyboard={{ enabled: true }}
            navigation={{
              nextEl: ".next-btn",
              prevEl: ".prev-btn",
            }}
            thumbs={{ swiper: thumbsSwiper }}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.realIndex);
            }}
            className="w-full h-full"
          >
            {images.map((src, i) => (
              <SwiperSlide key={`${src}-${i}`}>
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src={src}
                    draggable={false}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Next */}
        <button
          className="next-btn absolute right-3 lg:right-8 z-10 w-11 h-11 rounded-full flex items-center justify-center"
          style={{
            background: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          <ChevronRight className="text-white" size={20} />
        </button>
      </div>

      {/* ── Thumbnails ── */}
      <div className="shrink-0 px-5 py-4 overflow-x-auto no-scrollbar">
        <Swiper
          modules={[Thumbs]}
          onSwiper={setThumbsSwiper}
          slidesPerView="auto"
          spaceBetween={8}
          className="!overflow-visible [&_.swiper-wrapper]:!justify-center"
        >
          {images.map((img, i) => (
            <SwiperSlide
              key={i}
              style={{ width: 68, height: 48 }}
            >
              <div
                className="w-full h-full rounded-xl overflow-hidden"
                style={{
                  border:
                    i === activeIndex
                      ? "2px solid var(--color-primary)"
                      : "2px solid transparent",
                  opacity: i === activeIndex ? 1 : 0.45,
                }}
              >
                <img
                  src={img}
                  draggable={false}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}