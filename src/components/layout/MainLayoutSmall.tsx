import React, { ReactNode } from "react";
import CabinSectionMobile from "./CabinSectionMobile";
import CabinCarouselMobile from "../ui/CabinCarouselMobile";
import CabinSlideShowMobile from "../ui/CabinSlideShowMobile";
import OurProcessNew from "./OurProcessNew";
import GetInTouch from "./GetInTouch";
import ResponsiveHeroSection from "./MobileHeroSection";
import SaharshAdvantage from "./SaharshAdvantage";
import FAQSection from "./FAQSection";
import OurWorkSpeaks from "./OurWorkSpeaks";
import StatsRibbon, { StatItem } from "@/components/shared/StatsRibbon";

const homePageStats: StatItem[] = [
  { value: "15+", label: "Years of Excellence" },
  { value: "1,000+", label: "Projects Delivered" },
  { value: "120-Day", label: "Delivery Standard" },
  { value: "Global", label: "Reach & Partnerships" },
];

export default function MainLayoutSmall({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-[var(--color-background)]">
      {/* Main Content Container with consistent padding */}
      <div className="flex flex-col items-center w-full mx-auto ">
        <ResponsiveHeroSection />
        <OurWorkSpeaks />
        <CabinSectionMobile /> <CabinSlideShowMobile /> <SaharshAdvantage />
        <CabinCarouselMobile />
        <OurProcessNew />
        <GetInTouch />
        <StatsRibbon stats={homePageStats} topBorder={true} />
        <FAQSection />
      </div>
    </div>
  );
}
