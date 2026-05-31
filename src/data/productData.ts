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
  "Pan-India Installation",
  "7-year Structural Warranty",
  "Site visit and Design Consultation (chargeable)",
];

// ── Product data ──────────────────────────────────────────────────────────────

export const products: Product[] = [
  {
    // ── Routing ──
    slug: "lakeside-cabin",

    // ── Listing ──
    category: "Luxury Cottages",
    featured: false,
    tags: ["Glamping", "Ultra Luxury", "Export"],
    name: "Lakeside Cabin",
    location: "Georgia, Atlanta, US",
    shortDescription:
      "Precision-built in India and delivered 100% site-ready to the US. This luxury cabin arrives fully furnished and is perfectly suited for glamping resorts.",
    coverImage: "/assets/products/lakeside-cabin/main.webp",
    areaLabel: "300 sq ft",
    buildTimeLabel: "6–8 weeks",
    metaBar: ["2 Guests", " Ensuite Bathroom", " Full Height Skylight","Swing"],

    amenityLabel: "Variants: Skid based / Chassis mounted",

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
      "Galvanized Steel structure",
      "75mm Spray Foam Insulation",
      "DGU Aluminium Doors & Windows",
      "Premium Wooden Interior Claddings",
    ],
    highlights: [
      "Designed and built for the Marriott Group at The Lodging Conference 2025 in Phoenix. This luxury cabin features a unique asymmetric design, a private deck with a swing, and stunning floor-to-ceiling skylights. The ensuite bathroom even includes a shower under the stars. Built fully to US building codes, it was shipped from India 100% complete and ready for guests.",
 
    ],
    offerings: ["Delivered Worldwide","Customisable Interiors","Architectural Drawings and 3D renders (chargeable)"],
    ctaLabel: "Request a Quote",
    ctaHref: "/contactus",
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
      "A spacious 3 BHK villa built with 7 refurbished shipping containers. Featured in the top 25 A+D Reflections for its sustainable differentiated design",
    coverImage: "/assets/products/qbinn-tusker/main.webp",
    areaLabel: "11000 sq ft",
    buildTimeLabel: "4–6 months",
    amenityLabel: "Turnkey Project with Civil & Landscaping",

    // ── Detail ──
    mainImage: "/assets/products/qbinn-tusker/main.webp",
    metaBar: [
      "6–10 Guests",
      "3 BHK",
      "Swimming Pool",
      "Forest View",
    ],

    images: [
      "/assets/products/qbinn-tusker/img-1.webp",
      "/assets/products/qbinn-tusker/img-2.webp",
      "/assets/products/qbinn-tusker/img-3.webp",
      "/assets/products/qbinn-tusker/img-4.webp",
      "/assets/products/qbinn-tusker/img-5.webp",
      "/assets/products/qbinn-tusker/img-6.webp",
      "/assets/products/qbinn-tusker/img-7.webp",
      "/assets/products/qbinn-tusker/img-8.webp",
      "/assets/products/qbinn-tusker/img-9.webp",
      "/assets/products/qbinn-tusker/img-10.webp",
      "/assets/products/qbinn-tusker/img-11.webp",
    ],
    detailSubtitle:
      "6–10 Guests | 3 Bedrooms | 4 Bathrooms | Kitchen | Swimming Pool with Deck",
    guests: "6–10 Guests",
    bedrooms: 3,
    bathrooms: 4,
    specifications: [
      "Turnkey Execution",
      "Refurbished Shipping Containers",
      "Managed Farmland Project",
      "Premium Interiors",
      "Landscaping",
    ],
    highlights: [
     "For the Qbinn Tusker project in Bangalore, Saharsh Cabins went beyond the build to deliver a complete luxury estate. Our team managed the entire lifecycle of the project, including complex civil works and expert landscaping. To create the ultimate retreat, we integrated premium outdoor amenities: a deck covered swimming pool and jacuzzi, a custom gazebo, an outdoor sit-out with bonfire, and our signature leisure swing. From the first foundation to the final landscape petal, we delivered a 100% ready-to-operate luxury destination."
    ],
    offerings: standardOfferings,
    ctaLabel: "Request a Quote",
    ctaHref: "/contactus",
  },

  {
    // ── Routing ──
    slug: "teabar-cafe",

    // ── Listing ──
    category: "Portable Cafes & Kiosks",
    featured: false,
    tags: ["Modular", "Compact", "Relocatable"],
    name: "Tea Bar Cafe",
    location: "Embassy Golf Links, Bangalore",
    shortDescription:
      "A fully equipped modular cafe with a commercial kitchen. Built using a galvanized core, it is easily relocatable and expandable.",
    coverImage: "/assets/products/teabar-cafe/main.webp",
    areaLabel: "150 sq ft",
    buildTimeLabel: "3-4 weeks",
    amenityLabel: "Floor plan as per client requirements",

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
    metaBar: ["15’x10’","Customisable","Separate Kitchen & Serving areas"],

    specifications: [
      "Galvanised Steel structure",
      "100% Insulation",
      "FSSAI approved Interior materials",
      "SS Kitchen",
      "Vitrified Tiled Floorings"
    ],
    highlights: [
   "Located at the prestigious Embassy Golf Links (EGL) in Bangalore, this project highlights Saharsh Cabins' ability to deliver high-traffic retail solutions under tight deadlines. We executed this custom 150 sqft modular café for Tea Bar in just three weeks, meeting every client specification. Designed for the modern business landscape, the unit is 100% portable and relocatable, providing the client with a high-value, liquid asset that can be moved or resold as business needs evolve."
    ],
    offerings: standardOfferings,
    ctaLabel: "Request a Quote",
    ctaHref: "/contactus",
  },

  {
    // ── Routing ──
    slug: "total-environment-marketing-office",

    // ── Listing ──
    category: "Marketing Offices",
    featured: false,
    tags: ["Commercial", "Spacious", "Relocatable"],
    name: "Total Environment - DBTW",
    location: "Jakkur, Bangalore",
    shortDescription:
      "A fully furnished modular marketing office accommodating a spacious lobby, cafeteria, manager cabins and multiple meeting rooms.",
    coverImage: "/assets/products/marketing-office/main.webp",
    areaLabel: "2000 sq ft",
    buildTimeLabel: "7–8 weeks",
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
      "Reception",
      "Central Lobby",
      "6 Meeting rooms",
      "Cafeteria",
    ],

    specifications: [
      "3 units of 40ft x 12ft",
      "100% Insulation",
      "Commercial Office Interiors",
      "Exterior Facading",
      "Expandable and Relocatable",
    ],
    highlights: ["We are proud to have executed the marketing sales office for Total Environment’s ‘Down by the Water’ project in Jakkur, Bangalore. This massive 2,000 sq. ft. modular office was created by joining three 40'x12' units, proving that modular doesn't have to mean small. From the structural assembly to the furniture and cafeteria, Saharsh Cabins delivered a premium, ready-to-use corporate space in record time. "],
    offerings: standardOfferings,
    ctaLabel: "Request a Quote",
    ctaHref: "/contactus",
  },

  {
    // ── Routing ──
    slug: "forest-cabin",

    // ── Listing ──
    category: "Luxury Cottages",
    featured: false,
    tags: ["Glamping", "Hutsie", "Portable"],
    name: "Forest Cabin",
    location: "Coorg, Karnataka",
    shortDescription:
      "A compact cottage built in steel and a vintage wooden exterior with large windows and deck for a scenic forest and river view.",
    coverImage: "/assets/products/forest-cabin/main.webp",
    areaLabel: "160 sq ft",
    buildTimeLabel: "3–4 weeks",
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
     "Nestled in the lush landscapes of Coorg, Saharsh Cabins delivered its signature Hutsie model—a compact 20ft x 8ft luxury retreat designed for high-end hospitality. This project features premium interiors and a custom external wooden facade that blends seamlessly with the natural surroundings. Complete with an expansive deck overlooking the river, the Hutsie proves that luxury doesn't require a large footprint—only thoughtful engineering and exquisite design. "
    ],
    metaBar: ["2 Guests", "1 Bedroom", "1 Bathroom"],

    offerings: standardOfferings,
    ctaLabel: "Request a Quote",
    ctaHref: "/contactus",
  },
];

// ── Unique categories (for filter bar) ───────────────────────────────────────
export const productCategories: ProductCategory[] = [
  "Luxury Cottages",
  "Luxury Villas",
  "Marketing Offices",
  "Portable Cafes & Kiosks",
];
