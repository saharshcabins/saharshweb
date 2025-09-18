import React, { ReactNode } from 'react'
import NavBarMobile from './NavbarMobile'
import CabinSectionMobile from './CabinSectionMobile'
import CabinCarouselMobile from '../ui/CabinCarouselMobile'
import CabinSlideShowMobile from '../ui/CabinSlideShowMobile'
import TestimonialSectionMobile from './TestimonialSectionMobile'
import FooterMobile from './FooterMobile'
import OurProcessMobile from './OurProcessMobile'
import GetInTouch from './GetInTouch'

export default function MainLayoutSmall({ children }: { children: ReactNode }) {
  return (
    <div className='flex flex-col items-center w-full min-h-screen bg-[var(--color-background)]'>
      <div className='w-full p-4'>
        <NavBarMobile />
      </div>
      
      {/* Main Content Container with consistent padding */}
      <div className='flex flex-col items-center gap-20 w-full  mx-auto '>
        <CabinSectionMobile />
        <CabinCarouselMobile />
        <CabinSlideShowMobile />
        <TestimonialSectionMobile />
        <OurProcessMobile />
        <GetInTouch />
        <FooterMobile />
      </div>
    </div>
  )
}