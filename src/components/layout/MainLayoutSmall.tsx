import React, { ReactNode } from 'react'
import NavBarMobile from './NavbarMobile'
import CabinSectionMobile from './CabinSectionMobile'
import CabinCarouselMobile from '../ui/CabinCarouselMobile'
import CabinSlideShowMobile from '../ui/CabinSlideShowMobile'
import TestimonialSectionMobile from './TestimonialSectionMobile'

export default function MainLayoutSmall({ children }: { children: ReactNode }) {
  return (
    <div className='flex flex-col items-center w-full min-h-screen bg-[var(--color-background)]'>
      <div className='w-full p-4'>
        <NavBarMobile />
      </div>
      
      {/* Main Content Container with consistent padding */}
      <div className='flex flex-col items-center gap-10 w-full max-w-screen-sm mx-auto '>
        <CabinSectionMobile />
        <CabinCarouselMobile />
        <CabinSlideShowMobile />
        <TestimonialSectionMobile />
      </div>
    </div>
  )
}