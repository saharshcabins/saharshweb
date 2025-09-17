import { ReactNode } from "react";
import NavBar from "./NavBar";
import CabinSection from "./CabinSection";
import CabinCarousel from "../ui/CabinCarousel";
import CabinSlideShow from "../ui/CabinSlideShow";
import HeroSection from "./HeroSection";
import TestimonialSection from "./TestimonialSection";
import OurProcess from "./OurProcess";
import Milestone from "./Milestone";
import Footer from "./Footer";
import GetInTouch from "./GetInTouch";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
  <div className="min-h-screen flex flex-col py-10 pb-0 gap-10 ">
      <div className="w-[90%] mx-auto">
        <NavBar />
      </div>
      <HeroSection />
      <div className="flex flex-col gap-20">
        <div className="w-[90%] mx-auto pt-30">
          <CabinSection />
        </div>

        <CabinCarousel />
        <CabinSlideShow />

        <TestimonialSection />
        <OurProcess />
        <Milestone />
        <GetInTouch />
        <Footer />

      </div>
    </div>
  );
}
