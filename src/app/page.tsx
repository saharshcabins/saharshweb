'use client';
import MainLayout from '@/components/layout/MainLayout';
import FadeIn from '@/components/shared/FadeIn';

export default function Page() {
  return (
    <MainLayout>
      <FadeIn>
        <h1 className='text-2xl font-bold mb-4'>🚀 Hello Next.js + Tailwind + Framer Motion</h1>
      </FadeIn>
    </MainLayout>
  );
}
