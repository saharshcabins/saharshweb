import { ReactNode } from "react";
import NavBar from "./NavBar";
import CabinSection from "./CabinSection";
import CabinCarousel from "../ui/CabinCarousel";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col py-10">
      <div className="w-[90%] mx-auto">
        <NavBar />
        <CabinSection />
      </div>

      <CabinCarousel />
    </div>
  );
}
