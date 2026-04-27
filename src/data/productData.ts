// src/data/productData.ts
// ─────────────────────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH
// Used by:  /products  (listing page)  →  card shows listing fields
//           /product/[slug]  (detail page) →  full detail fields rendered
// ─────────────────────────────────────────────────────────────────────────────

// ── Shared sub-types ─────────────────────────────────────────────────────────

export type ProductCategory =
  | "Luxury Cottages"
  | "Luxury Villas"
  | "Marketing Offices"
  | "Forest Cabin"
  | "Portable Cafes & Kiosks";

export interface Product {
  // ── Routing ────────────────────────────────────────────────────────────────
  slug: string;

  // ── Listing card ───────────────────────────────────────────────────────────
  category: ProductCategory;
  featured?: boolean;
  /** Short tags shown as pills on the card image (max 3) */
  tags: string[];
  name: string;
  location: string;
  shortDescription: string;
  /** Main cover image shown on listing card */
  coverImage: string;
  metaBar: string[];

  areaLabel: string;
  buildTimeLabel: string;
  amenityLabel: string; // e.g. "Ensuite bathroom" / "Outdoor Jacuzzi"

  // ── Detail page ────────────────────────────────────────────────────────────
  /** Hero / main large image at top of detail page */
  mainImage: string;
  /** Additional gallery images shown below the main image */
  images: string[];

  /** Detail-page subtitle line e.g. "3BHK Pool Villa" */
  detailSubtitle: string;

  /** Guest capacity e.g. "2-3 Guests" */
  guests: string;

  bedrooms: number;
  bathrooms: number;

  /** Specs string shown as a block e.g. "Steel structure, 100% insulation..." */
  specifications: string[];

  /** Comma-separated highlights */
  highlights: string[];

  /** Offering details shown on the detail / CTA section */
  offerings: string[];

  /** CTA label on detail page */
  ctaLabel: string;
  ctaHref: string;
}

// ── Shared offerings (same across all products) ───────────────────────────────
const standardOfferings: string[] = [
  "PAN-India installation",
  "7-year structural warranty",
  "Site visit and design consultation available as a paid service",
];

// ── Product data ──────────────────────────────────────────────────────────────

