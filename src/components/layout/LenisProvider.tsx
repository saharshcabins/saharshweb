"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function LenisProvider() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2 });
    (window as any).lenis = lenis;

    let rafId: number;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);  // ✅ always overwrite rafId
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);  // ✅ now cancels the latest frame, not just the first
      lenis.destroy();
      (window as any).lenis = null;
    };
  }, []);

  return null;
}