import React, { ReactNode } from "react";
import NavBarMobile from "./NavbarMobile";
import CabinSectionMobile from "./CabinSectionMobile";
import CabinCarouselMobile from "../ui/CabinCarouselMobile";
import CabinSlideShowMobile from "../ui/CabinSlideShowMobile";
import TestimonialSectionMobile from "./TestimonialSectionMobile";
import FooterMobile from "./FooterMobile";
import OurProcessMobile from "./OurProcessMobile";
import GetInTouch from "./GetInTouch";
import ResponsiveHeroSection from "./MobileHeroSection";
import MilestoneMobile from "./MilestoneMobile";
import Footer from "./Footer";
import SaharshAdvantage from "./SaharshAdvantage";
import FAQSection from "./FAQSection";

export default function MainLayoutSmall({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-[var(--color-background)]">
      {/* Main Content Container with consistent padding */}
      <div className="flex flex-col items-center gap-20 w-full  mx-auto ">
        <ResponsiveHeroSection />
        <CabinSectionMobile /> <CabinSlideShowMobile /> <SaharshAdvantage />
        <CabinCarouselMobile />
        {/* <TestimonialSectionMobile /> */}
        <OurProcessMobile />
        {/* <MilestoneMobile /> */}
        <FAQSection />
        <GetInTouch />
      </div>
    </div>
  );
}
