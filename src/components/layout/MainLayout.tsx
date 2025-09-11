import { ReactNode } from 'react';

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className='min-h-screen flex flex-col'>
      <header className='p-4 bg-gray-900 text-white'>My App</header>
      <main className='flex-1 p-6'>{children}</main>
      <footer className='p-4 bg-gray-100 text-center text-sm'>© 2025 My App</footer>
    </div>
  );
}
