import { ReactNode } from "react";
import dynamic from "next/dynamic";
import NewHeroSection from "./NewHeroSection";
import SaharshAdvantage from "./SaharshAdvantage";
import FAQSection from "./FAQSection";

const CabinSection = dynamic(() => import("./CabinSection"), { ssr: false });
const CabinCarousel = dynamic(() => import("../ui/CabinCarousel"), {
  ssr: false,
});
const CabinSlideShow = dynamic(() => import("../ui/CabinSlideShow"), {
  ssr: false,
});
const TestimonialSection = dynamic(() => import("./TestimonialSection"), {
  ssr: false,
});
const NewMilestones = dynamic(() => import("./NewMilestone"), { ssr: false });
const GetInTouch = dynamic(() => import("./GetInTouch"), { ssr: false });

// ✅ Add spinner loaders for dynamic sections
const QuoteSection = dynamic(() => import("./QuoteSection"), {
  ssr: false,
});

const OurProcessNew = dynamic(() => import("./OurProcessNew"), {
  ssr: false,
});

export const dynamicRendering = "force-dynamic";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col gap-10">
      <NewHeroSection />

      <div className="flex flex-col gap-20">
        <div className="w-[90%] mx-auto py-20">
          <CabinSection />
        </div>

        <CabinSlideShow />

        {/* Dynamic sections with spinners */}
        <SaharshAdvantage />
        <QuoteSection />
        {/* <NewMilestones /> */}
        <CabinCarousel />
        {/* <TestimonialSection /> */}
        <OurProcessNew />
        <GetInTouch />        <FAQSection />

      </div>
    </div>
  );
}
