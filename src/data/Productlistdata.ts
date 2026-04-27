// src/data/productListData.ts
// ─── Product listing data for the /products page ─────────────────────────────
// Each entry links to the detail page via `slug` (→ /product/[slug])

export type ProductCategory =
  | "Luxury Cabin"
  | "Villa"
  | "Commercial"
  | "Resort"
  | "Office";

export interface ProductListItem {
  slug: string; // links to /product/[slug]
  name: string;
  tagline: string;
  shortDescription: string;
  category: ProductCategory;
  coverImage: string; // main card image
  hoverImage?: string; // optional second image shown on hover
  priceLabel: string; // e.g. "Starting ₹28L"
  areaLabel: string; // e.g. "450 sq ft"
  buildTimeLabel: string; // e.g. "8 weeks"
  featured?: boolean; // shows a "Featured" badge
  tags: string[]; // up to 3 short tags shown on card
  guests: number;
  bedrooms: number;
}

export const productList: ProductListItem[] = [
  {
    slug: "forest-escape",
    name: "Forest Escape",
    tagline: "Off-grid luxury in the wild",
    shortDescription:
      "A compact, fully off-grid cabin designed for remote forest plots. Arrives 90% assembled — ready to move into within days of delivery.",
    category: "Luxury Cabin",
    coverImage: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    hoverImage: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
    priceLabel: "Starting ₹28L",
    areaLabel: "420 sq ft",
    buildTimeLabel: "6 weeks",
    featured: false,
    tags: ["Off-Grid", "Solar", "Compact"],
    guests: 2,
    bedrooms: 1,
  },
  {
    slug: "forest-cabin",
    name: "Forest Cabin",
    tagline: "Crafted to disappear into the treeline",
    shortDescription:
      "Our flagship forest cabin with hand-oiled teak joinery, floor-to-ceiling glazing, and a roofline that sheds rain silently.",
    category: "Luxury Cabin",
    coverImage: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    hoverImage: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
    priceLabel: "Starting ₹48L",
    areaLabel: "850 sq ft",
    buildTimeLabel: "8–12 weeks",
    featured: true,
    tags: ["Solar Ready", "Off-Grid", "Modular"],
    guests: 4,
    bedrooms: 2,
  },
  {
    slug: "mountain-villa",
    name: "Mountain Villa",
    tagline: "Panoramic ridgeline living",
    shortDescription:
      "Commands the ridge with triple-pane glazing on three sides and a large outdoor deck.",
    category: "Villa",
    coverImage: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    hoverImage: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    priceLabel: "Starting ₹85L",
    areaLabel: "1,400 sq ft",
    buildTimeLabel: "10–14 weeks",
    featured: true,
    tags: ["Panoramic", "Snow-Proof", "Smart Home"],
    guests: 6,
    bedrooms: 3,
  },
  {
    slug: "hillside-retreat",
    name: "Hillside Retreat",
    tagline: "Sloped terrain, seamless design",
    shortDescription:
      "Engineered for steep plots with cantilevered decks and panoramic valley views.",
    category: "Luxury Cabin",
    coverImage: "https://images.unsplash.com/photo-1501183638710-841dd1904471",
    priceLabel: "Starting ₹62L",
    areaLabel: "980 sq ft",
    buildTimeLabel: "10 weeks",
    featured: false,
    tags: ["Sloped Plot", "Cantilevered", "Steel Frame"],
    guests: 4,
    bedrooms: 2,
  },
  {
    slug: "lakeside-studio",
    name: "Lakeside Studio",
    tagline: "One room, uninterrupted water views",
    shortDescription:
      "A studio cabin with full-width glass facing the lake and an outdoor soaking tub.",
    category: "Luxury Cabin",
    coverImage: "https://images.unsplash.com/photo-1472220625704-91e1462799b2",
    priceLabel: "Starting ₹22L",
    areaLabel: "320 sq ft",
    buildTimeLabel: "4 weeks",
    featured: false,
    tags: ["Waterfront", "Studio", "Soaking Tub"],
    guests: 2,
    bedrooms: 1,
  },
  {
    slug: "resort-cluster",
    name: "Resort Cluster",
    tagline: "Multi-unit hospitality at scale",
    shortDescription:
      "Deploy 4–12 modular cabins with shared infrastructure in under 60 days.",
    category: "Resort",
    coverImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    priceLabel: "Starting ₹1.8Cr",
    areaLabel: "480 sq ft / unit",
    buildTimeLabel: "6–10 weeks",
    featured: false,
    tags: ["Multi-Unit", "Hospitality", "Scalable"],
    guests: 2,
    bedrooms: 1,
  },
  {
    slug: "portable-cafe",
    name: "Portable Café",
    tagline: "Set up in 24 hours, anywhere",
    shortDescription:
      "A fully-equipped container café with commercial kitchen and seating.",
    category: "Commercial",
    coverImage: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    priceLabel: "Starting ₹22L",
    areaLabel: "600 sq ft",
    buildTimeLabel: "24–48 hrs",
    featured: false,
    tags: ["Relocatable", "FSSAI Ready", "Commercial"],
    guests: 20,
    bedrooms: 0,
  },
  {
    slug: "sales-office",
    name: "Sales Office",
    tagline: "Premium on-site presence, zero construction",
    shortDescription:
      "A sleek prefab office with branded exterior and climate-controlled interior.",
    category: "Office",
    coverImage: "https://images.unsplash.com/photo-1497366216548-37526070297c",
    priceLabel: "Starting ₹12L",
    areaLabel: "280 sq ft",
    buildTimeLabel: "48 hrs",
    featured: false,
    tags: ["Commercial", "Branded", "Turnkey"],
    guests: 10,
    bedrooms: 0,
  },
];

// ─── All unique categories (for filter bar) ───────────────────────────────────
export const productCategories: ProductCategory[] = [
  "Luxury Cabin",
  "Villa",
  "Commercial",
  "Resort",
  "Office",
];