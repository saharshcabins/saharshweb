import { ReactNode } from "react";
import dynamic from "next/dynamic";

import NavBar from "./NavBar";
import HeroSection from "./HeroSection";
import TestimonialSection from "./TestimonialSection";
import OurProcess from "./OurProcess";
import Milestone from "./Milestone";
import GetInTouch from "./GetInTouch";
import Footer from "./Footer";
import CabinSection from "./CabinSection";
import ScrollHorizontal from "./ScrollHorizontal";

// Dynamically import components that should only run on the client
const CabinCarousel = dynamic(() => import("../ui/CabinCarousel"), { ssr: false });
const CabinSlideShow = dynamic(() => import("../ui/CabinSlideShow"), { ssr: false });

// Use a different name to avoid conflict with `dynamic` import
export const dynamicRendering = "force-dynamic"; 

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col py-10 pt-42 pb-0 gap-10">
     

      <HeroSection />

      <div className="flex flex-col gap-20">
        <div className="w-[90%] mx-auto pt-30">
          <CabinSection />
        </div>
<ScrollHorizontal />
        {/* Client-side only components */}
        <CabinCarousel />
        <CabinSlideShow />
        <TestimonialSection />
        <OurProcess />
        <Milestone />
        <GetInTouch />
      </div>
    </div>
  );
}
