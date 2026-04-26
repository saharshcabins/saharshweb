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
  bathrooms: number;

  /** Specs string shown as a block e.g. "Steel structure, 100% insulation..." */
  specifications: string[];

  /** Comma-separated highlights */
  highlights: string[];

  /** CTA label on detail page */
  ctaLabel: string;
  ctaHref: string;
}

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
      "A compact luxury cabin designed for remote scenic locations. Shipped from India to Atlanta, US. Arrived 100% assembled with interiors.",
    coverImage: "/assets/products/lakeside-cabin/cover.jpg",
    areaLabel: "300 sq ft",
    buildTimeLabel: "6–8 weeks",
    amenityLabel: "Ensuite bathroom",

    // ── Detail ──
    mainImage: "/assets/products/lakeside-cabin/main.jpg",
    images: [
      "/assets/products/lakeside-cabin/img-1.jpg",
      "/assets/products/lakeside-cabin/img-2.jpg",
      "/assets/products/lakeside-cabin/img-3.jpg",
    ],
    detailSubtitle: "Trailer Home · Compact Luxury · Off-grid",
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
    location: "Bangalore, Karnataka",
    shortDescription:
      "A beautiful spacious 3 BHK villa built with 7 refurbished shipping containers. Featured in the top 25 A+D Reflections for its sustainable differentiated design.",
    coverImage: "/assets/products/qbinn-tusker/cover.jpg",
    areaLabel: "3000 sq ft",
    buildTimeLabel: "4–6 months",
    amenityLabel: "Outdoor Jacuzzi",

    // ── Detail ──
    mainImage: "/assets/products/qbinn-tusker/main.jpg",
    images: [
      "/assets/products/qbinn-tusker/img-1.jpg",
      "/assets/products/qbinn-tusker/img-2.jpg",
      "/assets/products/qbinn-tusker/img-3.jpg",
    ],
    detailSubtitle: "3BHK Pool Villa",
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
      "A fully equipped modular cafe with commercial kitchen. Built in steel-framing, it is easily relocatable and expandable.",
    coverImage: "/assets/products/teabar-cafe/cover.jpg",
    areaLabel: "200 sq ft",
    buildTimeLabel: "4–6 weeks",
    amenityLabel: "Set-up: 24 hours",

    // ── Detail ──
    mainImage: "/assets/products/teabar-cafe/main.jpg",
    images: [
      "/assets/products/teabar-cafe/img-1.jpg",
      "/assets/products/teabar-cafe/img-2.jpg",
      "/assets/products/teabar-cafe/img-3.jpg",
    ],
    detailSubtitle: "Kiosk with commercial kitchen",
    bathrooms: 0,
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
    coverImage: "/assets/products/marketing-office/cover.jpg",
    areaLabel: "2000 sq ft",
    buildTimeLabel: "8–10 weeks",
    amenityLabel: "Capacity: 60 guests",

    // ── Detail ──
    mainImage: "/assets/products/marketing-office/main.jpg",
    images: [
      "/assets/products/marketing-office/img-1.jpg",
      "/assets/products/marketing-office/img-2.jpg",
      "/assets/products/marketing-office/img-3.jpg",
    ],
    detailSubtitle:
      "Lobby | 2 Manager Cabins | 4 Meeting Rooms | 2 Bathrooms | Cafeteria",
    bathrooms: 2,
    specifications: [
      "Prefabricated steel structure",
      "100% insulation",
      "Commercial office interiors",
    ],
    highlights: ["Relocatable and expandable design", "Customisable exteriors"],
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
      "A compact glamping cottage built with a steel structure and vintage wooden exterior. Designed for immersive forest and river views with a spacious deck.",

    coverImage: "/assets/products/forest-cabin/cover.jpg",
    areaLabel: "160 sq ft",
    buildTimeLabel: "6–8 weeks",
    amenityLabel: "Ensuite bathroom",

    // ── Detail ──
    mainImage: "/assets/products/forest-cabin/main.jpg",
    images: [
      "/assets/products/forest-cabin/img-1.jpg",
      "/assets/products/forest-cabin/img-2.jpg",
      "/assets/products/forest-cabin/img-3.jpg",
    ],

    detailSubtitle: "Glamping Cabin · Forest View Retreat",
    bathrooms: 1,

    specifications: [
      "Steel structure",
      "100% insulation",
      "Large panoramic windows",
      "Vintage wooden exterior",
      "Spacious deck",
      "Premium interiors",
    ],

    highlights: [
      "Customizable A-frame inspired design",
      "Easy to relocate",
      "Weather and water resistant",
    ],

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
