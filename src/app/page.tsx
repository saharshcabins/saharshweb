'use client';

import MainLayout from '@/components/layout/MainLayout';
import FadeIn from '@/components/shared/FadeIn';
import MainLayoutSmall from '@/components/layout/MainLayoutSmall';

export default function Page() {

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