export const products: Product[] = [
  {
    // ── Routing ──
    slug: "lakeside-cabin",

    // ── Listing ──
    category: "Luxury Cottages",
    featured: false,
    tags: ["Trailer Home", "Compact Luxury", "Off-grid"],
    name: "Lakeside Cabin",
    location: "Georgia, Atlanta, US",
    shortDescription:
      "An asymmetric luxury cabin designed for remote scenic locations. Shipped from India to Atlanta, US. Arrived 100% assembled with interiors.",
    coverImage: "/assets/products/lakeside-cabin/main.webp",
    areaLabel: "300 sq ft",
    buildTimeLabel: "6–8 weeks",
    metaBar: ["2–3 Guests", "1 Bedroom", "1 Bathroom"],

    amenityLabel: "Ensuite bathroom",

    // ── Detail ──
    mainImage: "/assets/products/lakeside-cabin/main.webp",
    images: [
      "/assets/products/lakeside-cabin/img-1.webp",
      "/assets/products/lakeside-cabin/img-2.webp",
      "/assets/products/lakeside-cabin/img-3.webp",
      "/assets/products/lakeside-cabin/img-4.webp",
    ],
    detailSubtitle: "Trailer Home · Compact Luxury · Off-grid",
    guests: "2–3 Guests",
    bedrooms: 1,
    bathrooms: 1,
    specifications: [
      "Steel structure",
      "100% insulation",
      "DGU glass",
      "Premium interiors",
    ],
    highlights: [
      "Customizable A-frame design",
      "Easy to relocate",
      "Weather resistant (−30°C to +55°C)",
    ],
    offerings: standardOfferings,
    ctaLabel: "Request a Quote",
    ctaHref: "/contact",
  },

  {
    // ── Routing ──
    slug: "qbinn-tusker",

    // ── Listing ──
    category: "Luxury Villas",
    featured: true,
    tags: ["Turnkey", "Airbnb", "Container Home"],
    name: "Qbinn Tusker",
    location: "Thalli, Bangalore",
    shortDescription:
      "A spacious 3 BHK villa built with 7 refurbished shipping containers. Featured in the top 25 A+D Reflections for its sustainable differentiated design.",
    coverImage: "/assets/products/qbinn-tusker/main.webp",
    areaLabel: "3000 sq ft",
    buildTimeLabel: "4–6 months",
    amenityLabel: "Outdoor Jacuzzi",

    // ── Detail ──
    mainImage: "/assets/products/qbinn-tusker/main.webp",
    metaBar: [
      "6–10 Guests",
      "3 Bedrooms",
      "4 Bathrooms",
      "Kitchen",
      "Swimming Pool with Deck",
    ],

    images: [
      "/assets/products/qbinn-tusker/img-1.webp",
      "/assets/products/qbinn-tusker/img-2.webp",
      "/assets/products/qbinn-tusker/img-3.webp",
      "/assets/products/qbinn-tusker/img-4.webp",
      "/assets/products/qbinn-tusker/img-5.webp",
      "/assets/products/qbinn-tusker/img-6.webp",
      "/assets/products/qbinn-tusker/img-7.webp",
    ],
    detailSubtitle:
      "6–10 Guests | 3 Bedrooms | 4 Bathrooms | Kitchen | Swimming Pool with Deck",
    guests: "6–10 Guests",
    bedrooms: 3,
    bathrooms: 4,
    specifications: [
      "Turnkey execution",
      "Refurbished Shipping Containers",
      "100% insulation",
      "Premium interiors",
    ],
    highlights: [
      "Sustainable architecture",
      "Luxe Airbnb",
      "Weather resistant",
      "Retractable swimming pool deck",
    ],
    offerings: standardOfferings,
    ctaLabel: "Request a Quote",
    ctaHref: "/contact",
  },

  {
    // ── Routing ──
    slug: "teabar-cafe",

    // ── Listing ──
    category: "Portable Cafes & Kiosks",
    featured: false,
    tags: ["Modular", "Compact", "Relocatable"],
    name: "TeaBar Cafe",
    location: "Embassy Park, Bangalore",
    shortDescription:
      "A fully equipped modular cafe with a commercial kitchen. Built in steel-framing, it is easily relocatable and expandable.",
    coverImage: "/assets/products/teabar-cafe/main.webp",
    areaLabel: "200 sq ft",
    buildTimeLabel: "4–6 weeks",
    amenityLabel: "Set-up: 24 hours",

    // ── Detail ──
    mainImage: "/assets/products/teabar-cafe/main.webp",
    images: [
      "/assets/products/teabar-cafe/img-1.webp",
      "/assets/products/teabar-cafe/img-2.webp",
      "/assets/products/teabar-cafe/img-3.webp",
      "/assets/products/teabar-cafe/img-4.webp",
      "/assets/products/teabar-cafe/img-5.webp",
      "/assets/products/teabar-cafe/img-6.webp",
    ],
    detailSubtitle: "Kiosk with Commercial Kitchen",
    guests: "N/A",
    bedrooms: 0,
    bathrooms: 0,
    metaBar: ["Kiosk with Commercial Kitchen"],

    specifications: [
      "Steel structure",
      "100% insulation",
      "FSSAI approved interiors",
    ],
    highlights: [
      "Customizable design with terrace and deck for seating",
      "Easy to relocate",
      "Resellable",
    ],
    offerings: standardOfferings,
    ctaLabel: "Request a Quote",
    ctaHref: "/contact",
  },

  {
    // ── Routing ──
    slug: "total-environment-marketing-office",

    // ── Listing ──
    category: "Marketing Offices",
    featured: false,
    tags: ["Commercial", "Spacious", "Relocatable"],
    name: "Total Environment - Down by the Water",
    location: "Jakkur, Bangalore",
    shortDescription:
      "A fully furnished modular marketing office accommodating a spacious lobby, cafeteria, manager cabins and multiple meeting rooms.",
    coverImage: "/assets/products/marketing-office/main.webp",
    areaLabel: "2000 sq ft",
    buildTimeLabel: "8–10 weeks",
    amenityLabel: "Capacity: 60 guests",

    // ── Detail ──
    mainImage: "/assets/products/marketing-office/main.webp",
    images: [
      "/assets/products/marketing-office/img-1.webp",
      "/assets/products/marketing-office/img-2.webp",
      "/assets/products/marketing-office/img-3.webp",
      "/assets/products/marketing-office/img-4.webp",
      "/assets/products/marketing-office/img-5.webp",
      "/assets/products/marketing-office/img-6.webp",
      "/assets/products/marketing-office/img-7.webp",
    ],
    detailSubtitle:
      "Marketing Office | Lobby | 2 Manager Cabins | 4 Meeting Rooms | 2 Bathrooms | Cafeteria",
    guests: "Up to 60 Guests",
    bedrooms: 0,
    bathrooms: 2,
    metaBar: [
      "Lobby",
      "2 Manager Cabins",
      "4 Meeting Rooms",
      "2 Bathrooms",
      "Cafeteria",
    ],

    specifications: [
      "Prefabricated steel structure",
      "100% insulation",
      "Commercial office interiors",
    ],
    highlights: ["Relocatable and expandable design", "Customisable exteriors"],
    offerings: standardOfferings,
    ctaLabel: "Request a Quote",
    ctaHref: "/contact",
  },

  {
    // ── Routing ──
    slug: "forest-cabin",

    // ── Listing ──
    category: "Forest Cabin",
    featured: false,
    tags: ["Glamping", "Deck", "Portable"],
    name: "Forest Cabin",
    location: "Coorg, Karnataka",
    shortDescription:
      "A compact cottage built in steel and a vintage wooden exterior with large windows and deck for a scenic forest and river view.",
    coverImage: "/assets/products/forest-cabin/main.webp",
    areaLabel: "160 sq ft",
    buildTimeLabel: "6–8 weeks",
    amenityLabel: "Ensuite bathroom",

    // ── Detail ──
    mainImage: "/assets/products/forest-cabin/main.webp",
    images: [
      "/assets/products/forest-cabin/img-1.webp",
      "/assets/products/forest-cabin/img-2.webp",
      "/assets/products/forest-cabin/img-3.webp",
      "/assets/products/forest-cabin/img-4.webp",
      "/assets/products/forest-cabin/img-5.webp",
    ],
    detailSubtitle: "Glamping Cabin · Forest View Retreat",
    guests: "2 Guests",
    bedrooms: 1,
    bathrooms: 1,
    specifications: [
      "Steel structure",
      "100% insulation",
      "Large windows",
      "Deck",
      "Premium interiors",
    ],
    highlights: [
      "Customizable A-frame design",
      "Easy to relocate",
      "Weather and water resistant",
    ],
    metaBar: ["2 Guests", "1 Bedroom", "1 Bathroom"],

    offerings: standardOfferings,
    ctaLabel: "Request a Quote",
    ctaHref: "/contact",
  },
];

// ── Unique categories (for filter bar) ───────────────────────────────────────
export const productCategories: ProductCategory[] = [
  "Luxury Cottages",
  "Luxury Villas",
  "Marketing Offices",
  "Portable Cafes & Kiosks",
  "Forest Cabin",
];
