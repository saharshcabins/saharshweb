'use client';

import React, { useEffect } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import FadeIn from '@/components/shared/FadeIn';
import MainLayoutSmall from '@/components/layout/MainLayoutSmall';
import Lenis from 'lenis';

export default function Page() {
    useEffect(() => {
      const lenis = new Lenis({
        duration: 1.2,
      });
  
      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
  
      const id = requestAnimationFrame(raf);
  
      return () => {
        lenis.destroy();
        cancelAnimationFrame(id);
      };
    }, []);
  return (
    <>
      {/* Large screen layout */}
      <div className="hidden lg:block">
        <MainLayout>
          <FadeIn>
            <h1 className="text-2xl font-bold mb-4">
              🚀 Hello Next.js + Tailwind + Framer Motion
            </h1>
          </FadeIn>
        </MainLayout>
      </div>

      {/* Small screen layout */}
      <div className="block lg:hidden">
        <MainLayoutSmall>
          <FadeIn>
            <h1 className="text-2xl font-bold mb-4">
              🚀 Hello Next.js + Tailwind + Framer Motion
            </h1>
          </FadeIn>
        </MainLayoutSmall>
      </div>
    </>
  );
}
