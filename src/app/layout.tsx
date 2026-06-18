import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import NavBar from "@/components/layout/NavBar";
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
  metadataBase: new URL("https://www.saharsh.co"), // ← your actual domain

  title: {
    default: "Saharsh Cabins — Luxury Prefab Cabins & Villas",
    template: "%s | Saharsh Cabins",
  },
  description:
    "Saharsh Cabins designs and builds premium prefab luxury cabins, villas, resorts, and portable cafes across India. Explore modern architectural craftsmanship.",

  keywords: [
    "luxury cabins India",
    "prefab cabins",
    "luxury villas",
    "portable cafe",
    "resort design",
    "modular cabin",
    "Saharsh Cabins",
    "cabin manufacturer India",
  ],

  authors: [{ name: "Saharsh Cabins", url: "https://www.saharsh.co" }],
  creator: "Saharsh Cabins",
  publisher: "Saharsh Cabins",

  icons: {
    icon: "/assets/logo/logo_icon.svg",
    shortcut: "/assets/logo/logo_icon.svg",
    apple: "/assets/logo/logo_icon.svg",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.saharsh.co",
    siteName: "Saharsh Cabins",
    title: "Saharsh Cabins — Luxury Prefab Cabins & Villas",
    description:
      "Premium prefab luxury cabins, villas, resorts, and portable cafes designed and built across India.",
    images: [
      {
        url: "https://www.saharsh.co/assets/cabin/logo_icon.webp",
        width: 512,
        height: 512,
        alt: "Saharsh Cabins — Luxury Prefab Design",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@saharshcabins", // ← your Twitter handle if you have one
    title: "Saharsh Cabins — Luxury Prefab Cabins & Villas",
    description:
      "Premium prefab luxury cabins, villas, resorts, and portable cafes designed and built across India.",
    images: ["https://www.saharsh.co/assets/cabin/logo_icon.webp"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },

  alternates: {
    canonical: "https://www.saharsh.co",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={eudoxus.variable}>
      <body>
        <div className="">
          <NavBar />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
