import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import NavBar from "@/components/layout/NavBar";
import LenisProvider from "@/components/layout/LenisProvider";

// Load Eudoxus Sans from /public/font/
const eudoxus = localFont({
  src: [
    {
      path: "./font/EudoxusSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./font/EudoxusSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./font/EudoxusSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-eudoxus",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Saharsh",
  description: "Saharsh — Modern Cabin & Architecture Design Studio",
  icons: {
    icon: "/assets/logo/logo_icon.svg",        // browser tab icon (favicon)
    shortcut: "/assets/logo/logo_icon.svg",    // optional: ensures Safari & others use it
    apple: "/assets/logo/logo_icon.svg",       // for Apple touch icons
  },
  openGraph: {
    title: "Saharsh",
    description: "Discover Saharsh — premium modern cabin design and architecture solutions.",
    images: ["/assets/logo/logo_icon.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saharsh",
    description: "Premium cabin design and architectural craftsmanship.",
    images: ["/assets/logo/logo_icon.svg"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
   <html lang="en" className={eudoxus.variable}>
      <body>
        <LenisProvider />   {/* ← add this */}
        <div className="">
          <NavBar />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}