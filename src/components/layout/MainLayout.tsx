import { ReactNode } from "react";
import dynamic from "next/dynamic";
import NewHeroSection from "./NewHeroSection";
import SaharshAdvantage from "./SaharshAdvantage";
import FAQSection from "./FAQSection";
import OurWorkSpeaks from "./OurWorkSpeaks";
import StatsRibbon, { StatItem } from "@/components/shared/StatsRibbon";

const CabinSection = dynamic(() => import("./CabinSection"), { ssr: false });
const CabinCarousel = dynamic(() => import("../ui/CabinCarousel"), { ssr: false });
const CabinSlideShow = dynamic(() => import("../ui/CabinSlideShow"), { ssr: false });
const GetInTouch = dynamic(() => import("./GetInTouch"), { ssr: false });
const QuoteSection = dynamic(() => import("./QuoteSection"), { ssr: false });
const OurProcessNew = dynamic(() => import("./OurProcessNew"), { ssr: false });

export const dynamicRendering = "force-dynamic";

const homePageStats: StatItem[] = [
  { value: "15+", label: "Years of Excellence" },
  { value: "1,000+", label: "Projects Delivered" },
  { value: "120-Day", label: "Delivery Standard" },
  { value: "Global", label: "Reach & Partnerships" },
];

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <NewHeroSection />
      <OurWorkSpeaks />
      <div className="flex flex-col">
        <div className="py-16">
          <CabinSection />
        </div>
        <CabinSlideShow />
        <SaharshAdvantage />
        <QuoteSection />
        <CabinCarousel />
        <OurProcessNew />
        <GetInTouch />
        <StatsRibbon stats={homePageStats} topBorder={true} />
        <FAQSection />
      </div>
    </div>
  );
}
