'use client';

import React, { useEffect, useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import FadeIn from '@/components/shared/FadeIn';
import MainLayoutSmall from '@/components/layout/MainLayoutSmall';

export default function Page() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    // Function to check screen size
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // 1024px is the 'lg' breakpoint in Tailwind
    };

    // Initial check
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []); // Empty dependency array ensures this effect runs only once

  const LayoutComponent = isLargeScreen ? MainLayout : MainLayoutSmall;

  return (
    <LayoutComponent>
      <FadeIn>
        <h1 className='text-2xl font-bold mb-4'>🚀 Hello Next.js + Tailwind + Framer Motion</h1>
      </FadeIn>
    </LayoutComponent>
  );
}